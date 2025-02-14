import React from "react";
import { Link } from "react-router-dom";
import service from "../../Appwrite/Config";

export default function PostCard({ post }) {
    if (!post) return null;
    return (
        <Link to={`/post/${post.$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={post.featuredImage ? service.getFilePreview(post.featuredImage) : "https://via.placeholder.com/300"}
                        alt={post.title || "Post Image"}
                        className="rounded-xl"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                    />
                </div>
                <h2 className="text-xl font-bold">{post.title}</h2>
            </div>
        </Link>
    );
}

