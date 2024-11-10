import React, { useState, useRef } from 'react';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Product", link: "/" },
    { name: "Contacts", link: "/" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-20" ref={navRef}>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 text-black">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-black">
          <span className="text-xl pt-2">
            <h1>
              TIKFLOW.<sub>com</sub>
            </h1>
          </span>
        </div>

        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-20 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          } text-black`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="hover:text-green-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <button className="ml-4 bg-green-500 hover:bg-green-600 rounded-md p-3" size="md">
            Join Waitlist
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
