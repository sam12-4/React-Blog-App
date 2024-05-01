import React from 'react';
import Link from 'next/link';

const BlogCard = ({title, author, metaDesc, slug }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden m-3">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{metaDesc}</p>
        <p className="text-gray-600 mb-3">By {author}</p>
        <Link href={"/blogpost/" + slug } className="bg-gradient-to-r from-blue-300 to-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
