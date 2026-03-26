import { gt as loadOpenClawPlugins, ht as createPluginLoaderLogger } from "./reply-DM7CfktL.js";
import { t as createSubsystemLogger } from "./subsystem-BCQGGxdd.js";
import { D as resolveDefaultAgentWorkspaceDir, c as resolveAgentWorkspaceDir, l as resolveDefaultAgentId } from "./agent-scope-B36jktKj.js";
import { i as loadConfig } from "./config-DJkRS0fq.js";

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