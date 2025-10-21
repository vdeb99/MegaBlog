import React from "react";
import { Logo, Container, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Profile", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];
  function goBack() {
    navigate(-1);
  }
  return (
    <header className="py-3 shadow bg-blue-950">
      <Container>
        <nav className="flex">
          <div className="mr-4 flex justify-between">
            <button
              onClick={goBack}
              className="flex items-center gap-2 px-4 py-2 rounded-full  shadow-md  hover:bg-blue-700 duration-200"
            >
              <ChevronLeftIcon className="w-5 h-5 text-white" />

            </button>
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2  hover:bg-blue-700  rounded-full text-white"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
