import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030
          <Link to="/" className="hover:underline">
            Cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 "
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
              rel="noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
