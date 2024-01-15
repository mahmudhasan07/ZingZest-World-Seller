import { useRef } from "react";


const Home = () => {
    const textSplit = useRef()
    const handleSplit = (e) => {
        const name = textSplit.current.value
        const array = name.split(",")
        console.log(array);
        const array1 = [5, 6, 7, 8, 9, 9, 8, 7, 6, 5]
        const array2 = ['jan', "march", "april", "may"]
    array1.splice(2,1)
    array2.splice(1, 0,"feb")
    console.log(array1);
    console.log(array2);
    const date = new Date()
    // console.log(date);
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()
    console.log(day,-month,-year);
}
    return (
        <div>
            <input ref={textSplit} type="text" className="border-2" id="input" name="text-split" />
            <button className="btn" onClick={handleSplit}>Done</button>
        </div>
    );
};

export default Home;