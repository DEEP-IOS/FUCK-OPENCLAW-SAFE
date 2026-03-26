import { w as shouldLogVerbose, x as logVerbose } from "./entry.js";
import "./auth-profiles-CNzIocqc.js";
import "./utils-DFY1ybN-.js";
import "./exec-B8JKbXKW.js";
import "./agent-scope-CnY2bb9p.js";
import "./github-copilot-token-SLWintYd.js";
import "./pi-model-discovery-DzEIEgHL.js";
import "./config-CDhe1RIp.js";
import "./manifest-registry-DlCJWfBO.js";
import "./server-context-BK5e_pAT.js";
import "./chrome-D8B1fI6a.js";
import "./message-channel-BdE6IUzJ.js";
import "./plugins-XU-6noRu.js";
import "./logging-CfEk_PnX.js";
import "./accounts-DH0MoGU2.js";
import "./paths-mF4iWwgm.js";
import "./redact-Br9GfacZ.js";
import "./routes-CQcgE2QD.js";
import "./pi-embedded-helpers-DVDkr-zC.js";
import "./fetch-timeout-Cq3iZuyx.js";
import "./sandbox-BZDlvSgL.js";
import "./skills-BOqBE1bl.js";
import "./image-DnJne4QR.js";
import "./tool-display-h92yubJT.js";
import { a as runCapability, n as createMediaAttachmentCache, o as isAudioAttachment, r as normalizeMediaAttachments, t as buildProviderRegistry } from "./runner-BnpMFeh_.js";

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