import Link from "next/dist/client/link"

function ProductList() {
    return (
        <>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h2>
                <Link href='/product/1'>
                    Product 1    
                </Link>
            </h2>
            <h2>
                <Link href='/product/2'>
                    Product 2    
                </Link>
            </h2>
            <h2>
                <Link href='/product/3'>
                    Product 3    
                </Link>
            </h2>
        </>
    )
}

export default ProductList