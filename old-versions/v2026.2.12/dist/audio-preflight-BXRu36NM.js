import "./paths-rb94mUrR.js";
import "./agent-scope-DxS3KtCj.js";
import { J as logVerbose, X as shouldLogVerbose } from "./exec-BuYTjnq1.js";
import "./model-selection-BW-ttzqP.js";
import "./github-copilot-token-wCk9Fg_E.js";
import "./pi-embedded-helpers-DP9eeE_7.js";
import "./config-DEPbnCxC.js";
import "./pi-model-discovery-EhM2JAQo.js";
import "./chrome-DJCQpVX-.js";
import "./paths-CnE9bV4t.js";
import "./image-BS-kJTEs.js";
import "./redact-BIMJ3ntQ.js";
import "./fetch-timeout-DquELnnX.js";
import { a as runCapability, l as isAudioAttachment, n as createMediaAttachmentCache, r as normalizeMediaAttachments, t as buildProviderRegistry } from "./runner-ygCp61jE.js";

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