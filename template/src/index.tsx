import './overwolf.dev.mock'
import store from 'app/store'
import i18next from 'i18next'
import { resources } from 'locales'
import ReactDOM from 'react-dom'
import { initReactI18next } from 'react-i18next'
import { Provider } from 'react-redux'
import { App } from './app/App'
import reportWebVitals from './reportWebVitals'

/*
 * before render app, get overwolf language
 * then load resources, default to en if not detected
 * @see  https://overwolf.github.io/docs/api/overwolf-settings-language
 */
overwolf.settings.language.get(({ language }) => {
  i18next.use(initReactI18next).init(
    {
      resources,
      lng: language,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    },
    () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root'),
      )
    },
  )
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// detect change overwolf language and set i18next language
// then load resources
const changeLanguage = ({
  language,
}: overwolf.settings.language.LanguageChangedEvent) =>
  i18next.changeLanguage(language)

overwolf.settings.language.onLanguageChanged.removeListener(changeLanguage)
overwolf.settings.language.onLanguageChanged.addListener(changeLanguage)
