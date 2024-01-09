import { log } from "./log";
import { isDev } from "./utils";

const enum ThirdPartyProvider {
  Google = "google",
  Spotify = "spotify",
  Twitch = "twitch",
  Custom = "custom",
  //...
}

function createUrl(provider: ThirdPartyProvider): string {
  switch (provider) {
    case ThirdPartyProvider.Google:
      return `dev_url_to_mount`;
    // ...
    default:
      return "";
  }
}

function loginWithThirdParty(provider: ThirdPartyProvider) {
  const url = createUrl(provider);
  if (isDev) {
    log(`Redirecting to ${url}`, "src/lib/auth.ts", "loginWithThirdParty");
    window.open(url, "_blank");
  }
  overwolf.utils.openUrlInDefaultBrowser(url);
}

export { loginWithThirdParty, ThirdPartyProvider };
