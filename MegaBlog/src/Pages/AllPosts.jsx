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
            setPosts([]);
        }
    });
}, []);


  return (
    <div className="py-8">
      <Container>
            <div className="flex flex-wrap gap-6">
              {posts.length > 0 ? (
                  posts
                      .filter((post) => post && post.$id) 
                      .map((post) => (
                          <div key={post.$id} className="p-2 w-1/4">
                              <PostCard post={post} />
                          </div>
                      ))
              ) : (
                  <p>No posts available.</p> 
              )}
          </div>

      </Container>
    </div>
  );
}
