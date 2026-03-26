import { t as createSubsystemLogger } from "./subsystem-skqGO1bX.js";
import { ut as loadOpenClawPlugins } from "./reply-B5GoyKpI.js";
import { c as resolveDefaultAgentId, s as resolveAgentWorkspaceDir, w as resolveDefaultAgentWorkspaceDir } from "./agent-scope-BeIpLGAL.js";
import { i as loadConfig } from "./config-Drc5OJ4W.js";

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