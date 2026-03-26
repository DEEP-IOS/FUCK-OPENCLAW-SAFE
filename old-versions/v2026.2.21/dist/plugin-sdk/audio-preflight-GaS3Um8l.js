import "./accounts-BO6NcmjH.js";
import "./paths-DVWx7USN.js";
import "./github-copilot-token-Cg0YPPSu.js";
import "./plugins-BYg0Y0s6.js";
import { K as logVerbose, Y as shouldLogVerbose } from "./registry-D44cLNno.js";
import "./config-Bn_wS7mW.js";
import "./subsystem-Afj3hpsW.js";
import "./command-format-qHzyzLJ8.js";
import "./model-selection-Cdlm04wt.js";
import "./agent-scope-B5u6KQ8F.js";
import "./manifest-registry-BnTP8ky_.js";
import "./redact-DPnDWsnT.js";
import "./errors-Bv8oZiTO.js";
import "./image-ops-BC90Ra0D.js";
import "./ssrf-DKZ8eBrk.js";
import "./local-roots-eVU4Vfxy.js";
import "./message-channel-OSNp3I52.js";
import "./bindings-CUAvKHoU.js";
import "./tool-images-KUfGrzBt.js";
import { a as resolveMediaAttachmentLocalRoots, n as createMediaAttachmentCache, o as runCapability, r as normalizeMediaAttachments, t as buildProviderRegistry, u as isAudioAttachment } from "./runner-ntSL3Y0T.js";
import "./skills-Bl-JEvpV.js";
import "./chrome-BxmBGAa7.js";
import "./thinking-DBoJCGt5.js";
import "./accounts-DQblblAi.js";
import "./accounts-BM9K-GFv.js";
import "./pi-embedded-helpers-BqrrB8vU.js";
import "./paths-BNQjLbn7.js";
import "./store-CNae9hby.js";
import "./image-DEdau8hK.js";
import "./pi-model-discovery-LbcEa65a.js";
import "./api-key-rotation-CNwwR0BT.js";

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
	const cache = createMediaAttachmentCache(attachments, { localPathRoots: resolveMediaAttachmentLocalRoots({
		cfg,
		ctx
	}) });
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