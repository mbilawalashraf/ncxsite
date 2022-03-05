import { useRouter } from "next/dist/client/router";

function Review() {
    const router = useRouter()
    const { productId, reviewId } = router.query

    return <h1>Review {reviewId} for product {productId}</h1>

}

export default Review;