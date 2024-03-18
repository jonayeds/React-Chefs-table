
const Banner = () => {
    return (
        <div className="text-center bg-[url('https://i.ibb.co/syY3m26/Rectangle1.png')] text-white rounded-2xl lg:px-20 px-8 py-36 bg-no-repeat bg-top bg-cover">
            <h1 className="lg:text-5xl text-4xl font-bold">Discover an exceptional cooking <br />
class tailored for you!</h1>
<p className="mt-12 font-semibold text-gray-200">Join us at Culinary Delights Cooking Class and embark on a culinary adventure that will tantalize your taste bud <br /> and leave you inspired to create culinary masterpieces in your own kitchen. <br /> Lets cook, learn, and savor the joy of delicious food together!</p>
<div className="mt-12 flex justify-center gap-5">
    <button className="text-black bg-green-400 px-5 py-3 rounded-full font-bold">Explore Now</button>
    <button className="  px-5 py-3 rounded-full font-semibold border-solid border-white border-[1px]">Our Feedback</button>
</div>
        </div>
    );
};

export default Banner;