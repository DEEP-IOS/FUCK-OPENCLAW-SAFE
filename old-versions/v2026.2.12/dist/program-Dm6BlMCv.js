import { C as setVerbose, O as isRich, k as theme, n as isTruthyEnvValue, p as defaultRuntime } from "./entry.js";
import "./auth-profiles-CNzIocqc.js";
import { n as replaceCliName, r as resolveCliName } from "./command-format-DdHwx_z_.js";
import "./utils-DFY1ybN-.js";
import "./exec-B8JKbXKW.js";
import "./agent-scope-CnY2bb9p.js";
import "./github-copilot-token-SLWintYd.js";
import "./pi-model-discovery-DzEIEgHL.js";
import { M as VERSION } from "./config-CDhe1RIp.js";
import "./manifest-registry-DlCJWfBO.js";
import "./server-context-BK5e_pAT.js";
import "./chrome-D8B1fI6a.js";
import "./auth-wzIZapFN.js";
import "./control-auth-BEq6Gnvk.js";
import "./control-service-8T0HJgxj.js";
import "./client-CAw2wMY5.js";
import "./call-BioUn9nN.js";
import "./message-channel-BdE6IUzJ.js";
import { t as formatDocsLink } from "./links-D13x-ygy.js";
import "./plugin-auto-enable-De7qaimJ.js";
import "./plugins-XU-6noRu.js";
import "./logging-CfEk_PnX.js";
import "./accounts-DH0MoGU2.js";
import "./loader-BpQdnOY1.js";
import "./progress-Da1ehW-x.js";
import "./prompt-style-Dc0C5HC9.js";
import "./note-Ci08TSbV.js";
import "./clack-prompter-DuBVnTKy.js";
import "./onboard-channels-CyP59Qac.js";
import "./archive-D0z3LZDK.js";
import "./skill-scanner-rHMtUHtP.js";
import "./installs-L4DWtZJW.js";
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
import "./channels-status-issues-InQn0nou.js";
import { n as ensurePluginRegistryLoaded } from "./command-options-DVSe0WU2.js";
import { n as resolveCliChannelOptions } from "./channel-options-CVojwMRP.js";
import { a as getCommandPath, d as hasHelpOrVersion, l as getVerboseFlag } from "./register.subclis-Du6KMoBf.js";
import "./completion-cli-BQPuDrTS.js";
import "./gateway-rpc-tKxvDy1w.js";
import "./deps-BupcTRhd.js";
import "./daemon-runtime-DRvZYeHy.js";
import "./service-DNcIZ5Kp.js";
import "./systemd-CNTodvCO.js";
import "./service-audit-_vKJ8CE1.js";
import "./table-oPdyrGsh.js";
import "./widearea-dns-DqpjF4vI.js";
import "./audit-tUBEFViY.js";
import "./onboard-skills-Dm3VqSUy.js";
import "./health-format-CXYmhrP-.js";
import "./update-runner-tK9nTr1M.js";
import "./github-copilot-auth-byxobEeH.js";
import "./logging-Co5BcKdU.js";
import "./hooks-status-DQiV1ulN.js";
import "./status-BKh4-A7n.js";
import "./skills-status-Dknt5QmB.js";
import "./tui-Dp_597lz.js";
import "./agent-C0ylUd_S.js";
import "./node-service-_vgO5xR-.js";
import { t as forceFreePort } from "./ports-DdFBBDmG.js";
import "./auth-health-rbSQ7wmC.js";
import { i as hasEmittedCliBanner, n as emitCliBanner, o as registerProgramCommands, r as formatCliBannerLine, t as ensureConfigReady } from "./config-guard-Cg-r4kKI.js";
import "./help-format-DUy1KRxq.js";
import "./configure-CwHxZ977.js";
import "./systemd-linger-CArPbmvv.js";
import "./doctor-DQ99-6s0.js";
import { Command } from "commander";

//#region src/cli/program/context.ts
function createProgramContext() {
	const channelOptions = resolveCliChannelOptions();
	return {
		programVersion: VERSION,
		channelOptions,
		messageChannelOptions: channelOptions.join("|"),
		agentChannelOptions: ["last", ...channelOptions].join("|")
	};
}

