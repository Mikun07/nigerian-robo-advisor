import React, { useEffect, useState } from "react";

function Footer() {
  const [thisYear, setThisYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setThisYear(date.getFullYear());
  }, []);
  return (
    <>
      <div className="bg-[#222222] h-full text-white w-full lg:px-10 px-6 py-2">

        <hr className="py-4 mt-4" />

        <div className="grid lg:grid-cols-5 grid-cols-2 gap-x-6 gap-y-8 text-base tracking-tight leading-6">
          <div>
            <ul className="flex flex-col gap-4">
              <h2 className="font-bold">About Us</h2>
              <li>Business</li>
              <li>Careers</li>
              <li>Wealthsimple Foundation</li>
              <li>Together for education</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              <h2 className="font-bold">Legal notices</h2>
              <li>Accessibility</li>
              <li>Protection of personal information</li>
              <li>Terms of use</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              <h2 className="font-bold">Our accounts</h2>
              <li>RRSP</li>
              <li>TFSA</li>
              <li>CELIAPP</li>
              <li>Unregistered account</li>
              <li>All accounts</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              <h2 className="font-bold">Our products</h2>
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
              <h2 className="font-bold">Social networks</h2>

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

        <div className="mt-12 font-semibold">
          <p>© {thisYear} Robo Advisor. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
