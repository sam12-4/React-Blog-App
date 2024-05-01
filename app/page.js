"use client" //new component will be made in next js
import { Client, Databases, ID } from "appwrite";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6631e78a0025d40a59c6");

  const databases = new Databases(client);
  const [blogs, setBlogs] = useState([])

  let promise = databases.listDocuments(
    "6631ed8100230d44f9eb",
    "6631ed940004a38777f3",
    []
  );

  promise.then(function (response) {
    setBlogs(response.documents)
  }, function (error) {
    console.log(error);
  });

  function truncateHTML(htmlString) {
    // Remove HTML tags from the string
    const text = htmlString.replace(/<[^>]*>/g, '');

    // Extract the first 100 characters
    const truncatedText = text.slice(0, 50);

    // Add '...' if the length exceeds 100 characters
    if (text.length > 50) {
      return truncatedText + '...';
    } else {
      return truncatedText;
    }
  }

  // const promise = databases.createDocument(
  //   '6631ed8100230d44f9eb',
  //   '6631ed940004a38777f3',
  //   ID.unique()

  // )
  // promise.then(
  //   function (response) {
  //     console.log(response);
  //   },
  //   function (error) {
  //     console.log(error);
  //   }
  // );
  return <>
    <Navbar />
    <div className="grid gap-6 p-4 mx-0 md:mx-10 ">
      <div className="col-span-full text-2xl font-bold mb-4">Latest Blogs</div>
      {blogs.length === 0 && <div className="col-span-full text-center">Loading...</div>}
      {blogs.map((blog, index) => (
        <BlogCard key={index}
          {...blog} metaDesc={truncateHTML(blog.content)}
        />
      ))}
    </div>
  </>


}
