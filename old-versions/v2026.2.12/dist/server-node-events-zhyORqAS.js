import "./paths-DVBShlw6.js";
import { c as defaultRuntime } from "./subsystem-skqGO1bX.js";
import "./utils-CIzK7l-0.js";
import "./pi-embedded-helpers-40Sotf9d.js";
import { Dr as enqueueSystemEvent, st as requestHeartbeatNow, v as loadSessionEntry } from "./reply-B5GoyKpI.js";
import { u as normalizeMainKey } from "./session-key-BWxPj0z_.js";
import "./exec-DeTCzdN-.js";
import "./agent-scope-BeIpLGAL.js";
import "./model-selection-Dc-MAbI_.js";
import "./github-copilot-token-BW-SEg7E.js";
import "./boolean-BgXe2hyu.js";
import "./env-DLkW-xAN.js";
import { i as loadConfig } from "./config-Drc5OJ4W.js";
import "./manifest-registry-CBwmEVUR.js";
import { r as normalizeChannelId } from "./plugins-CRTINZXt.js";
import { g as updateSessionStore } from "./sandbox-Bz_i-Ifh.js";
import "./runner-B7MhzgLA.js";
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
import "./deliver-vXZhvBdi.js";
import "./dispatcher-DI5WJNyQ.js";
import "./manager-20Qh2-H6.js";
import "./sqlite-D6ts3MKs.js";
import "./tui-formatters-CF2WmOfu.js";
import "./client-BMV05L-b.js";
import "./call-CaQDI0e9.js";
import "./login-qr-B38uaO_1.js";
import "./pairing-store-CCfnXiDG.js";
import "./links-CsKJ3nC4.js";
import "./progress-DQiGhxim.js";
import "./pi-tools.policy-CI1Bw7xa.js";
import "./prompt-style-BOW8yhGa.js";
import "./pairing-labels-BWXNgWNU.js";
import "./session-cost-usage-D7HuoSSD.js";
import "./auth-DAsS25cF.js";
import "./control-auth-BND74hg3.js";
import "./control-service-Cnii_zCx.js";
import "./channel-selection-Cam3iEhe.js";
import "./deps-B_Ot2OP_.js";
import { t as agentCommand } from "./agent-DIUWm8lX.js";
import { t as formatForLog } from "./ws-log-D_AcBKty.js";
import { randomUUID } from "node:crypto";

