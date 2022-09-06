import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

export default function Products() {
    const [products, setProducts] = useState<any>(null);

    useEffect(() => {
        fetch('/api/products')
        .then((res: any) => res.json())
        .then((products) => setProducts(products))
    }, []);

    // placeholders
    if (products === null) {
        return (
            <Box>
            <Box sx={{ pl: 5, pt: 5, display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant="h4" >
                    Available products
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                {[...Array(5)].map((x, i) =>
                    <ProductCardSkeleton
                        key={i}
                        width={210}
                    />
                )}
            </Box>
        </Box>
        );
    }

    // "real" products
    return (
        <Box>
            <Box sx={{ pl: 5, pt: 5, display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant="h4" >
                    Available products
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                {products.map((product: any) => {
                    return (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            img={product.img}
                            prive={product.price}
                        />
                    );
                })}
            </Box>
        </Box>
    );
}