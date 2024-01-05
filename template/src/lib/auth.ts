const enum ThirdPartyProvider {
  Google = "google",
  Spotify = "spotify",
  Twitch = "twitch",
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
  if (process.env.NODE_ENV === "development") {
    console.log(`Redirecting to ${url}`);
    window.open(url, "_blank");
  }
  overwolf.utils.openUrlInDefaultBrowser(url);
}

export { loginWithThirdParty, ThirdPartyProvider };
