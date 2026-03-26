export declare function resolveSessionTranscriptsDir(env?: NodeJS.ProcessEnv, homedir?: () => string): string;
export declare function resolveSessionTranscriptsDirForAgent(agentId?: string, env?: NodeJS.ProcessEnv, homedir?: () => string): string;
export declare function resolveDefaultSessionStorePath(agentId?: string): string;
export declare const SAFE_SESSION_ID_RE: RegExp;
export declare function validateSessionId(sessionId: string): string;
export declare function resolveSessionTranscriptPathInDir(sessionId: string, sessionsDir: string, topicId?: string | number): string;
export declare function resolveSessionTranscriptPath(sessionId: string, agentId?: string, topicId?: string | number): string;
export declare function resolveSessionFilePath(sessionId: string, entry?: {
    sessionFile?: string;
}, opts?: {
    agentId?: string;
    sessionsDir?: string;
}): string;
export declare function resolveStorePath(store?: string, opts?: {
    agentId?: string;
}): string;
