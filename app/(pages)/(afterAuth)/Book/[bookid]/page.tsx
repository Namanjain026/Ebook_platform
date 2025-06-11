"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "./book.module.css";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const apiurl = process.env.NEXT_PUBLIC_API_URL;

const page = () => {
  const { bookid } = useParams();
  const router = useRouter();
  const book = {
    id: 1,
    image: "https://picsum.photos/600/400",
    title: "Book 1",
    author: "Author 1",
    description:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> <p>Necessitatibus maxime assumenda nihil. Itaque, corrupti ratione! </p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem, asperiores cum dignissimos placeat facilis est obcaecati at deleniti voluptas consectetur adipisci, deserunt inventore dolorem quisquam! Aspernatur accusantium eaque similique?</p>",
    price: "$29.9",
    amazonlink: "https://www.amazon.com/dp/B09XYZ1234",
  };
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={book.image} alt={book.title} className={styles.bookImage} />
        </div>

        <div className={styles.details}>
        <h1 className={styles.bookTitle}>{book.title}</h1>
        <p className={styles.bookAuthor}>by {book.author}</p>

        <div
          className={styles.bookDescription}
          dangerouslySetInnerHTML={{ __html: book.description }}
        />
        <p className={styles.bookPrice}>{book.price}</p>

        <button
          className={styles.purchaseButton}
          onClick={() => {
            // add payment check here

            // assuming already paid
            router.push(`/read/${bookid}`);
          }}
        >
          Start Reading
        </button>
        {/* <button className={styles.purchaseButton}>Buy on Amazon</button> */}
      </div>
      </div>
      
    </div>
  );
};

export default page;
