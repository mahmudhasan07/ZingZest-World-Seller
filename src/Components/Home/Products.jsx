import { useContext } from "react";
import useFetch1 from "../Hooks/useFetch1";
import { Context } from "../ContextAPI/ContextAPI";
import useFetch2 from "../Hooks/useFetch2";
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';


const Products = () => {
    const { user } = useContext(Context)
    const [data, refetch] = useFetch2("items", user?.email, "sortb-a")

    // console.log(data);
    return (
        <section className="border-2  border-gray-300 my-10 rounded-2xl bg-gray-50">
            <h1 className="text-3xl font-bold text-center my-5">Your Products</h1>
            <div className="flex justify-center p-2 flex-wrap gap-10">
                {
                    data == "l" ?
                        "loading"
                        :
                        data.length > 0 ?
                            data.slice(0, 6).map((element, idx) => <Product key={idx} id={idx + 1} card={element}></Product>)
                            :
                            "No Product Added"
                }

            </div>
        </section>
    );
};

const Product = ({ card, id }) => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay={id * 100}
            data-aos-easing="ease-in-sine" className="">
            <div className="card border-2 border-gray-600 bg-slate-100 h-full  w-52 p-3">
                <img src={card?.allImages[0]} className="w-full border-2 border-gray-300 h-32 object-contain rounded-2xl mb-5" alt="" />
                <h1 className="text-lg my-auto">{card?.name}</h1>
                {/* <p>{id}</p> */}
                {/* <h1 className="text-xl "><span className="font-bold">Brand :</span> {card?.brand}</h1>
                <p className="text-xl"><span className="font-bold">Price :</span> {card?.price}</p> */}
                <button className="btn text-lg mt-auto btn-sm my-2">Details</button>
            </div>
        </section>
    )
}

export default Products;