import { Container, Text, Stack, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={500}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        >Exploring the Uncharted Wilderness</Heading>
        <Text>Embark on an adventurous journey through unexplored landscapes, where every step unveils the beauty of nature and the mysteries of the unknown. Immerse yourself in the tranquility of pristine forests, discover hidden waterfalls, and encounter fascinating wildlife. This is an expedition for those who seek the thrill of the untamed and the wonder of the undiscovered.</Text>

        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            colorScheme={'orange'}
            bg={'orange.400'}
          >Get Started</Button>
          <Link href={'/contact'}>
          <Button rounded={'full'}>Contact Us</Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

