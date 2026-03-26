import { Dt as theme, _ as defaultRuntime, xt as setVerbose } from "./entry.js";
import "./auth-profiles-C7RTY9Sv.js";
import "./exec-CBKBIMpA.js";
import "./agent-scope-DhajVyRS.js";
import "./github-copilot-token-DuFIqfeC.js";
import "./model-ChKLb_d2.js";
import "./pi-model-discovery-Do3xMEtM.js";
import "./frontmatter-D-YR-Ghi.js";
import "./skills-Bq1s47OA.js";
import "./manifest-registry-XSxPcu0S.js";
import "./skills-status-BECHKy03.js";
import "./config-irA2OYte.js";
import "./client-DrK7aLru.js";
import "./call-ZNr9p4dX.js";
import "./message-channel-CVHJDItx.js";
import "./pairing-token-Byh6drgn.js";
import "./subagent-registry-DV5OCO20.js";
import "./sessions-DmaergeJ.js";
import "./tokens-ANnYrShl.js";
import "./plugins-Dhh2a3qc.js";
import "./accounts-BrsscXpo.js";
import "./bindings-BO7DQ_-I.js";
import "./logging-CFvkxgcX.js";
import "./send-DxgkASHZ.js";
import "./send-DNHef1q2.js";
import "./with-timeout-Dm6ED9Vh.js";
import "./deliver-CMEoPFLx.js";
import "./diagnostic-C6WTf4ZE.js";
import "./diagnostic-session-state-CIjIGxEE.js";
import "./accounts-1gFWxwAw.js";
import "./send-CbvCsiNO.js";
import "./image-ops-CKJNUuNW.js";
import "./pi-embedded-helpers-wA6bohVT.js";
import "./sandbox-CoUdrbXS.js";
import "./chrome-BfNPXiz4.js";
import "./tailscale-BxzsxqAY.js";
import "./auth-BcWLEKcS.js";
import "./server-context-CQlBYQD7.js";
import "./routes-B9zGw2DB.js";
import "./redact-B40lik2B.js";
import "./errors-Ba_ROWsq.js";
import "./fs-safe-CERgjtot.js";
import "./paths-Dzc_6Z5O.js";
import "./ssrf-Ixuyn7h8.js";
import "./store-DRvx-vgM.js";
import "./ports-Dh8U6PTu.js";
import "./trash-CWQQXWX3.js";
import "./dock-BkVflx2Q.js";
import "./accounts-CuhuCyTF.js";
import "./paths-DNdWAq7b.js";
import "./tool-images-CW04CAn5.js";
import "./thinking-8sKPnzpp.js";
import "./models-config-CGpc5BxO.js";
import "./reply-prefix-D4RfrCeP.js";
import "./memory-cli-C71KenfK.js";
import "./manager-CYx1MWZA.js";
import "./gemini-auth-FuBGrv0B.js";
import "./sqlite-CQGamAhm.js";
import "./retry-C4Q_VPOo.js";
import "./target-errors-C6mkRlU9.js";
import "./chunk-D6AoZjLE.js";
import "./markdown-tables-CVgUytSx.js";
import "./fetch-guard-Dp7VnmeK.js";
import "./local-roots-LE1f_G0M.js";
import "./ir-DwFJAkDs.js";
import "./render-e7fENCYH.js";
import "./commands-j9S9qRB6.js";
import "./commands-registry-BDRoefkH.js";
import "./image-41co_U4c.js";
import "./tool-display-DixohEVL.js";
import "./runner-CMatzMlG.js";
import "./model-catalog-CRuPJUbw.js";
import "./session-utils-VNkYZ5il.js";
import "./skill-commands-uwHRWdJn.js";
import "./workspace-dirs-DVvmMbIu.js";
import "./pairing-store-Bl185_aX.js";
import "./fetch-DLXV2q8j.js";
import "./exec-approvals-DK5-bAn8.js";
import "./nodes-screen-B9hOtN5Z.js";
import "./session-cost-usage-C-v6E-Lz.js";
import "./channel-activity-myOnmDZi.js";
import "./tables-CKA-N6SU.js";
import "./control-service-hWAwsPST.js";
import "./stagger-CQar2eKe.js";
import "./channel-selection-D5cjTEHf.js";
import "./send-BGYmgum-.js";
import "./outbound-attachment-Bc9bVXwP.js";
import "./delivery-queue-CzNZXd1M.js";
import "./send-C65R572X.js";
import "./resolve-route-C4DUT14V.js";
import "./proxy-DL3MD6-P.js";
import { t as formatDocsLink } from "./links-CW8Bx7rK.js";
import { n as runCommandWithRuntime } from "./cli-utils-CCaEbxAz.js";
import { t as formatHelpExamples } from "./help-format-B0pWGnZs.js";
import "./progress-BAHiAaDW.js";
import "./replies-DoWFHvCg.js";
import "./onboard-helpers-BjJHxhjk.js";
import "./prompt-style-DwCXob2h.js";
import "./pairing-labels-D5pZ7KsY.js";
import "./pi-tools.policy-BdpmCOVo.js";
import "./dangerous-tools-B8QrxStA.js";
import "./skill-scanner-Cb7mXGIR.js";
import "./channels-status-issues-CmHZBwQD.js";
import { n as parsePositiveIntOrUndefined } from "./helpers-BMqFgDx8.js";
import "./runtime-guard-Cs_ClFhP.js";
import "./systemd-BrybH4HV.js";
import "./service-DcFI40_W.js";
import "./diagnostics-CqEodocN.js";
import "./table-C9BoE_4p.js";
import "./audit-BsyEkY-t.js";
import { n as statusCommand } from "./status-BsMO1u1v.js";
import { r as healthCommand } from "./health-C5fIqN53.js";
import "./update-check-DfBZVR4k.js";
import "./dm-policy-shared-BAXKVTCe.js";
import "./node-service-B1F4gM4E.js";
import "./status.update-B8WCXO81.js";
import { t as sessionsCommand } from "./sessions-HpSWDV9C.js";

