export default function ProductReview({params}) {
    console.log(params);
    return <div>Product Review Page : {params['product-review'][0]} || {params['product-review'][1]}</div>
}