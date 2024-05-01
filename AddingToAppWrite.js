"use client" //new component will be made in next js
import { Client, Databases, ID } from "appwrite";

export default function Home() {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6631e78a0025d40a59c6");

  const databases = new Databases(client);
  
  const a = [
    {
      "title": "The Art of Cooking",
      "content": "Exploring the culinary world through various recipes and techniques.",
      "slug": "the-art-of-cooking",
      "views": 2356,
      "author": "Samantha Smith",
      "is_published": true
    },
    {
      "title": "The Journey to Success",
      "content": "Personal anecdotes and strategies for achieving your goals.",
      "slug": "the-journey-to-success",
      "views": 1789,
      "author": "Michael Johnson",
      "is_published": false
    },
    {
      "title": "Travel Diaries: Europe Edition",
      "content": "A travelogue documenting adventures across Europe's most iconic cities.",
      "slug": "travel-diaries-europe-edition",
      "views": 3245,
      "author": "Emily Roberts",
      "is_published": true
    },
    {
      "title": "Investing for Beginners",
      "content": "Understanding the basics of investing and building a financial portfolio.",
      "slug": "investing-for-beginners",
      "views": 456,
      "author": "David Thompson",
      "is_published": false
    },
    {
      "title": "Healthy Living: Mind and Body",
      "content": "Tips and tricks for maintaining a healthy lifestyle both physically and mentally.",
      "slug": "healthy-living-mind-and-body",
      "views": 9876,
      "author": "Jessica Lee",
      "is_published": true
    },
    {
      "title": "Exploring the Cosmos",
      "content": "A journey through space, uncovering the mysteries of the universe.",
      "slug": "exploring-the-cosmos",
      "views": 5432,
      "author": "Alex Turner",
      "is_published": false
    },
    {
      "title": "The Art of Photography",
      "content": "Capturing moments in time through the lens of a camera.",
      "slug": "the-art-of-photography",
      "views": 6543,
      "author": "Daniel Cooper",
      "is_published": true
    },
    {
      "title": "World History: A Brief Overview",
      "content": "A concise look at key events and figures that shaped our world.",
      "slug": "world-history-a-brief-overview",
      "views": 234,
      "author": "Sophie White",
      "is_published": false
    },
    {
      "title": "Artificial Intelligence: Past, Present, Future",
      "content": "An exploration of AI's evolution and its potential impact on society.",
      "slug": "artificial-intelligence-past-present-future",
      "views": 8765,
      "author": "Benjamin Harris",
      "is_published": true
    },
    {
      "title": "The Power of Music",
      "content": "Examining the emotional and psychological effects of music on the human brain.",
      "slug": "the-power-of-music",
      "views": 567,
      "author": "Olivia Johnson",
      "is_published": false
    }
  ]
  

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    const promise = databases.createDocument(
      '6631ed8100230d44f9eb',
      '6631ed940004a38777f3',
      ID.unique(),
      element
      
    )
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }
  
  
  return <></>;
}
