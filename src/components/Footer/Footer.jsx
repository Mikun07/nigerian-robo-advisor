import React, { useEffect, useState } from "react";
import LogoSvg from "../Icons/logo";
import InputWithButton from "../Input/InputWithButton";

function Footer() {
  const [thisYear, setThisYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setThisYear(date.getFullYear());
  }, []);
  return (
    <>
      <div className="bg-White h-full border-t-2 border-Gray text-Dark-Gray w-full lg:px-10 px-4 py-2">
        <div className="flex lg:flex-row flex-col pt-4 gap-6 lg:gap-0">
          <div className="flex flex-col gap-10 mb-6">
            <div>
              <a href="" className="flex items-center gap-1 cursor-pointer">
                <LogoSvg Fill="#1A1A1A" />
                <h2 className=" capitalize font-bold text-Black">
                  Robo Advisor
                </h2>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-Dark-Gray font-semibold">
                join our newsletter to stay up to date on features and releases.
              </h3>
              <InputWithButton />
              <p className="text-Dark-Gray">
                By subscribing you agree to our privacy policy and provide
                consent to receive updates from our company.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-6 gap-y-8 text-base tracking-tight leading-6">
            <div>
              <ul className="flex flex-col gap-4">
                <h2 className="font-bold text-Black capitalize">About Us</h2>
                <li>Business</li>
                <li>Careers</li>
                <li>Our Accounts</li>
                <li>Together for education</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <h2 className="font-bold text-Black capitalize">
                  Our products
                </h2>
                <li>Managed investments</li>
                <li>Independent investments</li>
                <li>Private credit</li>
                <li>Cash</li>
                <li>Crypto</li>
                <li>Taxes</li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-4">
                <h2 className="font-bold text-Black capitalize">
                  Social networks
                </h2>

                <div className="flex gap-2 items-center">
                  <ion-icon name="logo-instagram"></ion-icon>
                  <span>Instagram</span>
                </div>

                <div className="flex gap-2 items-center">
                  <ion-icon name="logo-youtube"></ion-icon>
                  <span>YouTube</span>
                </div>

                <div className="flex gap-2 items-center">
                  <ion-icon name="logo-Linkedin"></ion-icon>
                  <span>Linkedin</span>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-2 border-Gray" />

        <div className="mt-12 flex font-bold lg:text-lg text-xs items-center justify-between text-Black">
          <div>
            <p className=" text-Dark-Gray">
              © {thisYear} Robo Advisor.{"  "}All rights reserved.
            </p>
          </div>

          <div className="flex gap-2">
            <p className="">Privacy Policy</p>
            <p className="">Terms of service</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
