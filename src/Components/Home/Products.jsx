import { useContext } from "react";
import useFetch1 from "../Hooks/useFetch1";
import { Context } from "../ContextAPI/ContextAPI";


const Products = () => {
    const { user } = useContext(Context)
    const [data, refetch] = useFetch1("items", user?.email)
    console.log(data);
    return (
        <section>
            <div className="flex justify-center border-2 p-2 flex-wrap gap-10">
                {
                    data == "l" ?
                        "loading"
                        :
                        data.length >0 ?
                        data.map((element, idx) => <Product key={idx} card={element}></Product>)
                        :
                        "No Product Added"
                }

            </div>
        </section>
    );
};

const Product = ({ card }) => {
    return (
        <section className="">
            <div className="card border-2 border-gray-600 h-full  w-52 p-3">
                <img src={card?.allImages[0]} className="w-full border-2 border-gray-300 h-32 object-contain rounded-2xl mb-5" alt="" />
                <h1 className="text-lg ">{card?.name}</h1>
                {/* <h1 className="text-xl "><span className="font-bold">Brand :</span> {card?.brand}</h1>
                <p className="text-xl"><span className="font-bold">Price :</span> {card?.price}</p> */}
                <button className="btn text-lg mt-auto btn-sm my-2">Details</button>
            </div>
        </section>
    )
}

export default Products;