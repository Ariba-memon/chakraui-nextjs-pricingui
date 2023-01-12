"use client";
import { Button, Link } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Button colorScheme='blue'>Hello World from Ariba Memon!</Button>
      <Button colorScheme='cyan'><Link href="/name">Go to AboutUs page</Link></Button>
    </div>
  )
}