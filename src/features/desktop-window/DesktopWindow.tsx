import React, { FC } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { Title } from "components/Title";
import style from "./DesktopWindow.module.css";

const DesktopWindow: FC = () => {
  return (
    <>
      <DesktopHeader />
      <div className={style.container}>
        <header className={style.header}>
          <Title color="green">Desktop Window</Title>
        </header>
        <main className={style.main}>
          <Title color="white">Main</Title>
        </main>
        <aside className={style.aside}>
          <Title color="white">Aside</Title>
        </aside>
        <footer className={style.footer}>
          <Title color="white">Footer</Title>
        </footer>
      </div>
    </>
  );
};

export default DesktopWindow;
