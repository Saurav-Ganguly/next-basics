export default function ProductDetails({params, searchParams}) {
    return <div>Product Details Page : {params.details} || {searchParams.search} || {searchParams.randomvalue}</div>
}