import { c as enableConsoleCapture, i as normalizeEnv, n as isTruthyEnvValue, p as defaultRuntime } from "./entry.js";
import "./auth-profiles-CNzIocqc.js";
import "./utils-DFY1ybN-.js";
import "./exec-B8JKbXKW.js";
import "./agent-scope-CnY2bb9p.js";
import "./github-copilot-token-SLWintYd.js";
import "./pi-model-discovery-DzEIEgHL.js";
import { M as VERSION, N as loadDotEnv } from "./config-CDhe1RIp.js";
import "./manifest-registry-DlCJWfBO.js";
import "./server-context-BK5e_pAT.js";
import "./chrome-D8B1fI6a.js";
import "./auth-wzIZapFN.js";
import "./control-auth-BEq6Gnvk.js";
import { r as formatUncaughtError } from "./errors-DjZBTJJ3.js";
import "./control-service-8T0HJgxj.js";
import { t as ensureOpenClawCliOnPath } from "./path-env-CLvYNwtL.js";
import "./client-CAw2wMY5.js";
import "./call-BioUn9nN.js";
import "./message-channel-BdE6IUzJ.js";
import "./links-D13x-ygy.js";
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
import { m as installUnhandledRejectionHandler } from "./runner-BnpMFeh_.js";
import "./commands-16e3ouqr.js";
import "./pairing-store-CfUkq8QV.js";
import "./login-qr-B2VT2MKp.js";
import "./pairing-labels-DIPhKMyq.js";
import "./channels-status-issues-InQn0nou.js";
import { n as ensurePluginRegistryLoaded } from "./command-options-DVSe0WU2.js";
import { a as getCommandPath, c as getPrimaryCommand, d as hasHelpOrVersion } from "./register.subclis-Du6KMoBf.js";
import "./completion-cli-BQPuDrTS.js";
import "./gateway-rpc-tKxvDy1w.js";
import "./deps-BupcTRhd.js";
import { h as assertSupportedRuntime } from "./daemon-runtime-DRvZYeHy.js";
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
import "./auth-health-rbSQ7wmC.js";
import { a as findRoutedCommand, n as emitCliBanner, t as ensureConfigReady } from "./config-guard-Cg-r4kKI.js";
import "./help-format-DUy1KRxq.js";
import "./configure-CwHxZ977.js";
import "./systemd-linger-CArPbmvv.js";
import "./doctor-DQ99-6s0.js";
import path from "node:path";
import process$1 from "node:process";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

//#region src/cli/route.ts
async function prepareRoutedCommand(params) {
	emitCliBanner(VERSION, { argv: params.argv });
	await ensureConfigReady({
		runtime: defaultRuntime,
		commandPath: params.commandPath
	});
	if (params.loadPlugins) ensurePluginRegistryLoaded();
}
async function tryRouteCli(argv) {
	if (isTruthyEnvValue(process.env.OPENCLAW_DISABLE_ROUTE_FIRST)) return false;
	if (hasHelpOrVersion(argv)) return false;
	const path = getCommandPath(argv, 2);
	if (!path[0]) return false;
	const route = findRoutedCommand(path);
	if (!route) return false;
	await prepareRoutedCommand({
		argv,
		commandPath: path,
		loadPlugins: route.loadPlugins
	});
	return route.run(argv);
}

//#endregion
//#region src/cli/run-main.ts
function rewriteUpdateFlagArgv(argv) {
	const index = argv.indexOf("--update");
	if (index === -1) return argv;
	const next = [...argv];
	next.splice(index, 1, "update");
	return next;
}
async function runCli(argv = process$1.argv) {
	const normalizedArgv = stripWindowsNodeExec(argv);
	loadDotEnv({ quiet: true });
	normalizeEnv();
	ensureOpenClawCliOnPath();
	assertSupportedRuntime();
	if (await tryRouteCli(normalizedArgv)) return;
	enableConsoleCapture();
	const { buildProgram } = await import("./program-Dm6BlMCv.js");
	const program = buildProgram();
	installUnhandledRejectionHandler();
	process$1.on("uncaughtException", (error) => {
		console.error("[openclaw] Uncaught exception:", formatUncaughtError(error));
		process$1.exit(1);
	});
	const parseArgv = rewriteUpdateFlagArgv(normalizedArgv);
	const primary = getPrimaryCommand(parseArgv);
	if (primary) {
		const { registerSubCliByName } = await import("./register.subclis-Du6KMoBf.js").then((n) => n.i);
		await registerSubCliByName(program, primary);
	}
	if (!(!primary && hasHelpOrVersion(parseArgv))) {
		const { registerPluginCliCommands } = await import("./cli-CZ4WRAtR.js");
		const { loadConfig } = await import("./config-CDhe1RIp.js").then((n) => n.t);
		registerPluginCliCommands(program, loadConfig());
	}
	await program.parseAsync(parseArgv);
}
function stripWindowsNodeExec(argv) {
	if (process$1.platform !== "win32") return argv;
	const stripControlChars = (value) => {
		let out = "";
		for (let i = 0; i < value.length; i += 1) {
			const code = value.charCodeAt(i);
			if (code >= 32 && code !== 127) out += value[i];
		}
		return out;
	};
	const normalizeArg = (value) => stripControlChars(value).replace(/^['"]+|['"]+$/g, "").trim();
	const normalizeCandidate = (value) => normalizeArg(value).replace(/^\\\\\\?\\/, "");
	const execPath = normalizeCandidate(process$1.execPath);
	const execPathLower = execPath.toLowerCase();
	const execBase = path.basename(execPath).toLowerCase();
	const isExecPath = (value) => {
		if (!value) return false;
		const normalized = normalizeCandidate(value);
		if (!normalized) return false;
		const lower = normalized.toLowerCase();
		return lower === execPathLower || path.basename(lower) === execBase || lower.endsWith("\\node.exe") || lower.endsWith("/node.exe") || lower.includes("node.exe") || path.basename(lower) === "node.exe" && fs.existsSync(normalized);
	};
	const filtered = argv.filter((arg, index) => index === 0 || !isExecPath(arg));
	if (filtered.length < 3) return filtered;
	const cleaned = [...filtered];
	if (isExecPath(cleaned[1])) cleaned.splice(1, 1);
	if (isExecPath(cleaned[2])) cleaned.splice(2, 1);
	return cleaned;
}

//#endregion
export { runCli };