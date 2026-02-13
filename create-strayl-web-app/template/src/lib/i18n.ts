import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      tagline: 'Build end to end',
      description: 'Create your app with AI. Describe your idea — Strayl will build, deploy, and host it for you. No coding required.',
      deployButton: 'Deploy to Strayl',
      beginJourney: 'Begin your journey by asking the agent to edit your app',
      toggleTheme: 'Toggle theme',
      language: 'Language',
      languages: {
        en: 'English',
        ru: 'Русский',
        kk: 'Қазақша',
      },
    },
  },
  ru: {
    translation: {
      tagline: 'Создавай от начала до конца',
      description: 'Создайте приложение с помощью ИИ. Опишите идею — Strayl соберёт, задеплоит и захостит его за вас. Код писать не нужно.',
      deployButton: 'Деплой на Strayl',
      beginJourney: 'Начните путь, попросив агента отредактировать ваше приложение',
      toggleTheme: 'Сменить тему',
      language: 'Язык',
      languages: {
        en: 'English',
        ru: 'Русский',
        kk: 'Қазақша',
      },
    },
  },
  kk: {
    translation: {
      tagline: 'Басынан аяғына дейін құр',
      description: 'AI көмегімен қосымша жасаңыз. Идеяңызды сипаттаңыз — Strayl оны құрастырып, орналастырып, хостинг жасайды. Код жазу қажет емес.',
      deployButton: 'Strayl-ға орналастыру',
      beginJourney: 'Агенттен қосымшаңызды өңдеуді сұрап, саяхатыңызды бастаңыз',
      toggleTheme: 'Тақырыпты ауыстыру',
      language: 'Тіл',
      languages: {
        en: 'English',
        ru: 'Русский',
        kk: 'Қазақша',
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'kk'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
