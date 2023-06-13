import { SimpleGrid } from '@chakra-ui/react'
import { Card } from 'card'
import React from 'react'
import { useStore } from "store";
const CardList = () => {
    return (
        <>
            <h1>Products</h1>
            <SimpleGrid columns={4} spacing={10}>
                {[1, 2, 3, 4, 4, 5, 6, 7, 8].map(() => <Card />)}
            </SimpleGrid>
        </>

    )
}

export default CardList