//#region src/cli/program/register.status-health-sessions.ts
function resolveVerbose(opts) {
	return Boolean(opts.verbose || opts.debug);
}
function parseTimeoutMs(timeout) {
	const parsed = parsePositiveIntOrUndefined(timeout);
	if (timeout !== void 0 && parsed === void 0) {
		defaultRuntime.error("--timeout must be a positive integer (milliseconds)");
		defaultRuntime.exit(1);
		return null;
	}
	return parsed;
}
function registerStatusHealthSessionsCommands(program) {
	program.command("status").description("Show channel health and recent session recipients").option("--json", "Output JSON instead of text", false).option("--all", "Full diagnosis (read-only, pasteable)", false).option("--usage", "Show model provider usage/quota snapshots", false).option("--deep", "Probe channels (WhatsApp Web + Telegram + Discord + Slack + Signal)", false).option("--timeout <ms>", "Probe timeout in milliseconds", "10000").option("--verbose", "Verbose logging", false).option("--debug", "Alias for --verbose", false).addHelpText("after", () => `\n${theme.heading("Examples:")}\n${formatHelpExamples([
		["openclaw status", "Show channel health + session summary."],
		["openclaw status --all", "Full diagnosis (read-only)."],
		["openclaw status --json", "Machine-readable output."],
		["openclaw status --usage", "Show model provider usage/quota snapshots."],
		["openclaw status --deep", "Run channel probes (WA + Telegram + Discord + Slack + Signal)."],
		["openclaw status --deep --timeout 5000", "Tighten probe timeout."]
	])}`).addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/status", "docs.openclaw.ai/cli/status")}\n`).action(async (opts) => {
		const verbose = resolveVerbose(opts);
		setVerbose(verbose);
		const timeout = parseTimeoutMs(opts.timeout);
		if (timeout === null) return;
		await runCommandWithRuntime(defaultRuntime, async () => {
			await statusCommand({
				json: Boolean(opts.json),
				all: Boolean(opts.all),
				deep: Boolean(opts.deep),
				usage: Boolean(opts.usage),
				timeoutMs: timeout,
				verbose
			}, defaultRuntime);
		});
	});
	program.command("health").description("Fetch health from the running gateway").option("--json", "Output JSON instead of text", false).option("--timeout <ms>", "Connection timeout in milliseconds", "10000").option("--verbose", "Verbose logging", false).option("--debug", "Alias for --verbose", false).addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/health", "docs.openclaw.ai/cli/health")}\n`).action(async (opts) => {
		const verbose = resolveVerbose(opts);
		setVerbose(verbose);
		const timeout = parseTimeoutMs(opts.timeout);
		if (timeout === null) return;
		await runCommandWithRuntime(defaultRuntime, async () => {
			await healthCommand({
				json: Boolean(opts.json),
				timeoutMs: timeout,
				verbose
			}, defaultRuntime);
		});
	});
	program.command("sessions").description("List stored conversation sessions").option("--json", "Output as JSON", false).option("--verbose", "Verbose logging", false).option("--store <path>", "Path to session store (default: resolved from config)").option("--active <minutes>", "Only show sessions updated within the past N minutes").addHelpText("after", () => `\n${theme.heading("Examples:")}\n${formatHelpExamples([
		["openclaw sessions", "List all sessions."],
		["openclaw sessions --active 120", "Only last 2 hours."],
		["openclaw sessions --json", "Machine-readable output."],
		["openclaw sessions --store ./tmp/sessions.json", "Use a specific session store."]
	])}\n\n${theme.muted("Shows token usage per session when the agent reports it; set agents.defaults.contextTokens to cap the window and show %.")}`).addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/sessions", "docs.openclaw.ai/cli/sessions")}\n`).action(async (opts) => {
		setVerbose(Boolean(opts.verbose));
		await sessionsCommand({
			json: Boolean(opts.json),
			store: opts.store,
			active: opts.active
		}, defaultRuntime);
	});
}

//#endregion
export { registerStatusHealthSessionsCommands };