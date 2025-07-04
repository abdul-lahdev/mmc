import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";

export default function Client_view() {
  // <div>
  // <div className="text-sm font-medium">{item.carrier}</div>
  // </div>
  // </div>
  // </td>
  // <td className="px-6 py-4 whitespace-nowrap text-sm">{item.policy}</td>
  // <td className="px-6 py-4 whitespace-nowrap text-sm">{item.type}</td>
  // <td className="px-6 py-4 whitespace-nowrap">{item.face_amount}</td>
  // <td className="px-6 py-4 whitespace-nowrap text-sm">{item.premium}</td>
  // <td className="px-6 py-4 whitespace-nowrap text-sm">{item.issue_date}</td>

  // table objects

  const tableData = [
    {
      carrier: "Northwestern Mutual",
      policy: "NM-847392",
      type: "Whole Life",
      face_amount: "$500,000",
      premium: "$450/mo",
      issue_date: "05/12/2020",
      status: "Active",
    },
    {
      carrier: "Prudential",
      policy: "PRU-562891",
      type: "Term Life",
      face_amount: "$1,000,000",
      premium: "$620/mo",
      issue_date: "11/03/2021",
      status: "Active",
    },
    {
      carrier: "New York Life",
      policy: "NYL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      carrier: "California Life",
      policy: "CL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      carrier: "LA Life",
      policy: "LA-349201",
      type: "Whole Life",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      carrier: "San francisco Life",
      policy: "SFL-339201",
      type: "Term Life",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      carrier: "Prudential",
      policy: "PRU-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      carrier: "New York Life",
      policy: "NYL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
  ];

  // table checkboxes states
  const [selectedItems, setSelectedItems] = useState([]);
  const allSelected = selectedItems.length === tableData.length;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(tableData.map((_, index) => index));
    }
  };

  const handleSelectRow = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  // table data mobile view cards objects

  const policyData = [
    {
      carrier: "New York Life",
      policy: "NYL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      carrier: "Prudential",
      policy: "PRU-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    // Add more objects as needed
  ];

  return (
    <>
      {/*
    <!-- Client Profile (Example - would be shown when a client is selected) --> */}
      <div class="bg-white rounded-xl shadow-sm overflow-hidden dark:bg-gray-800">
        <div class="p-6 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between flex-wrap">
            <div class="flex items-center md:mb-0 mb-4">
              <div class="flex-shrink-0 h-[50px] w-[50px] rounded-full text-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                SJ
              </div>
              <div class="ml-4">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                  Sarah Johnson
                </h2>
                <div class="flex items-center mt-1">
                  <span class=" text-xs text-gray-500 dark:text-gray-400">
                    Member since 2018
                  </span>
                </div>
              </div>
            </div>
            <div class="flex space-x-2">
              <button class="px-3 py-1 text-gray-500  rounded-lg  dark:text-gray-300">
                <i class="fas fa-pencil"></i>
              </button>
              <button class="px-3 py-1 text-gray-500  rounded-lg  dark:text-gray-300">
                <i class="fas fa-trash"></i>
              </button>
              <div className="relative w-full">
                <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                  <option>Active</option>
                  <option>Inactive</option>
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

        <div class="grid grid-cols-1 lg:grid-cols-4">
          {/*
            <!-- Left Pane - Client Details --> */}
          <div class="p-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-600 lg:col-span-1">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Client Details
            </h3>

            <div class="space-y-4 border-b dark:border-gray-600 border-bg-gray-600 pb-[1.5rem]">
              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  EMAIL
                </p>
                <p class="text-sm text-gray-900 dark:text-white">
                  sarah.johnson@example.com
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  PHONE
                </p>

                <p class="text-sm text-gray-900 dark:text-white">
                  (555) 123-4567
                </p>
              </div>

              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  ADDRESS
                </p>
                <p class="text-sm text-gray-900 dark:text-white">
                  123 Main St, Apt 4B
                </p>
                <p class="text-sm text-gray-900 dark:text-white">
                  New York, NY 10001
                </p>
              </div>

              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  BIRTHDAY
                </p>
                <p class="text-sm text-gray-900 dark:text-white">
                  March 15, 1985
                </p>
              </div>

              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  ASSIGNED AGENT
                </p>
                <p class="text-sm text-gray-900 dark:text-white mt-1">
                  Mike Shawn
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <h3 class="text-lg font-bold text-gray-900 basis-2/3 dark:text-white mb-4 mt-6">
                Documents
              </h3>
              <a href="" class="basis-1/3 text-red-600 mb-4 mt-6 text-right">
                <span>
                  <i className="fa-solid fa-upload mr-1"></i>{" "}
                </span>{" "}
                Upload
              </a>
            </div>
            <div class="space-y-4 pb-4">
              {[...Array(3)].map((_any, i) => (
                <div key={i}>
                  <div className="max-w-md mx-auto border dark:border-gray-600 border-bg-gray-600 rounded-lg bg-white dark:bg-gray-800 p-4  flex items-center justify-between">
                    {/* Left Side: Icon + Info */}
                    <div className="flex items-center space-x-4">
                      <div className="text-red-600 text-2xl">
                        <i className="fas fa-file-pdf"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                          Project-Plan.pdf
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          1.2 MB
                        </p>
                      </div>
                    </div>

                    {/* Right Side: File Type */}
                    <div className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full dark:bg-gray-700">
                      PDF
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*
            <!-- Right Pane - Tabs Content --> */}
          <div class="px-6 py-1 lg:col-span-3">
            {/*
                <!-- Policies Tab Content --> */}
            <div class="mt-4">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                  {" "}
                  Policies (8)
                </h3>
                <button
                  className=" relative overflow-hidden px-4 py-2 text-sm rounded-md
                    text-red-600 border border-red-600 group transition-colors duration-200"
                >
                  <span class="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span class="relative z-10 group-hover:text-white">
                    + New Policy
                  </span>
                </button>
              </div>

              <div class="overflow-x-auto">
                <div className="   shadow-sm overflow-hidden">
                  {/*
                            <!-- Desktop Table --> */}
                  <div className="hidden md:block">
                    {/*
                                <!-- Filter Panel --> */}
                    <div class="bg-white dark:bg-gray-800 rounded-xl  py-4 mb-3 sticky top-0 z-10">
                      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div class="flex-1">
                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg
                                class="h-5 w-5 text-gray-400"
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
                              class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                              placeholder="Search by name, email, or phone"
                            />
                          </div>
                        </div>
                        <div class="flex flex-row md:flex-row gap-3">
                          <div className="relative w-full">
                            <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                              <option>All Status</option>
                              <option>New</option>
                              <option>Contacted</option>
                              <option>Working</option>
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
                          <div className="relative w-full">
                            <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                              <option>Issue Date</option>
                              <option>05/12/2020</option>
                              <option>05/12/2023</option>
                              <option>05/12/2024</option>
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

                    <div className="dark:bg-darkcard rounded-2xl  shadow-sm overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                            >
                              Carrier
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                            >
                              Policy #
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                            >
                              Face Amount
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                            >
                              Premium
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                            >
                              Issue Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            {/* <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                    Actions</th> */}
                          </tr>
                        </thead>
                        <tbody className="dark:bg-gray-800 dark:divide-gray-700 bg-white divide-y divide-gray-200">
                          {tableData.map((item, index) => (
                            <tr
                              key={index}
                              className="hover:bg-gray-50 dark:hover:bg-gray-800 "
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div>
                                    <div className="text-sm font-medium">
                                      {item.carrier}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {item.policy}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {item.type}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.face_amount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {item.premium}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {item.issue_date}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span
                                  className={`status-pill status-${item.status.toLowerCase()}
                                                        dark:text-white`}
                                >
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/*
                            <!-- Mobile Card View table data --> */}
                  <div className="md:hidden">
                    {/*
                                <!-- Filter Panel --> */}
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm px-0 py-4 mb-6 sticky top-0 z-10">
                      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div class="flex-1">
                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg
                                class="h-5 w-5 text-gray-400"
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
                              class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                              placeholder="Search by name, email, or phone"
                            />
                          </div>
                        </div>
                        <div class="flex flex-row md:flex-row gap-3">
                          <div className="relative w-full">
                            <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                              <option>All Status</option>
                              <option>New</option>
                              <option>Contacted</option>
                              <option>Working</option>
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
                          <div className="relative w-full">
                            <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                              <option>Issue Date</option>
                              <option>Referral</option>
                              <option>Website</option>
                              <option>Cold Call</option>
                              <option>Event</option>
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
                    {policyData.map((policy, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl dark:rounded-2xl divide-y divide-gray-200 dark:bg-gray-800 mb-3 border dark:border-gray-600"
                      >
                        <div className="p-6 client-card">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold text-lg text-gray-800 dark:text-white">
                                {policy.carrier}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                Policy #: {policy.policy}
                              </div>
                            </div>
                            <span
                              className={`status-pill status-${policy.status.toLowerCase()}
                                                dark:text-white`}
                            >
                              {policy.status}
                            </span>
                          </div>

                          <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm ml-1">
                            <div>
                              <div className="text-gray-500 dark:text-gray-400">
                                Policy Type
                              </div>
                              <div className="text-gray-800 dark:text-white">
                                {policy.type}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500 dark:text-gray-400">
                                Face Amount
                              </div>
                              <div className="text-gray-800 dark:text-white">
                                {policy.face_amount}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500 dark:text-gray-400">
                                Premium
                              </div>
                              <div className="text-gray-800 dark:text-white">
                                {policy.premium}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500 dark:text-gray-400">
                                Issue Date
                              </div>
                              <div className="text-gray-800 dark:text-white">
                                {policy.issue_date}
                              </div>
                            </div>
                          </div>

                          <div className="mt-7 flex justify-end space-x-2">
                            <button className="px-3 py-1 text-sm text-accent border border-accent rounded-lg dark:border-gray-600">
                              Edit
                            </button>
                            <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
