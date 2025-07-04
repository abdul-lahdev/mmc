import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";

import {
  FaCheckCircle,
  FaPlayCircle,
  FaRegFileAlt,
  FaComments,
  FaThumbsUp,
  FaChevronDown,
} from "react-icons/fa";
const courseSections = [
  {
    title: "New Agent Path",
    progress: 70,
    items: [
      { type: "Video", title: "What is Programming?", time: "5 min" },
      { type: "Reading", title: "Basics Quiz", time: "3min" },
    ],
  },
  {
    title: "Advanced Producer Path",
    progress: 0,
    items: [
      { type: "Video", title: "Variables & Data Types", time: "10 min" },
      { type: "Video", title: "Functions", time: "15 min" },
    ],
  },
  {
    title: "Builder  Leader Path",
    progress: 0,
    items: [
      { type: "Video", title: "Data Types", time: "10 min" },
      { type: "Reading", title: "Functions", time: "15 min" },
    ],
  },
  {
    title: "Admin Path",
    progress: 90,
    items: [
      { type: "Video", title: "Variables", time: "10 min" },
      { type: "Video", title: "Functions", time: "15 min" },
    ],
  },
];
const forumposts = [
  {
    id: 1,
    avatar: "T",
    avatarColor: "bg-blue-500",
    name: "Topi Rasanen",
    role: "New Member",
    timeAgo: "8 minutes ago",
    title: "Agent Make review",
    body: "Overview We conducted an internal evaluation of Agent Make (powered by Claude 4 Sonnet)...",
    likes: 19,
  },
  {
    id: 2,
    avatar: "M",
    avatarColor: "bg-green-500",
    name: "Minii",
    role: "New Member",
    timeAgo: "34 minutes ago",
    title:
      "Sticky navigation bar appears underneath content on Safari and mobile browsers",
    body: "Hi! I’m testing a site built with the new Agent Sites feature...",
    likes: 20,
  },
  {
    id: 3,
    avatar: "R",
    avatarColor: "bg-pink-500",
    name: "Rebecca",
    role: "New Member",
    timeAgo: "38 minutes ago",
    title: "Education plan expiration",
    body: "When I created my educational plan with my school it was created until 2026...",
    likes: 0,
  },
  {
    id: 4,
    avatar: "T",
    avatarColor: "bg-blue-500",
    name: "Topi Rasanen",
    role: "New Member",
    timeAgo: "8 minutes ago",
    title: "Agent Make review",
    body: "Overview We conducted an internal evaluation of Agent Make (powered by Claude 4 Sonnet)...",
    likes: 19,
  },
];

// const courseItems = [
//   {
//     type: "Video",
//     title: "Welcome to the Google UX Design Certificate",
//     time: "5 min",
//   },
//   {
//     type: "Reading",
//     title: "Begin the Google UX Design Certificate",
//     time: "10 min",
//   },
//   {
//     type: "Video",
//     title: "Introduction to Course 1: Foundations of UX Design",
//     time: "2 min",
//   },
//   { type: "Reading", title: "Welcome to Course 1", time: "10 min" },
//   { type: "Reading", title: "Program surveys", time: "10 min" },
//   { type: "Survey", title: "Participant entry survey", time: "10 min" },
//   { type: "Discussion Prompt", title: "Introduce yourself", time: "10 min" },
//   { type: "Commit", title: "Commit to completing the program", time: "5min" },
//   { type: "Reading", title: "Welcome to Course 1", time: "10 min" },
//   { type: "Reading", title: "Program surveys", time: "10 min" },
// ];
const transits = [
  {
    time: "7:30",
    text: "i am the Transcription",
  },
  {
    time: "7:31",
    text: "this is another transit note",
  },
  {
    time: "7:33",
    text: "final transit with some other commentary",
  },
];
const getIcon = (type) => {
  switch (type) {
    case "Video":
      return <FaPlayCircle className="text-blue-500" />;

    case "Reading":
      return <FaRegFileAlt className="text-green-500" />;

    case "Discussion Prompt":
      return <FaComments className="text-purple-500" />;

    case "Survey":
      return <FaRegFileAlt className="text-yellow-500" />;

    case "Commit":
      return <FaCheckCircle className="text-teal-500" />;

    default:
      return <FaRegFileAlt />;
  }
};

