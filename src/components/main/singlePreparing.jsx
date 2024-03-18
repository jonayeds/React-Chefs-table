/* eslint-disable react/prop-types */

const SinglePreparing = ({singlePreparing, length}) => {
    
    return (
        <tr className="h-24 bg-gray-100 text-gray-700 font-semibold">
                <td className="w-12">{length+1}</td>
                <td className="w-24 ">{singlePreparing.recipe_name}</td>
                <td className="w-30">{singlePreparing.preparing_time}<br /> minutes</td>
                <td>{singlePreparing.calories}<br /> calories</td>
            </tr>
    );
};

export default SinglePreparing;