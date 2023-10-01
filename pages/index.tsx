import {
  Container, Text, Stack, Heading, Button, Menu, MenuButton, MenuList, MenuItem,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux"
import { updatelocal } from '@/redux/slice/userSlice';

export default function Home() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch()

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
    dispatch(updatelocal(lng));
  };

  const languageMap: { [key: string]: string } = {
    en: 'English',
    de: 'Germany',
    es: 'Spanish',
  };

  const languageText = languageMap[i18n.language]

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Menu>
          <MenuButton as={Button}>
            {languageText}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => changeLanguage('de')}>Germany</MenuItem>
            <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('es')}>Spanish</MenuItem>
          </MenuList>
        </Menu>
        <Heading
          fontWeight={500}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        >{t('e-title')}</Heading>
        <Text>{t('e-description')}</Text>

        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            colorScheme={'orange'}
            bg={'orange.400'}
          >{t('get-started')}</Button>
          <Link href={'/contact'}>
            <Button rounded={'full'}>{t('contact-us')}</Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