export default function Training() {
  const [isOpen, setIsOpen] = useState(false);
  const [isdropdownOpen, setIsdropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Progress");
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <>
      {/*
    <Header toggleDark={toggleDark} /> */}

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-3 banner-pattern">
        <div className="flex  justify-between items-center flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Training
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Great leaders never stop learning. You're almost there.
            </p>
          </div>
          <div className="">
            {/* <a
                    className=" px-4 py-2 border border-accent text-accent bg-accent rounded-md hover:bg-accent hover:text-white transition-colors text-sm font-semibold"
                    href="/leads">+ Agent</a> */}
            {/* <button
                    className=" px-4 py-2 border-red-theme text-white bg-red-theme  dark:text-white rounded-md transition-colors text-sm font-semibold"
                    href="/leads">+ Notes</button> */}
            <button
              onClick={() => setIsOpen(true)}
              className=" relative overflow-hidden px-4 py-2 text-sm rounded-md
                    text-red-600 border border-red-600 group transition-colors duration-200 md:mt-0 mt-2"
            >
              <span class="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span class="relative z-10 group-hover:text-white flex items-center">
                {" "}
                <i className="fas fa-tasks"></i>
                <span className="text-sm ml-2 hidden md:block">Notes</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* LEFT SECTION */}
        <div className="md:col-span-8 bg-white dark:bg-darkcard dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-1">
          <div className="p-4 md:p-6">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-semibold mb-6">
                This Week's Highlight: Advanced Sales Techniques
              </h2>
              <div className="relative inline-block text-left mb-6">
                <button
                  onClick={() => setIsdropdownOpen(!isdropdownOpen)}
                  className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200 flex items-center"
                >
                  <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-white flex items-center">
                    <i className="fa-solid fa-download"></i>
                    <span className="text-sm ml-2 hidden md:block">
                      Download
                    </span>
                    <i className="fa-solid fa-caret-down ml-2"></i>{" "}
                    {/* Down Arrow */}
                  </span>
                </button>

                {/* Dropdown */}
                {isdropdownOpen && (
                  <div className="absolute right-0 z-20 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Video Download
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Only Audio Download
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="relative pb-[68.25%] bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                alt="Featured Video Thumbnail"
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center hover:bg-opacity-90 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="md:col-span-4 bg-white dark:bg-gray-800 rounded-xl p-4 overflow-y-auto h-full">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Learning Path
          </h3>
          <div className="space-y-2">
            {courseSections.map((section, index) => (
              <div
                key={index}
                className="border rounded-lg dark:border-gray-600"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-600 dark:active:bg-gray-500  ${
                    activeIndex === index ? "bg-gray-200 dark:bg-gray-600" : ""
                  } `}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium dark:text-white">
                        {section.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-gray-300">
                          {section.progress}% Complete
                        </span>
                        <FaChevronDown
                          className={`text-gray-500 dark:text-gray-300 transform transition-transform duration-300 ${
                            activeIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Progress bar inside header */}
                    <div className="w-full bg-gray-200 dark:bg-gray-600 h-1 rounded-full mt-3">
                      <div
                        className="bg-accent h-1 rounded-full"
                        style={{ width: `${section.progress}%` }}
                      />
                    </div>
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="px-4 py-2 bg-white dark:bg-gray-800">
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex justify-between items-start gap-3 text-sm dark:text-gray-200 border-b dark:border-gray-600 border-gray-200 pb-3"
                        >
                          <div>
                            <div className="flex gap-2 items-center">
                              {getIcon(item.type)}
                              <p className="font-medium">
                                {item.type}:{" "}
                                <span className="font-normal">
                                  {item.title}
                                </span>
                              </p>
                            </div>
                            {item.time && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 pl-6">
                                {item.time}
                              </span>
                            )}
                          </div>
                          <input
                            type="checkbox"
                            className="h-4 w-4 accent-red-500 bg-gray-300 dark:bg-gray-700 rounded border-gray-300 dark:border-gray-600 cursor-pointer mt-1"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-8 bg-white dark:bg-darkcard dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-3">
          <div className="p-4 md:p-6">
            {/* <div className="bg-white dark:bg-darkcard rounded-2xl shadow-sm overflow-hidden mb-6">
                    <div className="p-4 md:p-6"> */}
            <div className="flex items-center space-x-4 border-b dark:border-gray-700 mb-4 flex-wrap">
              {["Progress", "Discussion", "Transcription"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === tab
                      ? "border-b-2 border-red-600 text-red-600"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}

              {/* Spacer to push button to end */}
              <div className="flex-grow" />

              {/* Conditional rendering of Download button */}
              {activeTab === "Transcription" && (
                <button className="relative overflow-hidden px-4 py-2 mb-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200">
                  <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-white flex items-center">
                    <i className="fa-solid fa-download"></i>
                    <span className="text-sm ml-2 hidden md:block">
                      Download Transcript
                    </span>
                  </span>
                </button>
              )}
            </div>

            {/* <h2 className="text-lg font-semibold mb-4">
             Progress
            </h2> */}

            {/*
                        <!-- Desktop Progress Bar --> */}
            {activeTab === "Progress" && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Life Insurance Certification
                  </span>
                  <span className="text-sm font-medium text-accent">60%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-accent h-2.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  You're 60% toward your certification
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Resume from where you left off
                </p>
              </div>
            )}
            {activeTab === "Discussion" && (
              <div>
                <div class=" flex flex-col h-[360px]">
                  <div className="bg-white flex-1  overflow-y-scroll px-4 py-4 space-y-4 dark:bg-gray-800 thin-scrollbar  ">
                    {forumposts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white w-full border rounded-lg shadow p-4 dark:border-gray-600 dark:bg-gray-800  "
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center text-sm text-gray-500 dark:bg-gray-800   ">
                            <div
                              className={`w-8 h-8 rounded-full dark:active:bg-gray-800  ${post.avatarColor} text-white flex items-center justify-center font-bold mr-2`}
                            >
                              {post.avatar}
                            </div>
                            <div>
                              <span className="font-semibold">{post.name}</span>{" "}
                              · <span className="text-xs">{post.role}</span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {post.timeAgo}
                          </div>
                        </div>
                        <div className="font-bold text-gray-900 mb-1">
                          {post.title}
                        </div>
                        <div className="text-sm text-gray-700 mb-2 dark:text-gray-300">
                          {post.body}
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <FaThumbsUp />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div class="bg-white px-2 py-2 border rounded-lg dark:border-gray-600 dark:bg-gray-800">
                    <div class="flex items-center gap-2">
                      <input
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4  leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        type="text"
                        placeholder="Type your message..."
                      />
                      <button class="bg-red-500 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Transcription" && (
              <div className=" mx-auto mt-4 bg-white rounded shadow dark:bg-gray-800">
                {transits.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 border-b border-gray-200 dark:border-gray-600"
                  >
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 text-sm dark:text-gray-500 font-medium px-2 py-1 rounded">
                      {item.time}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="md:col-span-4  overflow-hidden mb-3">
          <div className="p-4 md:p-6 relative bg-white rounded-xl dark:bg-darkcard dark:bg-gray-800 shadow-sm">
            {/* <div className="bg-white dark:bg-darkcard rounded-2xl shadow-sm overflow-hidden mb-6">
                            <div className="p-4 md:p-6"> */}
            <h2 className="text-lg font-semibold mb-4">
              For Badge Requirement
            </h2>
            {/*
                                <!--  badge box --> */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Upcoming Batch</span>
                <span className="text-sm font-medium text-accent absolute top-[50px] right-[20px]">
                  <i class="fas fa-trophy text-yellow-500 text-7xl"></i>
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                complete this training and get the gold trophy
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                few more steps to go
              </p>

              {/* <div class="relative inline-flex size-3">
                                        <span
                                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                        <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                    </div> */}
            </div>
          </div>
        </div>

        {/* DRAWER */}
        <div
          className={`fixed top-42 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform
                            bg-white w-[70%] md:w-[30%] dark:bg-gray-800 ${
                              isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
        >
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <i className="fas fa-pencil pr-3"></i>
            Notes
          </h5>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg
                                text-sm w-8 h-8
                                absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600
                                dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          {/* Content */}
          <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="max-w-xl mx-auto p-4 border border-gray-300  rounded-lg bg-white shadow-sm transition-all focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500 dark:bg-gray-800 dark:border-gray-600">
              <textarea
                rows="3"
                className="w-full resize-none border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent text-sm text-gray-700 placeholder-gray-400 dark:bg-gray-800 dark:text-white "
                placeholder="Add your comment..."
              ></textarea>

              <div className="flex items-center justify-end mt-2">
                {/* <div className="flex items-center space-x-4 text-gray-400">
                                            <button type="button">
                                                <i className="fas fa-paperclip"></i>
                                            </button>
                                            <button type="button">
                                                <i className="fas fa-smile"></i>
                                            </button>
                                        </div> */}
                <button
                  className=" relative overflow-hidden px-4 py-2 text-sm rounded-md
                                         text-red-600 border border-red-600 group transition-colors duration-200"
                >
                  <span class="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-white">Post</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
