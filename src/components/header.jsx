import Banner from "./banner";

const Header = () => {
    return (
        <>
        <div className="flex justify-between items-center mt-10 flex-col lg:flex-row gap-10">
            <h1 className="font-bold text-3xl">Recipe Calories</h1> 
            <ul className="flex gap-4 list-none font-semibold">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <div className="flex gap-4"><input type="text" className="bg-gray-200 rounded-full px-4 focus:outline-none py-2 text-black bg-[url('https://i.ibb.co/p36zFNQ/search.png')] bg-no-repeat bg-left   focus:bg-none pl-8" placeholder="Search"  />
            <button className="p-2 bg-green-400 rounded-full"><img src="https://i.ibb.co/MSKhcdz/Vector.png" alt="" className=""/></button></div>
        </div>
        <div className="mt-24">
            <Banner></Banner>
        </div>
        </>
    );
};

export default Header;