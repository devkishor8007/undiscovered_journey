import { Container, Text, Stack, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

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
            Change Language
          </MenuButton>
          <MenuList>
            <MenuItem>Germany</MenuItem>
            <MenuItem>English</MenuItem>
            <MenuItem>Spanish</MenuItem>
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

