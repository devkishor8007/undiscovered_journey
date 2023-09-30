import { Container, Box, VStack, FormControl, FormLabel, InputGroup, InputLeftElement, Input, Textarea, Button } from '@chakra-ui/react'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const contact = () => {
    return (
        <Container maxW={'620px'}>
            <Box
                bg="#9C70FF"
                color="white"
                borderRadius="lg"
                m={{ sm: 4, md: 16, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}
            >
                <VStack spacing={5}>
                    <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                                <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                        </InputGroup>
                    </FormControl>

                    <FormControl id="email">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                                <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                        </InputGroup>
                    </FormControl>

                    <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            borderColor="gray.300"
                            _hover={{
                                borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                        />
                    </FormControl>
                    <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                            Send Message
                        </Button>
                    </FormControl>
                </VStack>
            </Box>
        </Container>
    )
}

export default contact
