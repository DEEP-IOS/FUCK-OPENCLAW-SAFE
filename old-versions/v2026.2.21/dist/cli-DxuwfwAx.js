import { o as createSubsystemLogger } from "./entry.js";
import "./auth-profiles-C7RTY9Sv.js";
import "./exec-CBKBIMpA.js";
import { c as resolveAgentWorkspaceDir, l as resolveDefaultAgentId } from "./agent-scope-DhajVyRS.js";
import "./github-copilot-token-DuFIqfeC.js";
import "./model-ChKLb_d2.js";
import "./pi-model-discovery-Do3xMEtM.js";
import "./frontmatter-D-YR-Ghi.js";
import "./skills-Bq1s47OA.js";
import "./manifest-registry-XSxPcu0S.js";
import { i as loadConfig } from "./config-irA2OYte.js";
import "./client-DrK7aLru.js";
import "./call-ZNr9p4dX.js";
import "./message-channel-CVHJDItx.js";
import "./pairing-token-Byh6drgn.js";
import { g as loadOpenClawPlugins } from "./subagent-registry-DV5OCO20.js";
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
import "./links-CW8Bx7rK.js";
import "./cli-utils-CCaEbxAz.js";
import "./help-format-B0pWGnZs.js";
import "./progress-BAHiAaDW.js";
import "./replies-DoWFHvCg.js";
import "./onboard-helpers-BjJHxhjk.js";
import "./prompt-style-DwCXob2h.js";
import "./pairing-labels-D5pZ7KsY.js";
import "./pi-tools.policy-BdpmCOVo.js";

//#region src/plugins/cli.ts
const log = createSubsystemLogger("plugins");
function registerPluginCliCommands(program, cfg) {
	const config = cfg ?? loadConfig();
	const workspaceDir = resolveAgentWorkspaceDir(config, resolveDefaultAgentId(config));
	const logger = {
		info: (msg) => log.info(msg),
		warn: (msg) => log.warn(msg),
		error: (msg) => log.error(msg),
		debug: (msg) => log.debug(msg)
	};
	const registry = loadOpenClawPlugins({
		config,
		workspaceDir,
		logger
	});
	const existingCommands = new Set(program.commands.map((cmd) => cmd.name()));
	for (const entry of registry.cliRegistrars) {
		if (entry.commands.length > 0) {
			const overlaps = entry.commands.filter((command) => existingCommands.has(command));
			if (overlaps.length > 0) {
				log.debug(`plugin CLI register skipped (${entry.pluginId}): command already registered (${overlaps.join(", ")})`);
				continue;
			}
		}
		try {
			const result = entry.register({
				program,
				config,
				workspaceDir,
				logger
			});
			if (result && typeof result.then === "function") result.catch((err) => {
				log.warn(`plugin CLI register failed (${entry.pluginId}): ${String(err)}`);
			});
			for (const command of entry.commands) existingCommands.add(command);
		} catch (err) {
			log.warn(`plugin CLI register failed (${entry.pluginId}): ${String(err)}`);
		}
	}
}

//#endregion
export { registerPluginCliCommands };