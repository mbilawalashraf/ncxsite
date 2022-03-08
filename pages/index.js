import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        router.push('/product')
    }

    return (
        <>
            <Head>
                <title>Price List</title>
                <meta name="description" content="NCX" />
                <link rel="icon" href="/ncx.ico" />
            </Head>
            <div>
                <h1>Home Page</h1>
                <Link href='/blog'>
                    <a>Blog</a>    
                </Link>
                <Link href='/product'>
                    <a>Products</a>    
                </Link>
                <button onClick={handleClick}>
                    Place Order    
                </button>
            </div>
        </>
    )
}

export default Home