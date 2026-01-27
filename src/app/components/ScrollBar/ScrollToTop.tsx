"use client";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400 && window.innerWidth > 768) {
                setShow(true);
            } else {
                setShow(false);
            }
            });
    }, []);
    const toJump = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {show ? (
        <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10 animate-pulse">
            <button onClick={toJump} className="bg-black text-white rounded-full p-2 hover:bg-gray-900 transition">
            <ArrowUpCircleIcon className="w-6" style={{cursor: "pointer"}}/>
            </button>
        </div>
            ) : null}
        </>
    )
}
export default ScrollToTop;