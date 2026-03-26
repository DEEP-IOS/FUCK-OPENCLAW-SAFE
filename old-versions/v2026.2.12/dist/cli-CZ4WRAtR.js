import { o as createSubsystemLogger } from "./entry.js";
import "./auth-profiles-CNzIocqc.js";
import "./utils-DFY1ybN-.js";
import "./exec-B8JKbXKW.js";
import { c as resolveDefaultAgentId, s as resolveAgentWorkspaceDir } from "./agent-scope-CnY2bb9p.js";
import "./github-copilot-token-SLWintYd.js";
import "./pi-model-discovery-DzEIEgHL.js";
import { i as loadConfig } from "./config-CDhe1RIp.js";
import "./manifest-registry-DlCJWfBO.js";
import "./server-context-BK5e_pAT.js";
import "./chrome-D8B1fI6a.js";
import "./auth-wzIZapFN.js";
import "./control-auth-BEq6Gnvk.js";
import "./control-service-8T0HJgxj.js";
import "./client-CAw2wMY5.js";
import "./call-BioUn9nN.js";
import "./message-channel-BdE6IUzJ.js";
import "./links-D13x-ygy.js";
import "./plugins-XU-6noRu.js";
import "./logging-CfEk_PnX.js";
import "./accounts-DH0MoGU2.js";
import { t as loadOpenClawPlugins } from "./loader-BpQdnOY1.js";
import "./progress-Da1ehW-x.js";
import "./prompt-style-Dc0C5HC9.js";
import "./deliver-Dlw-4HTg.js";
import "./manager-B7LR5xCP.js";
import "./paths-mF4iWwgm.js";
import "./sqlite-D21YlU-I.js";
import "./redact-Br9GfacZ.js";
import "./routes-CQcgE2QD.js";
import "./pi-embedded-helpers-DVDkr-zC.js";
import "./fetch-timeout-Cq3iZuyx.js";
import "./sandbox-BZDlvSgL.js";
import "./tui-formatters-gPF7d9G1.js";
import "./wsl-CyBHMKHM.js";
import "./skills-BOqBE1bl.js";
import "./image-DnJne4QR.js";
import "./tool-display-h92yubJT.js";
import "./channel-selection-C3HiyetA.js";
import "./session-cost-usage-C0xHMSdN.js";
import "./runner-BnpMFeh_.js";
import "./commands-16e3ouqr.js";
import "./pairing-store-CfUkq8QV.js";
import "./login-qr-B2VT2MKp.js";
import "./pairing-labels-DIPhKMyq.js";

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