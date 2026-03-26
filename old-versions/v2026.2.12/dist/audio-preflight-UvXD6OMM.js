import "./paths-DVBShlw6.js";
import { A as logVerbose, N as shouldLogVerbose } from "./subsystem-skqGO1bX.js";
import "./utils-CIzK7l-0.js";
import "./pi-embedded-helpers-40Sotf9d.js";
import "./exec-DeTCzdN-.js";
import "./agent-scope-BeIpLGAL.js";
import "./model-selection-Dc-MAbI_.js";
import "./github-copilot-token-BW-SEg7E.js";
import "./boolean-BgXe2hyu.js";
import "./env-DLkW-xAN.js";
import "./config-Drc5OJ4W.js";
import "./manifest-registry-CBwmEVUR.js";
import "./plugins-CRTINZXt.js";
import "./sandbox-Bz_i-Ifh.js";
import { a as runCapability, l as isAudioAttachment, n as createMediaAttachmentCache, r as normalizeMediaAttachments, t as buildProviderRegistry } from "./runner-B7MhzgLA.js";
import "./image-irJRtqER.js";
import "./pi-model-discovery-EwKVHlZB.js";
import "./chrome-DZ9AMNm6.js";
import "./skills-Cczm5w2d.js";
import "./routes-DwIVNSKG.js";
import "./server-context-Cf-q67qC.js";
import "./message-channel-DHsuTWdZ.js";
import "./logging-fywhKCmE.js";
import "./accounts-oj7wQjQH.js";
import "./paths-B49s6UZQ.js";
import "./redact-BRsnXqwD.js";
import "./tool-display-lfwKR-6E.js";
import "./fetch-CDfX28NT.js";

//#region src/media-understanding/audio-preflight.ts
/**
* Transcribes the first audio attachment BEFORE mention checking.
* This allows voice notes to be processed in group chats with requireMention: true.
* Returns the transcript or undefined if transcription fails or no audio is found.
*/
async function transcribeFirstAudio(params) {
	const { ctx, cfg } = params;
	const audioConfig = cfg.tools?.media?.audio;
	if (!audioConfig || audioConfig.enabled === false) return;
	const attachments = normalizeMediaAttachments(ctx);
	if (!attachments || attachments.length === 0) return;
	const firstAudio = attachments.find((att) => att && isAudioAttachment(att) && !att.alreadyTranscribed);
	if (!firstAudio) return;
	if (shouldLogVerbose()) logVerbose(`audio-preflight: transcribing attachment ${firstAudio.index} for mention check`);
	const providerRegistry = buildProviderRegistry(params.providers);
	const cache = createMediaAttachmentCache(attachments);
	try {
		const result = await runCapability({
			capability: "audio",
			cfg,
			ctx,
			attachments: cache,
			media: attachments,
			agentDir: params.agentDir,
			providerRegistry,
			config: audioConfig,
			activeModel: params.activeModel
		});
		if (!result || result.outputs.length === 0) return;
		const audioOutput = result.outputs.find((output) => output.kind === "audio.transcription");
		if (!audioOutput || !audioOutput.text) return;
		firstAudio.alreadyTranscribed = true;
		if (shouldLogVerbose()) logVerbose(`audio-preflight: transcribed ${audioOutput.text.length} chars from attachment ${firstAudio.index}`);
		return audioOutput.text;
	} catch (err) {
		if (shouldLogVerbose()) logVerbose(`audio-preflight: transcription failed: ${String(err)}`);
		return;
	} finally {
		await cache.cleanup();
	}
}

//#endregion
export { transcribeFirstAudio };