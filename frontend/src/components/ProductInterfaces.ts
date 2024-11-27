export interface Product {
    id: string;
    name: string;
    description: string;
    maxMeasure: number,
    minMeasure: number
    // Add other relevant fields
}

export interface ProductCardProps {
    product: Product;
}