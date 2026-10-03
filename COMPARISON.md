# Fluent WordPress comparison

Reviewed2026-10-03. Product versions, scopes, modes and permission systems differ.

### Existing official MCPs and CLIs

FluentCRM, Fluent Forms, Fluent Boards, FluentCart and Fluent Support already document official MCP support. These are separate native product connections, not one documented universal server URL. Follow each product's current setup and use only the tools/permissions your installed version exposes. A dedicated official FluentCommunity MCP was not confirmed in the reviewed primary sources.

[FluentCRM MCP](https://docs.fluentcrm.com/mcp-for-ai-agents) and [Fluent Forms MCP](https://fluentforms.com/fluent-forms-mcp-server/) are existing choices. Current Forms free source registers 20 abilities; the launch article describes 20 free and 23 Pro, while three Pro teaser cards in free settings are not registered free abilities. Its preview guards already bind current state, issue single-use tokens expiring after 300 seconds and enforce idempotency/concurrency rules. Our local review hash is not that server-state protection.

[wp fluent_crm](https://developers.fluentcrm.com/cli/) already provides native server-side stats, email sending, commerce sync, automation simulation and license management. [wp fluentform](https://developers.fluentforms.com/cli/) already provides plugin stats and license operations. They run in the site's WP-CLI environment. Our remote Node task CLI calls allowlisted REST routes from your selected local/client runtime; it is not the first Fluent CLI and does not replace WP-CLI's direct database/send/maintenance operations.

### Pinned community implementation

The reviewed [carlosrodera/fluent-mcp-servers](https://github.com/carlosrodera/fluent-mcp-servers/tree/0c28e825938a44eeae0b7f415819e036f923ca43) implements 40 CRM and 30 Community tools. Its dynamic mode exposes search/describe/execute metadata tools per server, an existing approach to selected discovery. A stdio entry point named cli is not a standalone task-command interface. The examined native-write factory does not require our mandatory per-call confirmation; annotations alone do not enforce it. This source was inspected, not executed against a private account.

Counts describe different scopes and modes. The community root documentation includes other products; its broader total does not mean this package covers them. No runtime token percentage or general reliability advantage follows from source inspection.

### Why build this companion

The useful addition is one remote task CLI/local MCP covering selected CRM, Community and Forms work, exact isolated site profiles, shared mandatory approval and direct read-only refusal, reviewed ordered cross-plugin changes and bounded private snapshots. Those behaviors are implemented and fixture-tested. Official product-native breadth, Forms server-state review tokens and community dynamic discovery retain their own advantages.
| Capability | This companion | Existing alternatives |
| --- | --- | --- |
| Remote task commands | 54 shared commands/tools through actual MCP handlers | Official WP-CLI runs in WordPress; reviewed community entry points are stdio servers |
| Native route coverage | 47 selected routes: 17 CRM, 23 Community, 6 Forms, 1 WordPress | Official/community coverage is product-specific; not all routes counted alike |
| Ordered changes | Local preview hash, explicit confirmation, stop on first failure | Official Forms has actual provider-state tokens and idempotency guards |
| Several sites | Independent URL/user/password per exact profile; no global fallback | Reviewed community product configs do not expose the same named-site profiles |
| Private snapshots | 1–20 selected reads, exclusive new file, bounded response sizes | Not a complete backup, migration, atomic database snapshot or native CSV export |
| Context cost | Codex actual task/token measurement pending | Dynamic community discovery already exists; no percentage claimed |

Both surfaces call the same MCP handlers and guard. MCP clients choose their own tool discovery/loading strategy. The CLI supports selected command help/schema and compact results; it also consumes command/help/output/reasoning tokens. Fresh matched successful Codex task/token measurements remain pending. No percentage, character estimate, other-client figure or fixture is represented as a measured Codex saving. Record actual API usage, client/model/version/date, discovery settings, caching, latency, provider calls and equivalent successful outputs before publishing a comparison.
