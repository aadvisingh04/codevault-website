import "./css/NewHome.css";
import React from "react";
import { useState } from "react";
import "daisyui";
import Filter from "./Filter";
import NewNavbar from "./NewNavbar";
import Test from "./MobNav";
import HomePage1 from "./HomePage1";

// import { useLocation } from "react-router-dom";
import { Element, Link } from "react-scroll";

export default function NewHome() {
  // const location = useLocation();
  return (
    <div>
      <div>
        <HomePage1/>

        <Link to="second">
          <div className="lower text-center pt-8 animate-bounce">
            {/* <Test/> */}
            <div className="indicator pt-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </Link>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Element name="second" style={{ textAlign: "center" }}>
          <div className="mx-auto text-center px-6 md:px-8">
            <h1 className="inline-flex flex-col transition font-display md:text-[8rem] bg-gradient-to-r from-60% bg-clip-text text-transparent from-blue-600">
              <span>Page2.</span>
              {/* <span>Showcase.</span> */}
            </h1>
            <h1 className="mt-2 inline-flex flex-col transition font-display md:text-[8rem] bg-gradient-to-r from-60% bg-clip-text text-transparent from-blue-600">
              {/* <span>Compete. Develop.</span> */}
              <span>Showcase.</span>
            </h1>
          </div>
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 overflow-y-auto">
                <Filter />
              </div>
            </div>
          </div>
        </Element>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
