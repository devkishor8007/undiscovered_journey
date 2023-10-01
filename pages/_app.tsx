import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { initReactI18next, I18nextProvider } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        // english
        translation: require('../locales/en.json')
      },
      de: {
        // germany
        translation: require('../locales/de.json')
      },
      es: {
        // spanish
        translation: require('../locales/es.json')
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </I18nextProvider>
    </Provider>
  )
}