//#region src/gateway/server-node-events.ts
const handleNodeEvent = async (ctx, nodeId, evt) => {
	switch (evt.event) {
		case "voice.transcript": {
			if (!evt.payloadJSON) return;
			let payload;
			try {
				payload = JSON.parse(evt.payloadJSON);
			} catch {
				return;
			}
			const obj = typeof payload === "object" && payload !== null ? payload : {};
			const text = typeof obj.text === "string" ? obj.text.trim() : "";
			if (!text) return;
			if (text.length > 2e4) return;
			const sessionKeyRaw = typeof obj.sessionKey === "string" ? obj.sessionKey.trim() : "";
			const rawMainKey = normalizeMainKey(loadConfig().session?.mainKey);
			const sessionKey = sessionKeyRaw.length > 0 ? sessionKeyRaw : rawMainKey;
			const { storePath, entry, canonicalKey } = loadSessionEntry(sessionKey);
			const now = Date.now();
			const sessionId = entry?.sessionId ?? randomUUID();
			if (storePath) await updateSessionStore(storePath, (store) => {
				store[canonicalKey] = {
					sessionId,
					updatedAt: now,
					thinkingLevel: entry?.thinkingLevel,
					verboseLevel: entry?.verboseLevel,
					reasoningLevel: entry?.reasoningLevel,
					systemSent: entry?.systemSent,
					sendPolicy: entry?.sendPolicy,
					lastChannel: entry?.lastChannel,
					lastTo: entry?.lastTo
				};
			});
			ctx.addChatRun(sessionId, {
				sessionKey,
				clientRunId: `voice-${randomUUID()}`
			});
			agentCommand({
				message: text,
				sessionId,
				sessionKey,
				thinking: "low",
				deliver: false,
				messageChannel: "node"
			}, defaultRuntime, ctx.deps).catch((err) => {
				ctx.logGateway.warn(`agent failed node=${nodeId}: ${formatForLog(err)}`);
			});
			return;
		}
		case "agent.request": {
			if (!evt.payloadJSON) return;
			let link = null;
			try {
				link = JSON.parse(evt.payloadJSON);
			} catch {
				return;
			}
			const message = (link?.message ?? "").trim();
			if (!message) return;
			if (message.length > 2e4) return;
			const channel = normalizeChannelId(typeof link?.channel === "string" ? link.channel.trim() : "") ?? void 0;
			const to = typeof link?.to === "string" && link.to.trim() ? link.to.trim() : void 0;
			const deliver = Boolean(link?.deliver) && Boolean(channel);
			const sessionKeyRaw = (link?.sessionKey ?? "").trim();
			const sessionKey = sessionKeyRaw.length > 0 ? sessionKeyRaw : `node-${nodeId}`;
			const { storePath, entry, canonicalKey } = loadSessionEntry(sessionKey);
			const now = Date.now();
			const sessionId = entry?.sessionId ?? randomUUID();
			if (storePath) await updateSessionStore(storePath, (store) => {
				store[canonicalKey] = {
					sessionId,
					updatedAt: now,
					thinkingLevel: entry?.thinkingLevel,
					verboseLevel: entry?.verboseLevel,
					reasoningLevel: entry?.reasoningLevel,
					systemSent: entry?.systemSent,
					sendPolicy: entry?.sendPolicy,
					lastChannel: entry?.lastChannel,
					lastTo: entry?.lastTo
				};
			});
			agentCommand({
				message,
				sessionId,
				sessionKey,
				thinking: link?.thinking ?? void 0,
				deliver,
				to,
				channel,
				timeout: typeof link?.timeoutSeconds === "number" ? link.timeoutSeconds.toString() : void 0,
				messageChannel: "node"
			}, defaultRuntime, ctx.deps).catch((err) => {
				ctx.logGateway.warn(`agent failed node=${nodeId}: ${formatForLog(err)}`);
			});
			return;
		}
		case "chat.subscribe": {
			if (!evt.payloadJSON) return;
			let payload;
			try {
				payload = JSON.parse(evt.payloadJSON);
			} catch {
				return;
			}
			const obj = typeof payload === "object" && payload !== null ? payload : {};
			const sessionKey = typeof obj.sessionKey === "string" ? obj.sessionKey.trim() : "";
			if (!sessionKey) return;
			ctx.nodeSubscribe(nodeId, sessionKey);
			return;
		}
		case "chat.unsubscribe": {
			if (!evt.payloadJSON) return;
			let payload;
			try {
				payload = JSON.parse(evt.payloadJSON);
			} catch {
				return;
			}
			const obj = typeof payload === "object" && payload !== null ? payload : {};
			const sessionKey = typeof obj.sessionKey === "string" ? obj.sessionKey.trim() : "";
			if (!sessionKey) return;
			ctx.nodeUnsubscribe(nodeId, sessionKey);
			return;
		}
		case "exec.started":
		case "exec.finished":
		case "exec.denied": {
			if (!evt.payloadJSON) return;
			let payload;
			try {
				payload = JSON.parse(evt.payloadJSON);
			} catch {
				return;
			}
			const obj = typeof payload === "object" && payload !== null ? payload : {};
			const sessionKey = typeof obj.sessionKey === "string" ? obj.sessionKey.trim() : `node-${nodeId}`;
			if (!sessionKey) return;
			const runId = typeof obj.runId === "string" ? obj.runId.trim() : "";
			const command = typeof obj.command === "string" ? obj.command.trim() : "";
			const exitCode = typeof obj.exitCode === "number" && Number.isFinite(obj.exitCode) ? obj.exitCode : void 0;
			const timedOut = obj.timedOut === true;
			const output = typeof obj.output === "string" ? obj.output.trim() : "";
			const reason = typeof obj.reason === "string" ? obj.reason.trim() : "";
			let text = "";
			if (evt.event === "exec.started") {
				text = `Exec started (node=${nodeId}${runId ? ` id=${runId}` : ""})`;
				if (command) text += `: ${command}`;
			} else if (evt.event === "exec.finished") {
				const exitLabel = timedOut ? "timeout" : `code ${exitCode ?? "?"}`;
				text = `Exec finished (node=${nodeId}${runId ? ` id=${runId}` : ""}, ${exitLabel})`;
				if (output) text += `\n${output}`;
			} else {
				text = `Exec denied (node=${nodeId}${runId ? ` id=${runId}` : ""}${reason ? `, ${reason}` : ""})`;
				if (command) text += `: ${command}`;
			}
			enqueueSystemEvent(text, {
				sessionKey,
				contextKey: runId ? `exec:${runId}` : "exec"
			});
			requestHeartbeatNow({ reason: "exec-event" });
			return;
		}
		default: return;
	}
};

//#endregion
export { handleNodeEvent };