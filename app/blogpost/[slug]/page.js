"use client"
import React, { useState, useEffect } from "react";
import { Client, Databases, Query } from "appwrite";
import Navbar from "@/components/Navbar";

export default function Page({ params }) {
    const [blog, setBlog] = useState(null); // Initialize blog state as null
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const client = new Client()
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("6631e78a0025d40a59c6");

        const databases = new Databases(client);

        let promise = databases.listDocuments(
            "6631ed8100230d44f9eb",
            "6631ed940004a38777f3",
            [
                Query.equal('slug', params.slug)
            ]
        );

        promise.then(function (response) {
            setBlog(response.documents[0]);
            setLoading(false); // Set loading state to false after data is fetched
        }, function (error) {
            console.log(error);
        });
    }, [params.slug]); // Add params.slug to the dependency array to trigger useEffect when slug changes

    return (
        <>
            <Navbar />
            <div className="md:mx-12 mx-4 my-5">
                {loading ? ( // Check loading state
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className="col-span-full text-2xl font-bold mb-4">{blog?.title}</div>
                        <div className="font-bold italic text-sm pb-3">Author : {blog?.author}</div>
                        <div className="col-span-full p-10 shadow-2xl rounded-lg">{blog?.content}</div>
                    </>
                )}
            </div>
        </>
    );
}
