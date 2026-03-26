import "./paths-DVBShlw6.js";
import { R as theme, c as defaultRuntime } from "./subsystem-skqGO1bX.js";
import "./utils-CIzK7l-0.js";
import "./pi-embedded-helpers-40Sotf9d.js";
import "./exec-DeTCzdN-.js";
import "./agent-scope-BeIpLGAL.js";
import "./model-selection-Dc-MAbI_.js";
import "./github-copilot-token-BW-SEg7E.js";
import "./boolean-BgXe2hyu.js";
import "./env-DLkW-xAN.js";
import "./config-Drc5OJ4W.js";
import "./manifest-registry-CBwmEVUR.js";
import "./plugins-CRTINZXt.js";
import "./sandbox-Bz_i-Ifh.js";
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
import "./tui-formatters-CF2WmOfu.js";
import "./client-BMV05L-b.js";
import "./call-CaQDI0e9.js";
import { t as formatDocsLink } from "./links-CsKJ3nC4.js";
import { t as parseTimeoutMs } from "./parse-timeout-D1XX_zN_.js";
import { t as runTui } from "./tui-B0PFk5gW.js";

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