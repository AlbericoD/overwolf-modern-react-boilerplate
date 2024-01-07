import { Title } from "components/Title/Title";
import { useTranslation } from "react-i18next";
import { DesktopHeader } from "./DesktopHeader";
import "./styles/Screen.css";

//avoid the use of static text, use i18n instead, each language has its own text, and the text is stored in the
//locales folder in the project root
const Screen = () => {
  const { t } = useTranslation();

  return (
    <div className='desktop'>
      <DesktopHeader />
      <div className={"desktop__container"}>
        <header className={"desktop__header"}>
          <Title color='white'>
            Current Locale: <b>{t("common.language")} 🌐</b>
            <br />
            {t("components.desktop.header")}
          </Title>
        </header>
        <main className={"desktop__main"}>
          <Title color='white'>{t("components.desktop.main")}</Title>
        </main>
        <aside className={"desktop__aside"}>
          <Title color='white'>{t("components.desktop.aside")}</Title>
        </aside>
        <footer className={"desktop__footer"}>
          <Title color='white'>{t("components.desktop.footer")}</Title>
        </footer>
      </div>
    </div>
  );
};

export default Screen;
