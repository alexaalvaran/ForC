import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
         <div className="navBar w-full h-20 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full text-white">
                    <ul>
                    <li>
                            <Link href="/">
                            <p>home</p>
                            </Link>
                    </li>
                    </ul>
                    <ul className="flex gap-x-10 text-white justify-between items-center h-full">
                        <li>
                            <Link href="/photos">
                            <p>photos</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/notes">
                            <p>notes</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dates">
                            <p>dates</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/food">
                            <p>food</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
        </>
    );
};

export default Navbar;