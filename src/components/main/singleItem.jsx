/* eslint-disable react/prop-types */

const SingleItem = ({singleItem,length, handlePreparing}) => {
    
    // console.log(singleItem)
    
    return (
        <tr className="h-24 bg-gray-100 text-gray-700 font-semibold">
                <td className="w-12">{length+1}</td>
                <td className="w-24">{singleItem.recipe_name}</td>
                <td className="w-24">{singleItem.preparing_time}<br /> minutes</td>
                <td>{singleItem.calories}<br /> calories</td>
                <td> <button className="text-black bg-green-400 px-5 py-3 rounded-full font-bold" onClick={()=>handlePreparing(singleItem)}>Preparing</button></td>
            </tr>

    );
};

export default SingleItem;