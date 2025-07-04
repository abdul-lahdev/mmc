import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Nodata from "../img/no-data.png";
import certificate from "../img/certificate.webp";
import rewardimg from "../img/reward1.png";
import { FaStopwatch, FaChartLine, FaListOl } from "react-icons/fa";

export default function TraningCatalog() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [AddTrainingModalOpen, setAddTrainingModalOpen] = useState(false);
  const [TrainingModalAnimation, setTrainingModalAnimation] = useState(false);
  const [hasQuiz, setHasQuiz] = useState("yes");

  const courses = [
    {
      title: "Getting Started",
      description:
        "Learn onboarding essentials and CRM usage for efficient workflow.",
      videos: 12,
      completion: 60,
    },
    {
      title: "Product Training",
      description:
        "Dive into IULs, Annuities, Final Expense, and more product knowledge.",
      videos: 20,
      completion: 40,
    },
    {
      title: "Sales Process",
      description: "Master scripts, handle objections, and close effectively.",
      videos: 18,
      completion: 70,
    },
    {
      title: "Marketing & Lead Generation",
      description:
        "Strategies to generate high-quality leads and grow your outreach.",
      videos: 10,
      completion: 50,
    },
    {
      title: "Advanced Leadership",
      description:
        "Develop leadership skills to mentor, coach, and lead high-performing teams.",
      videos: 15,
      completion: 30,
    },
    {
      title: "Compliance and Ethics",
      description:
        "Understand key regulations and maintain ethical standards in sales.",
      videos: 8,
      completion: 100,
    },
  ];
  const certificateData = [
    {
      id: 1,
      title: "Completion Certificate",
      description:
        "Awarded for completing all modules with a passing score. Verified and issued by Credly.",
      image: certificate,
    },
    {
      id: 2,
      title: "Completion Certificate 2",
      description:
        "Awarded for completing all modules with a passing score. Verified and issued by Credly.",
      image: certificate,
    },
  ];
  // Add search and filter states
  const [searchQuery, setSearchQuery] = useState("");

  // table checkboxes states
  const [selectedItems, setSelectedItems] = useState([]);
  const allSelected = selectedItems.length === courses.length;

  return (
    <>
      {AddTrainingModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0   "></div>
            </div>

            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
              ${
                TrainingModalAnimation
                  ? "scale-100 skew-y-0"
                  : "scale-0 skew-y-6"
              }
              duration-500 ease-out
            `}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4 border-b dark:border-gray-600 pb-4">
                      Upload Training
                    </h3>
                    <form className="w-full max-w-lg">
                      <div className="w-full  mb-4">
                        <label
                          className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                          htmlFor="grid-address"
                        >
                          Training Title
                        </label>
                        <input
                          className=" block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          id="grid-address"
                          type="text"
                          placeholder="Training Title"
                        />
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            htmlFor="grid-category"
                          >
                            Category
                          </label>
                          <select
                            className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-category"
                          >
                            <option value="">Select a Category..</option>
                            <option value="leads">Total Leads</option>
                            <option value="sales">Sales</option>
                            <option value="marketing">Marketing</option>
                            <option value="support">Support</option>
                          </select>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            htmlFor="grid-category"
                          >
                            Learning Path
                          </label>
                          <select
                            className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-category"
                          >
                            <option value="">Select Learning Path..</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Expert">Expert</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col w-full space-y-2">
                        {/* Upload Label */}
                        <label
                          className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                          htmlFor="grid-address"
                        >
                          Upload Training Video
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            for="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                MP4, AVI, MOV, or WEBM (MAX. 100MB)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="w-full  mt-6 mb-4">
                        <label
                          className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                          htmlFor="grid-address"
                        >
                          Should have a Quiz?
                        </label>
                        {/* Radio Buttons */}
                        <div className="flex items-center space-x-6">
                          <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                            <input
                              type="radio"
                              value="yes"
                              checked={hasQuiz === "yes"}
                              onChange={() => setHasQuiz("yes")}
                              className="accent-blue-600"
                            />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                            <input
                              type="radio"
                              value="no"
                              checked={hasQuiz === "no"}
                              onChange={() => setHasQuiz("no")}
                              className="accent-blue-600"
                            />
                            <span>No</span>
                          </label>
                        </div>

                        {/* Dropdown: Only if hasQuiz is "yes" */}
                        {hasQuiz === "yes" && (
                          <div>
                            <label
                              htmlFor="quiz-select"
                              className="block tracking-wide text-gray-700 text-sm font-bold mt-3 dark:text-gray-300 mb-3"
                            >
                              Quiz
                            </label>
                            <select
                              id="quiz-select"
                              className="block w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            >
                              <option value="">Select a quiz</option>
                              <option value="quiz1">Quiz 1</option>
                              <option value="quiz2">Quiz 2</option>
                              <option value="quiz3">Quiz 3</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800  py-3  sm:flex sm:flex-row-reverse border-t dark:border-gray-600  mt-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setAddTrainingModalOpen(false);
                      setTrainingModalAnimation(false);
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setTimeout(() => {
                        setAddTrainingModalOpen(false);
                      }, 500);
                      setTrainingModalAnimation(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white dark:bg-gray-800 rounded-xl banner-pattern p-6 mb-3">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Trainings
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Training Categories
            </p>
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <div
              className="transform transition-all duration-300 ease-in-out origin-top"
              style={{
                transform: selectedItems.length > 0 ? "scale(1)" : "scale(0)",
                opacity: selectedItems.length > 0 ? "1" : "0",
                height: selectedItems.length > 0 ? "auto" : "0",
                overflow: "hidden",
                display: selectedItems.length > 0 ? "block" : "none",
              }}
            ></div>

            <button
              className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
              type="button"
              onClick={() => {
                setAddTrainingModalOpen(true);
                setTimeout(() => setTrainingModalAnimation(true), 10);
              }}
            >
              <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white flex items-center">
                {" "}
                <i className="fa-solid fa-upload"></i>
                <span className="text-sm ml-2 hidden md:block">Upload</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="shadow-sm overflow-hidden">
        {/*
    <!-- Desktop Table --> */}
        <div className="hidden md:block">
          {/*
      <!-- Filter Panel --> */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-3 sticky top-0 z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent dark:text-white"
                    placeholder="Search by course name...."
                  />
                </div>
              </div>
              <div className="">
                <div className="relative w-full">
                  <select
                    // value={statusFilter}
                    // onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none"
                  >
                    <option value="All Courses">All Courses</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-4 h-4 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 border-b dark:border-gray-700 my-4">
            {["Overview", "Course Outline", "Rewards & Certificates"].map(
              (tab) => (
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
              )
            )}
          </div>

          {activeTab === "Course Outline" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="w-full p-6 bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <span>{course.videos} Videos</span>
                    <span>{course.completion}% Complete</span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full mb-4">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: `${course.completion}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      Continue Learning
                    </span>

                    <Link
                      href="/training"
                      className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
                    >
                      <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                      <span className="relative z-10 group-hover:text-white flex items-center">
                        {" "}
                        <i className="fa-solid fa-eye"></i>
                        <span className="text-sm ml-2 hidden md:block">
                          View
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Rewards & Certificates" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 ">
              <div className="pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
                {/* Certificate Section */}
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white mb-4">
                  Certificates
                </h2>

                {certificateData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center mb-3"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={180}
                      height={140}
                      className="rounded-md object-contain"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-left flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {item.description}
                      </p>
                      <button className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200">
                        <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative z-10 group-hover:text-white flex items-center">
                          <i className="fa-solid fa-download"></i>
                          <span className="ml-2 hidden md:block">Download</span>
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rewards Section */}
              <div className="pl-0">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white mb-4">
                  Rewards
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  {[
                    {
                      image: rewardimg,
                      title: "Top Performer",
                      description:
                        "Awarded for outstanding test performance in Q1.",
                    },
                    {
                      image: rewardimg,
                      title: "Learning Streak",
                      description: "Completed 10 modules in a streak!",
                    },
                    {
                      image: rewardimg,
                      title: "Top Student",
                      description:
                        "Awarded for outstanding test performance in Q1.",
                    },
                    {
                      image: rewardimg,
                      title: "Learning Streak",
                      description: "Completed 10 modules in a streak!",
                    },
                  ].map((reward, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                    >
                      <Image
                        src={reward.image}
                        alt={reward.title}
                        width={80}
                        height={80}
                        className="mb-3 rounded-full object-contain"
                      />
                      <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-1">
                        {reward.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {reward.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Overview" && (
            <div>
              <h2 className="text-xl px-4 sm:text-2xl font-semibold text-gray-700 dark:text-white">
                Overview
              </h2>
              <div className="grid grid-cols-12 gap-6 p-4">
                {/* Left Column - 3 stacked boxes */}
                <div className="col-span-12 lg:col-span-8 space-y-4 pr-0 ">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                          <FaChartLine className="text-blue-500" />
                          Your Progress
                        </h4>

                        <span className="text-sm font-medium text-accent">
                          60%
                        </span>
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
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FaStopwatch className="text-green-500" />
                      Fastest Completion
                    </h4>

                    <div className="h-48 overflow-y-scroll thin-scrollbar rounded-lg border border-gray-200 dark:border-gray-700">
                      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-300">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                          <tr>
                            <th scope="col" className="px-4 py-2">
                              #
                            </th>
                            <th scope="col" className="px-4 py-2">
                              Name
                            </th>
                            <th scope="col" className="px-4 py-2">
                              Course
                            </th>
                            <th scope="col" className="px-4 py-2">
                              Time
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              name: "Ali Raza",
                              course: "Product Training",
                              time: "2h 30m",
                            },
                            {
                              name: "Fatima Noor",
                              course: "Sales Process",
                              time: "2h 45m",
                            },
                            {
                              name: "Ahmed Khan",
                              course: "Compliance",
                              time: "3h 10m",
                            },
                            {
                              name: "Sara Imran",
                              course: "IUL Basics",
                              time: "1h 55m",
                            },
                            {
                              name: "Umar Farooq",
                              course: "Annuities",
                              time: "2h 20m",
                            },
                            {
                              name: "Hira Yousaf",
                              course: "Ethics",
                              time: "3h 05m",
                            },
                            // Add more rows as needed
                          ].map((item, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200 dark:border-gray-600"
                            >
                              <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                {index + 1}
                              </td>
                              <td className="px-4 py-2">{item.name}</td>
                              <td className="px-4 py-2">{item.course}</td>
                              <td className="px-4 py-2">{item.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                      <FaListOl className="text-purple-500" />
                      Top Quizzes
                    </h4>

                    <div className="h-48 overflow-y-scroll thin-scrollbar rounded-lg border border-gray-200 dark:border-gray-700">
                      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-300">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                          <tr>
                            <th scope="col" className="px-4 py-2">
                              #
                            </th>
                            <th scope="col" className="px-4 py-2">
                              Name
                            </th>
                            <th scope="col" className="px-4 py-2">
                              Course
                            </th>
                            <th scope="col" className="px-4 py-2">
                              Score
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              name: "Ali Raza",
                              course: "Product Training",
                              score: "90",
                            },
                            {
                              name: "Fatima Noor",
                              course: "Sales Process",
                              score: "100",
                            },
                            {
                              name: "Ahmed Khan",
                              course: "Compliance",
                              score: "45",
                            },
                            {
                              name: "Ali Raza",
                              course: "Product Training",
                              score: "90",
                            },
                            {
                              name: "Fatima Noor",
                              course: "Sales Process",
                              score: "100",
                            },
                            {
                              name: "Ahmed Khan",
                              course: "Compliance",
                              score: "45",
                            },
                          ].map((item, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200 dark:border-gray-600"
                            >
                              <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                {index + 1}
                              </td>
                              <td className="px-4 py-2">{item.name}</td>
                              <td className="px-4 py-2">{item.course}</td>
                              <td className="px-4 py-2">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Right Column - 2 vertical cards */}
                <div className="col-span-12 lg:col-span-4 space-y-4 pl-0 ">
                  <div className="py-4 px-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                      Live Training
                    </h2>

                    <div className="mb-4 relative">
                      <img
                        className="w-full h-56 object-cover rounded-lg"
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Training video"
                      />

                      {/* Play Button Centered */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="p-3 text-white bg-red-600 rounded-full bg-opacity-90 hover:bg-opacity-100">
                          <i className="fas fa-play"></i>
                        </button>
                      </div>

                      {/* Blinking LIVE button in top-right */}
                      <div className="absolute top-2 right-2 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                        <span className="text-xs font-semibold text-red-600 bg-white px-2 py-0.5 rounded">
                          LIVE
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">
                      This Week's Highlight: Advanced Sales Techniques
                    </h3>

                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Certification Progress
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          60%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div
                          className="bg-red-600 h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>

                      <button className="w-full mt-4 px-4 py-2 text-sm font-medium btn-outline-red rounded-lg transition-colors duration-200">
                        Join Now
                      </button>
                    </div>

                    {/* Live Training Schedule Table */}
                    <div className="mt-6 overflow-x-auto">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Upcoming
                      </h4>
                      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          <tr>
                            <th scope="col" className="px-4 py-3">
                              Date
                            </th>
                            <th scope="col" className="px-4 py-3">
                              Host
                            </th>
                            <th scope="col" className="px-4 py-3">
                              Training
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800">
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2">June 20</td>
                            <td className="px-4 py-2">Sarah Khan</td>
                            <td className="px-4 py-2">Closing Techniques</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="px-4 py-2">June 22</td>
                            <td className="px-4 py-2">Ahmed Raza</td>
                            <td className="px-4 py-2">Lead Generation</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">June 25</td>
                            <td className="px-4 py-2">Maria Yusuf</td>
                            <td className="px-4 py-2">Social Selling</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* bottom - row - 3 horizontal cards */}
                <div className="col-span-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Featured Courses */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
                      <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 ">
                        Featured Courses
                      </h3>

                      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
                        <tbody>
                          {[
                            { rank: 1, name: "IUL Mastery", priority: "High" },
                            { rank: 2, name: "Annuities 101", priority: "Low" },
                            {
                              rank: 3,
                              name: "Objection Handling",
                              priority: "High",
                            },
                          ].map((item, index) => (
                            <tr key={index} className=" ">
                              <td className="py-1 pr-4 font-medium text-gray-900 dark:text-white w-6">
                                {item.rank}
                              </td>
                              <td className="py-1">{item.name}</td>
                              <td className="py-1">
                                <span
                                  className={
                                    item.priority === "High"
                                      ? "text-red-500"
                                      : "text-green-500"
                                  }
                                >
                                  {item.priority}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Recent Certificates */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
                      <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 ">
                        Recent Certificates
                      </h3>

                      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
                        <tbody>
                          {[
                            { rank: 1, name: "Certificate 1" },
                            { rank: 2, name: "Certificate 2" },
                            { rank: 3, name: "Certificate 3" },
                          ].map((item, index) => (
                            <tr key={index} className=" ">
                              <td className="py-1 pr-4 font-medium text-gray-900 dark:text-white w-6">
                                {item.rank}
                              </td>
                              <td className="py-1">{item.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Recent Completions */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
                      <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-700 pb-2 ">
                        Recent Completions
                      </h3>

                      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
                        <tbody>
                          {[
                            { rank: 1, name: "Completions 1" },
                            { rank: 2, name: "Completions 2" },
                            { rank: 3, name: "Completions 3" },
                          ].map((item, index) => (
                            <tr key={index} className=" ">
                              <td className="py-1 pr-4 font-medium text-gray-900 dark:text-white w-6">
                                {item.rank}
                              </td>
                              <td className="py-1">{item.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
