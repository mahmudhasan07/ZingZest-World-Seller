import { useRef } from "react";
import seller from "../../../public/seller.json";



const Home = () => {
 
    return (
        <section className="relative">
            <div>
            <div className="bg-gray-300">
                {/* <svg className="absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0040ff" fillOpacity="1" d="M0,224L18.5,224C36.9,224,74,224,111,234.7C147.7,245,185,267,222,272C258.5,277,295,267,332,261.3C369.2,256,406,256,443,213.3C480,171,517,85,554,80C590.8,75,628,149,665,165.3C701.5,181,738,139,775,106.7C812.3,75,849,53,886,64C923.1,75,960,117,997,160C1033.8,203,1071,245,1108,266.7C1144.6,288,1182,288,1218,282.7C1255.4,277,1292,267,1329,261.3C1366.2,256,1403,256,1422,256L1440,256L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg> */}
                
                <img className="relative w-60 h-60 border-2 rounded-full object-top" src="https://i.ibb.co/Z86Rw6K/IMG-20231205-02182322.jpg" alt="" />
                <h1>Mahmud Hasan Siddique</h1>
            </div>
            <div >
                <div><h1>Your Info</h1> <h1>Edit</h1></div>
                <h1>Name</h1>
                <p>Mahmud</p>
                <h1>Mobile Number </h1>
                <p></p>
                <h1>Shop Address </h1>
                <p></p>


            </div>
            </div>
        </section>
    );
};

export default Home;