import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';
const { version } = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/);

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: '__MSG_appName__',
  description: '__MSG_appDesc__',
  default_locale: 'en',
  version: `${major}.${minor}.${patch}.${label}`,
  version_name: version,
  permissions: [
    //
    'activeTab',
    'declarativeNetRequest',
    'scripting',
    'storage',
    'identity',
    'https://*.google.com/',
  ],
  action: {
    default_popup: 'index.html',
  },
  background: {
    service_worker: 'src/background/background.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['https://*.google.com/*'],
      js: ['src/contentScript/index.tsx'],
      run_at: 'document_idle',
    },
  ],
  host_permissions: ['https://*.google.com/*'],
  declarative_net_request: {
    rule_resources: [
      {
        id: 'filter_security_headers',
        enabled: true,
        path: 'src/configs/header_rules.json',
      },
    ],
  },

  icons: {
    '16': 'vite.svg',
    '48': 'vite.svg',
    '128': 'vite.svg',
  },
  commands: {
    start_recording: {
      suggested_key: {
        default: 'Alt+Shift+R',
        mac: 'Command+Shift+R',
      },
      description: 'Start MeetNote',
    },
    stop_recording: {
      suggested_key: {
        default: 'Alt+Shift+S',
        mac: 'Command+Shift+S',
      },
      description: 'Stop MeetNote',
    },
  },
}));
