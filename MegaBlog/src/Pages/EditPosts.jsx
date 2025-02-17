import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import service from "../../Appwrite/Config";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPosts() {
    const [post, setPost] = useState(null); 
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");  
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : <p className="text-center">Loading...</p>;
}
