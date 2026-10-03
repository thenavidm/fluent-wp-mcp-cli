<img src="https://cdn.navid.me/tools/wordpress-icon.jpg" alt="Fluent WordPress" width="88">

# Fluent WordPress MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/fluent-wp-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/fluent-wp-mcp-cli)
[![CI](https://github.com/thenavidm/fluent-wp-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/fluent-wp-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

Fluent WordPress MCP server and CLI for Codex and AI agents. 54 shared tools for current FluentCRM, FluentCommunity and Fluent Forms, isolated private sites, reviewed cross-plugin tasks and bounded snapshots.

One package provides a task CLI, local stdio MCP and versioned desktop bundle. Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=fluent-wp-mcp-cli&utm_content=readme). Complete setup: [navid.me](https://navid.me/mcp-servers/fluent-wp?utm_source=github&utm_medium=referral&utm_campaign=fluent-wp-mcp-cli&utm_content=guide).

<img src="https://cdn.navid.me/repos/fluent-wp-mcp-cli-retina.gif" alt="Illustrated Fluent WordPress workflow using the shared navid.me terminal" width="520">

The terminal illustrates actual commands, not a recorded provider account session. Node 22+ is required for manual installs; private WordPress authentication, installed plugin versions and native user permissions remain separate.

## Two ways to use it

### Command line

A shell or terminal agent runs only the requested task through the shared handlers.

```bash
npx -y --package @thenavidm/fluent-wp-mcp-cli@latest fluent-wp-cli list-accounts --agent
```

### MCP server, for your AI app

Register the local stdio package after privately configuring your intended site and user.

```bash
codex mcp add fluent-wp -- npx -y @thenavidm/fluent-wp-mcp-cli@latest
```

### Which one

Use task-specific CLI help/compact output for scripts and shell agents, or local MCP for structured AI tool access. Both enforce the same native handlers and guard. Complete client setup is in [INSTALL.md](INSTALL.md).

## Features

| Capability | CLI command | MCP tool |
| --- | --- | --- |
| fcrm list contacts | `fluent-wp-cli fcrm-list-contacts` | `fcrm_list_contacts` |
| fcrm update contact | `fluent-wp-cli fcrm-update-contact` | `fcrm_update_contact` |
| fcrm list campaigns | `fluent-wp-cli fcrm-list-campaigns` | `fcrm_list_campaigns` |
| fc list spaces | `fluent-wp-cli fc-list-spaces` | `fc_list_spaces` |
| fc create feed | `fluent-wp-cli fc-create-feed` | `fc_create_feed` |
| fc create comment | `fluent-wp-cli fc-create-comment` | `fc_create_comment` |
| ff list submissions | `fluent-wp-cli ff-list-submissions` | `ff_list_submissions` |
| ff form stats | `fluent-wp-cli ff-form-stats` | `ff_form_stats` |
| List configured sites | `fluent-wp-cli list-accounts` | `list_accounts` |
| Read one native Community member report | `fluent-wp-cli fc-analytics-overview` | `fc_analytics_overview` |
| Review exact ordered cross-plugin tasks | `fluent-wp-cli preview-site-batch` | `preview_site_batch` |
| Execute reviewed cross-plugin tasks | `fluent-wp-cli submit-site-batch` | `submit_site_batch` |
| Save bounded cross-plugin responses privately | `fluent-wp-cli save-site-snapshot` | `save_site_snapshot` |

## Contents

| Number | Section | What it covers |
| --- | --- | --- |
| 1 | [What you can ask it](#1-what-you-can-ask-it) | What you can ask it |
| 2 | [Quick install](#2-quick-install) | Quick install |
| 3 | [Set up Fluent WordPress access](#3-set-up-fluent-wordpress-access) | Set up Fluent WordPress access |
| 4 | [Connect your client](#4-connect-your-client) | Connect your client |
| 5 | [Check it works](#5-check-it-works) | Check it works |
| 6 | [Output, flags and exit codes](#6-output-flags-and-exit-codes) | Output, flags and exit codes |
| 7 | [MCP or CLI and token cost](#7-mcp-or-cli-and-token-cost) | MCP or CLI and token cost |
| 8 | [Every tool and argument](#8-every-tool-and-argument) | Every tool and argument |
| 9 | [CRM, Community and Forms workflows](#9-crm-community-and-forms-workflows) | CRM, Community and Forms workflows |
| 10 | [Exact reviewed batches and snapshots](#10-exact-reviewed-batches-and-snapshots) | Exact reviewed batches and snapshots |
| 11 | [Several private sites](#11-several-private-sites) | Several private sites |
| 12 | [Writing safely](#12-writing-safely) | Writing safely |
| 13 | [How the two surfaces work](#13-how-the-two-surfaces-work) | How the two surfaces work |
| 14 | [Your data](#14-your-data) | Your data |
| 15 | [Environment variables](#15-environment-variables) | Environment variables |
| 16 | [Updates and removal](#16-updates-and-removal) | Updates and removal |
| 17 | [Troubleshooting](#17-troubleshooting) | Troubleshooting |
| 18 | [API coverage and comparisons](#18-api-coverage-and-comparisons) | API coverage and comparisons |
| 19 | [Versions and migration](#19-versions-and-migration) | Versions and migration |
| 20 | [FAQ](#20-faq) | FAQ |

## 1. What you can ask it

Read selected CRM contacts, campaigns and automations; inspect Community spaces, feeds, comments, courses and member analytics; read Forms definitions/submissions/stats; apply exactly approved native changes and save requested private snapshots. Actual shared discovery exposes **54 tools: 41 reads and 13 confirmed operations**. The 47 selected native routes and seven local/selector/workflow helpers retain all43 legacy names with documented native corrections.

## 2. Quick install

```bash
npm install -g @thenavidm/fluent-wp-mcp-cli@latest
fluent-wp-cli --version
fluent-wp-cli tools
fluent-wp-cli login
```

Node22+ for manual installation. [INSTALL.md](INSTALL.md) includes Codex, every declared client/OS and the versioned [desktop bundle](https://github.com/thenavidm/fluent-wp-mcp-cli/releases/download/v2.0.0/fluent-wp-2.0.0.mcpb).

## 3. Set up Fluent WordPress access

### Create a dedicated WordPress Application Password

1. Sign into the intended HTTPS WordPress site. Confirm the site and user before connecting any client. Use a dedicated user with the native Fluent permissions needed for your requested work.
2. Open **Users > Profile > Application Passwords**. Give this connection a descriptive name, create an Application Password and save it privately. This is a separate credential, not your main WordPress login password. If the section is unavailable, check HTTPS, WordPress version, hosting/security policy and the user's capabilities with your site administrator.
3. Configure **FLUENT_WP_SITE_URL**, **FLUENT_WP_USER** and either **FLUENT_WP_APP_PASSWORD** or **FLUENT_WP_PASSWORD_FILE**. Use the HTTPS site root, optionally its WordPress install subdirectory. Do not append wp-json, put a password in the URL, or include a query/fragment. No redirects or HTTP fallback are followed.
4. Keep secrets in private client settings or a token-only file outside repositories. Password files must be absolute regular non-symlink files, at most 64 KiB. On macOS/Linux, use an owner-private 0600 file and private parent directory. On Windows, restrict the file and parent directory ACLs separately; POSIX modes do not prove Windows privacy.
5. Run **fluent-wp-cli doctor** for local configuration, then deliberately run **doctor --network** for one GET /wp/v2/users/me with context=view. Its output reports a positive user ID only. This verifies one authenticated WordPress read, not site ownership, all plugin permissions, Pro eligibility or a successful mutation.

WordPress [Application Password authentication](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/) uses HTTP Basic with username:applicationPassword over HTTPS. The client constructs the header; do not supply a Bearer token or import browser cookies. The package does not log into WordPress, load .env files, create an Application Password, or enable plugins for you.

### Plugins, permissions and costs

Install and activate the specific FluentCRM, FluentCommunity and Fluent Forms plugins you intend to use. A site's installed plugin versions and native user capabilities determine its routes and output. Discovery exposes the packaged catalogue before authentication; it does not prove every plugin is present. The package is free under AGPL-3.0. Hosting, paid Pro features, plugin licenses and email delivery services remain separate.

CRM contact/tag/list changes and double opt-in may trigger actual emails or automations. Community announcements, comments and reactions can notify real members. Native Forms reports can update stored metadata. Do not create a contact, publish a feed, or run a stateful report merely to test setup.

The source review covers CRM v2, Community v2 and Forms v1, with Forms plugin source 6.2.14 pinned in provenance. This is a reviewed subset of 47 routes, not every Fluent API. Community analytics/admin course routes require their native permissions and may require Pro. Read native permission notes and inspect your installed versions before account work.

### Several isolated sites

FLUENT_WP_ACCOUNTS is a private JSON array of unique {name,site_url,username,app_password,password_file} entries. Choose one password method per profile. Each site requires its own URL, user and credential; a selected profile never falls back to global settings or another site after a missing password or 401/403. FLUENT_WP_DEFAULT_ACCOUNT and --account select an exact label.

list_accounts returns labels, the default and credential source only. It does not reveal site URLs, usernames, password paths or credentials, make requests, or prove provider ownership. Password files are cached until restart. Review hashes bind the selected label, normalized site URL, username, ordered inputs/requests and packaged schema; they do not bind a password fingerprint or validate server state.

### Native and local limits

There is no universal vendor quota advertised here. The process spaces requests by 250 ms by default, with a 30-second timeout; hosting, security plugins and other clients can impose different limits. Local pacing is not shared quota enforcement. Requests cap JSON bodies at 1 MiB and responses at 5 MiB. No automatic retries, redirect following, polling or page walking occurs.

Native paginated operations accept only their actual arguments. Where page/per_page are exposed, this wrapper bounds them to 10000/100 locally; this is not a universal provider maximum. Course students and space members do not acquire invented pagination flags. Forms single-entry reads that mark entries as read are intentionally outside this subset.

### Revoke and remove

Revoke the dedicated Application Password through the intended WordPress user's Profile. Replace or remove private client/file settings, then restart all server processes. Official plugin MCP credentials and WP-CLI access are separate connections. Uninstalling this package does not undo contact edits, messages, announcements, report migrations or saved private snapshots.


## 4. Connect your client

[INSTALL.md](INSTALL.md) covers Codex first, Claude Code, Claude Desktop bundle/manual config, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Cline, Docker and other local stdio clients on macOS/Windows/Linux. Codex requires no Claude Code installation. GUI/remote runtimes need their own private URL/user/password settings and accessible files. This package supplies local stdio, not a public HTTP connector.

```bash
codex mcp add fluent-wp -- npx -y @thenavidm/fluent-wp-mcp-cli@latest
codex mcp list
```

## 5. Check it works

```bash
fluent-wp-cli --version
fluent-wp-cli tools
fluent-wp-cli list-accounts --agent
fluent-wp-cli doctor
fluent-wp-cli doctor --network
fluent-wp-cli fcrm-list-contacts --per-page 1 --agent --select data.id
```

Credential-free discovery, native request fixtures and direct full/read-only guard checks are separate from actual provider validation. A positive current-user read establishes neither ownership nor every Fluent permission. Authenticated plugin outcomes, desktop GUI installation and matched successful Codex task/token results remain unverified until independently exercised.

## 6. Output, flags and exit codes

Native JSON is preserved after recognized credential redaction; ordinary records remain private. --select keeps only requested output fields. Repeated primitive array flags serialize to native PHP [] query fields. Nested subscriber/note objects use JSON values, and --payload or a private absolute --payload-file provides a complete native body. Do not mix body flags with payload/payload_file. A 202 means acceptance, not completed downstream work. HTTP200 JSON success:false/status:false/native error objects refuse.

| Flag | Behavior |
| --- | --- |
| --agent | Compact JSON/no prompts/color; never approval |
| --confirm | Explicit approval for exactly requested confirmed work |
| --account LABEL | Exact private site profile |
| --select a,b.c | Filter returned fields locally |
| --payload / --payload-file | Whole native body, exclusive with flat body flags/each other |
| --tasks JSON | Repeat one task object per flag |
| --review-sha256 HASH | Exact unchanged local preview hash |
| --output-file PATH | Exclusive new private snapshot file |

| Exit | Meaning |
| --- | --- |
| 0 | Native response/receipt returned; inspect status and downstream effects |
| 2 | Usage, schema or refused/unapproved operation |
| 3 | Not found |
| 4 | Authentication/permissions |
| 5 | API/network or unknown mutation outcome |
| 7 | Rate limited |
| 10 | Missing or invalid private configuration |

## 7. MCP or CLI and token cost

Both surfaces call the same MCP handlers and guard. MCP clients choose their own tool discovery/loading strategy. The CLI supports selected command help/schema and compact results; it also consumes command/help/output/reasoning tokens. Fresh matched successful Codex task/token measurements remain pending. No percentage, character estimate, other-client figure or fixture is represented as a measured Codex saving. Record actual API usage, client/model/version/date, discovery settings, caching, latency, provider calls and equivalent successful outputs before publishing a comparison.

## 8. Every tool and argument

#### `fcrm_dashboard_stats`

Retrieve overall dashboard statistics including active contacts count, campaigns count, emails sent, active automations, onboarding progress, quick links, recent contacts, recent campaigns, active automations list, and system recommendations.



**Required capability:** `fcrm_view_dashboard`

_Enforced by `ReportPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-dashboard-stats --help
fluent-wp-cli schema fcrm-dashboard-stats
```

#### `fcrm_list_contacts`

Retrieve a paginated list of contacts. Supports both simple filtering (by tags, lists, statuses) and advanced filtering with complex filter groups. Optionally includes custom field values.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `filter_type` | Optional; native body and guard rules still apply | string | Type of filtering to apply. enum: ["simple", "advanced"]. default: "simple". |
| `search` | Optional; native body and guard rules still apply | string | Search contacts by name, email, or other searchable fields. |
| `sort_by` | Optional; native body and guard rules still apply | string | Column to sort by. default: "id". |
| `sort_type` | Optional; native body and guard rules still apply | string | Sort direction. enum: ["ASC", "DESC"]. default: "DESC". |
| `has_commerce` | Optional; native body and guard rules still apply | string | Filter by commerce integration availability. |
| `custom_fields` | Optional; native body and guard rules still apply | string | Set to `true` to include custom field values in the response. enum: ["true", "false"]. |
| `tags` | Optional; native body and guard rules still apply | array | Filter by tag IDs (simple filter mode only). |
| `tags[]` | Per item when supplied | integer | Array item schema. |
| `statuses` | Optional; native body and guard rules still apply | array | Filter by contact statuses (simple filter mode only). |
| `statuses[]` | Per item when supplied | string | Array item schema. Enum: ["subscribed", "pending", "unsubscribed", "bounced", "complained"] |
| `sms_statuses` | Optional; native body and guard rules still apply | array | Filter by SMS statuses (simple filter mode only). |
| `sms_statuses[]` | Per item when supplied | string | Array item schema. Enum: ["sms_subscribed", "sms_unsubscribed", "sms_pending", "sms_bounced"] |
| `lists` | Optional; native body and guard rules still apply | array | Filter by list IDs (simple filter mode only). |
| `lists[]` | Per item when supplied | integer | Array item schema. |
| `company_ids` | Optional; native body and guard rules still apply | array | Filter by company IDs. |
| `company_ids[]` | Per item when supplied | integer | Array item schema. |
| `advanced_filters` | Optional; native body and guard rules still apply | string | JSON-encoded advanced filter groups (advanced filter mode only). |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of contacts per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number for pagination. default: 1. minimum: 1. maximum: 10000. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-list-contacts --help
fluent-wp-cli schema fcrm-list-contacts
```

#### `fcrm_get_contact`

Retrieve a single contact by ID or email. Supports eager-loading related data like stats, custom values, custom field definitions, and commerce stats via the `with[]` parameter.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The contact ID. minimum: 1. |
| `get_by_email` | Optional; native body and guard rules still apply | string | If set, looks up the contact by email address instead of the path `id`. format: "email". |
| `with` | Optional; native body and guard rules still apply | array | Relationships and extra data to include. Supported values: `stats`, `subscriber.custom_values`, `custom_fields`, `commerce_stat`. |
| `with[]` | Per item when supplied | string | Array item schema. Enum: ["stats", "subscriber.custom_values", "custom_fields", "commerce_stat"] |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-get-contact --help
fluent-wp-cli schema fcrm-get-contact
```

#### `fcrm_search_contacts`

Search contacts by name or email. Returns a lightweight object of contacts keyed by ID, suitable for dropdowns and autocomplete widgets. Optionally loads default contacts when no search term is provided.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `search` | Optional; native body and guard rules still apply | string | Search term to match against contact name and email. |
| `limit` | Optional; native body and guard rules still apply | integer | Maximum number of results to return. default: 20. minimum: 1. maximum: 100. |
| `load_default` | Optional; native body and guard rules still apply | string | If truthy and no search term is provided, returns the most recent contacts. enum: ["true", "false", "1", "0", "yes"]. |
| `values` | Optional; native body and guard rules still apply | array | Array of contact IDs to always include in results (useful for pre-selected values). |
| `values[]` | Per item when supplied | integer | Array item schema. |
| `offset` | Optional; native body and guard rules still apply | integer | Rows to skip before the first result. Combine with `limit` to page through matches. default: 0. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-search-contacts --help
fluent-wp-cli schema fcrm-search-contacts
```

#### `fcrm_create_contact`

Create a new contact. If `__force_update` is set to `yes`, it will update an existing contact with the same email instead of returning an error. Optionally sends a double opt-in email.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._ Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | Optional; native body and guard rules still apply | string | Contact email address. Must be unique unless `__force_update` is `yes`. format: "email". |
| `status` | Optional; native body and guard rules still apply | string | Contact subscription status. enum: ["subscribed", "pending", "unsubscribed", "bounced", "complained"]. |
| `first_name` | Optional; native body and guard rules still apply | string | First name. |
| `last_name` | Optional; native body and guard rules still apply | string | Last name. |
| `prefix` | Optional; native body and guard rules still apply | string | Name prefix (e.g., Mr, Mrs, Ms). |
| `contact_type` | Optional; native body and guard rules still apply | string | Contact type. enum: ["lead", "customer"]. |
| `address_line_1` | Optional; native body and guard rules still apply | string | Address line 1. |
| `address_line_2` | Optional; native body and guard rules still apply | string | Address line 2. |
| `postal_code` | Optional; native body and guard rules still apply | string | Postal/zip code. |
| `city` | Optional; native body and guard rules still apply | string | City. |
| `state` | Optional; native body and guard rules still apply | string | State or province. |
| `country` | Optional; native body and guard rules still apply | string | Two-letter country code. |
| `phone` | Optional; native body and guard rules still apply | string | Phone number. |
| `timezone` | Optional; native body and guard rules still apply | string | Timezone identifier. |
| `date_of_birth` | Optional; native body and guard rules still apply | string | Date of birth (YYYY-MM-DD). |
| `source` | Optional; native body and guard rules still apply | string | Contact source. |
| `tags` | Optional; native body and guard rules still apply | array | Tag IDs to assign. |
| `tags[]` | Per item when supplied | integer | Array item schema. |
| `lists` | Optional; native body and guard rules still apply | array | List IDs to assign. |
| `lists[]` | Per item when supplied | integer | Array item schema. |
| `double_optin` | Optional; native body and guard rules still apply | boolean | Send double opt-in confirmation email. |
| `__force_update` | Optional; native body and guard rules still apply | string | If `yes`, updates existing contact with the same email instead of failing. enum: ["yes", "no"]. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. required: ["email", "status"]. |
| `payload.email` | Yes | string | Contact email address. Must be unique unless `__force_update` is `yes`. format: "email". |
| `payload.status` | Yes | string | Contact subscription status. enum: ["subscribed", "pending", "unsubscribed", "bounced", "complained"]. |
| `payload.first_name` | Optional; native body and guard rules still apply | string | First name. |
| `payload.last_name` | Optional; native body and guard rules still apply | string | Last name. |
| `payload.prefix` | Optional; native body and guard rules still apply | string | Name prefix (e.g., Mr, Mrs, Ms). |
| `payload.contact_type` | Optional; native body and guard rules still apply | string | Contact type. enum: ["lead", "customer"]. |
| `payload.address_line_1` | Optional; native body and guard rules still apply | string | Address line 1. |
| `payload.address_line_2` | Optional; native body and guard rules still apply | string | Address line 2. |
| `payload.postal_code` | Optional; native body and guard rules still apply | string | Postal/zip code. |
| `payload.city` | Optional; native body and guard rules still apply | string | City. |
| `payload.state` | Optional; native body and guard rules still apply | string | State or province. |
| `payload.country` | Optional; native body and guard rules still apply | string | Two-letter country code. |
| `payload.phone` | Optional; native body and guard rules still apply | string | Phone number. |
| `payload.timezone` | Optional; native body and guard rules still apply | string | Timezone identifier. |
| `payload.date_of_birth` | Optional; native body and guard rules still apply | string | Date of birth (YYYY-MM-DD). |
| `payload.source` | Optional; native body and guard rules still apply | string | Contact source. |
| `payload.tags` | Optional; native body and guard rules still apply | array | Tag IDs to assign. |
| `payload.tags[]` | Per item when supplied | integer | Array item schema. |
| `payload.lists` | Optional; native body and guard rules still apply | array | List IDs to assign. |
| `payload.lists[]` | Per item when supplied | integer | Array item schema. |
| `payload.double_optin` | Optional; native body and guard rules still apply | boolean | Send double opt-in confirmation email. |
| `payload.__force_update` | Optional; native body and guard rules still apply | string | If `yes`, updates existing contact with the same email instead of failing. enum: ["yes", "no"]. |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fcrm-create-contact --help
fluent-wp-cli schema fcrm-create-contact
```

#### `fcrm_update_contact`

Update an existing contact's fields, custom values, tags, and lists. Supports attaching and detaching tags/lists in a single request. The `subscriber` object or individual fields can be passed in the request body.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._ Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The contact ID. minimum: 1. |
| `subscriber` | Optional; native body and guard rules still apply | object | Contact data can be nested inside a `subscriber` object or passed at the top level. minProperties: 1. additionalProperties: false. |
| `subscriber.email` | Optional; native body and guard rules still apply | string | Email address (must be unique). format: "email". |
| `subscriber.first_name` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.last_name` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.prefix` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.status` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["subscribed", "pending", "unsubscribed", "bounced", "complained"]. |
| `subscriber.contact_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["lead", "customer"]. |
| `subscriber.address_line_1` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.address_line_2` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.postal_code` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.city` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.state` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.country` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.phone` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.timezone` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.date_of_birth` | Optional; native body and guard rules still apply | ['string', 'null'] | Date of birth (YYYY-MM-DD). Send null or empty string to clear. |
| `subscriber.source` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.custom_values` | Optional; native body and guard rules still apply | object | Custom field key-value pairs to update. additionalProperties: {"type": "string"}. |
| `subscriber.attach_tags` | Optional; native body and guard rules still apply | array | Tag IDs to attach. |
| `subscriber.attach_tags[]` | Per item when supplied | integer | Array item schema. |
| `subscriber.detach_tags` | Optional; native body and guard rules still apply | array | Tag IDs to detach. |
| `subscriber.detach_tags[]` | Per item when supplied | integer | Array item schema. |
| `subscriber.attach_lists` | Optional; native body and guard rules still apply | array | List IDs to attach. |
| `subscriber.attach_lists[]` | Per item when supplied | integer | Array item schema. |
| `subscriber.detach_lists` | Optional; native body and guard rules still apply | array | List IDs to detach. |
| `subscriber.detach_lists[]` | Per item when supplied | integer | Array item schema. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. required: ["subscriber"]. |
| `payload.subscriber` | Yes | object | Contact data can be nested inside a `subscriber` object or passed at the top level. minProperties: 1. additionalProperties: false. |
| `payload.subscriber.email` | Optional; native body and guard rules still apply | string | Email address (must be unique). format: "email". |
| `payload.subscriber.first_name` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.last_name` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.prefix` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.status` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["subscribed", "pending", "unsubscribed", "bounced", "complained"]. |
| `payload.subscriber.contact_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["lead", "customer"]. |
| `payload.subscriber.address_line_1` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.address_line_2` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.postal_code` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.city` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.state` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.country` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.phone` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.timezone` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.date_of_birth` | Optional; native body and guard rules still apply | ['string', 'null'] | Date of birth (YYYY-MM-DD). Send null or empty string to clear. |
| `payload.subscriber.source` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.subscriber.custom_values` | Optional; native body and guard rules still apply | object | Custom field key-value pairs to update. additionalProperties: {"type": "string"}. |
| `payload.subscriber.attach_tags` | Optional; native body and guard rules still apply | array | Tag IDs to attach. |
| `payload.subscriber.attach_tags[]` | Per item when supplied | integer | Array item schema. |
| `payload.subscriber.detach_tags` | Optional; native body and guard rules still apply | array | Tag IDs to detach. |
| `payload.subscriber.detach_tags[]` | Per item when supplied | integer | Array item schema. |
| `payload.subscriber.attach_lists` | Optional; native body and guard rules still apply | array | List IDs to attach. |
| `payload.subscriber.attach_lists[]` | Per item when supplied | integer | Array item schema. |
| `payload.subscriber.detach_lists` | Optional; native body and guard rules still apply | array | List IDs to detach. |
| `payload.subscriber.detach_lists[]` | Per item when supplied | integer | Array item schema. |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fcrm-update-contact --help
fluent-wp-cli schema fcrm-update-contact
```

#### `fcrm_contact_notes`

Retrieve a paginated list of notes for a contact. Supports searching notes by title. Each note includes the user who created it.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The contact ID. minimum: 1. |
| `search` | Optional; native body and guard rules still apply | string | Search notes by title. |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of notes per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number. default: 1. minimum: 1. maximum: 10000. |
| `include_id` | Optional; native body and guard rules still apply | integer | Id of a note that must appear in the response even when it falls outside the current page. When it is not already on the page it is returned separately as `included_note`, scoped to this contact. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-contact-notes --help
fluent-wp-cli schema fcrm-contact-notes
```

#### `fcrm_add_contact_note`

Add a new note to a contact. The note description supports SmartCode/merge tags which are parsed before saving. If `created_at` is not provided, it defaults to the current WordPress time.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._ Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The contact ID. minimum: 1. |
| `note` | Optional; native body and guard rules still apply | object | Actual shared argument definition. required: ["title", "description", "type"]. |
| `note.title` | Yes | string | Note title. |
| `note.description` | Yes | string | Note content (HTML). Supports SmartCode/merge tags. |
| `note.type` | Yes | string | Note type. enum: ["note", "call", "email", "meeting", "activity"]. |
| `note.created_at` | Optional; native body and guard rules still apply | string | Custom creation date. Defaults to current time if not provided. format: "date-time". |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. required: ["note"]. |
| `payload.note` | Yes | object | Actual shared argument definition. required: ["title", "description", "type"]. |
| `payload.note.title` | Yes | string | Note title. |
| `payload.note.description` | Yes | string | Note content (HTML). Supports SmartCode/merge tags. |
| `payload.note.type` | Yes | string | Note type. enum: ["note", "call", "email", "meeting", "activity"]. |
| `payload.note.created_at` | Optional; native body and guard rules still apply | string | Custom creation date. Defaults to current time if not provided. format: "date-time". |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fcrm-add-contact-note --help
fluent-wp-cli schema fcrm-add-contact-note
```

#### `fcrm_list_tags`

Retrieve a paginated list of tags. Optionally includes subscriber counts and a separate array of all tags for dropdown/select usage.



**Required capability:** `fcrm_manage_contact_cats`

_Enforced by `TagPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `search` | Optional; native body and guard rules still apply | string | Search tags by title, slug, or description. |
| `sort_by` | Optional; native body and guard rules still apply | string | Column to sort by. enum: ["id", "title", "slug", "created_at"]. default: "id". |
| `sort_order` | Optional; native body and guard rules still apply | string | Sort direction. enum: ["ASC", "DESC"]. default: "DESC". |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of tags per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number for pagination. default: 1. minimum: 1. maximum: 10000. |
| `exclude_counts` | Optional; native body and guard rules still apply | boolean | If set to any truthy value, subscriber counts will not be included for each tag. |
| `all_tags` | Optional; native body and guard rules still apply | boolean | If set to any truthy value, includes a flat `all_tags` array with id, title, and slug of every tag (useful for dropdowns). |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-list-tags --help
fluent-wp-cli schema fcrm-list-tags
```

#### `fcrm_list_lists`

Retrieve a paginated list of contact lists. Optionally includes subscriber counts and a separate array of all lists for dropdown/select usage.



**Required capability:** `fcrm_manage_contact_cats`

_Enforced by `ListPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `search` | Optional; native body and guard rules still apply | string | Search lists by title, slug, or description. |
| `sort_by` | Optional; native body and guard rules still apply | string | Column to sort by. enum: ["id", "title", "slug", "created_at"]. default: "id". |
| `sort_order` | Optional; native body and guard rules still apply | string | Sort direction. enum: ["ASC", "DESC"]. default: "DESC". |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of lists per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number for pagination. default: 1. minimum: 1. maximum: 10000. |
| `exclude_counts` | Optional; native body and guard rules still apply | boolean | If set to any truthy value, `totalCount` and `subscribersCount` will not be included for each list. |
| `all_lists` | Optional; native body and guard rules still apply | boolean | If set to any truthy value, includes a flat `all_lists` array with id, title, and slug of every list (useful for dropdowns). |
| `with` | Optional; native body and guard rules still apply | array | Extra data to include. `subscribersCount` adds per-list contact counts via one grouped pivot query. |
| `with[]` | Per item when supplied | string | Array item schema. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-list-lists --help
fluent-wp-cli schema fcrm-list-lists
```

#### `fcrm_list_campaigns`

Retrieve a paginated list of email campaigns. Supports filtering by status, search term, labels, and sorting. Optionally includes campaign statistics.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `CampaignPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `searchBy` | Optional; native body and guard rules still apply | string | Search campaigns by title. |
| `statuses` | Optional; native body and guard rules still apply | array | Filter by campaign statuses. |
| `statuses[]` | Per item when supplied | string | Array item schema. Enum: ["draft", "processing", "pending-scheduled", "scheduled", "working", "paused", "archived"] |
| `sort_by` | Optional; native body and guard rules still apply | string | Column to sort by. default: "created_at". |
| `sort_type` | Optional; native body and guard rules still apply | string | Sort direction. enum: ["ASC", "DESC"]. default: "DESC". |
| `with` | Optional; native body and guard rules still apply | array | Include related data. Use `stats` to include campaign statistics and labels. |
| `with[]` | Per item when supplied | string | Array item schema. Enum: ["stats"] |
| `labels` | Optional; native body and guard rules still apply | array | Filter by label IDs. |
| `labels[]` | Per item when supplied | integer | Array item schema. |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of results per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number. default: 1. minimum: 1. maximum: 10000. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-list-campaigns --help
fluent-wp-cli schema fcrm-list-campaigns
```

#### `fcrm_get_campaign`

Retrieve a single campaign by ID. Optionally include related data (template, subjects) via the `with` parameter. When `viewCampaign` is set, returns the campaign with its paginated emails. Also returns available email templates and the server's current time.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `CampaignPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The campaign ID. minimum: 1. |
| `with` | Optional; native body and guard rules still apply | array | Include related data (e.g., `template`, `subjects`). |
| `with[]` | Per item when supplied | string | Array item schema. |
| `viewCampaign` | Optional; native body and guard rules still apply | string | If set, returns the campaign with paginated emails instead of the standard response. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-get-campaign --help
fluent-wp-cli schema fcrm-get-campaign
```

#### `fcrm_campaign_stats`

Get overview statistics for a campaign including sent count, email status breakdown, and open/click analytics. This is a lighter-weight alternative to the full campaign status endpoint, suitable for dashboard widgets or summary views.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `CampaignPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The campaign ID. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-campaign-stats --help
fluent-wp-cli schema fcrm-campaign-stats
```

#### `fcrm_list_sequences`

Retrieve a paginated list of email sequences. Optionally include statistics (email count, subscriber count, revenue) for each sequence. Requires FluentCampaign Pro.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `SequencePolicy::verifyRequest()`, the policy default for this route group._

**Requires:** FluentCampaign Pro. Without it the route does not exist.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `order` | Optional; native body and guard rules still apply | string | Sort direction. enum: ["asc", "desc"]. default: "desc". |
| `orderBy` | Optional; native body and guard rules still apply | string | Column to sort by. default: "id". |
| `search` | Optional; native body and guard rules still apply | string | Search sequences by title. |
| `with` | Optional; native body and guard rules still apply | array | Include additional data. Use `stats` to include email count, subscriber count, and revenue for each sequence. |
| `with[]` | Per item when supplied | string | Array item schema. Enum: ["stats"] |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of sequences per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number for pagination. default: 1. minimum: 1. maximum: 10000. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-list-sequences --help
fluent-wp-cli schema fcrm-list-sequences
```

#### `fcrm_list_automations`

Retrieve a paginated list of automation funnels. Supports sorting, searching by title, and filtering by label IDs. Optionally includes trigger definitions.



**Required capability:** `fcrm_read_funnels` or `fcrm_write_funnels` : which one applies depends on the action being performed.

_Enforced by `FunnelPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `sort_by` | Optional; native body and guard rules still apply | string | Column to sort by. default: "id". |
| `sort_type` | Optional; native body and guard rules still apply | string | Sort direction. enum: ["ASC", "DESC"]. default: "DESC". |
| `search` | Optional; native body and guard rules still apply | string | Search funnels by title (partial match). |
| `labels` | Optional; native body and guard rules still apply | array | Filter funnels by label IDs. |
| `labels[]` | Per item when supplied | integer | Array item schema. |
| `with` | Optional; native body and guard rules still apply | array | Include additional related data. Supported values: `triggers`. |
| `with[]` | Per item when supplied | string | Array item schema. Enum: ["triggers"] |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of funnels per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number for pagination. default: 1. minimum: 1. maximum: 10000. |
| `tags` | Optional; native body and guard rules still apply | array | Only automations whose contacts carry these tag ids. |
| `tags[]` | Per item when supplied | integer | Array item schema. |
| `lists` | Optional; native body and guard rules still apply | array | Only automations whose contacts are on these list ids. |
| `lists[]` | Per item when supplied | integer | Array item schema. |
| `statuses` | Optional; native body and guard rules still apply | array | Filter automations by status, e.g. `published` or `draft`. |
| `statuses[]` | Per item when supplied | string | Array item schema. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-list-automations --help
fluent-wp-cli schema fcrm-list-automations
```

#### `fcrm_automation_report`

Retrieve statistical reporting data for a specific automation funnel. Returns aggregated stats generated by the Reporting service.



**Required capability:** `fcrm_read_funnels` or `fcrm_write_funnels` : which one applies depends on the action being performed.

_Enforced by `FunnelPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The funnel ID. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-automation-report --help
fluent-wp-cli schema fcrm-automation-report
```

#### `fcrm_contact_emails`

Retrieve a paginated list of emails sent to a contact. Supports filtering by open/click status. Can also show FluentSMTP logs when the `tab` parameter is set to `fluentsmtp`.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `id` | Yes | integer | The contact ID. minimum: 1. |
| `filter` | Optional; native body and guard rules still apply | string | Filter emails by engagement status. enum: ["open", "click", "unopened"]. |
| `tab` | Optional; native body and guard rules still apply | string | Email source tab. Use `fluentsmtp` to show FluentSMTP logs instead of CRM campaign emails. enum: ["crm", "fluentsmtp"]. default: "crm". |
| `per_page` | Optional; native body and guard rules still apply | integer | Number of emails per page. default: 15. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page number. default: 1. minimum: 1. maximum: 10000. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fcrm-contact-emails --help
fluent-wp-cli schema fcrm-contact-emails
```

#### `fc_list_spaces`

Returns the paginated list of spaces with each one formatted for display, including the current user permissions and membership within it.

Controller: `SpaceController@getAllSpaces`
Route source: `fluent-community/app/Http/Routes/api.php:34`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-list-spaces --help
fluent-wp-cli schema fc-list-spaces
```

#### `fc_get_space`

Returns one space with its settings, topics, the current user membership and the permissions they hold inside it.

Controller: `SpaceController@getBySlug`
Route source: `fluent-community/app/Http/Routes/api.php:10`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | SpaceSlug extracted from the URL path. minLength: 1. pattern: "^(?!\\.{1,2}$)[^/\\\\\\x00-\\x1f?#]+$". |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-get-space --help
fluent-wp-cli schema fc-get-space
```

#### `fc_list_feeds`

Returns a page of posts the current user is allowed to read, transformed for display, with the pinned post of a space returned separately on the first page.

Controller: `FeedsController@get`
Route source: `fluent-community/app/Http/Routes/api.php:45`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `space` | Optional; native body and guard rules still apply | string | Space read via `$request->get()` in get(). |
| `user_id` | Optional; native body and guard rules still apply | string | User ID read via `$request->getSafe()` in get(). |
| `topic_slug` | Optional; native body and guard rules still apply | string | Topic Slug read via `$request->getSafe()` in get(). |
| `search` | Optional; native body and guard rules still apply | string | Search read via `$request->getSafe()` in get(). |
| `status` | Optional; native body and guard rules still apply | string | Status read via `$request->getSafe()` in get(). |
| `per_page` | Optional; native body and guard rules still apply | integer | Per Page read via `$request->get()` in get(). default: 10. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Page read via `$request->get()` in get(). default: 1. minimum: 1. maximum: 10000. |
| `search_in` | Optional; native body and guard rules still apply | array | Search In read via `$request->get()` in get(). default: ["post_content"]. |
| `order_by_type` | Optional; native body and guard rules still apply | string | Order By Type read via `$request->getSafe()` in get(). |
| `disable_sticky` | Optional; native body and guard rules still apply | string | Disable Sticky read via `$request->get()` in get(). |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-list-feeds --help
fluent-wp-cli schema fc-list-feeds
```

#### `fc_get_feed`

Returns a single post by numeric id; the id is resolved to a slug and then handled exactly as the by-slug endpoint.

Controller: `FeedsController@getFeedById`
Route source: `fluent-community/app/Http/Routes/api.php:53`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `context` | Optional; native body and guard rules still apply | string | Prose-documented delegated edit context, requiring native post edit access. enum: ["view", "edit"]. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-get-feed --help
fluent-wp-cli schema fc-get-feed
```

#### `fc_create_feed`

Creates a post, renders its Markdown, attaches media and topics, and returns the transformed post ready to prepend to the feed.

Controller: `FeedsController@store`
Route source: `fluent-community/app/Http/Routes/api.php:46` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `space` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `topic_ids` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `topic_ids[]` | Per item when supplied | string | Array item schema. |
| `send_announcement_email` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `content_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `message` | Optional; native body and guard rules still apply | string | Actual shared argument definition. minLength: 1. |
| `survey` | Optional; native body and guard rules still apply | object | Actual shared argument definition. required: []. |
| `survey.options` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `survey.options[]` | Per item when supplied | string | Array item schema. |
| `survey.end_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `survey.type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `title` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. required: ["message"]. |
| `payload.space` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.topic_ids` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `payload.topic_ids[]` | Per item when supplied | string | Array item schema. |
| `payload.send_announcement_email` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.content_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.message` | Yes | string | Actual shared argument definition. minLength: 1. |
| `payload.survey` | Optional; native body and guard rules still apply | object | Actual shared argument definition. required: []. |
| `payload.survey.options` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `payload.survey.options[]` | Per item when supplied | string | Array item schema. |
| `payload.survey.end_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.survey.type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.title` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fc-create-feed --help
fluent-wp-cli schema fc-create-feed
```

#### `fc_update_feed`

Replaces the body and metadata of an existing post, re-renders it, reconciles its media and topics, and records an edit history entry.

Controller: `FeedsController@update`
Route source: `fluent-community/app/Http/Routes/api.php:47` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `new_space_id` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `move_to_profile` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `survey` | Optional; native body and guard rules still apply | object | Actual shared argument definition. required: []. |
| `survey.options` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `survey.options[]` | Per item when supplied | string | Array item schema. |
| `survey.end_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `survey.type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `status` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `send_announcement_email` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `content_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `media_images` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `topic_ids` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `topic_ids[]` | Per item when supplied | string | Array item schema. |
| `message` | Optional; native body and guard rules still apply | string | Actual shared argument definition. minLength: 1. |
| `title` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. required: ["message"]. |
| `payload.new_space_id` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.move_to_profile` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.survey` | Optional; native body and guard rules still apply | object | Actual shared argument definition. required: []. |
| `payload.survey.options` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `payload.survey.options[]` | Per item when supplied | string | Array item schema. |
| `payload.survey.end_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.survey.type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.status` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.send_announcement_email` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.content_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.media_images` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.topic_ids` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `payload.topic_ids[]` | Per item when supplied | string | Array item schema. |
| `payload.message` | Yes | string | Actual shared argument definition. minLength: 1. |
| `payload.title` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fc-update-feed --help
fluent-wp-cli schema fc-update-feed
```

#### `fc_delete_feed`

Deletes a post from the community.

Controller: `FeedsController@deleteFeed`
Route source: `fluent-community/app/Http/Routes/api.php:64` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

```bash
fluent-wp-cli fc-delete-feed --help
fluent-wp-cli schema fc-delete-feed
```

#### `fc_list_comments`

Returns every comment on a post in chronological order, with each author profile attached and the current user liked state flagged.

Controller: `CommentsController@getComments`
Route source: `fluent-community/app/Http/Routes/api.php:55`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-list-comments --help
fluent-wp-cli schema fc-list-comments
```

#### `fc_create_comment`

Posts a comment or a threaded reply on a feed item, renders its Markdown, links any attached media and bumps the post comment count.

Controller: `CommentsController@store`
Route source: `fluent-community/app/Http/Routes/api.php:56` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `comment` | Optional; native body and guard rules still apply | string | Actual shared argument definition. minLength: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. required: ["comment"]. |
| `payload.comment` | Yes | string | Actual shared argument definition. minLength: 1. |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fc-create-comment --help
fluent-wp-cli schema fc-create-comment
```

#### `fc_update_comment`

Replaces the body of an existing comment, re-renders it, and reconciles its attached media with the submitted list.

Controller: `CommentsController@update`
Route source: `fluent-community/app/Http/Routes/api.php:57` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `comment_id` | Yes | integer | Comment ID extracted from the URL path. minimum: 1. |
| `comment` | Optional; native body and guard rules still apply | string | Actual shared argument definition. minLength: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. required: ["comment"]. |
| `payload.comment` | Yes | string | Actual shared argument definition. minLength: 1. |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fc-update-comment --help
fluent-wp-cli schema fc-update-comment
```

#### `fc_delete_comment`

Deletes a comment, recounts the comments on its post and hands any attached media to the media cleanup hook.

Controller: `CommentsController@deleteComment`
Route source: `fluent-community/app/Http/Routes/api.php:60` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `comment_id` | Yes | integer | Comment ID extracted from the URL path. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

```bash
fluent-wp-cli fc-delete-comment --help
fluent-wp-cli schema fc-delete-comment
```

#### `fc_react_to_feed`

Adds or removes the current user reaction on a post and returns the updated count : a second route onto the same behaviour as the reactions toggle endpoint.

Controller: `CommentsController@addOrRemovePostReact`
Route source: `fluent-community/app/Http/Routes/api.php:59` Toggle semantics are not idempotent; inspect state before deliberately repeating. Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `feed_id` | Yes | integer | Feed ID extracted from the URL path. minimum: 1. |
| `react_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `remove` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |
| `payload` | Optional; native body and guard rules still apply | object | Complete native JSON body; do not mix with body flags or payload_file. Arrays use repeated JSON object flags or a whole native array in a private file. additionalProperties: false. |
| `payload.react_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload.remove` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `payload_file` | Optional; native body and guard rules still apply | string | Absolute regular non-symlink JSON body file, at most 1 MiB. Cannot mix with payload/body flags. minLength: 1. |

```bash
fluent-wp-cli fc-react-to-feed --help
fluent-wp-cli schema fc-react-to-feed
```

#### `fc_list_courses`

Returns the paginated list of courses the current user may manage, each with its student count and its section and lesson totals.

Controller: `CourseAdminController@getCourses`
Route source: `fluent-community/Modules/Course/Http/course_api.php:22`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `status` | Optional; native body and guard rules still apply | string | Status read via `$request->getSafe()` in getCourses(). |
| `sort_by` | Optional; native body and guard rules still apply | string | Sort By read via `$request->getSafe()` in getCourses(). default: "latest". |
| `topic_slug` | Optional; native body and guard rules still apply | string | Topic Slug read via `$request->getSafe()` in getCourses(). |
| `search` | Optional; native body and guard rules still apply | string | Search read via `$request->getSafe()` in getCourses(). |
| `with_categories` | Optional; native body and guard rules still apply | string | With Categories read via `$request->get()` in getCourses(). |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-list-courses --help
fluent-wp-cli schema fc-list-courses
```

#### `fc_get_course`

Returns one course in its editable form, with the lock screen configuration, the attached category ids and : when it has students : the completion count and average progress.

Controller: `CourseAdminController@findCourse`
Route source: `fluent-community/Modules/Course/Http/course_api.php:24`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `course_id` | Yes | integer | Course ID extracted from the URL path. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-get-course --help
fluent-wp-cli schema fc-get-course
```

#### `fc_course_students`

Returns the paginated roster of a course, each student carrying their enrolment pivot and their completion percentage.

Controller: `CourseAdminController@getCourseStudents`
Route source: `fluent-community/Modules/Course/Http/course_api.php:29`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `course_id` | Yes | integer | Course ID extracted from the URL path. minimum: 1. |
| `search` | Optional; native body and guard rules still apply | string | Search read via `$request->getSafe()` in getCourseStudents(). |
| `sort_by` | Optional; native body and guard rules still apply | string | Sort By read via `$request->getSafe()` in getCourseStudents(). default: "created_at". |
| `sort_dir` | Optional; native body and guard rules still apply | string | Sort Dir read via `$request->getSafe()` in getCourseStudents(). |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-course-students --help
fluent-wp-cli schema fc-course-students
```

#### `fc_course_lessons`

Returns the lessons of a course in display order, optionally narrowed to one section.

Controller: `CourseAdminController@getLessons`
Route source: `fluent-community/Modules/Course/Http/course_api.php:52`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `course_id` | Yes | integer | Course ID extracted from the URL path. minimum: 1. |
| `topic_id` | Optional; native body and guard rules still apply | string | Topic ID read via `$request->get()` in getLessons(). |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-course-lessons --help
fluent-wp-cli schema fc-course-lessons
```

#### `fc_space_members`

Returns the paginated active membership of a space, each entry carrying the member profile and their role, plus the count of outstanding join requests.

Controller: `SpaceController@getMembers`
Route source: `fluent-community/app/Http/Routes/api.php:18`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `slug` | Yes | string | SpaceSlug extracted from the URL path. minLength: 1. pattern: "^(?!\\.{1,2}$)[^/\\\\\\x00-\\x1f?#]+$". |
| `search` | Optional; native body and guard rules still apply | string | Search read via `$request->getSafe()` in getMembers(). |
| `status` | Optional; native body and guard rules still apply | string | Status read via `$request->get()` in getMembers(). |
| `sort_by` | Optional; native body and guard rules still apply | string | Sort By read via `$request->getSafe()` in getMembers(). default: "created_at". |
| `sort_dir` | Optional; native body and guard rules still apply | string | Sort Dir read via `$request->getSafe()` in getMembers(). |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-space-members --help
fluent-wp-cli schema fc-space-members
```

#### `fc_get_profile`

Returns one member public profile by username, with the navigation tabs the portal should render for that member.

Controller: `ProfileController@getProfile`
Route source: `fluent-community/app/Http/Routes/api.php:89`

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `username` | Yes | string | Username extracted from the URL path. minLength: 1. pattern: "^(?!\\.{1,2}$)[^/\\\\\\x00-\\x1f?#]+$". |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-get-profile --help
fluent-wp-cli schema fc-get-profile
```

#### `fc_scheduled_posts`

Returns the paginated list of posts one member has scheduled but not yet published, soonest first.

Controller: `SchedulePostsController@getScheduledPosts`
Route source: `fluent-community-pro/app/Http/Routes/api.php:112` Requires FluentCommunity Pro and its native scheduled-post permission. It is not a scheduling action.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user_id` | Optional; native body and guard rules still apply | string | User ID read via `$request->getSafe()` in getScheduledPosts(). default: "$currentUserId". |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-scheduled-posts --help
fluent-wp-cli schema fc-scheduled-posts
```

#### `fc_analytics_top_members`

Returns ten member profiles ordered by lifetime points, drawn from those who joined within the requested range.

Controller: `MembersReportsController@getTopMembers`
Route source: `fluent-community-pro/app/Http/Routes/api.php:82` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-analytics-top-members --help
fluent-wp-cli schema fc-analytics-top-members
```

#### `fc_analytics_top_commenters`

Returns the ten members who wrote the most comments within the requested range, each with their comment count.

Controller: `MembersReportsController@topCommenters`
Route source: `fluent-community-pro/app/Http/Routes/api.php:84` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-analytics-top-commenters --help
fluent-wp-cli schema fc-analytics-top-commenters
```

#### `fc_analytics_top_post_starters`

Returns the ten members who published the most posts within the requested range, each with their post count.

Controller: `MembersReportsController@topPostStarter`
Route source: `fluent-community-pro/app/Http/Routes/api.php:83` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-analytics-top-post-starters --help
fluent-wp-cli schema fc-analytics-top-post-starters
```

#### `fc_analytics_member_activity`

Returns a gap-filled time series of member signups across the requested range.

Controller: `MembersReportsController@activity`
Route source: `fluent-community-pro/app/Http/Routes/api.php:81` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli fc-analytics-member-activity --help
fluent-wp-cli schema fc-analytics-member-activity
```

#### `ff_list_forms`

Read one Forms page with current native sorting and date filters. Requires fluentform_dashboard_access and applicable native form permissions. Not an all-forms snapshot.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `search` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `status` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `filter_by` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `date_range` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `date_range[]` | Per item when supplied | string | Array item schema. |
| `sort_column` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `sort_by` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["ASC", "DESC"]. |
| `per_page` | Optional; native body and guard rules still apply | integer | Actual shared argument definition. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Actual shared argument definition. minimum: 1. maximum: 10000. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli ff-list-forms --help
fluent-wp-cli schema ff-list-forms
```

#### `ff_get_form`

Read one native form with formMeta; may include private integration/settings data. Requires fluentform_forms_manager for the selected form.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `form_id` | Yes | integer | Actual shared argument definition. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli ff-get-form --help
fluent-wp-cli schema ff-get-form
```

#### `ff_form_fields`

Read current native field definitions; no field edits. Requires fluentform_forms_manager for the selected form.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `form_id` | Yes | integer | Actual shared argument definition. minimum: 1. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli ff-form-fields --help
fluent-wp-cli schema ff-form-fields
```

#### `ff_list_submissions`

Read one native individual-entry page for an explicitly selected form. Corrects old GET /report/submissions. Requires fluentform_entries_viewer for that form. Entry bodies are private; no automatic detail call or mark-as-read action.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `form_id` | Yes | integer | Actual shared argument definition. minimum: 1. |
| `per_page` | Optional; native body and guard rules still apply | integer | Actual shared argument definition. minimum: 1. maximum: 100. |
| `page` | Optional; native body and guard rules still apply | integer | Actual shared argument definition. minimum: 1. maximum: 10000. |
| `search` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `entry_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `date_range` | Optional; native body and guard rules still apply | array | Actual shared argument definition. minItems: 2. maxItems: 2. |
| `date_range[]` | Per item when supplied | string | Array item schema. |
| `payment_statuses` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `payment_statuses[]` | Per item when supplied | string | Array item schema. |
| `sort_by` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["ASC", "DESC"]. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli ff-list-submissions --help
fluent-wp-cli schema ff-list-submissions
```

#### `ff_form_report`

Read the native form report with explicit approval because ReportService::form invokes ReportHelper::maybeMigrateData. It may update stored reporting data. Requires native form-scoped fluentform_entries_viewer; hidden/refused in read-only mode. No automatic retries.

Kind: **Confirmed operation**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `form_id` | Yes | integer | Actual shared argument definition. minimum: 1. |
| `statuses` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `statuses[]` | Per item when supplied | string | Array item schema. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Must be true for the requested mutation or exclusive private output file. |

```bash
fluent-wp-cli ff-form-report --help
fluent-wp-cli schema ff-form-report
```

#### `ff_form_stats`

Read native date-range form statistics. Requires form-scoped fluentform_entries_viewer when form_id is selected; all-forms permission otherwise. Native reports may change via site hooks and version-specific provider behavior. Not guaranteed lifetime revenue or all plugin statistics.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `form_id` | Optional; native body and guard rules still apply | integer | Actual shared argument definition. minimum: 1. |
| `start_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `end_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `metric` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli ff-form-stats --help
fluent-wp-cli schema ff-form-stats
```

#### `get_current_user`

One authenticated WordPress current-user GET with view context; verifies one user read, not site ownership or all plugin permissions. Native private output is untrusted.

Kind: **Read**. Native plugin/user permissions apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `context` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["view", "embed"]. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private account profile label; not a tenant or provider account ID. |

```bash
fluent-wp-cli get-current-user --help
fluent-wp-cli schema get-current-user
```

#### `list_accounts`

Local profile labels/default/credential source only; no site URL, username, password path, provider identity or network request.

Kind: **Read**. Local helper semantics apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| No arguments | Not required | Local discovery | No credential or provider request required. |

```bash
fluent-wp-cli list-accounts --help
fluent-wp-cli schema list-accounts
```

#### `get_operation_schema`

Local method/path/query/body schema and pinned provenance for one selected native tool. No provider call or credentials.

Kind: **Read**. Local helper semantics apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | Actual native tool name, including fc_update_feed and ff_list_submissions. enum: ["fcrm_dashboard_stats", "fcrm_list_contacts", "fcrm_get_contact", "fcrm_search_contacts", "fcrm_create_contact", "fcrm_update_contact", "fcrm_contact_notes", "fcrm_add_contact_note", "fcrm_list_tags", "fcrm_list_lists", "fcrm_list_campaigns", "fcrm_get_campaign", "fcrm_campaign_stats", "fcrm_list_sequences", "fcrm_list_automations", "fcrm_automation_report", "fcrm_contact_emails", "fc_list_spaces", "fc_get_space", "fc_list_feeds", "fc_get_feed", "fc_create_feed", "fc_update_feed", "fc_delete_feed", "fc_list_comments", "fc_create_comment", "fc_update_comment", "fc_delete_comment", "fc_react_to_feed", "fc_list_courses", "fc_get_course", "fc_course_students", "fc_course_lessons", "fc_space_members", "fc_get_profile", "fc_scheduled_posts", "fc_analytics_top_members", "fc_analytics_top_commenters", "fc_analytics_top_post_starters", "fc_analytics_member_activity", "ff_list_forms", "ff_get_form", "ff_form_fields", "ff_list_submissions", "ff_form_report", "ff_form_stats", "get_current_user"]. |

```bash
fluent-wp-cli get-operation-schema --help
fluent-wp-cli schema get-operation-schema
```

#### `fc_analytics_overview`

Retained legacy selector mapped to four fixed reviewed native Pro report routes. Not a whole-community analytics export; native report permissions apply.

Kind: **Read**. Local helper semantics apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private site profile label, not a verified site-owner identity. |
| `type` | Optional; native body and guard rules still apply | string | One native report, default top-members. enum: ["top-members", "top-commenters", "top-post-starters", "activity"]. |

```bash
fluent-wp-cli fc-analytics-overview --help
fluent-wp-cli schema fc-analytics-overview
```

#### `preview_site_batch`

Local native validation/hash for 1–20 CRM/Community writes. Binds selected profile label/site/username, request order and packaged schemas. No password read/provider state check or remote approval token.

Kind: **Read**. Local helper semantics apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to twenty exact ordered native requests. Each read is one native response/page; no automatic pagination, URL following, polling or cross-site override. minItems: 1. maxItems: 20. |
| `tasks[]` | Per item when supplied | object | Array item schema. |
| `tasks[].tool` | Yes | string | Actual shared argument definition. enum: ["fcrm_create_contact", "fcrm_update_contact", "fcrm_add_contact_note", "fc_create_feed", "fc_update_feed", "fc_delete_feed", "fc_create_comment", "fc_update_comment", "fc_delete_comment", "fc_react_to_feed"]. |
| `tasks[].arguments` | Yes | object | Native arguments without account, confirm, payload_file or output_file; complete payload is allowed. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private site profile label, not a verified site-owner identity. |

```bash
fluent-wp-cli preview-site-batch --help
fluent-wp-cli schema preview-site-batch
```

#### `submit_site_batch`

Confirmed 1–20 ordered CRM/Community writes. Validate every request and exact review hash before first request, stop on first failure with known receipts and unattempted indices; no retries/rollback/continuation.

Kind: **Confirmed operation**. Local helper semantics apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to twenty exact ordered native requests. Each read is one native response/page; no automatic pagination, URL following, polling or cross-site override. minItems: 1. maxItems: 20. |
| `tasks[]` | Per item when supplied | object | Array item schema. |
| `tasks[].tool` | Yes | string | Actual shared argument definition. enum: ["fcrm_create_contact", "fcrm_update_contact", "fcrm_add_contact_note", "fc_create_feed", "fc_update_feed", "fc_delete_feed", "fc_create_comment", "fc_update_comment", "fc_delete_comment", "fc_react_to_feed"]. |
| `tasks[].arguments` | Yes | object | Native arguments without account, confirm, payload_file or output_file; complete payload is allowed. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private site profile label, not a verified site-owner identity. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Explicit approval for this exact requested work or new private file. |
| `review_sha256` | Yes | string | Exact preview_site_batch hash for unchanged tasks, site profile and schema. pattern: "^[a-f0-9]{64}$". |

```bash
fluent-wp-cli submit-site-batch --help
fluent-wp-cli schema submit-site-batch
```

#### `read_site_snapshot`

Prevalidate 1–20 native reads for one exact private site profile; return at most5 MiB combined CRM/Community/Forms responses. No auto-pages, stateful report, browser cookies, uploads or atomic provider snapshot. Native records may contain private personal data.

Kind: **Read**. Local helper semantics apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to twenty exact ordered native requests. Each read is one native response/page; no automatic pagination, URL following, polling or cross-site override. minItems: 1. maxItems: 20. |
| `tasks[]` | Per item when supplied | object | Array item schema. |
| `tasks[].tool` | Yes | string | Actual shared argument definition. enum: ["fcrm_dashboard_stats", "fcrm_list_contacts", "fcrm_get_contact", "fcrm_search_contacts", "fcrm_contact_notes", "fcrm_list_tags", "fcrm_list_lists", "fcrm_list_campaigns", "fcrm_get_campaign", "fcrm_campaign_stats", "fcrm_list_sequences", "fcrm_list_automations", "fcrm_automation_report", "fcrm_contact_emails", "fc_list_spaces", "fc_get_space", "fc_list_feeds", "fc_get_feed", "fc_list_comments", "fc_list_courses", "fc_get_course", "fc_course_students", "fc_course_lessons", "fc_space_members", "fc_get_profile", "fc_scheduled_posts", "fc_analytics_top_members", "fc_analytics_top_commenters", "fc_analytics_top_post_starters", "fc_analytics_member_activity", "ff_list_forms", "ff_get_form", "ff_form_fields", "ff_list_submissions", "ff_form_stats", "get_current_user"]. |
| `tasks[].arguments` | Yes | object | Native arguments without account, confirm, payload_file or output_file; complete payload is allowed. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private site profile label, not a verified site-owner identity. |

```bash
fluent-wp-cli read-site-snapshot --help
fluent-wp-cli schema read-site-snapshot
```

#### `save_site_snapshot`

Confirmed 1–20 prevalidated native reads delivered only to an exclusive new0600 JSON file. No record body echoed, overwrites, upload or all-pages guarantee. Failures remove only this helper’s newly created file and return indices without native records.

Kind: **Confirmed operation**. Local helper semantics apply.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to twenty exact ordered native requests. Each read is one native response/page; no automatic pagination, URL following, polling or cross-site override. minItems: 1. maxItems: 20. |
| `tasks[]` | Per item when supplied | object | Array item schema. |
| `tasks[].tool` | Yes | string | Actual shared argument definition. enum: ["fcrm_dashboard_stats", "fcrm_list_contacts", "fcrm_get_contact", "fcrm_search_contacts", "fcrm_contact_notes", "fcrm_list_tags", "fcrm_list_lists", "fcrm_list_campaigns", "fcrm_get_campaign", "fcrm_campaign_stats", "fcrm_list_sequences", "fcrm_list_automations", "fcrm_automation_report", "fcrm_contact_emails", "fc_list_spaces", "fc_get_space", "fc_list_feeds", "fc_get_feed", "fc_list_comments", "fc_list_courses", "fc_get_course", "fc_course_students", "fc_course_lessons", "fc_space_members", "fc_get_profile", "fc_scheduled_posts", "fc_analytics_top_members", "fc_analytics_top_commenters", "fc_analytics_top_post_starters", "fc_analytics_member_activity", "ff_list_forms", "ff_get_form", "ff_form_fields", "ff_list_submissions", "ff_form_stats", "get_current_user"]. |
| `tasks[].arguments` | Yes | object | Native arguments without account, confirm, payload_file or output_file; complete payload is allowed. |
| `account` | Optional; native body and guard rules still apply | string | Exact configured private site profile label, not a verified site-owner identity. |
| `confirm` | Optional; native body and guard rules still apply | boolean | Explicit approval for this exact requested work or new private file. |
| `output_file` | Yes | string | Absolute new file in an existing private directory; restrict Windows ACLs separately. minLength: 1. |

```bash
fluent-wp-cli save-site-snapshot --help
fluent-wp-cli schema save-site-snapshot
```

### Native request and source reference

All routes append to the selected trusted site root followed by /wp-json. Parameters retain native spelling and PHP array encoding. A body is required when its schema declares native required fields; payload/body flags are mutually exclusive.

#### Native `fcrm_dashboard_stats`

`GET /fluent-crm/v2/reports/dashboard-stats`

Retrieve overall dashboard statistics including active contacts count, campaigns count, emails sent, active automations, onboarding progress, quick links, recent contacts, recent campaigns, active automations list, and system recommendations.



**Required capability:** `fcrm_view_dashboard`

_Enforced by `ReportPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/reports/get-dashboard-stats).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

#### Native `fcrm_list_contacts`

`GET /fluent-crm/v2/subscribers`

Retrieve a paginated list of contacts. Supports both simple filtering (by tags, lists, statuses) and advanced filtering with complex filter groups. Optionally includes custom field values.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/list-contacts).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| filter_type | query | No | {"type": "string", "default": "simple", "enum": ["simple", "advanced"], "description": "Type of filtering to apply."} |
| search | query | No | {"type": "string", "description": "Search contacts by name, email, or other searchable fields."} |
| sort_by | query | No | {"type": "string", "default": "id", "description": "Column to sort by."} |
| sort_type | query | No | {"type": "string", "default": "DESC", "enum": ["ASC", "DESC"], "description": "Sort direction."} |
| has_commerce | query | No | {"type": "string", "description": "Filter by commerce integration availability."} |
| custom_fields | query | No | {"type": "string", "enum": ["true", "false"], "description": "Set to `true` to include custom field values in the response."} |
| tags[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Filter by tag IDs (simple filter mode only)."} |
| statuses[] | query | No | {"type": "array", "items": {"type": "string", "enum": ["subscribed", "pending", "unsubscribed", "bounced", "complained"]}, "description": "Filter by contact statuses (simple filter mode only)."} |
| sms_statuses[] | query | No | {"type": "array", "items": {"type": "string", "enum": ["sms_subscribed", "sms_unsubscribed", "sms_pending", "sms_bounced"]}, "description": "Filter by SMS statuses (simple filter mode only)."} |
| lists[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Filter by list IDs (simple filter mode only)."} |
| company_ids[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Filter by company IDs."} |
| advanced_filters | query | No | {"type": "string", "description": "JSON-encoded advanced filter groups (advanced filter mode only)."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of contacts per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number for pagination.", "minimum": 1, "maximum": 10000} |

#### Native `fcrm_get_contact`

`GET /fluent-crm/v2/subscribers/{id}`

Retrieve a single contact by ID or email. Supports eager-loading related data like stats, custom values, custom field definitions, and commerce stats via the `with[]` parameter.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/get-contact).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The contact ID.", "minimum": 1} |
| get_by_email | query | No | {"type": "string", "format": "email", "description": "If set, looks up the contact by email address instead of the path `id`."} |
| with[] | query | No | {"type": "array", "items": {"type": "string", "enum": ["stats", "subscriber.custom_values", "custom_fields", "commerce_stat"]}, "description": "Relationships and extra data to include. Supported values: `stats`, `subscriber.custom_values`, `custom_fields`, `commerce_stat`."} |

#### Native `fcrm_search_contacts`

`GET /fluent-crm/v2/subscribers/search-contacts`

Search contacts by name or email. Returns a lightweight object of contacts keyed by ID, suitable for dropdowns and autocomplete widgets. Optionally loads default contacts when no search term is provided.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/search-contacts).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| search | query | No | {"type": "string", "description": "Search term to match against contact name and email."} |
| limit | query | No | {"type": "integer", "default": 20, "description": "Maximum number of results to return.", "minimum": 1, "maximum": 100} |
| load_default | query | No | {"type": "string", "enum": ["true", "false", "1", "0", "yes"], "description": "If truthy and no search term is provided, returns the most recent contacts."} |
| values[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Array of contact IDs to always include in results (useful for pre-selected values)."} |
| offset | query | No | {"type": "integer", "default": 0, "description": "Rows to skip before the first result. Combine with `limit` to page through matches."} |

#### Native `fcrm_create_contact`

`POST /fluent-crm/v2/subscribers`

Create a new contact. If `__force_update` is set to `yes`, it will update an existing contact with the same email instead of returning an error. Optionally sends a double opt-in email.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._ Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/create-contact).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

Native JSON body: required=true.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `email` | Yes | string | Contact email address. Must be unique unless `__force_update` is `yes`. format: "email". |
| `status` | Yes | string | Contact subscription status. enum: ["subscribed", "pending", "unsubscribed", "bounced", "complained"]. |
| `first_name` | Optional; native body and guard rules still apply | string | First name. |
| `last_name` | Optional; native body and guard rules still apply | string | Last name. |
| `prefix` | Optional; native body and guard rules still apply | string | Name prefix (e.g., Mr, Mrs, Ms). |
| `contact_type` | Optional; native body and guard rules still apply | string | Contact type. enum: ["lead", "customer"]. |
| `address_line_1` | Optional; native body and guard rules still apply | string | Address line 1. |
| `address_line_2` | Optional; native body and guard rules still apply | string | Address line 2. |
| `postal_code` | Optional; native body and guard rules still apply | string | Postal/zip code. |
| `city` | Optional; native body and guard rules still apply | string | City. |
| `state` | Optional; native body and guard rules still apply | string | State or province. |
| `country` | Optional; native body and guard rules still apply | string | Two-letter country code. |
| `phone` | Optional; native body and guard rules still apply | string | Phone number. |
| `timezone` | Optional; native body and guard rules still apply | string | Timezone identifier. |
| `date_of_birth` | Optional; native body and guard rules still apply | string | Date of birth (YYYY-MM-DD). |
| `source` | Optional; native body and guard rules still apply | string | Contact source. |
| `tags` | Optional; native body and guard rules still apply | array | Tag IDs to assign. |
| `tags[]` | Per item when supplied | integer | Array item schema. |
| `lists` | Optional; native body and guard rules still apply | array | List IDs to assign. |
| `lists[]` | Per item when supplied | integer | Array item schema. |
| `double_optin` | Optional; native body and guard rules still apply | boolean | Send double opt-in confirmation email. |
| `__force_update` | Optional; native body and guard rules still apply | string | If `yes`, updates existing contact with the same email instead of failing. enum: ["yes", "no"]. |

```json
{
  "type": "object",
  "required": [
    "email",
    "status"
  ],
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "description": "Contact email address. Must be unique unless `__force_update` is `yes`."
    },
    "status": {
      "type": "string",
      "enum": [
        "subscribed",
        "pending",
        "unsubscribed",
        "bounced",
        "complained"
      ],
      "description": "Contact subscription status."
    },
    "first_name": {
      "type": "string",
      "description": "First name."
    },
    "last_name": {
      "type": "string",
      "description": "Last name."
    },
    "prefix": {
      "type": "string",
      "description": "Name prefix (e.g., Mr, Mrs, Ms)."
    },
    "contact_type": {
      "type": "string",
      "enum": [
        "lead",
        "customer"
      ],
      "description": "Contact type."
    },
    "address_line_1": {
      "type": "string",
      "description": "Address line 1."
    },
    "address_line_2": {
      "type": "string",
      "description": "Address line 2."
    },
    "postal_code": {
      "type": "string",
      "description": "Postal/zip code."
    },
    "city": {
      "type": "string",
      "description": "City."
    },
    "state": {
      "type": "string",
      "description": "State or province."
    },
    "country": {
      "type": "string",
      "description": "Two-letter country code."
    },
    "phone": {
      "type": "string",
      "description": "Phone number."
    },
    "timezone": {
      "type": "string",
      "description": "Timezone identifier."
    },
    "date_of_birth": {
      "type": "string",
      "description": "Date of birth (YYYY-MM-DD)."
    },
    "source": {
      "type": "string",
      "description": "Contact source."
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "description": "Tag IDs to assign."
    },
    "lists": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "description": "List IDs to assign."
    },
    "double_optin": {
      "type": "boolean",
      "description": "Send double opt-in confirmation email."
    },
    "__force_update": {
      "type": "string",
      "enum": [
        "yes",
        "no"
      ],
      "description": "If `yes`, updates existing contact with the same email instead of failing."
    }
  },
  "additionalProperties": false
}
```

#### Native `fcrm_update_contact`

`PUT /fluent-crm/v2/subscribers/{id}`

Update an existing contact's fields, custom values, tags, and lists. Supports attaching and detaching tags/lists in a single request. The `subscriber` object or individual fields can be passed in the request body.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._ Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/update-contact).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The contact ID.", "minimum": 1} |

Native JSON body: required=true.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `subscriber` | Yes | object | Contact data can be nested inside a `subscriber` object or passed at the top level. minProperties: 1. additionalProperties: false. |
| `subscriber.email` | Optional; native body and guard rules still apply | string | Email address (must be unique). format: "email". |
| `subscriber.first_name` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.last_name` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.prefix` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.status` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["subscribed", "pending", "unsubscribed", "bounced", "complained"]. |
| `subscriber.contact_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. enum: ["lead", "customer"]. |
| `subscriber.address_line_1` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.address_line_2` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.postal_code` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.city` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.state` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.country` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.phone` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.timezone` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.date_of_birth` | Optional; native body and guard rules still apply | ['string', 'null'] | Date of birth (YYYY-MM-DD). Send null or empty string to clear. |
| `subscriber.source` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `subscriber.custom_values` | Optional; native body and guard rules still apply | object | Custom field key-value pairs to update. additionalProperties: {"type": "string"}. |
| `subscriber.attach_tags` | Optional; native body and guard rules still apply | array | Tag IDs to attach. |
| `subscriber.attach_tags[]` | Per item when supplied | integer | Array item schema. |
| `subscriber.detach_tags` | Optional; native body and guard rules still apply | array | Tag IDs to detach. |
| `subscriber.detach_tags[]` | Per item when supplied | integer | Array item schema. |
| `subscriber.attach_lists` | Optional; native body and guard rules still apply | array | List IDs to attach. |
| `subscriber.attach_lists[]` | Per item when supplied | integer | Array item schema. |
| `subscriber.detach_lists` | Optional; native body and guard rules still apply | array | List IDs to detach. |
| `subscriber.detach_lists[]` | Per item when supplied | integer | Array item schema. |

```json
{
  "type": "object",
  "properties": {
    "subscriber": {
      "type": "object",
      "description": "Contact data can be nested inside a `subscriber` object or passed at the top level.",
      "properties": {
        "email": {
          "type": "string",
          "format": "email",
          "description": "Email address (must be unique)."
        },
        "first_name": {
          "type": "string"
        },
        "last_name": {
          "type": "string"
        },
        "prefix": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "subscribed",
            "pending",
            "unsubscribed",
            "bounced",
            "complained"
          ]
        },
        "contact_type": {
          "type": "string",
          "enum": [
            "lead",
            "customer"
          ]
        },
        "address_line_1": {
          "type": "string"
        },
        "address_line_2": {
          "type": "string"
        },
        "postal_code": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "phone": {
          "type": "string"
        },
        "timezone": {
          "type": "string"
        },
        "date_of_birth": {
          "type": [
            "string",
            "null"
          ],
          "description": "Date of birth (YYYY-MM-DD). Send null or empty string to clear."
        },
        "source": {
          "type": "string"
        },
        "custom_values": {
          "type": "object",
          "description": "Custom field key-value pairs to update.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "attach_tags": {
          "type": "array",
          "items": {
            "type": "integer"
          },
          "description": "Tag IDs to attach."
        },
        "detach_tags": {
          "type": "array",
          "items": {
            "type": "integer"
          },
          "description": "Tag IDs to detach."
        },
        "attach_lists": {
          "type": "array",
          "items": {
            "type": "integer"
          },
          "description": "List IDs to attach."
        },
        "detach_lists": {
          "type": "array",
          "items": {
            "type": "integer"
          },
          "description": "List IDs to detach."
        }
      },
      "minProperties": 1,
      "additionalProperties": false
    }
  },
  "required": [
    "subscriber"
  ],
  "additionalProperties": false
}
```

#### Native `fcrm_contact_notes`

`GET /fluent-crm/v2/subscribers/{id}/notes`

Retrieve a paginated list of notes for a contact. Supports searching notes by title. Each note includes the user who created it.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/get-contact-notes).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The contact ID.", "minimum": 1} |
| search | query | No | {"type": "string", "description": "Search notes by title."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of notes per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number.", "minimum": 1, "maximum": 10000} |
| include_id | query | No | {"type": "integer", "description": "Id of a note that must appear in the response even when it falls outside the current page. When it is not already on the page it is returned separately as `included_note`, scoped to this contact."} |

#### Native `fcrm_add_contact_note`

`POST /fluent-crm/v2/subscribers/{id}/notes`

Add a new note to a contact. The note description supports SmartCode/merge tags which are parsed before saving. If `created_at` is not provided, it defaults to the current WordPress time.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._ Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/create-contact-note).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The contact ID.", "minimum": 1} |

Native JSON body: required=true.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `note` | Yes | object | Actual shared argument definition. required: ["title", "description", "type"]. |
| `note.title` | Yes | string | Note title. |
| `note.description` | Yes | string | Note content (HTML). Supports SmartCode/merge tags. |
| `note.type` | Yes | string | Note type. enum: ["note", "call", "email", "meeting", "activity"]. |
| `note.created_at` | Optional; native body and guard rules still apply | string | Custom creation date. Defaults to current time if not provided. format: "date-time". |

```json
{
  "type": "object",
  "required": [
    "note"
  ],
  "properties": {
    "note": {
      "type": "object",
      "required": [
        "title",
        "description",
        "type"
      ],
      "properties": {
        "title": {
          "type": "string",
          "description": "Note title."
        },
        "description": {
          "type": "string",
          "description": "Note content (HTML). Supports SmartCode/merge tags."
        },
        "type": {
          "type": "string",
          "enum": [
            "note",
            "call",
            "email",
            "meeting",
            "activity"
          ],
          "description": "Note type."
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "description": "Custom creation date. Defaults to current time if not provided."
        }
      }
    }
  },
  "additionalProperties": false
}
```

#### Native `fcrm_list_tags`

`GET /fluent-crm/v2/tags`

Retrieve a paginated list of tags. Optionally includes subscriber counts and a separate array of all tags for dropdown/select usage.



**Required capability:** `fcrm_manage_contact_cats`

_Enforced by `TagPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/tags/list-tags).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| search | query | No | {"type": "string", "description": "Search tags by title, slug, or description."} |
| sort_by | query | No | {"type": "string", "default": "id", "enum": ["id", "title", "slug", "created_at"], "description": "Column to sort by."} |
| sort_order | query | No | {"type": "string", "default": "DESC", "enum": ["ASC", "DESC"], "description": "Sort direction."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of tags per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number for pagination.", "minimum": 1, "maximum": 10000} |
| exclude_counts | query | No | {"type": "boolean", "description": "If set to any truthy value, subscriber counts will not be included for each tag."} |
| all_tags | query | No | {"type": "boolean", "description": "If set to any truthy value, includes a flat `all_tags` array with id, title, and slug of every tag (useful for dropdowns)."} |

#### Native `fcrm_list_lists`

`GET /fluent-crm/v2/lists`

Retrieve a paginated list of contact lists. Optionally includes subscriber counts and a separate array of all lists for dropdown/select usage.



**Required capability:** `fcrm_manage_contact_cats`

_Enforced by `ListPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/lists/list-lists).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| search | query | No | {"type": "string", "description": "Search lists by title, slug, or description."} |
| sort_by | query | No | {"type": "string", "default": "id", "enum": ["id", "title", "slug", "created_at"], "description": "Column to sort by."} |
| sort_order | query | No | {"type": "string", "default": "DESC", "enum": ["ASC", "DESC"], "description": "Sort direction."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of lists per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number for pagination.", "minimum": 1, "maximum": 10000} |
| exclude_counts | query | No | {"type": "boolean", "description": "If set to any truthy value, `totalCount` and `subscribersCount` will not be included for each list."} |
| all_lists | query | No | {"type": "boolean", "description": "If set to any truthy value, includes a flat `all_lists` array with id, title, and slug of every list (useful for dropdowns)."} |
| with[] | query | No | {"type": "array", "items": {"type": "string"}, "description": "Extra data to include. `subscribersCount` adds per-list contact counts via one grouped pivot query."} |

#### Native `fcrm_list_campaigns`

`GET /fluent-crm/v2/campaigns`

Retrieve a paginated list of email campaigns. Supports filtering by status, search term, labels, and sorting. Optionally includes campaign statistics.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `CampaignPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/campaigns/list-campaigns).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| searchBy | query | No | {"type": "string", "description": "Search campaigns by title."} |
| statuses[] | query | No | {"type": "array", "items": {"type": "string", "enum": ["draft", "processing", "pending-scheduled", "scheduled", "working", "paused", "archived"]}, "description": "Filter by campaign statuses."} |
| sort_by | query | No | {"type": "string", "default": "created_at", "description": "Column to sort by."} |
| sort_type | query | No | {"type": "string", "default": "DESC", "enum": ["ASC", "DESC"], "description": "Sort direction."} |
| with[] | query | No | {"type": "array", "items": {"type": "string", "enum": ["stats"]}, "description": "Include related data. Use `stats` to include campaign statistics and labels."} |
| labels[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Filter by label IDs."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of results per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number.", "minimum": 1, "maximum": 10000} |

#### Native `fcrm_get_campaign`

`GET /fluent-crm/v2/campaigns/{id}`

Retrieve a single campaign by ID. Optionally include related data (template, subjects) via the `with` parameter. When `viewCampaign` is set, returns the campaign with its paginated emails. Also returns available email templates and the server's current time.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `CampaignPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/campaigns/get-campaign).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The campaign ID.", "minimum": 1} |
| with[] | query | No | {"type": "array", "items": {"type": "string"}, "description": "Include related data (e.g., `template`, `subjects`)."} |
| viewCampaign | query | No | {"type": "string", "description": "If set, returns the campaign with paginated emails instead of the standard response."} |

#### Native `fcrm_campaign_stats`

`GET /fluent-crm/v2/campaigns/{id}/overview_stats`

Get overview statistics for a campaign including sent count, email status breakdown, and open/click analytics. This is a lighter-weight alternative to the full campaign status endpoint, suitable for dashboard widgets or summary views.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `CampaignPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/campaigns/get-campaign-overview-stats).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The campaign ID.", "minimum": 1} |

#### Native `fcrm_list_sequences`

`GET /fluent-crm/v2/sequences`

Retrieve a paginated list of email sequences. Optionally include statistics (email count, subscriber count, revenue) for each sequence. Requires FluentCampaign Pro.



**Required capability:** `fcrm_read_emails` or `fcrm_manage_emails` : which one applies depends on the action being performed.

_Enforced by `SequencePolicy::verifyRequest()`, the policy default for this route group._

**Requires:** FluentCampaign Pro. Without it the route does not exist.

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/sequences/list-sequences).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| order | query | No | {"type": "string", "default": "desc", "enum": ["asc", "desc"], "description": "Sort direction."} |
| orderBy | query | No | {"type": "string", "default": "id", "description": "Column to sort by."} |
| search | query | No | {"type": "string", "description": "Search sequences by title."} |
| with[] | query | No | {"type": "array", "items": {"type": "string", "enum": ["stats"]}, "description": "Include additional data. Use `stats` to include email count, subscriber count, and revenue for each sequence."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of sequences per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number for pagination.", "minimum": 1, "maximum": 10000} |

#### Native `fcrm_list_automations`

`GET /fluent-crm/v2/funnels`

Retrieve a paginated list of automation funnels. Supports sorting, searching by title, and filtering by label IDs. Optionally includes trigger definitions.



**Required capability:** `fcrm_read_funnels` or `fcrm_write_funnels` : which one applies depends on the action being performed.

_Enforced by `FunnelPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/funnels/list-funnels).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| sort_by | query | No | {"type": "string", "default": "id", "description": "Column to sort by."} |
| sort_type | query | No | {"type": "string", "default": "DESC", "enum": ["ASC", "DESC"], "description": "Sort direction."} |
| search | query | No | {"type": "string", "description": "Search funnels by title (partial match)."} |
| labels[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Filter funnels by label IDs."} |
| with[] | query | No | {"type": "array", "items": {"type": "string", "enum": ["triggers"]}, "description": "Include additional related data. Supported values: `triggers`."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of funnels per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number for pagination.", "minimum": 1, "maximum": 10000} |
| tags[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Only automations whose contacts carry these tag ids."} |
| lists[] | query | No | {"type": "array", "items": {"type": "integer"}, "description": "Only automations whose contacts are on these list ids."} |
| statuses[] | query | No | {"type": "array", "items": {"type": "string"}, "description": "Filter automations by status, e.g. `published` or `draft`."} |

#### Native `fcrm_automation_report`

`GET /fluent-crm/v2/funnels/{id}/report`

Retrieve statistical reporting data for a specific automation funnel. Returns aggregated stats generated by the Reporting service.



**Required capability:** `fcrm_read_funnels` or `fcrm_write_funnels` : which one applies depends on the action being performed.

_Enforced by `FunnelPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/funnels/get-funnel-report).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The funnel ID.", "minimum": 1} |

#### Native `fcrm_contact_emails`

`GET /fluent-crm/v2/subscribers/{id}/emails`

Retrieve a paginated list of emails sent to a contact. Supports filtering by open/click status. Can also show FluentSMTP logs when the `tab` parameter is set to `fluentsmtp`.



**Required capability:** `fcrm_read_contacts` or `fcrm_manage_contacts` : which one applies depends on the action being performed.

_Enforced by `SubscriberPolicy::verifyRequest()`, the policy default for this route group._

[Reviewed native source](https://developers.fluentcrm.com/rest-api/operations/contacts/get-contact-emails).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| id | path | Yes | {"type": "integer", "description": "The contact ID.", "minimum": 1} |
| filter | query | No | {"type": "string", "enum": ["open", "click", "unopened"], "description": "Filter emails by engagement status."} |
| tab | query | No | {"type": "string", "default": "crm", "enum": ["crm", "fluentsmtp"], "description": "Email source tab. Use `fluentsmtp` to show FluentSMTP logs instead of CRM campaign emails."} |
| per_page | query | No | {"type": "integer", "default": 15, "description": "Number of emails per page.", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page number.", "minimum": 1, "maximum": 10000} |

#### Native `fc_list_spaces`

`GET /fluent-community/v2/spaces/all-spaces`

Returns the paginated list of spaces with each one formatted for display, including the current user permissions and membership within it.

Controller: `SpaceController@getAllSpaces`
Route source: `fluent-community/app/Http/Routes/api.php:34`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/spaces/list-all-spaces).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

#### Native `fc_get_space`

`GET /fluent-community/v2/spaces/{spaceSlug}/by-slug`

Returns one space with its settings, topics, the current user membership and the permissions they hold inside it.

Controller: `SpaceController@getBySlug`
Route source: `fluent-community/app/Http/Routes/api.php:10`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/spaces/get-space-by-slug).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| spaceSlug | path | Yes | {"type": "string", "description": "SpaceSlug extracted from the URL path.", "minLength": 1, "pattern": "^(?!\\.{1,2}$)[^/\\\\\\x00-\\x1f?#]+$"} |

#### Native `fc_list_feeds`

`GET /fluent-community/v2/feeds`

Returns a page of posts the current user is allowed to read, transformed for display, with the pinned post of a space returned separately on the first page.

Controller: `FeedsController@get`
Route source: `fluent-community/app/Http/Routes/api.php:45`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/feeds/list-feeds).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| space | query | No | {"type": "string", "description": "Space read via `$request->get()` in get()."} |
| user_id | query | No | {"type": "string", "description": "User ID read via `$request->getSafe()` in get()."} |
| topic_slug | query | No | {"type": "string", "description": "Topic Slug read via `$request->getSafe()` in get()."} |
| search | query | No | {"type": "string", "description": "Search read via `$request->getSafe()` in get()."} |
| status | query | No | {"type": "string", "description": "Status read via `$request->getSafe()` in get()."} |
| per_page | query | No | {"type": "integer", "default": 10, "description": "Per Page read via `$request->get()` in get().", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "default": 1, "description": "Page read via `$request->get()` in get().", "minimum": 1, "maximum": 10000} |
| search_in | query | No | {"type": "array", "default": ["post_content"], "description": "Search In read via `$request->get()` in get()."} |
| order_by_type | query | No | {"type": "string", "description": "Order By Type read via `$request->getSafe()` in get()."} |
| disable_sticky | query | No | {"type": "string", "description": "Disable Sticky read via `$request->get()` in get()."} |

#### Native `fc_get_feed`

`GET /fluent-community/v2/feeds/{feed_id}/by-id`

Returns a single post by numeric id; the id is resolved to a slug and then handled exactly as the by-slug endpoint.

Controller: `FeedsController@getFeedById`
Route source: `fluent-community/app/Http/Routes/api.php:53`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/feeds/get-feed-by-id).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |
| context | query | No | {"type": "string", "enum": ["view", "edit"], "description": "Prose-documented delegated edit context, requiring native post edit access."} |

#### Native `fc_create_feed`

`POST /fluent-community/v2/feeds`

Creates a post, renders its Markdown, attaches media and topics, and returns the transformed post ready to prepend to the feed.

Controller: `FeedsController@store`
Route source: `fluent-community/app/Http/Routes/api.php:46` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/feeds/create-feed).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

Native JSON body: required=true.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `space` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `topic_ids` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `topic_ids[]` | Per item when supplied | string | Array item schema. |
| `send_announcement_email` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `content_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `message` | Yes | string | Actual shared argument definition. minLength: 1. |
| `survey` | Optional; native body and guard rules still apply | object | Actual shared argument definition. required: []. |
| `survey.options` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `survey.options[]` | Per item when supplied | string | Array item schema. |
| `survey.end_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `survey.type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `title` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |

```json
{
  "type": "object",
  "properties": {
    "space": {
      "type": "string"
    },
    "topic_ids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "send_announcement_email": {
      "type": "string"
    },
    "content_type": {
      "type": "string"
    },
    "message": {
      "type": "string",
      "minLength": 1
    },
    "survey": {
      "type": "object",
      "properties": {
        "options": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "end_date": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "required": []
    },
    "title": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ],
  "additionalProperties": false
}
```

#### Native `fc_update_feed`

`POST /fluent-community/v2/feeds/{feed_id}`

Replaces the body and metadata of an existing post, re-renders it, reconciles its media and topics, and records an edit history entry.

Controller: `FeedsController@update`
Route source: `fluent-community/app/Http/Routes/api.php:47` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/feeds/update-feed).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |

Native JSON body: required=true.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `new_space_id` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `move_to_profile` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `survey` | Optional; native body and guard rules still apply | object | Actual shared argument definition. required: []. |
| `survey.options` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `survey.options[]` | Per item when supplied | string | Array item schema. |
| `survey.end_date` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `survey.type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `status` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `send_announcement_email` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `content_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `media_images` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `topic_ids` | Optional; native body and guard rules still apply | array | Actual shared argument definition. |
| `topic_ids[]` | Per item when supplied | string | Array item schema. |
| `message` | Yes | string | Actual shared argument definition. minLength: 1. |
| `title` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |

```json
{
  "type": "object",
  "properties": {
    "new_space_id": {
      "type": "string"
    },
    "move_to_profile": {
      "type": "string"
    },
    "survey": {
      "type": "object",
      "properties": {
        "options": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "end_date": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "required": []
    },
    "status": {
      "type": "string"
    },
    "send_announcement_email": {
      "type": "string"
    },
    "content_type": {
      "type": "string"
    },
    "media_images": {
      "type": "string"
    },
    "topic_ids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "message": {
      "type": "string",
      "minLength": 1
    },
    "title": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ],
  "additionalProperties": false
}
```

#### Native `fc_delete_feed`

`DELETE /fluent-community/v2/feeds/{feed_id}`

Deletes a post from the community.

Controller: `FeedsController@deleteFeed`
Route source: `fluent-community/app/Http/Routes/api.php:64` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/feeds/delete-feed).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |

#### Native `fc_list_comments`

`GET /fluent-community/v2/feeds/{feed_id}/comments`

Returns every comment on a post in chronological order, with each author profile attached and the current user liked state flagged.

Controller: `CommentsController@getComments`
Route source: `fluent-community/app/Http/Routes/api.php:55`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/comments/list-feed-comments).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |

#### Native `fc_create_comment`

`POST /fluent-community/v2/feeds/{feed_id}/comments`

Posts a comment or a threaded reply on a feed item, renders its Markdown, links any attached media and bumps the post comment count.

Controller: `CommentsController@store`
Route source: `fluent-community/app/Http/Routes/api.php:56` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/comments/create-comment).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |

Native JSON body: required=true.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `comment` | Yes | string | Actual shared argument definition. minLength: 1. |

```json
{
  "type": "object",
  "properties": {
    "comment": {
      "type": "string",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "comment"
  ]
}
```

#### Native `fc_update_comment`

`POST /fluent-community/v2/feeds/{feed_id}/comments/{comment_id}`

Replaces the body of an existing comment, re-renders it, and reconciles its attached media with the submitted list.

Controller: `CommentsController@update`
Route source: `fluent-community/app/Http/Routes/api.php:57` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/comments/update-comment).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |
| comment_id | path | Yes | {"type": "integer", "description": "Comment ID extracted from the URL path.", "minimum": 1} |

Native JSON body: required=true.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `comment` | Yes | string | Actual shared argument definition. minLength: 1. |

```json
{
  "type": "object",
  "properties": {
    "comment": {
      "type": "string",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "required": [
    "comment"
  ]
}
```

#### Native `fc_delete_comment`

`DELETE /fluent-community/v2/feeds/{feed_id}/comments/{comment_id}`

Deletes a comment, recounts the comments on its post and hands any attached media to the media cleanup hook.

Controller: `CommentsController@deleteComment`
Route source: `fluent-community/app/Http/Routes/api.php:60` Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/comments/delete-comment).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |
| comment_id | path | Yes | {"type": "integer", "description": "Comment ID extracted from the URL path.", "minimum": 1} |

#### Native `fc_react_to_feed`

`POST /fluent-community/v2/feeds/{feed_id}/react`

Adds or removes the current user reaction on a post and returns the updated count : a second route onto the same behaviour as the reactions toggle endpoint.

Controller: `CommentsController@addOrRemovePostReact`
Route source: `fluent-community/app/Http/Routes/api.php:59` Toggle semantics are not idempotent; inspect state before deliberately repeating. Explicit local confirmation is required; hooks, announcements and automations may affect other people. No retries.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/reactions/toggle-feed-reaction).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| feed_id | path | Yes | {"type": "integer", "description": "Feed ID extracted from the URL path.", "minimum": 1} |

Native JSON body: required=false.

| Body field | Required | Type | Details |
| --- | --- | --- | --- |
| `react_type` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |
| `remove` | Optional; native body and guard rules still apply | string | Actual shared argument definition. |

```json
{
  "type": "object",
  "properties": {
    "react_type": {
      "type": "string"
    },
    "remove": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```

#### Native `fc_list_courses`

`GET /fluent-community/v2/admin/courses`

Returns the paginated list of courses the current user may manage, each with its student count and its section and lesson totals.

Controller: `CourseAdminController@getCourses`
Route source: `fluent-community/Modules/Course/Http/course_api.php:22`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/courses/list-admin-courses).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| status | query | No | {"type": "string", "description": "Status read via `$request->getSafe()` in getCourses()."} |
| sort_by | query | No | {"type": "string", "default": "latest", "description": "Sort By read via `$request->getSafe()` in getCourses()."} |
| topic_slug | query | No | {"type": "string", "description": "Topic Slug read via `$request->getSafe()` in getCourses()."} |
| search | query | No | {"type": "string", "description": "Search read via `$request->getSafe()` in getCourses()."} |
| with_categories | query | No | {"type": "string", "description": "With Categories read via `$request->get()` in getCourses()."} |

#### Native `fc_get_course`

`GET /fluent-community/v2/admin/courses/{course_id}`

Returns one course in its editable form, with the lock screen configuration, the attached category ids and : when it has students : the completion count and average progress.

Controller: `CourseAdminController@findCourse`
Route source: `fluent-community/Modules/Course/Http/course_api.php:24`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/courses/get-admin-course).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| course_id | path | Yes | {"type": "integer", "description": "Course ID extracted from the URL path.", "minimum": 1} |

#### Native `fc_course_students`

`GET /fluent-community/v2/admin/courses/{course_id}/students`

Returns the paginated roster of a course, each student carrying their enrolment pivot and their completion percentage.

Controller: `CourseAdminController@getCourseStudents`
Route source: `fluent-community/Modules/Course/Http/course_api.php:29`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/courses/list-course-students).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| course_id | path | Yes | {"type": "integer", "description": "Course ID extracted from the URL path.", "minimum": 1} |
| search | query | No | {"type": "string", "description": "Search read via `$request->getSafe()` in getCourseStudents()."} |
| sort_by | query | No | {"type": "string", "default": "created_at", "description": "Sort By read via `$request->getSafe()` in getCourseStudents()."} |
| sort_dir | query | No | {"type": "string", "description": "Sort Dir read via `$request->getSafe()` in getCourseStudents()."} |

#### Native `fc_course_lessons`

`GET /fluent-community/v2/admin/courses/{course_id}/lessons`

Returns the lessons of a course in display order, optionally narrowed to one section.

Controller: `CourseAdminController@getLessons`
Route source: `fluent-community/Modules/Course/Http/course_api.php:52`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/courses/list-course-lessons).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| course_id | path | Yes | {"type": "integer", "description": "Course ID extracted from the URL path.", "minimum": 1} |
| topic_id | query | No | {"type": "string", "description": "Topic ID read via `$request->get()` in getLessons()."} |

#### Native `fc_space_members`

`GET /fluent-community/v2/spaces/{spaceSlug}/members`

Returns the paginated active membership of a space, each entry carrying the member profile and their role, plus the count of outstanding join requests.

Controller: `SpaceController@getMembers`
Route source: `fluent-community/app/Http/Routes/api.php:18`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/members/list-space-members).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| spaceSlug | path | Yes | {"type": "string", "description": "SpaceSlug extracted from the URL path.", "minLength": 1, "pattern": "^(?!\\.{1,2}$)[^/\\\\\\x00-\\x1f?#]+$"} |
| search | query | No | {"type": "string", "description": "Search read via `$request->getSafe()` in getMembers()."} |
| status | query | No | {"type": "string", "description": "Status read via `$request->get()` in getMembers()."} |
| sort_by | query | No | {"type": "string", "default": "created_at", "description": "Sort By read via `$request->getSafe()` in getMembers()."} |
| sort_dir | query | No | {"type": "string", "description": "Sort Dir read via `$request->getSafe()` in getMembers()."} |

#### Native `fc_get_profile`

`GET /fluent-community/v2/profile/{username}`

Returns one member public profile by username, with the navigation tabs the portal should render for that member.

Controller: `ProfileController@getProfile`
Route source: `fluent-community/app/Http/Routes/api.php:89`

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/profile/get-profile).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| username | path | Yes | {"type": "string", "description": "Username extracted from the URL path.", "minLength": 1, "pattern": "^(?!\\.{1,2}$)[^/\\\\\\x00-\\x1f?#]+$"} |

#### Native `fc_scheduled_posts`

`GET /fluent-community/v2/scheduled-posts`

Returns the paginated list of posts one member has scheduled but not yet published, soonest first.

Controller: `SchedulePostsController@getScheduledPosts`
Route source: `fluent-community-pro/app/Http/Routes/api.php:112` Requires FluentCommunity Pro and its native scheduled-post permission. It is not a scheduling action.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/feeds/list-scheduled-posts).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| user_id | query | No | {"type": "string", "default": "$currentUserId", "description": "User ID read via `$request->getSafe()` in getScheduledPosts()."} |

#### Native `fc_analytics_top_members`

`GET /fluent-community/v2/analytics/members/top-members`

Returns ten member profiles ordered by lifetime points, drawn from those who joined within the requested range.

Controller: `MembersReportsController@getTopMembers`
Route source: `fluent-community-pro/app/Http/Routes/api.php:82` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/reports/list-top-members-report).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

#### Native `fc_analytics_top_commenters`

`GET /fluent-community/v2/analytics/members/top-commenters`

Returns the ten members who wrote the most comments within the requested range, each with their comment count.

Controller: `MembersReportsController@topCommenters`
Route source: `fluent-community-pro/app/Http/Routes/api.php:84` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/reports/list-top-commenters-report).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

#### Native `fc_analytics_top_post_starters`

`GET /fluent-community/v2/analytics/members/top-post-starters`

Returns the ten members who published the most posts within the requested range, each with their post count.

Controller: `MembersReportsController@topPostStarter`
Route source: `fluent-community-pro/app/Http/Routes/api.php:83` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/reports/list-top-post-starters-report).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

#### Native `fc_analytics_member_activity`

`GET /fluent-community/v2/analytics/members/activity`

Returns a gap-filled time series of member signups across the requested range.

Controller: `MembersReportsController@activity`
Route source: `fluent-community-pro/app/Http/Routes/api.php:81` Requires FluentCommunity Pro native report permissions; the response is not a whole-site audience export.

[Reviewed native source](https://dev.fluentcommunity.co/restapi/operations/reports/get-member-activity-report).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| No path/query arguments | None | No | Native permissions and body/guard rules still apply. |

#### Native `ff_list_forms`

`GET /fluentform/v1/forms`

Read one Forms page with current native sorting and date filters. Requires fluentform_dashboard_access and applicable native form permissions. Not an all-forms snapshot.

[Reviewed native source](https://github.com/fluentform/fluentform/blob/9809093dd2ac209cf2f632d882114d0e1257c10b/app/Http/Routes/api.php).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| search | query | No | {"type": "string"} |
| status | query | No | {"type": "string"} |
| filter_by | query | No | {"type": "string"} |
| date_range | query | No | {"type": "array", "items": {"type": "string"}} |
| sort_column | query | No | {"type": "string"} |
| sort_by | query | No | {"type": "string", "enum": ["ASC", "DESC"]} |
| per_page | query | No | {"type": "integer", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "minimum": 1, "maximum": 10000} |

#### Native `ff_get_form`

`GET /fluentform/v1/forms/{form_id}`

Read one native form with formMeta; may include private integration/settings data. Requires fluentform_forms_manager for the selected form.

[Reviewed native source](https://github.com/fluentform/fluentform/blob/9809093dd2ac209cf2f632d882114d0e1257c10b/app/Http/Routes/api.php).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| form_id | path | Yes | {"type": "integer", "minimum": 1} |

#### Native `ff_form_fields`

`GET /fluentform/v1/forms/{form_id}/fields`

Read current native field definitions; no field edits. Requires fluentform_forms_manager for the selected form.

[Reviewed native source](https://github.com/fluentform/fluentform/blob/9809093dd2ac209cf2f632d882114d0e1257c10b/app/Http/Routes/api.php).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| form_id | path | Yes | {"type": "integer", "minimum": 1} |

#### Native `ff_list_submissions`

`GET /fluentform/v1/submissions`

Read one native individual-entry page for an explicitly selected form. Corrects old GET /report/submissions. Requires fluentform_entries_viewer for that form. Entry bodies are private; no automatic detail call or mark-as-read action.

[Reviewed native source](https://github.com/fluentform/fluentform/blob/9809093dd2ac209cf2f632d882114d0e1257c10b/app/Http/Routes/api.php).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| form_id | query | Yes | {"type": "integer", "minimum": 1} |
| per_page | query | No | {"type": "integer", "minimum": 1, "maximum": 100} |
| page | query | No | {"type": "integer", "minimum": 1, "maximum": 10000} |
| search | query | No | {"type": "string"} |
| entry_type | query | No | {"type": "string"} |
| date_range | query | No | {"type": "array", "items": {"type": "string"}, "minItems": 2, "maxItems": 2} |
| payment_statuses | query | No | {"type": "array", "items": {"type": "string"}} |
| sort_by | query | No | {"type": "string", "enum": ["ASC", "DESC"]} |

#### Native `ff_form_report`

`GET /fluentform/v1/report/forms/{form_id}`

Read the native form report with explicit approval because ReportService::form invokes ReportHelper::maybeMigrateData. It may update stored reporting data. Requires native form-scoped fluentform_entries_viewer; hidden/refused in read-only mode. No automatic retries.

[Reviewed native source](https://github.com/fluentform/fluentform/blob/9809093dd2ac209cf2f632d882114d0e1257c10b/app/Http/Routes/api.php).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| form_id | path | Yes | {"type": "integer", "minimum": 1} |
| statuses | query | No | {"type": "array", "items": {"type": "string"}} |

#### Native `ff_form_stats`

`GET /fluentform/v1/report/form-stats`

Read native date-range form statistics. Requires form-scoped fluentform_entries_viewer when form_id is selected; all-forms permission otherwise. Native reports may change via site hooks and version-specific provider behavior. Not guaranteed lifetime revenue or all plugin statistics.

[Reviewed native source](https://github.com/fluentform/fluentform/blob/9809093dd2ac209cf2f632d882114d0e1257c10b/app/Http/Routes/api.php).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| form_id | query | No | {"type": "integer", "minimum": 1} |
| start_date | query | No | {"type": "string"} |
| end_date | query | No | {"type": "string"} |
| metric | query | No | {"type": "string"} |

#### Native `get_current_user`

`GET /wp/v2/users/me`

One authenticated WordPress current-user GET with view context; verifies one user read, not site ownership or all plugin permissions. Native private output is untrusted.

[Reviewed native source](https://developer.wordpress.org/rest-api/reference/users/).

| Native argument | Location | Required | Schema |
| --- | --- | --- | --- |
| context | query | No | {"type": "string", "enum": ["view", "embed"]} |

## 9. CRM, Community and Forms workflows

### Read CRM before an approved change

Discover real contacts, tags and lists first. An approved status/list/tag update can trigger automations; read the current profile and choose only the requested fields. A successful native receipt does not prove all downstream emails or hooks completed.

```bash
fluent-wp-cli fcrm-list-contacts --per-page 5 --agent
fluent-wp-cli fcrm-list-tags --per-page 5 --agent
fluent-wp-cli schema fcrm-update-contact
fluent-wp-cli fcrm-update-contact --help
```

### Read Community and edit the intended content

Get a real space slug and feed ID. Feeds use native space/content_type/message, comments use comment, and content edits use POST. Announcement email is a separate effect: approve it explicitly if requested. Scheduled-post discovery is not a scheduling action.

```bash
fluent-wp-cli fc-list-spaces --agent
fluent-wp-cli fc-list-feeds --per-page 5 --agent
fluent-wp-cli schema fc-create-feed
fluent-wp-cli schema fc-update-comment
```

### Read Forms submissions without marking an entry

Discover form IDs and request a selected submissions page. entry_type controls native status/favourites filters, sort_by is a direction, and date_range is a two-element array. The package does not silently call a single-entry endpoint that marks entries read. ff_form_report is a confirmed stateful report, separate from ordinary entry/stat reads.

```bash
fluent-wp-cli ff-list-forms --per-page 5 --agent
fluent-wp-cli ff-list-submissions --form-id 123 --per-page 5 --agent
fluent-wp-cli schema ff-form-stats
fluent-wp-cli ff-form-report --help
```

123 is an example ID; replace it with a real ID read from the intended site before making that request.

## 10. Exact reviewed batches and snapshots

Preview one to twenty exact ordered CRM/Community writes. Every native schema/body is validated before the first request. Preview is local and does not read a password, query provider state, lock a cohort or issue a native official confirmation token. Select the same exact site and unchanged task order when submitting.

```bash
fluent-wp-cli preview-site-batch --help
fluent-wp-cli schema submit-site-batch
fluent-wp-cli read-site-snapshot --help
fluent-wp-cli schema save-site-snapshot
```

Each --tasks flag is one JSON object with tool and arguments. Task arguments cannot override account/confirm or refer to payload_file/output_file. Use a complete immutable payload value when needed. submit-site-batch requires --confirm and the exact --review-sha256 hash; --agent and --yes never supply approval. Execution stops on the first failure and returns knownResults, failedIndex and unattemptedIndices. No retry, rollback or automatic continuation occurs. A failed request can have an unknown result, and a receipt can precede hook/announcement completion.

read_site_snapshot prevalidates one to twenty selected native reads for one site and returns at most 5 MiB combined native responses. Each list is one requested page, not an all-pages backup or atomic provider snapshot. save_site_snapshot requires confirmation and an absolute new file in an existing private directory. It reserves the file exclusively with mode0600, never overwrites, and returns only path/bytes/SHA-256 metadata. Failure removes only its newly created file and reports indices without native records. Keep Windows ACLs and parent-directory privacy separately restricted. Stateful Forms reports are excluded from these read helpers.


## 11. Several private sites

FLUENT_WP_ACCOUNTS is a private JSON array of unique {name,site_url,username,app_password,password_file} entries. Choose one password method per profile. Each site requires its own URL, user and credential; a selected profile never falls back to global settings or another site after a missing password or 401/403. FLUENT_WP_DEFAULT_ACCOUNT and --account select an exact label.

list_accounts returns labels, the default and credential source only. It does not reveal site URLs, usernames, password paths or credentials, make requests, or prove provider ownership. Password files are cached until restart. Review hashes bind the selected label, normalized site URL, username, ordered inputs/requests and packaged schema; they do not bind a password fingerprint or validate server state.



```bash
fluent-wp-cli list-accounts --agent
fluent-wp-cli fcrm-list-contacts --account work --per-page 1 --agent
```

## 12. Writing safely

All 13 mutations/stateful reports/private file operations require --confirm or confirm:true through the same house guard. FLUENT_WP_READ_ONLY=1 exposes only 41 reads and directly refuses hidden confirmed calls. FLUENT_WP_ALLOW_DESTRUCTIVE=0 independently refuses confirmed operations. --agent/--yes control formatting and never authorize.

Only the selected trusted HTTPS site and reviewed REST paths are allowed. No credentials in URLs, redirects, arbitrary endpoint requests, browser/session import, automatic retries or vendor code execution occurs. Local preview hashes do not replace native permissions, site-state review or human authorization. The audit log records static operation/guard decisions without request bodies; append failures are best effort, not guaranteed compliance logging.

CRM contacts and opt-ins, Community comments/reactions/announcements and stored report metadata can affect real users. Read-only applies to actual side effects, including the GET Forms report that may migrate metadata. No automatic delete, send, database maintenance or rollback is added after a user requests a narrower action.


## 13. How the two surfaces work

The unchanged house CLI bridge invokes the actual local MCP server through the SDK in-memory transport. Commands, schema discovery, validation, site selection, handlers and WriteGuard are shared; there is no separate CLI API client or second tool implementation. One catalogue powers all54 tools and commands. Helpers compile only the selected allowlisted native routes, with whole-batch prevalidation before any provider request.

## 14. Your data

The runtime sends Basic credentials only to your selected HTTPS site. Configured/cached passwords, Basic-encoded credentials, recognized secret-named fields and signed/token URLs are redacted from returned data and errors. Contacts, emails, names, addresses, course students, comments, form entries and ordinary URLs remain potentially private. Redaction does not remove all personal or business information.

Request and select only the necessary records. Treat WordPress content, form submissions, HTML, URLs and provider errors as untrusted data, never executable instructions or authorization. Snapshot files contain the requested private native records, even though the save receipt omits them. Keep files, parent directories and backups private, and decide retention deliberately. No telemetry, remote upload, cookie import, automatic .env loader or credential refresh is included.


## 15. Environment variables

| Variable | Behavior | Group |
| --- | --- | --- |
| FLUENT_WP_SITE_URL | Trusted HTTPS site root, optional install subdirectory | Credentials |
| FLUENT_WP_USER | WordPress username; no colon/control characters | Credentials |
| FLUENT_WP_APP_PASSWORD | Private dedicated Application Password; never main login | Credentials |
| FLUENT_WP_PASSWORD_FILE | Absolute owner-private non-symlink password-only file, <=64 KiB | Credentials |
| FLUENT_WP_ACCOUNTS | Private unique named site_url/username/app_password or password_file profiles | Credentials |
| FLUENT_WP_DEFAULT_ACCOUNT | Exact selected private site label | Credentials |
| FLUENT_WP_URL / FLUENT_WP_PASS | Legacy aliases; conflicting canonical values refuse | Compatibility |
| FLUENT_WP_READ_ONLY | 1/true hides and directly refuses 13 confirmed operations | Safety |
| FLUENT_WP_ALLOW_DESTRUCTIVE | 0/false refuses all confirmed operations; default true | Safety |
| FLUENT_WP_AUDIT_LOG | Private best-effort JSONL guard log, no payloads | Safety |
| FLUENT_WP_REQUEST_TIMEOUT_MS | 30000 default; integer100–300000; no automatic retry | Tuning |
| FLUENT_WP_MIN_REQUEST_INTERVAL_MS | 250 default; integer0–10000; process spacing only | Tuning |

## 16. Updates and removal

Use npx -y @thenavidm/fluent-wp-mcp-cli@latest for fresh client launches, then reconnect/restart. Global installs require npm update -g @thenavidm/fluent-wp-mcp-cli. Desktop extensions require installing the newly versioned archive. Read the major migration table before replacing old script arguments. Remove only the requested registration, skill, package or extension. Revoke Application Passwords separately; private snapshots and provider changes remain.

```bash
npm update -g @thenavidm/fluent-wp-mcp-cli
fluent-wp-cli --version
# Removal only when requested
codex mcp remove fluent-wp
npm uninstall -g @thenavidm/fluent-wp-mcp-cli
```

## 17. Troubleshooting

| Symptom | Check and resolution |
| --- | --- |
| No binary/Node | Install Node22+, check npm global PATH and reopen terminal; npm.cmd can respect Windows policy |
| Configuration exit10 | Set each selected profile URL/user and one password method; no global fallback |
| Unsafe URL/refused redirect | Use the canonical trusted HTTPS root/install subdirectory, no wp-json/query/fragment/credentials |
| 401/403 | Check Application Password revocation, Basic header forwarding, native capabilities and security plugin policy |
| WordPress user read passes, Fluent fails | User identity does not prove plugin activation, route version, native access or Pro eligibility |
| 404/HTML response | Check installed plugins, exact site root and REST path; redirects/login HTML are not followed |
| HTTP200 but native failure | success:false, status:false or native code/data.status errors refuse; inspect error receipt |
| 429/timeout | Respect host guidance and inspect mutation state before deliberately repeating; no retry loop |
| Old feed/comment args | Use space/content_type/message and comment; POST content edits, no guessed PATCH |
| Wrong Forms entries | Use GET submissions and actual form_id/entry_type/sort_by; aggregate reports are different |
| Read-only report refusal | ff_form_report is stateful in current source; explicit requested approval is required |
| Review mismatch/partial batch | Preview unchanged site/tasks again; retain known receipts and do not replay successes |
| Existing snapshot file | Choose a new absolute file; no overwrite or cross-site append |
| GUI/remote runtime differs | Give that actual runtime private settings and accessible files; restart/reconnect |

## 18. API coverage and comparisons

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

## 19. Versions and migration

| Component | Current reviewed version |
| --- | --- |
| Package/desktop manifest | 2.0.0 |
| Node support | 22 or newer |
| Native API namespaces | CRM v2; Community v2; Forms v1; WordPress v2 |
| Forms source | 6.2.14 at pinned commit |
| MCP SDK | 1.32.0 locked |
| Schema validators | Ajv8.20.0; ajv-formats3.0.1 locked |
| Source provenance | Five pinned upstream repos, reviewed2026-10-03 |

All 43 legacy tool names remain in this major refresh. Keeping a name does not keep a broken method, argument or unsafe side effect. Inspect the actual schema before updating saved scripts.

| Legacy area | 2.0.0 correction | Caller action |
| --- | --- | --- |
| Setup | Canonical SITE_URL/APP_PASSWORD now match documentation; URL/PASS remain aliases | Do not configure conflicting aliases; keep each site credential independent |
| Community feeds | space/order_by_type replace space_id/sort_by; creation uses space/content_type/message | Use a real native space selector, exact fields and explicit announcement choice |
| Feed editing | Content edit uses POST with required message; PATCH is separate state/pin behavior | Update the payload; no invented is_sticky action |
| Comments | Native comment field and POST edits replace message/PATCH | Use --comment and actual feed/comment IDs |
| Contact updates/notes | Nested subscriber and note objects replace incorrect flat/misnamed bodies | Read nested schemas and send a whole object or private payload file |
| Campaigns | Native searchBy/statuses/with/labels; arrays serialize as PHP [] query entries | Use actual camel-case and repeated array flags |
| Forms entries | GET /submissions, required form_id, entry_type, ASC/DESC sort_by | Do not use aggregate POST report route or ignored legacy status/favourite flags |
| Forms stats | start_date/end_date/metric replace ignored period/group_by | Supply both dates or neither |
| Forms report | GET may migrate report metadata; now confirmed and excluded from read-only/snapshot reads | Explicitly approve this stateful report; never use it as a setup probe |
| Community analytics | Legacy selector maps four fixed native Pro member-report paths | Use an allowed type; not arbitrary paths or whole-community analytics |
| Students/members | Exact native search/sort fields; no invented page/per_page | Inspect schema rather than assume every response supports pagination |

The fresh public history excludes the private legacy repository and credentials. The original AGPL-3.0 license is preserved. Five upstream source commits, sanitized snapshots and route corrections are recorded in src/tools/provenance.json. sync:api --check validates the packaged snapshot; --latest reports source-head changes for human review and never overwrites released schemas automatically.

## 20. FAQ

<details>
<summary><b>What does this package connect to?</b></summary>

Selected native FluentCRM, FluentCommunity and Fluent Forms REST routes on the exact HTTPS WordPress site you configure. It includes one WordPress current-user read and local profile/schema/batch/snapshot helpers.

</details>

<details>
<summary><b>Does Fluent already have official MCP servers?</b></summary>

Yes. CRM, Forms, Boards, Cart and Support document separate official MCP integrations. This companion offers a combined local task workflow for the reviewed subset; official product-specific features remain distinct.

</details>

<details>
<summary><b>Does Fluent already have a CLI?</b></summary>

Yes. wp fluent_crm and wp fluentform are official WP-CLI commands running in WordPress. This package provides remote Node task commands and local stdio MCP. It does not replace native email sending or maintenance commands.

</details>

<details>
<summary><b>Why offer another implementation?</b></summary>

It implements shared remote task commands, exact private site profiles, mandatory local approval, direct read-only refusal, reviewed ordered CRM/Community changes and bounded private snapshots. These are specific implemented behaviors, not a claim of universal superiority.

</details>

<details>
<summary><b>Can I use Codex without Claude Code?</b></summary>

Yes. Codex can register the local stdio MCP or invoke fluent-wp-cli with SKILL.md and --agent. Claude Code is an optional separate client.

</details>

<details>
<summary><b>Which operating systems work?</b></summary>

The package targets Node22+ on macOS, Windows and Linux. CI covers Node22/24 on each OS plus a desktop archive build. Native GUI and provider acceptance require separate evidence.

</details>

<details>
<summary><b>Is there a desktop version?</b></summary>

The versioned .mcpb vendors production dependencies for compatible Claude Desktop custom extensions. Configure the sensitive Application Password or private file plus site/user. Manual bundle updates require installing the new release.

</details>

<details>
<summary><b>Which password should I use?</b></summary>

Create a dedicated WordPress Application Password for the intended least-privileged user. Never use the main login password, a Bearer token or browser cookies. Keep it in private settings or an owner-private file outside repositories.

</details>

<details>
<summary><b>Can I connect multiple sites?</b></summary>

Yes. Each uniquely named profile contains its own site_url, username and password method. --account selects an exact label. Missing/rejected credentials never fall back to another site or global password.

</details>

<details>
<summary><b>Does doctor prove all tools work?</b></summary>

No. doctor checks local settings. doctor --network deliberately reads only the current WordPress user and reports its ID. Plugin permissions, Pro eligibility, ownership and mutation outcomes are separate.

</details>

<details>
<summary><b>Are writes disabled?</b></summary>

Requested writes are available with explicit --confirm or confirm:true. --agent/--yes never authorize. READ_ONLY hides and directly refuses all thirteen confirmed operations, including the stateful Forms report and private snapshot save.

</details>

<details>
<summary><b>Why does a GET report require confirmation?</b></summary>

The pinned Forms service may migrate stored report metadata when ff_form_report is called. The package classifies that side effect as confirmed and excludes the report from read-only and snapshot read helpers.

</details>

<details>
<summary><b>Does a preview lock provider state?</b></summary>

No. Its hash binds exact site/profile/user, inputs/order/compiled requests and packaged schemas. It is local input review, not provider ownership, a server-state lock or the official Forms single-use five-minute token.

</details>

<details>
<summary><b>What happens if a batch fails?</b></summary>

Execution stops at the first failure and reports known results plus failed/unattempted indices. There is no rollback, automatic retry or continuation. Inspect native state before deliberately repeating unknown work.

</details>

<details>
<summary><b>Does a snapshot include everything?</b></summary>

No. It contains one to twenty selected native responses/pages, at most5 MiB combined. It does not automatically paginate or create an atomic database backup. Stored private records remain sensitive.

</details>

<details>
<summary><b>Can a saved snapshot overwrite a file?</b></summary>

No. save_site_snapshot exclusively creates a new absolute file with mode0600 and returns only path/bytes/SHA-256 metadata. It removes only its own new file on failure. Restrict Windows and parent-directory ACLs separately.

</details>

<details>
<summary><b>Can this send campaigns or schedule posts?</b></summary>

This subset reads CRM campaign/automation information and Community scheduled posts. It does not invent campaign sending, scheduling, database maintenance or official MCP-only endpoints. Some contact/feed changes can still trigger real messages.

</details>

<details>
<summary><b>Is the CLI cheaper in tokens?</b></summary>

Matched successful Codex MCP-versus-CLI tasks have not been measured for this release. Publish actual reported usage, client/model/version, discovery strategy, equivalent outputs and latency before claiming savings. Source counts or character estimates are insufficient.

</details>

<details>
<summary><b>Is the package free?</b></summary>

The code is free under the preserved AGPL-3.0 license. WordPress hosting, paid Fluent Pro features, email delivery and native account limits remain separate. Read THIRD_PARTY_NOTICES.md for bundled dependency licenses.

</details>

<details>
<summary><b>How do updates and removal work?</b></summary>

Fresh npx @latest launches resolve the current npm release; reconnect running clients. Global installs need npm update -g and desktop bundles need reinstalling. Remove only the requested registration/package, revoke the dedicated Application Password separately and review retained private snapshots.

</details>

## Questions

Open a [secret-free issue](https://github.com/thenavidm/fluent-wp-mcp-cli/issues). Read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. He creates useful free tools, MCP servers and CLIs that creators and founders can use in their own workflows.

**Links**

- Personal website: [navid.me](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=fluent-wp-mcp-cli&utm_content=readme)
- Link in bio: [navid.bio](https://navid.bio?utm_source=github&utm_medium=referral&utm_campaign=fluent-wp-mcp-cli&utm_content=readme)
- Navid Media: [navid.media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=fluent-wp-mcp-cli&utm_content=readme)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

If this is useful, star the repo and come say hi on [X](https://x.com/thenavidm).

## Dependencies

Runtime: MCP TypeScript SDK, Ajv and ajv-formats. Development: TypeScript, Vitest, Vite and MCPB. Exact locked versions appear above. Packaging tools are excluded from desktop runtime.

## License

Preserves [AGPL-3.0](LICENSE) and existing private legacy history. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Fluent WordPress service terms and trademarks remain separate.

---

© 2026 [Navid Media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=fluent-wp-mcp-cli&utm_content=readme). Made with ❤️ by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=fluent-wp-mcp-cli&utm_content=readme).
