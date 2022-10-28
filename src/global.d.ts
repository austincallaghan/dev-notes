/// <reference types="@sveltejs/kit" />

declare interface Window {
  DD_RUM: {
    init: (config) => void;
    startSessionReplayRecording: () => void;
    onReady: (fn: () => void) => void;
    setUser: ({ id: string }) => void;
  };
  dataLayer?: unknown[];
  _property?: Record<string, unknown>;
  gtag?(...args: unknown[]): void;
}
