import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div class="header-area header-transparrent">
      <div class="headder-top header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-2">
              {/* <!-- Logo --> */}
              <div class="logo">
                <a href="index.html">
                  <img src="assets/img/logo/logoDark.png" width={120} alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <div class="menu-wrapper">
                {/* <!-- Main-menu --> */}
                <div class="main-menu">
                  <nav class="d-none d-lg-block">
                    <ul id="navigation">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="JobListing">Find Jobs </Link>
                      </li>
                      <li>
                        <Link href="/">About</Link>
                      </li>
                      <li>
                        <a href="#">Page</a>
                        <ul class="submenu">
                          <li>
                            <Link href="/Blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="/SingleBlog">Blog Details</Link>
                          </li>
                       
                          <li>
                            <Link href="/JobDetails">job Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/Contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!-- Header-btn --> */}
                <div class="header-btn d-none f-right d-lg-block">
                  <a href="#" class="btn head-btn1">
                    Register
                  </a>
                  <a href="#" class="btn head-btn2">
                    Login
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Mobile Menu --> */}
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
