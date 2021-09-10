import { DesktopHeader } from './DesktopHeader'
import { Title } from 'components/Title/Title'
import style from './DesktopWindow.module.css'
import { useTranslation } from 'react-i18next'

//avoid the use of static text, use i18n instead, each language has its own text, and the text is stored in the
//locales folder in the project root
const DesktopWindow = () => {
  const { t } = useTranslation()

  return (
    <>
      <DesktopHeader />
      <div className={style.container}>
        <header className={style.header}>
          <Title color="white">
            Current Locale: <b>{t('common.language')} 🌐</b>
            <br />
            {t('components.desktop.header')}
          </Title>
        </header>
        <main className={style.main}>
          <Title color="white">{t('components.desktop.main')}</Title>
        </main>
        <aside className={style.aside}>
          <Title color="white">{t('components.desktop.aside')}</Title>
        </aside>
        <footer className={style.footer}>
          <Title color="white">{t('components.desktop.footer')}</Title>
        </footer>
      </div>
    </>
  )
}

export default DesktopWindow
