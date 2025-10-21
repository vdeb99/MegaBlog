import React, { useEffect, useState } from "react";
import service from "../../Appwrite/Config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
export default function Profile() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  const userId = userData ? userData.$id : null;

  useEffect(() => {
    service
      .getPosts([])
      .then((posts) => {
        if (posts) {
          const filterPosts = posts.documents.filter(
            (post) => post.userId === userId
          );
          setPosts(filterPosts);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
      });
  }, [userId]);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl  text-gray-100">
                Post section is empty. Please add a post.
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
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
