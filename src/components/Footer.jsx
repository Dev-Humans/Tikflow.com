import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32 border-t bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Company
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-center lg:flex-row">
          <p className="text-sm text-gray-500">
            © 2024 tikflow. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a className="text-sm hover:underline underline-offset-4" href="#">
            <ion-icon name="people-outline"></ion-icon>
              <span className="sr-only">Social</span>
            </a>
            <a className="text-sm hover:underline underline-offset-4" href="#">
             <ion-icon name="earth-outline"></ion-icon>
              <span className="sr-only">Website</span>
            </a>
            <a className="text-sm hover:underline underline-offset-4" href="#">
            <ion-icon name="chatbox-outline"></ion-icon>
              <span className="sr-only">Message</span>
            </a>
            <a className="text-sm hover:underline underline-offset-4" href="#">
            <ion-icon name="analytics-outline"></ion-icon>
              <span className="sr-only">Stats</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
