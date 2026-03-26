import { k as theme, p as defaultRuntime } from "./entry.js";
import "./auth-profiles-CNzIocqc.js";
import "./utils-DFY1ybN-.js";
import "./exec-B8JKbXKW.js";
import "./agent-scope-CnY2bb9p.js";
import "./github-copilot-token-SLWintYd.js";
import "./config-CDhe1RIp.js";
import "./manifest-registry-DlCJWfBO.js";
import "./server-context-BK5e_pAT.js";
import "./chrome-D8B1fI6a.js";
import "./client-CAw2wMY5.js";
import "./call-BioUn9nN.js";
import "./message-channel-BdE6IUzJ.js";
import { t as formatDocsLink } from "./links-D13x-ygy.js";
import "./plugins-XU-6noRu.js";
import "./logging-CfEk_PnX.js";
import "./accounts-DH0MoGU2.js";
import "./paths-mF4iWwgm.js";
import "./redact-Br9GfacZ.js";
import "./routes-CQcgE2QD.js";
import "./pi-embedded-helpers-DVDkr-zC.js";
import "./sandbox-BZDlvSgL.js";
import "./tui-formatters-gPF7d9G1.js";
import "./skills-BOqBE1bl.js";
import "./tool-display-h92yubJT.js";
import { t as parseTimeoutMs } from "./parse-timeout-DMW-z4Iz.js";
import { t as runTui } from "./tui-Dp_597lz.js";

//#region src/cli/tui-cli.ts
function registerTuiCli(program) {
	program.command("tui").description("Open a terminal UI connected to the Gateway").option("--url <url>", "Gateway WebSocket URL (defaults to gateway.remote.url when configured)").option("--token <token>", "Gateway token (if required)").option("--password <password>", "Gateway password (if required)").option("--session <key>", "Session key (default: \"main\", or \"global\" when scope is global)").option("--deliver", "Deliver assistant replies", false).option("--thinking <level>", "Thinking level override").option("--message <text>", "Send an initial message after connecting").option("--timeout-ms <ms>", "Agent timeout in ms (defaults to agents.defaults.timeoutSeconds)").option("--history-limit <n>", "History entries to load", "200").addHelpText("after", () => `\n${theme.muted("Docs:")} ${formatDocsLink("/cli/tui", "docs.openclaw.ai/cli/tui")}\n`).action(async (opts) => {
		try {
			const timeoutMs = parseTimeoutMs(opts.timeoutMs);
			if (opts.timeoutMs !== void 0 && timeoutMs === void 0) defaultRuntime.error(`warning: invalid --timeout-ms "${String(opts.timeoutMs)}"; ignoring`);
			const historyLimit = Number.parseInt(String(opts.historyLimit ?? "200"), 10);
			await runTui({
				url: opts.url,
				token: opts.token,
				password: opts.password,
				session: opts.session,
				deliver: Boolean(opts.deliver),
				thinking: opts.thinking,
				message: opts.message,
				timeoutMs,
				historyLimit: Number.isNaN(historyLimit) ? void 0 : historyLimit
			});
		} catch (err) {
			defaultRuntime.error(String(err));
			defaultRuntime.exit(1);
		}
	});
}

//#endregion
export { registerTuiCli };