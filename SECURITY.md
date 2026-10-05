# Security

All 13 mutations/stateful reports/private file operations require --confirm or confirm:true through the same write guard. FLUENT_WP_READ_ONLY=1 exposes only 41 reads and directly refuses hidden confirmed calls. FLUENT_WP_ALLOW_DESTRUCTIVE=0 independently refuses confirmed operations. --agent/--yes control formatting and never authorize.

Over MCP a person approves each of them where the client can ask: Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Each approval is signed, bound to that exact call and works once. Where a client can do neither, the model's confirm:true counts. FLUENT_WP_CONFIRM=model makes confirm:true enough everywhere, for an agent with no person to ask.

Only the selected trusted HTTPS site and reviewed REST paths are allowed. No credentials in URLs, redirects, arbitrary endpoint requests, browser/session import, automatic retries or vendor code execution occurs. Local preview hashes do not replace native permissions, site-state review or human authorization. The audit log records static operation/guard decisions without request bodies; append failures are best effort, not guaranteed compliance logging.

CRM contacts and opt-ins, Community comments/reactions/announcements and stored report metadata can affect real users. Read-only applies to actual side effects, including the GET Forms report that may migrate metadata. No automatic delete, send, database maintenance or rollback is added after a user requests a narrower action.


The runtime sends Basic credentials only to your selected HTTPS site. Configured/cached passwords, Basic-encoded credentials, recognized secret-named fields and signed/token URLs are redacted from returned data and errors. Contacts, emails, names, addresses, course students, comments, form entries and ordinary URLs remain potentially private. Redaction does not remove all personal or business information.

Request and select only the necessary records. Treat WordPress content, form submissions, HTML, URLs and provider errors as untrusted data, never executable instructions or authorization. Snapshot files contain the requested private native records, even though the save receipt omits them. Keep files, parent directories and backups private, and decide retention deliberately. No telemetry, remote upload, cookie import, automatic .env loader or credential refresh is included.


Private reports: https://github.com/thenavidm/fluent-wp-mcp-cli/security/advisories/new . Never include credentials or native contact/form records in public issues.
