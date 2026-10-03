#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`Fluent WordPress MCP and shared remote task CLI ${VERSION}
fluent-wp-mcp                         Local stdio MCP
fluent-wp-cli <command> --help         Actual shared native arguments
fluent-wp-cli schema <command>         Actual JSON input schema
fluent-wp-cli doctor [--network]       Local settings / one explicit current-user read
fluent-wp-cli login                    Private setup instructions only
FLUENT_WP_SITE_URL / FLUENT_WP_USER     Trusted HTTPS site root and WordPress username
FLUENT_WP_APP_PASSWORD / PASSWORD_FILE Private application password or absolute private file
FLUENT_WP_ACCOUNTS                     Named isolated site_url/username/password profiles
FLUENT_WP_DEFAULT_ACCOUNT              Exact selected private site profile
FLUENT_WP_READ_ONLY=1                  Hide and directly refuse mutations/stateful reports/file writes
FLUENT_WP_ALLOW_DESTRUCTIVE=0           Refuse confirmed operations
FLUENT_WP_REQUEST_TIMEOUT_MS           Default30000; no automatic retries
FLUENT_WP_MIN_REQUEST_INTERVAL_MS      Default250; process-wide spacing, not a vendor quota guarantee
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}if(command==='login'){console.log('Sign into the intended HTTPS WordPress site and open Users > Profile > Application Passwords. Create a dedicated named application password for the least-privileged user with the required native Fluent plugin permissions. Configure FLUENT_WP_SITE_URL, FLUENT_WP_USER and either private FLUENT_WP_APP_PASSWORD or an absolute owner-private FLUENT_WP_PASSWORD_FILE. Never use your main login password or place credentials in arguments, prompts, repositories or URLs. Named FLUENT_WP_ACCOUNTS entries require independent site_url/username/app_password or password_file, with no global fallback. Revoke the dedicated Application Password through that same user profile; remove local private settings and restart clients. No WordPress login/OAuth/session import is performed; login prints instructions only. Official plugin MCPs and wp fluent_crm/wp fluentform CLIs are separate options.');return;}if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}if(args.length||basename(process.argv[1]??'').startsWith('fluent-wp-cli')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>void server.close().then(()=>process.exit(0)));}
main().catch(e=>{console.error(JSON.stringify({error:e.message}));process.exitCode=exitCodeFor(e.message);});
