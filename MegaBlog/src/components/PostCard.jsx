import React from "react";
import { Link } from "react-router-dom";
import service from "../../Appwrite/Config";
import parse from "html-react-parser";
export default function PostCard({ post }) {
    if (!post) return null;

    return (
        <Link to={`/post/${post.$id}`}>
            <div className=" w-80 h-96 bg-slate-700  border-collapse rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-52 flex justify-center items-center mb-4 overflow-hidden rounded-xl">
                    <img
                        src={post.featuredImage ? service.getFilePreview(post.featuredImage) : "https://via.placeholder.com/300"}
                        alt={post.title || "Post Image"}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                    />
                </div>
                <h2 className="text-lg text-white  font-bold  truncate">{post.title}</h2>
                <h2 className="text-lg text-white truncate overflow-y-scroll">{parse(post.content)}</h2>
            </div>
        </Link>
    );
}
