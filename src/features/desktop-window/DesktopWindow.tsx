import React, { FC, useEffect } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { Title } from "components/Title";
import style from "./DesktopWindow.module.css";
import { useTranslation } from "react-i18next";

const DesktopWindow: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <DesktopHeader />
      <div className={style.container}>
        <header className={style.header}>
          <Title color="green">Desktop Window</Title>
        </header>
        <main className={style.main}>
          <Title color="white">{t("common.language")}</Title>
        </main>
        <aside className={style.aside}>
          <Title color="white">{t("common.language")}</Title>
        </aside>
        <footer className={style.footer}>
          <Title color="white">Footer</Title>
        </footer>
      </div>
    </>
  );
};

export default DesktopWindow;
