import Head from 'next/head';
import Link from 'next/link';

function Home() {
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
            </div>
        </>
    )
}

export default Home