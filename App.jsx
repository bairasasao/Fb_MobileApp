import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./src/components/Header";
import ProfileHeader from "./src/components/ProfileHeader";
import Tabs from "./src/components/Tabs";
import Intro from "./src/components/Intro";
import Friends from "./src/components/Friends";
import Photos from "./src/components/Photos";
import Post from "./src/components/Post";
import Details from "./src/components/Details";

export default function App() {

  const user = {
    name: "Syill Jay (Say)",
    handle: "",
    friends: "257k",
    bio: "App Developer",
    avatar: "/images/avatar1.jpg", // Corrected path
    cover: "/images/cover.jpg", // Corrected path
    location: "Pagadian City",
    work: "Student / Content Creator",
    school: "West Prime Horizon Institute Inc.",
    hometown: "Pagadian City",
  };


  const posts = [
    {
      author: "Syrill Jay",
      avatar: "/images/avatar1.jpg", // Corrected path
      time: "2 hours ago",
      content: "Hello! This is my first Static Mobile App.",
      image: "",
      likes: 1523,
      comments: 346,
      shares: 1021,
    },
    {
      author: "Syrill Jay",
      avatar: "/images/avatar1.jpg", // Corrected path
      time: "13 hours ago",
      content: "Hmm?",
      image: "/images/post6.jpg", // Corrected path
      likes: 4565,
      comments: 100,
      shares: 290,
    },
    {
      author: "Baira Sasao",
      avatar: "/images/avatar5.jpg", // Corrected path
      time: "10 hours ago",
      content: "Less perfection, more authenticity.",
      image: "/images/post3.jpg", // Corrected path
      likes: 5432,
      comments: 100,
      shares: 250,
    },
    {
      author: "Cherry Magallon",
      avatar: "/images/avatar2.jpg", // Corrected path
      time: "19 hours ago",
      content: "Smile big, laugh often.",
      image: "/images/post2.jpg", // Corrected path
      likes: 7565,
      comments: 100,
      shares: 890,
    },
    {
      author: "Syrill Jay",
      avatar: "/images/avatar1.jpg", // Corrected path
      time: "4 hours ago",
      content: "Off the road, onto the adventure.",
      image: "/images/post7.jpg", // Corrected path
      likes: 2565,
      comments: 100,
      shares: 1240,
    },
    {
      author: "Cherry Magallon",
      avatar: "/images/avatar2.jpg", // Corrected path
      time: "11 hours ago",
      content: "Sassy, classy, and a little smart-assy....",
      image: "/images/post8.jpg", // Corrected path
      likes: 6565,
      comments: 120,
      shares: 680,
    },
    {
      author: "Baira Sasao",
      avatar: "/images/avatar5.jpg", // Corrected path
      time: "7 hours ago",
      content: "Do it with passion or not at all.",
      image: "/images/post9.jpg", // Corrected path
      likes: 4565,
      comments: 1056,
      shares: 1450,
    },
    
  ];

  const friends = [
    { name: "Sy Ortega", avatar: "/images/friend7.jpg" }, // Corrected path
    { name: "Baira Sasao", avatar: "/images/friend3.jpg" }, // Corrected path
    { name: "Syrill Jay", avatar: "/images/friend6.jpg" }, // Corrected path
    { name: "Baira", avatar: "/images/friend8.jpg" }, // Corrected path
    { name: "Cherry Magallon", avatar: "/images/friend5.jpg" }, // Corrected path
    { name: "Cherry", avatar: "/images/friend1.jpg" }, // Corrected path
  ];

  const photos = [
    "/images/photo1.jpg", // Corrected path
    "/images/photo2.jpg", // Corrected path
    "/images/photo3.jpg", // Corrected path
    "/images/photo4.jpg", // Corrected path
    "/images/photo5.jpg", // Corrected path
    "/images/photo6.jpg", // Corrected path
    "/images/photo7.jpg", // Corrected path
    "/images/photo8.jpg", // Corrected path
    "/images/photo9.jpg", // Corrected path
    "/images/photo10.jpg", // Corrected path
    "/images/photo11.jpg", // Corrected path
    "/images/photo12.jpg", // Corrected path
    "/images/photo13.jpg", // Corrected path
    "/images/photo14.jpg", // Corrected path
    "/images/photo15.jpg", // Corrected path
    "/images/photo16.jpg", // Corrected path
    "/images/photo17.jpg", // Corrected path
    "/images/photo18.jpg", // Corrected path
  ];

    const miniAvatars = [
      "/images/avatar1.jpg", // Corrected path
      "/images/avatar2.jpg", // Corrected path
      "/images/avatar3.jpg", // Corrected path
      "/images/avatar4.jpg", // Corrected path
      "/images/avatar5.jpg", // Corrected path
      "/images/avatar6.jpg", // Corrected path
      "/images/avatar7.jpg", // Corrected path
  ];

  return (
    <Router>
      <div className="app-root">
        <Header />
        <ProfileHeader user={user} />
        <Tabs />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Details />
                {posts.map((p, i) => (
                  <Post key={i} post={p} showCreateBox={i === 0} />
                ))}
              </div>
            }
          />
          <Route path="/intro" element={<Intro user={user} />} />
          <Route path="/photos" element={<Photos photos={photos} />} />
          <Route path="/friends" element={<Friends friends={friends} />} />
        </Routes>
      </div>
    </Router>
  );
}