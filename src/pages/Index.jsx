import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Stack, IconButton, Flex, Badge } from "@chakra-ui/react";
import { FaShoppingCart, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const desserts = [
  {
    id: 1,
    name: "Unicorn Cake Pop",
    description: "Magical cake pop with colorful sprinkles",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHVuaWNvcm4lMjBjYWtlJTIwcG9wfGVufDB8fHx8MTcxMjgzNTg2OXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Rainbow Macarons",
    description: "Assorted flavors of delightful French macarons",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1624715136693-c06de266b622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWluYm93JTIwbWFjYXJvbnN8ZW58MHx8fHwxNzEyODM1ODY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Cosmic Brownie",
    description: "Fudgy brownie topped with galaxy frosting",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBicm93bmllJTIwd2l0aCUyMGdhbGF4eSUyMGZyb3N0aW5nfGVufDB8fHx8MTcxMjgzNTg3MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Emoji Sugar Cookies",
    description: "Vanilla sugar cookies with fun emoji designs",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1658179730515-eb39a5dae884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbW9qaSUyMHN1Z2FyJTIwY29va2llc3xlbnwwfHx8fDE3MTI4MzU4NzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" p={4} bg="purple.500" color="white">
        <Heading size="xl">Sweet Treats</Heading>
        <Flex align="center">
          <IconButton aria-label="Shopping Cart" icon={<FaShoppingCart />} variant="ghost" color="white" mr={2} />
          <Badge colorScheme="pink">{cartItems}</Badge>
        </Flex>
      </Flex>

      <Box p={8}>
        <Heading size="2xl" mb={4}>
          Welcome to Sweet Treats! 🍰🦄
        </Heading>
        <Text fontSize="xl" mb={8}>
          Indulge in our magical desserts that will make your taste buds dance! 🌈✨
        </Text>

        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {desserts.map((dessert) => (
            <Box key={dessert.id} borderWidth={1} borderRadius="lg" p={4}>
              <Image src={dessert.image} alt={dessert.name} mb={4} />
              <Heading size="lg">{dessert.name}</Heading>
              <Text mb={2}>{dessert.description}</Text>
              <Text fontWeight="bold" mb={4}>
                ${dessert.price}
              </Text>
              <Button colorScheme="pink" onClick={addToCart}>
                Add to Cart
              </Button>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box bg="gray.100" p={8}>
        <Heading size="xl" mb={4}>
          Follow us on social media! 📱
        </Heading>
        <Stack direction="row" spacing={4}>
          <IconButton aria-label="Instagram" icon={<FaInstagram />} colorScheme="pink" size="lg" />
          <IconButton aria-label="Facebook" icon={<FaFacebook />} colorScheme="facebook" size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} colorScheme="twitter" size="lg" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
