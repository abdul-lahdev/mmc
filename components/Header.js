import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import userImage from "../img/user.jpg";
export default function Header({ toggleDark, onToggleMobileSidebar }) {
  return (
    // text-[14px] → default (mobile-first)

    // sm:text-[16px] → on small screens and up (≥640px)

    // md:text-[18px] → on medium screens and up (≥768px)

    // lg:text-[20px] → on large screens and up (≥1024px)

    <div className="flex items-center justify-between h-[80px] pl-0 pr-6  dark:bg-gray-800 ">
      {/* Left Side - Sidebar Toggle */}
      <div className="text-xl font-bold text-red-600">
        {/* <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={onToggleMobileSidebar}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button> */}
        <span>
          <svg
            width="150"
            height="40"
            viewBox="0 0 150 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M9.23047 22.7695C9.23063 27.1876 12.8124 30.7694 17.2305 30.7695H30.7695V32C30.7695 36.4182 27.1877 39.9998 22.7695 40H8C3.58172 40 7.28727e-07 36.4183 0 32V17.2305C0.00016306 12.8123 3.58182 9.23047 8 9.23047H9.23047V22.7695ZM32 0C36.4183 1.22428e-06 40 3.58172 40 8V22.7695C39.9998 27.1877 36.4182 30.7695 32 30.7695H30.7695V17.2305C30.7694 12.8124 27.1876 9.23063 22.7695 9.23047H9.23047V8C9.23047 3.58182 12.8123 0.000162561 17.2305 0H32Z"
              fill="white"
            />{" "}
            <path
              d="M55.9922 34L57.5547 5.875H67.3594L73.043 29.9375H72.3398L78.0625 5.875H87.8672L89.4297 34H83.5508L82.3008 10.1719H82.3594L76.4023 34H69.0195L63.0625 10.1719H63.1211L61.8711 34H55.9922ZM106.578 34.5078C103.779 34.5078 101.344 33.9023 99.2734 32.6914C97.2161 31.4805 95.6211 29.7812 94.4883 27.5938C93.3685 25.3932 92.8086 22.8216 92.8086 19.8789C92.8086 16.9753 93.362 14.4362 94.4688 12.2617C95.5755 10.0872 97.1576 8.39453 99.2148 7.18359C101.272 5.97266 103.72 5.36719 106.559 5.36719C109.749 5.36719 112.457 6.16797 114.684 7.76953C116.923 9.35807 118.395 11.6628 119.098 14.6836L112.965 16.1094C112.574 14.2214 111.812 12.8086 110.68 11.8711C109.56 10.9336 108.18 10.4648 106.539 10.4648C104.964 10.4648 103.622 10.8555 102.516 11.6367C101.422 12.418 100.582 13.5182 99.9961 14.9375C99.4232 16.3438 99.1367 18.0104 99.1367 19.9375C99.1367 21.8646 99.4297 23.5443 100.016 24.9766C100.602 26.3958 101.441 27.4961 102.535 28.2773C103.629 29.0456 104.938 29.4297 106.461 29.4297C108.102 29.4297 109.482 28.9609 110.602 28.0234C111.721 27.0859 112.483 25.7643 112.887 24.0586L119.156 25.3281C118.401 28.2708 116.91 30.5365 114.684 32.125C112.457 33.7135 109.755 34.5078 106.578 34.5078ZM120.074 34L130.855 5.875H138.531L149.273 34H142.789L134.664 10.25L126.559 34H120.074ZM127.125 26.3047V21.4805H142.164V26.3047H127.125Z"
              fill="white"
            />{" "}
          </svg>
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href=""
          className="bg-[#1D1A3F] w-[40px] h-[40px] flex items-center justify-center rounded-[6px]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M20 12H4M4 12L10 18M4 12L10 6"
              stroke="#62748E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>
        </Link>
        <div className="">
          <div className="flex items-center rounded-md bg-[#1D1A3F] pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 h-[40px]">
            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                  stroke="#62748E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>
            </div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Search by lead..."
              className="w-[260px] block min-w-0 grow bg-[#1D1A3F] py-1.5 pr-3 pl-3 text-base text-[#fff] placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>

        <div className="flex items-center">
          <button className="rounded-r-none inline-flex items-center gap-2 rounded-l-[6px]  h-[40px] bg-[#1447E6] px-4 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#103abc] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M9.99935 4.1665V15.8332M4.16602 9.99984H15.8327"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </svg>
            Add New
          </button>
          <div className="h-[40px]">
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <MenuButton className="border-l-2 border-[#193CB8]  rounded-l-none rounded-r-[6px] inline-flex w-full justify-center gap-x-1.5 bg-[#1447E6] px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs h-[40px]">
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-white"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      License
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Right Side - Wallet + Icons */}
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-4">
          <div
            className={`w-[32px] h-[32px] border rounded-[5px] bg-[url(/images/user.jpg)] bg-cover `}
          ></div>
          <div className="">
            <h1 className="font-[600] text-[16px] text-[#F8FAFC] ">
              Mike Millers
            </h1>
            <p className="font-[500] text-[12px] text-[#90A1B9]">
              Admin Account
            </p>
          </div>
        </div>
        <div>
          <Link href="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                stroke="#314158"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
