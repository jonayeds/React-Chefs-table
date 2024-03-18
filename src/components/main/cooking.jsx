/* eslint-disable react/prop-types */

import SingleItem from "./singleItem";
import SinglePreparing from "./singlePreparing";

const Cooking = ({singleItem, handlePreparing, preparing}) => {
    let totalCalories = 0 
    let totalTime = 0   
    preparing.map(item => totalCalories +=parseInt(item.calories))
    preparing.map(item => totalTime += parseInt(item.preparing_time))
    return (
        <div className="   border-gray-300  border-solid border-[1px] rounded-2xl">
            <div className="lg:px-12 px-0 py-8">
            <h1 className="mb-4 text-center text-2xl font-bold ">Want to cook: 0{singleItem.length}</h1>
            < hr  />
            </div>
            
           <table className="lg:w-[450px] w-[350px] text-center border-solid border-[-px] border-gray-500 mx-auto">
            <thead>
            <tr className="font-semibold text-gray-500 h-12 text-lg">
                <td></td>
                <td>Name</td>
                <td>Time</td>
                <td>Calories</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {
                singleItem.map((item,index) => <SingleItem singleItem ={item} key={index} length={singleItem.indexOf(item)} handlePreparing={handlePreparing}></SingleItem>)
            }
            
            </tbody>
           </table>
           <div className="mt-10">
           <div className="lg:px-12 px-0 py-8">
            <h1 className="mb-4 text-center text-2xl font-bold ">Currently Cooking: 0{preparing.length}</h1>
            < hr  />
            </div>
            <table className=" lg:w-[450px] w-[350px] text-center mt-8 mx-auto">
                <thead>
                <tr className="font-semibold text-gray-500 h-12 text-lg">
                <td></td>
                <td>Name</td>
                <td>Time</td>
                <td>Calories</td>
                
            </tr>
                </thead>
                <tbody>
                    
                {
                    preparing.map((item, index)=> <SinglePreparing singlePreparing={item} length={preparing.indexOf(item)} key={index} ></SinglePreparing>)
                }
                </tbody>
                <tfoot className="font-bold text-gray-500 text-lg h-24">
                <td></td>
                <td></td>
                <td>Total Time <br /> {totalTime} min</td>
                <td>Total Calories <br /> {totalCalories}</td>
                
                </tfoot>
            </table>
           </div>

        </div>
        
    );
};

export default Cooking;