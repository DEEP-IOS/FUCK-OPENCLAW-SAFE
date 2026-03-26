import { Dt as theme, _ as defaultRuntime, lt as shortenHomePath } from "./entry.js";
import "./auth-profiles-C7RTY9Sv.js";
import "./exec-CBKBIMpA.js";
import { C as ensureAgentWorkspace, m as DEFAULT_AGENT_WORKSPACE_DIR } from "./agent-scope-DhajVyRS.js";
import "./github-copilot-token-DuFIqfeC.js";
import "./model-ChKLb_d2.js";
import "./pi-model-discovery-Do3xMEtM.js";
import "./frontmatter-D-YR-Ghi.js";
import "./skills-Bq1s47OA.js";
import "./manifest-registry-XSxPcu0S.js";
import { l as writeConfigFile, r as createConfigIO } from "./config-irA2OYte.js";
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
import { o as resolveSessionTranscriptsDir } from "./paths-DNdWAq7b.js";
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
import "./help-format-B0pWGnZs.js";
import "./progress-BAHiAaDW.js";
import "./replies-DoWFHvCg.js";
import "./onboard-helpers-BjJHxhjk.js";
import "./prompt-style-DwCXob2h.js";
import "./pairing-labels-D5pZ7KsY.js";
import "./pi-tools.policy-BdpmCOVo.js";
import { t as hasExplicitOptions } from "./command-options-6wdtBBWB.js";
import "./note-DDecZomM.js";
import "./clack-prompter-B1aVoXd5.js";
import "./daemon-runtime-BUfGYquz.js";
import "./runtime-guard-Cs_ClFhP.js";
import "./systemd-BrybH4HV.js";
import "./service-DcFI40_W.js";
import "./health-C5fIqN53.js";
import "./onboarding-Bs-eg1If.js";
import "./shared-CvKC7WjC.js";
import "./auth-token-ED-ILVvP.js";
import { n as logConfigUpdated, t as formatConfigPath } from "./logging-PVQxLC6I.js";
import "./openai-model-default-C6iwMU4X.js";
import "./model-picker-DMhyRHbF.js";
import "./systemd-linger-B8oXYjfA.js";
import "./onboard-custom-CxqZzf0Y.js";
import { t as onboardCommand } from "./onboard-Svg0gZvG.js";
import JSON5 from "json5";
import fs from "node:fs/promises";

//#region src/commands/setup.ts
async function readConfigFileRaw(configPath) {
	try {
		const raw = await fs.readFile(configPath, "utf-8");
		const parsed = JSON5.parse(raw);
		if (parsed && typeof parsed === "object") return {
			exists: true,
			parsed
		};
		return {
			exists: true,
			parsed: {}
		};
	} catch {
		return {
			exists: false,
			parsed: {}
		};
	}
}
async function setupCommand(opts, runtime = defaultRuntime) {
	const desiredWorkspace = typeof opts?.workspace === "string" && opts.workspace.trim() ? opts.workspace.trim() : void 0;
	const configPath = createConfigIO().configPath;
	const existingRaw = await readConfigFileRaw(configPath);
	const cfg = existingRaw.parsed;
	const defaults = cfg.agents?.defaults ?? {};
	const workspace = desiredWorkspace ?? defaults.workspace ?? DEFAULT_AGENT_WORKSPACE_DIR;
	const next = {
		...cfg,
		agents: {
			...cfg.agents,
			defaults: {
				...defaults,
				workspace
			}
		}
	};
	if (!existingRaw.exists || defaults.workspace !== workspace) {
		await writeConfigFile(next);
		if (!existingRaw.exists) runtime.log(`Wrote ${formatConfigPath(configPath)}`);
		else logConfigUpdated(runtime, {
			path: configPath,
			suffix: "(set agents.defaults.workspace)"
		});
	} else runtime.log(`Config OK: ${formatConfigPath(configPath)}`);
	const ws = await ensureAgentWorkspace({
		dir: workspace,
		ensureBootstrapFiles: !next.agents?.defaults?.skipBootstrap
	});
	runtime.log(`Workspace OK: ${shortenHomePath(ws.dir)}`);
	const sessionsDir = resolveSessionTranscriptsDir();
	await fs.mkdir(sessionsDir, { recursive: true });
	runtime.log(`Sessions OK: ${shortenHomePath(sessionsDir)}`);
}

//#endregion
//#region src/cli/program/register.setup.ts
function registerSetupCommand(program) {
	program.command("setup").description("Initialize ~/.openclaw/openclaw.json and the agent workspace").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/setup", "docs.openclaw.ai/cli/setup")}\n`).option("--workspace <dir>", "Agent workspace directory (default: ~/.openclaw/workspace; stored as agents.defaults.workspace)").option("--wizard", "Run the interactive onboarding wizard", false).option("--non-interactive", "Run the wizard without prompts", false).option("--mode <mode>", "Wizard mode: local|remote").option("--remote-url <url>", "Remote Gateway WebSocket URL").option("--remote-token <token>", "Remote Gateway token (optional)").action(async (opts, command) => {
		await runCommandWithRuntime(defaultRuntime, async () => {
			const hasWizardFlags = hasExplicitOptions(command, [
				"wizard",
				"nonInteractive",
				"mode",
				"remoteUrl",
				"remoteToken"
			]);
			if (opts.wizard || hasWizardFlags) {
				await onboardCommand({
					workspace: opts.workspace,
					nonInteractive: Boolean(opts.nonInteractive),
					mode: opts.mode,
					remoteUrl: opts.remoteUrl,
					remoteToken: opts.remoteToken
				}, defaultRuntime);
				return;
			}
			await setupCommand({ workspace: opts.workspace }, defaultRuntime);
		});
	});
}

//#endregion
export { registerSetupCommand };