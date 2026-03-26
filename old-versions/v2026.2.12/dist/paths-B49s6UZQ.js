import { _ as expandHomePrefix, g as resolveStateDir, y as resolveRequiredHomeDir } from "./paths-DVBShlw6.js";
import { l as normalizeAgentId, n as DEFAULT_AGENT_ID } from "./session-key-BWxPj0z_.js";
import os from "node:os";
import path from "node:path";

//#region src/config/sessions/paths.ts
function resolveAgentSessionsDir(agentId, env = process.env, homedir = () => resolveRequiredHomeDir(env, os.homedir)) {
	const root = resolveStateDir(env, homedir);
	const id = normalizeAgentId(agentId ?? DEFAULT_AGENT_ID);
	return path.join(root, "agents", id, "sessions");
}
function resolveSessionTranscriptsDir(env = process.env, homedir = () => resolveRequiredHomeDir(env, os.homedir)) {
	return resolveAgentSessionsDir(DEFAULT_AGENT_ID, env, homedir);
}
function resolveSessionTranscriptsDirForAgent(agentId, env = process.env, homedir = () => resolveRequiredHomeDir(env, os.homedir)) {
	return resolveAgentSessionsDir(agentId, env, homedir);
}
function resolveDefaultSessionStorePath(agentId) {
	return path.join(resolveAgentSessionsDir(agentId), "sessions.json");
}
const SAFE_SESSION_ID_RE = /^[a-z0-9][a-z0-9._-]{0,127}$/i;
function validateSessionId(sessionId) {
	const trimmed = sessionId.trim();
	if (!SAFE_SESSION_ID_RE.test(trimmed)) throw new Error(`Invalid session ID: ${sessionId}`);
	return trimmed;
}
function resolveSessionsDir(opts) {
	const sessionsDir = opts?.sessionsDir?.trim();
	if (sessionsDir) return path.resolve(sessionsDir);
	return resolveAgentSessionsDir(opts?.agentId);
}
function resolvePathWithinSessionsDir(sessionsDir, candidate) {
	const trimmed = candidate.trim();
	if (!trimmed) throw new Error("Session file path must not be empty");
	const resolvedBase = path.resolve(sessionsDir);
	const resolvedCandidate = path.resolve(resolvedBase, trimmed);
	const relative = path.relative(resolvedBase, resolvedCandidate);
	if (relative.startsWith("..") || path.isAbsolute(relative)) throw new Error("Session file path must be within sessions directory");
	return resolvedCandidate;
}
function resolveSessionTranscriptPathInDir(sessionId, sessionsDir, topicId) {
	const safeSessionId = validateSessionId(sessionId);
	const safeTopicId = typeof topicId === "string" ? encodeURIComponent(topicId) : typeof topicId === "number" ? String(topicId) : void 0;
	return resolvePathWithinSessionsDir(sessionsDir, safeTopicId !== void 0 ? `${safeSessionId}-topic-${safeTopicId}.jsonl` : `${safeSessionId}.jsonl`);
}
function resolveSessionTranscriptPath(sessionId, agentId, topicId) {
	return resolveSessionTranscriptPathInDir(sessionId, resolveAgentSessionsDir(agentId), topicId);
}
function resolveSessionFilePath(sessionId, entry, opts) {
	const sessionsDir = resolveSessionsDir(opts);
	const candidate = entry?.sessionFile?.trim();
	if (candidate) return resolvePathWithinSessionsDir(sessionsDir, candidate);
	return resolveSessionTranscriptPathInDir(sessionId, sessionsDir);
}
function resolveStorePath(store, opts) {
	const agentId = normalizeAgentId(opts?.agentId ?? DEFAULT_AGENT_ID);
	if (!store) return resolveDefaultSessionStorePath(agentId);
	if (store.includes("{agentId}")) {
		const expanded = store.replaceAll("{agentId}", agentId);
		if (expanded.startsWith("~")) return path.resolve(expandHomePrefix(expanded, {
			home: resolveRequiredHomeDir(process.env, os.homedir),
			env: process.env,
			homedir: os.homedir
		}));
		return path.resolve(expanded);
	}
	if (store.startsWith("~")) return path.resolve(expandHomePrefix(store, {
		home: resolveRequiredHomeDir(process.env, os.homedir),
		env: process.env,
		homedir: os.homedir
	}));
	return path.resolve(store);
}

//#endregion
export { resolveSessionTranscriptsDir as a, resolveSessionTranscriptPathInDir as i, resolveSessionFilePath as n, resolveSessionTranscriptsDirForAgent as o, resolveSessionTranscriptPath as r, resolveStorePath as s, resolveDefaultSessionStorePath as t };