// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import * as React from "react";

// export * from "./Link";
import { Button, Card as ChakraCard, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup } from "@chakra-ui/react";
import * as React from "react";
import { useStore } from "store";

export const Card: React.FunctionComponent = () => {
  const { movies, addMovie } = useStore();
  return (
    <ChakraCard maxW='sm'>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $450{movies.length}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue' onClick={() => addMovie({ title: 'movie 1', image: 'Movie image' })}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
};
