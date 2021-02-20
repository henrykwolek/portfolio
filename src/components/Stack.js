import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactFloaterJs from "react-floaterjs";
import content from "../content";

export default function Stack() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="customFontNav">
        <h1 className="text-5xl font-bold">
          Technologies I use
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {content.stack.tech.map((tech, index) => {
          return (
            <ReactFloaterJs>
              <span className="w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5">
                <LazyLoadImage src={tech.img} />
              </span>
            </ReactFloaterJs>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
        {content.stack.desc}
      </p>
    </div>
  );
}
