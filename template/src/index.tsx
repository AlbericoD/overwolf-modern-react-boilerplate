import "./overwolf.dev.mock";
import store from "app/store";
import i18next from "i18next";
import { resources } from "locales";
import React from "react";
import ReactDOM from "react-dom";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { App } from "./app/App";
import reportWebVitals from "./reportWebVitals";

overwolf.settings.getCurrentOverwolfLanguage((result) => {
  i18next.use(initReactI18next).init(
    {
      resources,
      lng: result.language,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    },
    () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById("root")
      );
    }
  );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
