import { o as createSubsystemLogger } from "./entry.js";
import { D as resolveDefaultAgentWorkspaceDir, c as resolveAgentWorkspaceDir, l as resolveDefaultAgentId } from "./agent-scope-DhajVyRS.js";
import { i as loadConfig } from "./config-irA2OYte.js";
import { g as loadOpenClawPlugins, h as createPluginLoaderLogger } from "./subagent-registry-DV5OCO20.js";

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
			logger: createPluginLoaderLogger(log)
		})
	};
}

//#endregion
export { buildPluginStatusReport as t };