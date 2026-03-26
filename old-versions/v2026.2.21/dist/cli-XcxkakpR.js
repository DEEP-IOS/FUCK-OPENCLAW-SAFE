import "./paths-B4BZAPZh.js";
import "./utils-CP9YLh6M.js";
import "./thinking-EAliFiVK.js";
import { gt as loadOpenClawPlugins } from "./reply-DM7CfktL.js";
import "./registry-B-j4DRfe.js";
import { t as createSubsystemLogger } from "./subsystem-BCQGGxdd.js";
import "./exec-DYqRzFbo.js";
import { c as resolveAgentWorkspaceDir, l as resolveDefaultAgentId } from "./agent-scope-B36jktKj.js";
import "./model-selection-mHHEzs4Y.js";
import "./github-copilot-token-D2zp6kMZ.js";
import "./boolean-BsqeuxE6.js";
import "./env-VriqyjXT.js";
import "./message-channel-Bena1Tzd.js";
import "./send-QOTb-U4C.js";
import { i as loadConfig } from "./config-DJkRS0fq.js";
import "./manifest-registry-D2lPzXIl.js";
import "./runner-DV9BztqI.js";
import "./image-DBMjIdEn.js";
import "./models-config-CbUg58Ul.js";
import "./pi-model-discovery-4uUnLc3n.js";
import "./pi-embedded-helpers-FtVk0_wz.js";
import "./sandbox-Bjri79UN.js";
import "./chrome-Dy34wZlv.js";
import "./tailscale-Lro1Kj8C.js";
import "./auth-G84EF23T.js";
import "./server-context-D_Hzry0Y.js";
import "./frontmatter-C_R2lwvR.js";
import "./skills-DF14CP8t.js";
import "./routes-C2qGqscg.js";
import "./redact-f-Q-hFt_.js";
import "./errors-BF3TeRH2.js";
import "./fs-safe-CUjO1ca2.js";
import "./paths-CrFY6bY4.js";
import "./ssrf-BCYMnxkM.js";
import "./image-ops-CtnOR38U.js";
import "./store-DH3Bsx5y.js";
import "./ports-BrLmtCv4.js";
import "./trash-DXPbQEbW.js";
import "./sessions-BpJAqQ8e.js";
import "./dock-SQwuNDYw.js";
import "./plugins-CTO4bTbI.js";
import "./accounts-CznR-8mo.js";
import "./accounts-Dq_1iSiE.js";
import "./accounts-DTj1Pkjk.js";
import "./bindings-Dnyf3pJk.js";
import "./logging-w5jq5901.js";
import "./send-BFwBpAP8.js";
import "./paths-C6eomcf_.js";
import "./tool-images-DoR5YQkw.js";
import "./tool-display-BvrygsZB.js";
import "./fetch-guard-bFjgj5XZ.js";
import "./api-key-rotation-Cm4ZjNxG.js";
import "./local-roots-kq2C9EhR.js";
import "./sqlite-gCU8YLod.js";
import "./model-catalog-ixLyPw5e.js";
import "./tokens-DTYwPL5L.js";
import "./with-timeout-CVevO_cM.js";
import "./deliver-BJ_jaAgq.js";
import "./diagnostic-B714gh-r.js";
import "./diagnostic-session-state-CUslJyKP.js";
import "./send-BNes3XH_.js";
import "./model-CHiDbZyw.js";
import "./reply-prefix-CFSzlge_.js";
import "./memory-cli-BknoR-cx.js";
import "./manager-DRT2R_zd.js";
import "./retry-Clkcl3C1.js";
import "./target-errors-BxTcTDYc.js";
import "./chunk-Bph8iEQD.js";
import "./markdown-tables-DgpbH7zx.js";
import "./ir-BsKYH-lb.js";
import "./render-CXDO_kgw.js";
import "./commands-Dzc2eVxa.js";
import "./commands-registry-w2QxlrL2.js";
import "./client-DxXj-g8m.js";
import "./call-B3Ur5x-r.js";
import "./pairing-token-DGufCZxz.js";
import "./channel-activity-BmUkycB-.js";
import "./fetch-EupTshKr.js";
import "./tables-BnEdRv9R.js";
import "./send-DunTFY9U.js";
import "./pairing-store-CvCsQ1MF.js";
import "./proxy-DU7W9XSc.js";
import "./links-DZH9q9ib.js";
import "./cli-utils-DN_hM6ov.js";
import "./help-format-DijWjbvl.js";
import "./progress-B7Ig_SnC.js";
import "./resolve-route-CDs3U4WK.js";
import "./replies-0AOZN1y4.js";
import "./skill-commands-DZuuDx5_.js";
import "./workspace-dirs-BuMBSBZu.js";
import "./outbound-attachment-BkYB8p_T.js";
import "./delivery-queue-CxDDEWQg.js";
import "./session-cost-usage-CNxpZ3DJ.js";
import "./send-QmdqsuOx.js";
import "./onboard-helpers-BmfIcEQU.js";
import "./prompt-style-VqCNjBi8.js";
import "./pairing-labels-Sy5Heyx2.js";
import "./exec-approvals-CAr0jd5Q.js";
import "./nodes-screen-5fMfTT2n.js";
import "./control-service-C8C1KSh7.js";
import "./stagger-B6VQyn1F.js";
import "./channel-selection-BouenmYp.js";
import "./pi-tools.policy-B78x7itg.js";

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