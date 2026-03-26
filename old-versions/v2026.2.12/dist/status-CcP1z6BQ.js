import { o as createSubsystemLogger } from "./entry.js";
import { c as resolveDefaultAgentId, s as resolveAgentWorkspaceDir, w as resolveDefaultAgentWorkspaceDir } from "./agent-scope-CnY2bb9p.js";
import { i as loadConfig } from "./config-CDhe1RIp.js";
import { t as loadOpenClawPlugins } from "./loader-BpQdnOY1.js";

//#region src/plugins/status.ts
const log = createSubsystemLogger("plugins");
function buildPluginStatusReport(params) {
	const config = params?.config ?? loadConfig();
	const workspaceDir = params?.workspaceDir ? params.workspaceDir : resolveAgentWorkspaceDir(config, resolveDefaultAgentId(config)) ?? resolveDefaultAgentWorkspaceDir();
	return {
		workspaceDir,
		...loadOpenClawPlugins({
			config,
			workspaceDir,
			logger: {
				info: (msg) => log.info(msg),
				warn: (msg) => log.warn(msg),
				error: (msg) => log.error(msg),
				debug: (msg) => log.debug(msg)
			}
		})
	};
}

//#endregion
export { buildPluginStatusReport as t };