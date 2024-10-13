
import Link from "next/link";



export default function PostCard(props) {
    const { id, title, picture, description } = props;
    return (
        <div class="bg-white rounded-md shadow-lg p-3 flex flex-col justify-between">
            <div class="relative overflow-hidden">
                <Link href={`/product/${id}`}>
                    <img class="object-cover w-full h-full" src={picture} alt="Product" />
                    {/* <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"></button>
                    </div> */}
                </Link>
            </div>
            <div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">{title}</h3>
                <p class="text-gray-500 text-sm mt-2">{description}</p>
            </div>
            <div  class="flex items-center justify-between mt-4 ">
                <span class="text-gray-900 font-bold text-lg">Likes</span>
                <button class="bg-[#F3A847] text-white py-2 px-4 rounded-full font-bold hover:bg-[#bb7111]">Read more</button>
            </div>
        </div>
    );
}
