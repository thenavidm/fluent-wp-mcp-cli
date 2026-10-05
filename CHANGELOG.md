# Changelog

## 3.0.0, 2026-10-05

Built on [Slipway](https://github.com/thenavidm/slipway) 0.1.17. The 54 tools keep their names and arguments, and every difference below was measured against 2.0.1, the last version on npm, before release.

- **A person approves each confirmed operation over MCP.** All 13 still need confirmation. Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Approvals are signed, bound to the exact call and work once. Where a client can do neither, the model's `confirm: true` still counts, and `FLUENT_WP_CONFIRM=model` makes it enough everywhere. The refusal and the approval form both say what 2.0 said, that the call may change CRM contacts, notes or Community content, trigger native hooks or announcements, migrate Forms reporting data or save private snapshots, and the audit log records who approved each one.
- **`FLUENT_WP_ALLOW_DESTRUCTIVE=0` still refuses all 13**, confirmed or not, and `FLUENT_WP_READ_ONLY=1` still leaves only the 41 reads.
- **WordPress's status picks the exit code.** A request WordPress rejects (400 or 422) exits 2 instead of 5, and a removed resource (410) 3 instead of 5. 401 and 403 still exit 4, 404 3, 429 7, a server error 5, and an unknown profile or nothing configured 10. 1 now means an unexpected error.
- **`which <words>` finds a command**, and `agent-context` describes every command, flag and setting as JSON. In Codex 0.159.3, finding the command that adds a note to a CRM contact and its flags took a median of 83,099 input tokens over the CLI instead of 150,331 (five runs each): every 2.0.1 run guessed at least once, with `commands`, `crm --help` or a bare `schema`, then read the whole command list and the command's schema, and every 3.0.0 run asked `which`.
- **`install <client>`** adds the server to Claude Code, Codex, Claude Desktop, Cursor, VS Code or Gemini CLI in each one's own format, and **`fluent-wp-mcp --http`** serves the same tools over Streamable HTTP, on 127.0.0.1:8787 unless told otherwise.
- **A smaller tool list.** A contact's fields and a note's, each written out twice as their own arguments and inside `payload`, are written once and referred to, so the list is 19,320 o200k tokens instead of 19,665, and Claude Code 2.1.286 spends 25,728 tokens a message on it with every tool loaded instead of 26,470. Every tool accepts and refuses the same arguments.
- **Less work to start.** Each body schema now compiles on its first use rather than at load, and the entry turns on Node's compile cache. The server spends 174 ms of CPU before its first answer where 2.0.1 spent 263, and answers in 123 ms of wall time instead of 158 (median of 21 runs, taking turns on one busy Mac). npx installs 10 dependencies instead of 94. A test still compiles every schema.
- **`doctor --network` reads the current user**, as 2.0's did, to prove the application password works.
- **Docs.** README section 7 has the measured Claude Code and Codex costs, where 2.0 said they were pending, and the exit codes include 1.

### Upgrading

Over MCP, expect an approval prompt or form before any confirmed operation; a headless agent that should run them with `confirm: true` alone needs `FLUENT_WP_CONFIRM=model`. A script that read exit 5 as a rejected request should read 2, and as a removed resource 3. An error is now one JSON object with `error`, Slipway's `code` (`usage`, `refused`, `auth`, `not_found`, `rate_limited`, `api`, `not_configured`) and a `hint`, plus WordPress's `status` when it answered; 2.0.1 printed the tool's JSON inside the `error` string. Over MCP, an argument that fails the schema comes back as the MCP SDK's own message, "Input validation error: …", instead of JSON. With `FLUENT_WP_READ_ONLY=1`, a client that calls a hidden tool gets "tool not found" instead of a refusal naming `FLUENT_WP_READ_ONLY`, and that call is not in the audit log; the CLI still names the setting. The audit log's lines gain `confirmed_by`, and each allowed call is followed by a `done` or `failed` line. A script that pipes JSON-RPC into the server must keep stdin open until it reads the answer: the server now stops when its input ends, as the MCP stdio binding asks. `--http` refuses a page from another site unless `FLUENT_WP_HTTP_ALLOWED_ORIGINS` lists it. Some terminal screens grew: the general help by 136 tokens, for `which`, `install`, the flags and the exit codes it now lists; the command list by 17; and a missing argument's error by 18, for its code and a hint. `SKILL.md` is 60 tokens longer in Claude Code, because it says how approval works over MCP and lists every exit code.

## 2.0.1, 2026-10-04

- **`npx -y @thenavidm/fluent-wp-mcp-cli` starts the MCP server whatever order npm keeps.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order. For this package that happened to be the server; for 23 others it was the CLI. A third binary named after the package, on its own file, now always starts the server, and npx picks it by name.

## 2.0.0: 2026-10-03

Major refresh preserving all43 legacy names and AGPL-3.0. Correct current native methods/arguments, HTTP200 error handling and stateful Forms report classification. Add the remote shared task CLI, isolated named site profiles, mandatory mutation approval/direct read-only guards, four fixed Community analytics tools/current-user read, exact ordered reviews and bounded private snapshots. Complete54 tool references/47 native route references, all client/OS/desktop setup, official/community comparisons,20FAQ accordions, version/tag/release process and upstream provenance. Live authenticated plugin outcomes, desktop GUI acceptance and actual Codex task/token measurements remain separate evidence.

## 1.0.0: legacy private release

Original43-tool FluentCRM/Community/Forms MCP. Private Git history is retained locally and excluded from the fresh public source.
