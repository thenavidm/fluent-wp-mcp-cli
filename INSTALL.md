# Install Fluent WordPress MCP Server & CLI

One package includes both binaries and **54 tools**. Node22+ is required for CLI/manual MCP. Discovery works without private authentication; plugin operations need the exact intended HTTPS WordPress site, native capabilities and installed plugins.

## Requirements

Install Node from [nodejs.org](https://nodejs.org/en/download), reopen a terminal and check node --version/npm --version. A GUI or remote runtime needs its own private settings and readable files. Use npm.cmd on Windows if your PowerShell policy blocks npm.ps1. No sudo or main-login-password workaround is required.

## CLI

```bash
npm install -g @thenavidm/fluent-wp-mcp-cli@latest
fluent-wp-cli --version
fluent-wp-cli tools
fluent-wp-cli login
```

Node22+ for manual installation. [INSTALL.md](INSTALL.md) includes Codex, every declared client/OS and the versioned [desktop bundle](https://github.com/thenavidm/fluent-wp-mcp-cli/releases/download/v2.0.0/fluent-wp-2.0.0.mcpb).

Make the shipped SKILL.md available in your agent's supported private skill location. npm does not register skills automatically. A single-command alternative is npx -y --package @thenavidm/fluent-wp-mcp-cli@latest fluent-wp-cli tools.

## Private account setup

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


## Codex

Codex is the current validation priority. Private password paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add fluent-wp -- npx -y @thenavidm/fluent-wp-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.fluent-wp]
command = "npx"
args = ["-y", "@thenavidm/fluent-wp-mcp-cli@latest"]
env_vars = ["FLUENT_WP_SITE_URL", "FLUENT_WP_USER", "FLUENT_WP_APP_PASSWORD", "FLUENT_WP_PASSWORD_FILE", "FLUENT_WP_ACCOUNTS", "FLUENT_WP_DEFAULT_ACCOUNT", "FLUENT_WP_READ_ONLY", "FLUENT_WP_ALLOW_DESTRUCTIVE"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user fluent-wp -- npx -y @thenavidm/fluent-wp-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

1. Download `fluent-wp-2.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/fluent-wp-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Enter the intended HTTPS site root and WordPress username. Enter a dedicated Application Password in the sensitive setting, or an absolute private password-file path, never both. Native requests use HTTP Basic username:applicationPassword. Named site profiles require private manual runtime settings.
4. Enable read-only if you want only the 41 read operations. Reconnect, discover tools, then deliberately verify one current-user read.

The bundle includes production dependencies and no credentials. Use a regular private application-password-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "fluent-wp": {
      "command": "npx",
      "args": [
        "-y",
        "@thenavidm/fluent-wp-mcp-cli@latest"
      ],
      "env": {
        "FLUENT_WP_APP_PASSWORD": "YOUR_PRIVATE_APP_PASSWORD",
        "FLUENT_WP_PASSWORD_FILE": "",
        "FLUENT_WP_SITE_URL": "https://YOUR-PRIVATE-SITE.example",
        "FLUENT_WP_USER": "YOUR_PRIVATE_WORDPRESS_USERNAME"
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/fluent-wp-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "fluent-wp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@thenavidm/fluent-wp-mcp-cli@latest"
      ],
      "env": {
        "FLUENT_WP_APP_PASSWORD": "${env:FLUENT_WP_APP_PASSWORD}",
        "FLUENT_WP_PASSWORD_FILE": "${env:FLUENT_WP_PASSWORD_FILE}",
        "FLUENT_WP_SITE_URL": "${env:FLUENT_WP_SITE_URL}",
        "FLUENT_WP_USER": "${env:FLUENT_WP_USER}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project's .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "fluent-wp-app-password",
      "description": "Dedicated WordPress Application Password (leave empty for a private password file)",
      "password": true
    },
    {
      "type": "promptString",
      "id": "fluent-wp-password-file",
      "description": "Optional private password-file path (leave empty for Application Password)"
    },
    {
      "type": "promptString",
      "id": "fluent-wp-site-url",
      "description": "Trusted HTTPS WordPress site root"
    },
    {
      "type": "promptString",
      "id": "fluent-wp-user",
      "description": "Intended WordPress username"
    }
  ],
  "servers": {
    "fluent-wp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@thenavidm/fluent-wp-mcp-cli@latest"
      ],
      "env": {
        "FLUENT_WP_APP_PASSWORD": "${input:fluent-wp-app-password}",
        "FLUENT_WP_PASSWORD_FILE": "${input:fluent-wp-password-file}",
        "FLUENT_WP_SITE_URL": "${input:fluent-wp-site-url}",
        "FLUENT_WP_USER": "${input:fluent-wp-user}"
      }
    }
  }
}
~~~

Start Fluent WordPress through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Fluent WordPress in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "fluent-wp": {
      "command": "npx",
      "args": [
        "-y",
        "@thenavidm/fluent-wp-mcp-cli@latest"
      ],
      "env": {
        "FLUENT_WP_APP_PASSWORD": "YOUR_PRIVATE_APP_PASSWORD",
        "FLUENT_WP_PASSWORD_FILE": "",
        "FLUENT_WP_SITE_URL": "https://YOUR-PRIVATE-SITE.example",
        "FLUENT_WP_USER": "YOUR_PRIVATE_WORDPRESS_USERNAME"
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private site/user/password values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/fluent-wp-mcp-cli.git
cd fluent-wp-mcp-cli
docker build -t fluent-wp-mcp-cli .
docker run --rm -i -e FLUENT_WP_SITE_URL -e FLUENT_WP_USER -e FLUENT_WP_APP_PASSWORD fluent-wp-mcp-cli
```


## Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/fluent-wp-mcp-cli@latest`, stdio transport, and private local FLUENT_WP_SITE_URL/FLUENT_WP_USER and FLUENT_WP_APP_PASSWORD or FLUENT_WP_PASSWORD_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; use Fluent WordPress's official server rather than this local stdio command.



## Verify

```bash
fluent-wp-cli --version
fluent-wp-cli tools
fluent-wp-cli list-accounts --agent
fluent-wp-cli doctor
fluent-wp-cli doctor --network
fluent-wp-cli fcrm-list-contacts --per-page 1 --agent --select data.id
```

Credential-free discovery, native request fixtures and direct full/read-only guard checks are separate from actual provider validation. A positive current-user read establishes neither ownership nor every Fluent permission. Authenticated plugin outcomes, desktop GUI installation and matched successful Codex task/token results remain unverified until independently exercised.

## Multiple accounts

FLUENT_WP_ACCOUNTS is a private JSON array of unique {name,site_url,username,app_password,password_file} entries. Choose one password method per profile. Each site requires its own URL, user and credential; a selected profile never falls back to global settings or another site after a missing password or 401/403. FLUENT_WP_DEFAULT_ACCOUNT and --account select an exact label.

list_accounts returns labels, the default and credential source only. It does not reveal site URLs, usernames, password paths or credentials, make requests, or prove provider ownership. Password files are cached until restart. Review hashes bind the selected label, normalized site URL, username, ordered inputs/requests and packaged schema; they do not bind a password fingerprint or validate server state.



```bash
fluent-wp-cli list-accounts --agent
fluent-wp-cli fcrm-list-contacts --account work --per-page 1 --agent
```

## Updates and removal

Use npx -y @thenavidm/fluent-wp-mcp-cli@latest for fresh client launches, then reconnect/restart. Global installs require npm update -g @thenavidm/fluent-wp-mcp-cli. Desktop extensions require installing the newly versioned archive. Read the major migration table before replacing old script arguments. Remove only the requested registration, skill, package or extension. Revoke Application Passwords separately; private snapshots and provider changes remain.

```bash
npm update -g @thenavidm/fluent-wp-mcp-cli
fluent-wp-cli --version
# Removal only when requested
codex mcp remove fluent-wp
npm uninstall -g @thenavidm/fluent-wp-mcp-cli
```

## Troubleshooting

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

## Development

```bash
git clone https://github.com/thenavidm/fluent-wp-mcp-cli.git
cd fluent-wp-mcp-cli
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run check:discovery
npm run sync:api -- --check
npm run build:mcpb
```

Source mode registers node /absolute/path/fluent-wp-mcp-cli/dist/index.js after a build. Credentials remain outside the checkout and archive. [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md) and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) cover reports, development and licensing.
