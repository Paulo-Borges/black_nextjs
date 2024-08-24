export type ProductType = {
    id: number 
    name: string 
    description: string 
    price: number 
    imageUrl: string 
    inStock: number
}


export const fetchproducts = async () => {
    const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`).then(res => res.json())
    return products
}

export const fetchproduct = async (id: string | number ) => {
    const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`).then(res => res.json())
    return product
}