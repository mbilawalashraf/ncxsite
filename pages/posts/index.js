import Link from "next/dist/client/link";


function PostList({ posts }) {
    return (
        <>
            <Link href='/'>
                <a>Home</a>    
            </Link>
            <h1>Posts List Page</h1>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h2>
                                {post.id} {post.title}    
                            </h2>   
                        </Link> 
                    </div>
                )
            })}
        </>
    )
}

export default PostList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}