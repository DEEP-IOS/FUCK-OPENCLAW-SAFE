import "./paths-BZtyHNCi.js";
import "./agent-scope-B6HZUsup.js";
import { Y as logVerbose, Z as shouldLogVerbose } from "./exec-Bosk90sy.js";
import "./pi-embedded-helpers-DVHjAjCj.js";
import "./model-auth-CU4BNBm_.js";
import "./config-BsBPek8z.js";
import "./github-copilot-token-DkiRbJdR.js";
import "./pi-model-discovery-DqgqUyAv.js";
import "./chrome-CZtutO6Z.js";
import "./paths-C7j5gEli.js";
import "./image-TeBwC1eT.js";
import "./redact-BrXLgslJ.js";
import "./fetch-timeout-D0uOmYwi.js";
import { a as runCapability, l as isAudioAttachment, n as createMediaAttachmentCache, r as normalizeMediaAttachments, t as buildProviderRegistry } from "./runner-DWOMWPyI.js";

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