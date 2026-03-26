import { r as resolveWhatsAppAccount } from "./accounts-BO6NcmjH.js";
import "./paths-DVWx7USN.js";
import "./github-copilot-token-Cg0YPPSu.js";
import "./plugins-BYg0Y0s6.js";
import "./registry-D44cLNno.js";
import "./config-Bn_wS7mW.js";
import "./subsystem-Afj3hpsW.js";
import "./command-format-qHzyzLJ8.js";
import "./model-selection-Cdlm04wt.js";
import "./agent-scope-B5u6KQ8F.js";
import "./manifest-registry-BnTP8ky_.js";
import "./image-ops-BC90Ra0D.js";
import "./ssrf-DKZ8eBrk.js";
import "./local-roots-eVU4Vfxy.js";
import "./ir-MmZDy8j4.js";
import "./chunk-ufrvL_sm.js";
import "./message-channel-OSNp3I52.js";
import "./bindings-CUAvKHoU.js";
import "./markdown-tables-Xwe_Q9uR.js";
import "./render-BiJZ5W4Z.js";
import "./tables-Bof6n4ha.js";
import "./tool-images-KUfGrzBt.js";
import { a as createActionGate, c as jsonResult, d as readReactionParams, i as ToolAuthorizationError, m as readStringParam } from "./target-errors-CadP86tN.js";
import { t as resolveWhatsAppOutboundTarget } from "./resolve-outbound-target-BSptTTEJ.js";
import { r as sendReactionWhatsApp } from "./outbound-NOJ75MOb.js";

//#region src/agents/tools/whatsapp-target-auth.ts
function resolveAuthorizedWhatsAppOutboundTarget(params) {
	const account = resolveWhatsAppAccount({
		cfg: params.cfg,
		accountId: params.accountId
	});
	const resolution = resolveWhatsAppOutboundTarget({
		to: params.chatJid,
		allowFrom: account.allowFrom ?? [],
		mode: "implicit"
	});
	if (!resolution.ok) throw new ToolAuthorizationError(`WhatsApp ${params.actionLabel} blocked: chatJid "${params.chatJid}" is not in the configured allowFrom list for account "${account.accountId}".`);
	return {
		to: resolution.to,
		accountId: account.accountId
	};
}

//#endregion
//#region src/agents/tools/whatsapp-actions.ts
async function handleWhatsAppAction(params, cfg) {
	const action = readStringParam(params, "action", { required: true });
	const isActionEnabled = createActionGate(cfg.channels?.whatsapp?.actions);
	if (action === "react") {
		if (!isActionEnabled("reactions")) throw new Error("WhatsApp reactions are disabled.");
		const chatJid = readStringParam(params, "chatJid", { required: true });
		const messageId = readStringParam(params, "messageId", { required: true });
		const { emoji, remove, isEmpty } = readReactionParams(params, { removeErrorMessage: "Emoji is required to remove a WhatsApp reaction." });
		const participant = readStringParam(params, "participant");
		const accountId = readStringParam(params, "accountId");
		const fromMeRaw = params.fromMe;
		const fromMe = typeof fromMeRaw === "boolean" ? fromMeRaw : void 0;
		const resolved = resolveAuthorizedWhatsAppOutboundTarget({
			cfg,
			chatJid,
			accountId,
			actionLabel: "reaction"
		});
		const resolvedEmoji = remove ? "" : emoji;
		await sendReactionWhatsApp(resolved.to, messageId, resolvedEmoji, {
			verbose: false,
			fromMe,
			participant: participant ?? void 0,
			accountId: resolved.accountId
		});
		if (!remove && !isEmpty) return jsonResult({
			ok: true,
			added: emoji
		});
		return jsonResult({
			ok: true,
			removed: true
		});
	}
	throw new Error(`Unsupported WhatsApp action: ${action}`);
}

//#endregion
export { handleWhatsAppAction };