<script lang="ts">
  import { safeEnv } from '$lib/utils/safe-env';
  import { onMount, tick } from 'svelte';
  import jwtDecode from 'jwt-decode';
  import { parseCookie } from '$lib/utils/cookie-management';

  const APP_ID = safeEnv('VITE_DD_APPLICATION_ID');
  const CLIENT_TOKEN = safeEnv('VITE_DD_CLIENT_TOKEN');
  const DD_SITE = safeEnv('VITE_DATADOG_SITE');
  const DD_ENV = safeEnv('VITE_DD_ENV');
  const SAMPLE_RATE = parseInt(safeEnv('VITE_DD_SAMPLE_RATE', { fallback: '0' }));
  const REPLAY_SAMPLE_RATE = parseInt(safeEnv('VITE_DD_REPLAY_SAMPLE_RATE', { fallback: '0' }));
  const TRACK_INTERACTIONS = safeEnv('VITE_DD_TRACK_INTERACTIONS');

  onMount(async () => {
    if (safeEnv('VITE_DD_RUM_ENABLED') === 'true') {
      await tick();
      const win = window as Window;

      if (win.DD_RUM) {
        await win.DD_RUM.init({
          applicationId: APP_ID,
          clientToken: CLIENT_TOKEN,
          site: DD_SITE,
          env: DD_ENV,
          sampleRate: SAMPLE_RATE,
          replaySampleRate: REPLAY_SAMPLE_RATE,
          trackInteractions: TRACK_INTERACTIONS,
          silentMultipleInit: true,
          defaultPrivacyLevel: 'mask-user-input',
        });

        win.DD_RUM.onReady(() => {
          const { idToken } = parseCookie(document.cookie);
          if (idToken) {
            try {
              const userId = jwtDecode<Record<string, string>>(idToken).customer_id;
              win.DD_RUM.setUser({
                id: userId,
              });
            } catch (err) {
              return;
            }
          }
        });

        win.DD_RUM.startSessionReplayRecording();
      }
    }
  });
</script>

<svelte:head
  ><script async src="https://www.datadoghq-browser-agent.com/datadog-rum-v4.js" type="text/javascript">
  </script>
</svelte:head>
