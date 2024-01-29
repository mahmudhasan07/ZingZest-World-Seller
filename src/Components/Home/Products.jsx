import useFetch1 from "../Hooks/useFetch1";


const Products = () => {
    const [data, refetch] = useFetch1("items")
    console.log(data);
    return (
        <section>
            <div>
                {
                    data == "l"?
                    "loading"
                    :
                    data.map((element, idx) => <Product key={idx} card={element}></Product>)
                }
            </div>
        </section>
    );
};

const Product = ({ card }) => {
    return (
        <section className="my-10">
            <div className="card border-2 border-gray-600 w-80 p-3">
                <img src={card?.allImages[0]} className=" rounded-2xl mb-5" alt="" />
                <h1 className="text-xl "><span className="font-bold">Name : </span>{card?.name}</h1>
                <h1 className="text-xl "><span className="font-bold">Brand :</span> {card?.brand}</h1>
                <p className="text-xl"><span className="font-bold">Price :</span> {card?.price}</p>
                <button className="btn text-lg my-2">Details</button>
            </div>
        </section>
    )
}

export default Products;