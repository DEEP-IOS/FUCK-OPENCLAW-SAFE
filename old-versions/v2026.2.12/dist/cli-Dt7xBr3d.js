import "./paths-DVBShlw6.js";
import { t as createSubsystemLogger } from "./subsystem-skqGO1bX.js";
import "./utils-CIzK7l-0.js";
import "./pi-embedded-helpers-40Sotf9d.js";
import { ut as loadOpenClawPlugins } from "./reply-B5GoyKpI.js";
import "./exec-DeTCzdN-.js";
import { c as resolveDefaultAgentId, s as resolveAgentWorkspaceDir } from "./agent-scope-BeIpLGAL.js";
import "./model-selection-Dc-MAbI_.js";
import "./github-copilot-token-BW-SEg7E.js";
import "./boolean-BgXe2hyu.js";
import "./env-DLkW-xAN.js";
import { i as loadConfig } from "./config-Drc5OJ4W.js";
import "./manifest-registry-CBwmEVUR.js";
import "./plugins-CRTINZXt.js";
import "./sandbox-Bz_i-Ifh.js";
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