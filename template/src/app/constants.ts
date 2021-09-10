//Hearthstone Game Events
//@see Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.

//Heathstone Game Features
//@see https://overwolf.github.io/docs/api/overwolf-games-events-hearthstone
export const REQUIRED_FEATURES = [
  'gep_internal',
  'scene_state',
  'collection',
  'decks',
  'match',
  'match-info',
]

// register gep events
export const REGISTER_RETRY_TIMEOUT = 10000

//same name in the public/app/manifest.json  "windows"
export const WINDOW_NAMES = {
  BACKGROUND: 'background',
  SETTINGS: 'settings',
  DEVELOPMENT: 'development',
  INGAME: 'in_game',
  DESKTOP: 'desktop',
}

//overwolf-hooks logs
export const OVERWOLF_HOOKS_OPTIONS = {
  displayLog: process.env.NODE_ENV === 'production',
}
