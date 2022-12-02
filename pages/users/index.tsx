import React from 'react'
import {
    LayoutWrapper,
} from "@pankod/refine-core";

const Users = ({ sale }: any) => {
    console.log(sale);
    return (
        <LayoutWrapper>
            <div>hi,
                This page is redering
            </div>
        </LayoutWrapper>
    )
}

export async function getStaticProps() {

    const rawData = await fetch(
        "https://next-section5-bcbe4-default-rtdb.firebaseio.com/sales.json"
    );
    const data = await rawData.json();
    const transformedSale = [];

    for (const key in data) {
        transformedSale.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
        });
    }

    console.log("in server", transformedSale);

    return {
        props: {
            sale: transformedSale,
        },
        revalidate: 10,
    }
}

export default Users