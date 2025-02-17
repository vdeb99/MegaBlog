import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import service from "../../Appwrite/Config";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
        console.log("Fetched posts:", posts);
        if (posts && posts.documents) {
            setPosts(posts.documents);
        } else {
            setPosts([]); // Ensure it's always an array
        }
    });
}, []);


  return (
    <div className="py-8">
      <Container>
            <div className="flex flex-wrap">
              {posts.length > 0 ? (
                  posts
                      .filter((post) => post && post.$id) // Ensure each post is valid
                      .map((post) => (
                          <div key={post.$id} className="p-2 w-1/4">
                              <PostCard post={post} />
                          </div>
                      ))
              ) : (
                  <p>No posts available.</p> // Show fallback message
              )}
          </div>

      </Container>
    </div>
  );
}