//#endregion
//#region src/cli/program/help.ts
const CLI_NAME = resolveCliName();
const EXAMPLES = [
	["openclaw channels login --verbose", "Link personal WhatsApp Web and show QR + connection logs."],
	["openclaw message send --target +15555550123 --message \"Hi\" --json", "Send via your web session and print JSON result."],
	["openclaw gateway --port 18789", "Run the WebSocket Gateway locally."],
	["openclaw --dev gateway", "Run a dev Gateway (isolated state/config) on ws://127.0.0.1:19001."],
	["openclaw gateway --force", "Kill anything bound to the default gateway port, then start it."],
	["openclaw gateway ...", "Gateway control via WebSocket."],
	["openclaw agent --to +15555550123 --message \"Run summary\" --deliver", "Talk directly to the agent using the Gateway; optionally send the WhatsApp reply."],
	["openclaw message send --channel telegram --target @mychat --message \"Hi\"", "Send via your Telegram bot."]
];
function configureProgramHelp(program, ctx) {
	program.name(CLI_NAME).description("").version(ctx.programVersion).option("--dev", "Dev profile: isolate state under ~/.openclaw-dev, default gateway port 19001, and shift derived ports (browser/canvas)").option("--profile <name>", "Use a named profile (isolates OPENCLAW_STATE_DIR/OPENCLAW_CONFIG_PATH under ~/.openclaw-<name>)");
	program.option("--no-color", "Disable ANSI colors", false);
	program.configureHelp({
		sortSubcommands: true,
		sortOptions: true,
		optionTerm: (option) => theme.option(option.flags),
		subcommandTerm: (cmd) => theme.command(cmd.name())
	});
	program.configureOutput({
		writeOut: (str) => {
			const colored = str.replace(/^Usage:/gm, theme.heading("Usage:")).replace(/^Options:/gm, theme.heading("Options:")).replace(/^Commands:/gm, theme.heading("Commands:"));
			process.stdout.write(colored);
		},
		writeErr: (str) => process.stderr.write(str),
		outputError: (str, write) => write(theme.error(str))
	});
	if (process.argv.includes("-V") || process.argv.includes("--version") || process.argv.includes("-v")) {
		console.log(ctx.programVersion);
		process.exit(0);
	}
	program.addHelpText("beforeAll", () => {
		if (hasEmittedCliBanner()) return "";
		const rich = isRich();
		return `\n${formatCliBannerLine(ctx.programVersion, { richTty: rich })}\n`;
	});
	const fmtExamples = EXAMPLES.map(([cmd, desc]) => `  ${theme.command(replaceCliName(cmd, CLI_NAME))}\n    ${theme.muted(desc)}`).join("\n");
	program.addHelpText("afterAll", ({ command }) => {
		if (command !== program) return "";
		const docs = formatDocsLink("/cli", "docs.openclaw.ai/cli");
		return `\n${theme.heading("Examples:")}\n${fmtExamples}\n\n${theme.muted("Docs:")} ${docs}\n`;
	});
}

//#endregion
//#region src/cli/program/preaction.ts
function setProcessTitleForCommand(actionCommand) {
	let current = actionCommand;
	while (current.parent && current.parent.parent) current = current.parent;
	const name = current.name();
	const cliName = resolveCliName();
	if (!name || name === cliName) return;
	process.title = `${cliName}-${name}`;
}
const PLUGIN_REQUIRED_COMMANDS = new Set([
	"message",
	"channels",
	"directory"
]);
function registerPreActionHooks(program, programVersion) {
	program.hook("preAction", async (_thisCommand, actionCommand) => {
		setProcessTitleForCommand(actionCommand);
		const argv = process.argv;
		if (hasHelpOrVersion(argv)) return;
		const commandPath = getCommandPath(argv, 2);
		if (!(isTruthyEnvValue(process.env.OPENCLAW_HIDE_BANNER) || commandPath[0] === "update" || commandPath[0] === "completion" || commandPath[0] === "plugins" && commandPath[1] === "update")) emitCliBanner(programVersion);
		const verbose = getVerboseFlag(argv, { includeDebug: true });
		setVerbose(verbose);
		if (!verbose) process.env.NODE_NO_WARNINGS ??= "1";
		if (commandPath[0] === "doctor" || commandPath[0] === "completion") return;
		await ensureConfigReady({
			runtime: defaultRuntime,
			commandPath
		});
		if (PLUGIN_REQUIRED_COMMANDS.has(commandPath[0])) ensurePluginRegistryLoaded();
	});
}

//#endregion
//#region src/cli/program/build-program.ts
function buildProgram() {
	const program = new Command();
	const ctx = createProgramContext();
	const argv = process.argv;
	configureProgramHelp(program, ctx);
	registerPreActionHooks(program, ctx.programVersion);
	registerProgramCommands(program, ctx, argv);
	return program;
}

//#endregion
export { buildProgram };