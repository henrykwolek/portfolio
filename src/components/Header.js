import React from "react";
import ReactFloaterJs from "react-floaterjs";
import Typical from "react-typical";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";

export default function Header() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
          />
        </div>
        <div className="customFontNav">
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">
              {content.header.text[0]}
              <br />
              {content.header.text[1]}
            </h2>
            <h1 className="font-bold text-2xl text-gray-600">
              {content.header.text[2]}{" "}
              <Typical
                steps={content.header.typical}
                loop={Infinity}
                className="inline-block"
              />
            </h1>
            <ReactFloaterJs>
              <button
                className="bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg"
              >
                {content.header.btnText}
              </button>
            </ReactFloaterJs>
          </div>
        </div>
      </div>
    </div>
  );
}
