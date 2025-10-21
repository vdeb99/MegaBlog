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
        <div className="flex flex-wrap justify-normal gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}
