import Link from "next/dist/client/link";

function Blog() {
    return (
        <>
            <Link href='/'>
                <a>Home</a>    
            </Link>
            <h1>Blog Page</h1>
        </>
    )
}

export default Blog;