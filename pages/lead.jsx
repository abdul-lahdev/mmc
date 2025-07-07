import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nodata from "../img/no-data.png";
import { useRouter } from "next/router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
export default function Lead() {
  const router = useRouter();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [DeleteModalAnimation, setDeleteModalAnimation] = useState(false);

  // table objects

  const tableData = [
    {
      initials: "MW",
      name: "Megan Williams",
      email: "megan123@gmail.com",
      phone: "(555) 987-6543",
      date: "25/04/2025",
      leads: 20,
      score: 30,
      status: "Qualified",
      manager: "Michael Chen",
      company: "Louis Vuitton",
      time: "07:13 pm",
    },
    {
      initials: "MS",
      name: "Mike Shawn",
      email: "mike123@gmail.com",
      phone: "(555) 987-6543",
      date: "25/04/2025",
      leads: 10,
      score: 40,
      status: "Trial",
      manager: "Sarah jhon",
      company: "Gillette",
      time: "07:13 pm",
    },
    {
      initials: "JD",
      name: "James Davis",
      email: "james123@gmail.com",
      phone: "(555) 987-6543",
      date: "27/04/2025",
      leads: 15,
      score: 40,
      status: "Qualified",
      manager: "jhon Connor",
      company: "Gillette",
      time: "07:13 pm",
    },
    {
      initials: "SM",
      name: "Susan Miller",
      email: "susan123@gmail.com",
      phone: "(555) 987-6543",
      date: "30/04/2025",
      leads: 20,
      score: 40,
      status: "Potential",
      manager: "Terry Louis",
      company: "Starbucks",
      time: "07:13 pm",
    },
    {
      initials: "NW",
      name: "Nina Williams",
      email: "nina123@gmail.com",
      phone: "(555) 987-6543",
      date: "31/04/2025",
      leads: 20,
      score: 40,
      status: "Qualified",
      manager: "Robert Lee",
      company: "The Walt Disney Company",
      time: "07:13 pm",
    },
    {
      initials: "KW",
      name: "Kim Woo",
      email: "kim123@gmail.com",
      phone: "(555) 987-6543",
      date: "31/04/2025",
      leads: 26,
      score: 40,
      status: "Qualified",
      manager: "Kelly Woods",
      company: "McDonalds",
      time: "07:13 pm",
    },
  ];

  // Add search and filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [agentFilter, setAgentFilter] = useState("All Agents");

  // Get unique statuses and agents for filter options
  const uniqueStatuses = [
    "All Statuses",
    ...new Set(tableData.map((item) => item.status)),
  ];
  const uniqueAgents = [
    "All Agents",
    ...new Set(tableData.map((item) => item.manager)),
  ];

  // Filter table data based on search and filters
  const filteredData = tableData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All Statuses" || item.status === statusFilter;
    const matchesAgent =
      agentFilter === "All Agents" || item.manager === agentFilter;

    return matchesSearch && matchesStatus && matchesAgent;
  });

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

  const clientData = [
    {
      initials: "MW",
      name: "Megan Williams",
      email: "megan123@gmail.com",
      phone: "(555) 123-4567",
      createdOn: "25/04/2025",
      inactiveDays: 20,
      totalDays: 30,
      assignedTo: "Michael Chen",
      status: "contacted",
    },
    {
      initials: "MS",
      name: "Mike Shawn",
      email: "mike123@gmail.com",
      phone: "(555) 123-4567",
      createdOn: "25/04/2025",
      inactiveDays: 10,
      totalDays: 40,
      assignedTo: "Sarah jhon",
      status: "working",
    },
  ];

  return (
    <>
      {/* delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 dark:bg-gray-900 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
              ${DeleteModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"
                }
              duration-500 ease-out
            `}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                      Delete
                    </h3>
                    <div className="mt-2">
                      <p>Are you sure want to delete all</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setTimeout(() => setIsDeleteModalOpen(false), 500);
                    setDeleteModalAnimation(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl mb-3">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              All Leads
            </h1>
          </div>
          <div className="flex gap-3 mt-2 md:mt-0 items-center">
            <div
              className="transform transition-all duration-300 ease-in-out origin-top mb-3"
              style={{
                transform: selectedItems.length > 0 ? "scale(1)" : "scale(0)",
                opacity: selectedItems.length > 0 ? "1" : "0",
                height: selectedItems.length > 0 ? "auto" : "0",
                overflow: "hidden",
                display: selectedItems.length > 0 ? "block" : "none",
              }}
            >
              <button
                onClick={() => {
                  setIsDeleteModalOpen(true);
                  setTimeout(() => setDeleteModalAnimation(true), 10);
                }}
                className="relative overflow-hidden px-4 py-2 text-sm rounded-[26px]  text-red-600 border border-red-600 group transition-colors duration-200"
              >
                <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white flex items-center">
                  {" "}
                  <i className="fa-solid fa-trash"></i>
                  <span className="text-sm ml-2 hidden md:block">Delete</span>
                </span>
              </button>
            </div>

            <div class="bg-white dark:bg-gray-800 py-4 mb-3 sticky top-0 z-10">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-row md:flex-row gap-3">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M2.25661 3.77791C1.75238 3.21437 1.50027 2.93259 1.49076 2.69312C1.4825 2.48509 1.5719 2.28515 1.73244 2.15259C1.91724 2 2.29534 2 3.05154 2H12.9468C13.703 2 14.0811 2 14.2659 2.15259C14.4265 2.28515 14.5159 2.48509 14.5076 2.69312C14.4981 2.93259 14.246 3.21437 13.7417 3.77791L9.93759 8.02962C9.83708 8.14196 9.78682 8.19813 9.75099 8.26205C9.7192 8.31875 9.69588 8.37978 9.68176 8.44323C9.66585 8.51476 9.66585 8.59013 9.66585 8.74087V12.3056C9.66585 12.436 9.66585 12.5011 9.64482 12.5575C9.62624 12.6073 9.59602 12.6519 9.55668 12.6877C9.51216 12.7281 9.45164 12.7524 9.33059 12.8008L7.06392 13.7074C6.81889 13.8054 6.69638 13.8545 6.59803 13.834C6.51202 13.8161 6.43655 13.765 6.38801 13.6918C6.33251 13.6081 6.33251 13.4762 6.33251 13.2122V8.74087C6.33251 8.59013 6.33251 8.51476 6.31659 8.44323C6.30247 8.37978 6.27915 8.31875 6.24737 8.26205C6.21154 8.19813 6.16128 8.14196 6.06077 8.02962L2.25661 3.77791Z"
                          stroke="#62748E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </svg>
                    </div>
                    <select
                      value={agentFilter}
                      onChange={(e) => setAgentFilter(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full pl-[40px] pr-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-[26px] text-sm focus:outline-none"
                    >
                      {uniqueAgents.map((agent, index) => (
                        <option key={index} value={agent}>
                          {agent}
                        </option>
                      ))}
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
                <div class="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-[#62748E]"
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
                      className="block w-full pl-10 pr-3 py-2 dark:border-gray-600 rounded-[26px] bg-[#F8FAFC] dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent dark:text-white"
                      placeholder="Search by activity"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <Link href=""
            className="px-4 py-2 border-red-theme text-white bg-red-theme dark:text-white rounded-md transition-colors text-sm font-semibold">
            + Lead
          </Link>  */}
          </div>
        </div>
      </div>
      {/* Summary Stats */}
      <div className="hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 ">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Total Policies
          </p>
          <p className="text-2xl font-bold text-black dark:text-white">142</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Pending Policies
          </p>
          <p className="text-2xl font-bold text-black dark:text-white">24</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Accepted Policies
          </p>
          <p className="text-2xl font-bold text-black dark:text-white">18</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Rejected Policies
          </p>
          <p className="text-2xl font-bold text-black dark:text-white">7</p>
        </div>
      </div>

      {/*
  <!-- Client Table --> */}
      <div className="   shadow-sm overflow-hidden">
        {/*
    <!-- Desktop Table --> */}
        <div className="hidden md:block">
          {/*
      <!-- Filter Panel --> */}

          <div className="dark:bg-darkcard rounded-2xl shadow-sm overflow-hidden">
            {filteredData.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-[#F8FAFC]">
                  <tr>
                    <th className="px-4 py-3">
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          checked={allSelected}
                          onChange={handleSelectAll}
                          className="form-checkbox  h-4 w-4 text-accent accent-red-500"
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-[14px] font-[700] text-[#1D293D]  tracking-wider"
                    >
                      Added on
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-[14px] font-[700] text-[#1D293D]  tracking-wider"
                    >
                      Business Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-[14px] font-[700] text-[#1D293D]  tracking-wider"
                    >
                      Contact
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-[14px] font-[700] text-[#1D293D]  tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-[14px] font-[700] text-[#1D293D]  tracking-wider"
                    >
                      Actions
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>
                <tbody className="dark:bg-gray-800 dark:divide-gray-700 bg-white divide-y divide-gray-200">
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-[#F1F5F9] hover:bg-gray-50 dark:hover:bg-gray-800 "
                    >
                      <td className="px-4 py-4 text-center">
                        <div className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(index)}
                            onChange={() => handleSelectRow(index)}
                            className="form-checkbox h-4 w-4 text-accent accent-red-500"
                          />
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-[14px] font-[500] border-l-[1px] border-[#F1F5F9]"
                        onClick={() => router.push("/admin/leadView")}
                      >
                        <span className="block"> {item.date}</span>
                        <span className="text-[#45556C]"> {item.time}</span>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap border-l-[1px] border-[#F1F5F9]"
                        onClick={() => router.push("/client_view")}
                      >
                        <div className="flex items-center">
                          <div className="">
                            <div className="text-[#0F172B] text-[14px] font-[500]">
                              {item.company}
                            </div>
                            <div className="text-[#45556C] text-[12px] font-[400]">
                              {item.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap border-l-[1px] border-[#F1F5F9]"
                        onClick={() => router.push("/client_view")}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#90A1B9] font-[500] text-[12px]">
                            {item.initials}
                          </div>
                          <div className="ml-4">
                            <div className="text-[#0F172B] text-[14px] font-[500]">
                              {item.name}
                            </div>
                            <div className="text-[#45556C] text-[12px] font-[400]">
                              {item.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td
                        className="px-6 py-4 whitespace-nowrap border-l-[1px] border-[#F1F5F9]"
                        onClick={() => router.push("/client_view")}
                      >
                        {item.status === "Qualified" ? (
                          <span className="inline-flex items-center rounded-[25px] bg-[#F0FDF4] px-3 py-1 text-[14px] font-[700] border text-[#00A63E] border-solid border-[#00A63E] ">
                            {item.status}
                          </span>
                        ) : item.status === "Trial" ? (
                          <span className="inline-flex items-center rounded-[25px] bg-[#FEFCE8] px-3 py-1 text-[14px] font-[700] border text-[#FDC700] border-solid border-[#FDC700] ">
                            {item.status}
                          </span>
                        ) : item.status === "Potential" ? (
                          <span className="inline-flex items-center rounded-[25px] bg-[#F8FAFC] px-3 py-1 text-[14px] font-[700] border text-[#90A1B9] border-solid border-[#90A1B9] ">
                            {item.status}
                          </span>
                        ) : (
                          ""
                        )}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm border-l-[1px] border-[#F1F5F9]"
                      // onClick={() => router.push("/client_view")}
                      >
                        <div className="flex items-center gap-3">
                          <Link href="">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <g clip-path="url(#clip0_112_9723)">
                                {" "}
                                <path
                                  d="M9.36709 4.00016C10.0182 4.12721 10.6167 4.44567 11.0858 4.91479C11.5549 5.38391 11.8734 5.98234 12.0004 6.6335M9.36709 1.3335C10.7199 1.48379 11.9815 2.08961 12.9446 3.0515C13.9077 4.01339 14.5151 5.27417 14.6671 6.62683M6.81841 9.24221C6.01736 8.44116 5.38483 7.5354 4.92084 6.56898C4.88092 6.48586 4.86097 6.44429 4.84564 6.3917C4.79115 6.2048 4.83029 5.97529 4.94363 5.817C4.97552 5.77246 5.01363 5.73436 5.08984 5.65815C5.32291 5.42508 5.43944 5.30854 5.51563 5.19136C5.80296 4.74943 5.80296 4.17971 5.51563 3.73778C5.43944 3.6206 5.32291 3.50406 5.08984 3.27099L4.95992 3.14108C4.60563 2.78678 4.42848 2.60964 4.23823 2.51341C3.85985 2.32203 3.41301 2.32203 3.03464 2.51341C2.84438 2.60964 2.66723 2.78678 2.31294 3.14108L2.20785 3.24617C1.85477 3.59925 1.67823 3.77579 1.54339 4.01581C1.39378 4.28215 1.28621 4.69581 1.28712 5.00129C1.28793 5.27659 1.34134 5.46474 1.44814 5.84104C2.02212 7.8633 3.1051 9.77154 4.69709 11.3635C6.28908 12.9555 8.19732 14.0385 10.2196 14.6125C10.5959 14.7193 10.784 14.7727 11.0593 14.7735C11.3648 14.7744 11.7785 14.6668 12.0448 14.5172C12.2848 14.3824 12.4614 14.2059 12.8145 13.8528L12.9195 13.7477C13.2738 13.3934 13.451 13.2162 13.5472 13.026C13.7386 12.6476 13.7386 12.2008 13.5472 11.8224C13.451 11.6321 13.2738 11.455 12.9195 11.1007L12.7896 10.9708C12.5566 10.7377 12.44 10.6212 12.3228 10.545C11.8809 10.2577 11.3112 10.2577 10.8693 10.545C10.7521 10.6212 10.6355 10.7377 10.4025 10.9708C10.3263 11.047 10.2882 11.0851 10.2436 11.117C10.0853 11.2303 9.85582 11.2695 9.66892 11.215C9.61633 11.1997 9.57476 11.1797 9.49164 11.1398C8.52523 10.6758 7.61946 10.0433 6.81841 9.24221Z"
                                  stroke="#90A1B9"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />{" "}
                              </g>{" "}
                              <defs>
                                {" "}
                                <clipPath id="clip0_112_9723">
                                  {" "}
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                  />{" "}
                                </clipPath>{" "}
                              </defs>{" "}
                            </svg>
                          </Link>
                          <Link href="">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M14.334 11.9998L9.90541 7.99984M6.09589 7.99984L1.66734 11.9998M1.33398 4.6665L6.77726 8.4768C7.21804 8.78535 7.43844 8.93962 7.67816 8.99938C7.88991 9.05216 8.11139 9.05216 8.32314 8.99938C8.56287 8.93962 8.78326 8.78535 9.22404 8.4768L14.6673 4.6665M4.53398 13.3332H11.4673C12.5874 13.3332 13.1475 13.3332 13.5753 13.1152C13.9516 12.9234 14.2576 12.6175 14.4493 12.2412C14.6673 11.8133 14.6673 11.2533 14.6673 10.1332V5.8665C14.6673 4.7464 14.6673 4.18635 14.4493 3.75852C14.2576 3.3822 13.9516 3.07624 13.5753 2.88449C13.1475 2.6665 12.5874 2.6665 11.4673 2.6665H4.53398C3.41388 2.6665 2.85383 2.6665 2.426 2.88449C2.04968 3.07624 1.74372 3.3822 1.55197 3.75852C1.33398 4.18635 1.33398 4.7464 1.33398 5.8665V10.1332C1.33398 11.2533 1.33398 11.8133 1.55197 12.2412C1.74372 12.6175 2.04968 12.9234 2.426 13.1152C2.85383 13.3332 3.41388 13.3332 4.53398 13.3332Z"
                                stroke="#90A1B9"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                            </svg>
                          </Link>
                          <Link href="">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M4.66667 5.66667H8M4.66667 8H10M4.66667 12V13.557C4.66667 13.9122 4.66667 14.0898 4.73949 14.1811C4.80282 14.2604 4.89885 14.3066 5.00036 14.3065C5.11708 14.3063 5.25578 14.1954 5.53317 13.9735L7.12348 12.7012C7.44834 12.4413 7.61078 12.3114 7.79166 12.219C7.95213 12.137 8.12295 12.0771 8.29948 12.0408C8.49845 12 8.70646 12 9.1225 12H10.8C11.9201 12 12.4802 12 12.908 11.782C13.2843 11.5903 13.5903 11.2843 13.782 10.908C14 10.4802 14 9.9201 14 8.8V5.2C14 4.07989 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V9.33333C2 9.95331 2 10.2633 2.06815 10.5176C2.25308 11.2078 2.79218 11.7469 3.48236 11.9319C3.7367 12 4.04669 12 4.66667 12Z"
                                stroke="#90A1B9"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                            </svg>
                          </Link>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm border-l-[1px] border-[#F1F5F9]">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-transparent px-3 py-2 text-sm font-semibold text-gray-900  ring-inset hover:bg-gray-50 shadow-none">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                {" "}
                                <path
                                  d="M7.99935 8.66683C8.36754 8.66683 8.66602 8.36835 8.66602 8.00016C8.66602 7.63197 8.36754 7.3335 7.99935 7.3335C7.63116 7.3335 7.33268 7.63197 7.33268 8.00016C7.33268 8.36835 7.63116 8.66683 7.99935 8.66683Z"
                                  stroke="#90A1B9"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />{" "}
                                <path
                                  d="M12.666 8.66683C13.0342 8.66683 13.3327 8.36835 13.3327 8.00016C13.3327 7.63197 13.0342 7.3335 12.666 7.3335C12.2978 7.3335 11.9993 7.63197 11.9993 8.00016C11.9993 8.36835 12.2978 8.66683 12.666 8.66683Z"
                                  stroke="#90A1B9"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />{" "}
                                <path
                                  d="M3.33268 8.66683C3.70087 8.66683 3.99935 8.36835 3.99935 8.00016C3.99935 7.63197 3.70087 7.3335 3.33268 7.3335C2.96449 7.3335 2.66602 7.63197 2.66602 8.00016C2.66602 8.36835 2.96449 8.66683 3.33268 8.66683Z"
                                  stroke="#90A1B9"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />{" "}
                              </svg>
                            </MenuButton>
                          </div>

                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                          >
                            <div className="py-1">
                              <MenuItem>
                                <a
                                  href="/client_view"
                                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                  View
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                  Edit
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                  Delete
                                </a>
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <Image
                  src={Nodata}
                  alt="No Data Found"
                  width={300}
                  height={300}
                  priority
                  className="mb-4"
                />
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No records found
                </p>
                {searchQuery ||
                  statusFilter !== "All Statuses" ||
                  agentFilter !== "All Agents" ? (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setStatusFilter("All Statuses");
                      setAgentFilter("All Agents");
                    }}
                    className="mt-4 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </div>

        {/*
    <!-- Mobile Card View table data --> */}
        <div className="md:hidden">
          {/*
      <!-- Filter Panel --> */}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6 sticky top-0 z-10">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                    <option>All Statuses</option>
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
                  <select className="appearance-none bg-white border rounded-[26px] border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white text-sm focus:outline-none">
                    <option>All Agents</option>
                    <option>John Doe</option>
                    <option>Sarah Johnson</option>
                    <option>Michael Chen</option>
                    <option>Emily Rodriguez</option>
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
          {clientData.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl dark:rounded-2xl divide-y divide-gray-200 dark:bg-gray-800 mb-3"
            >
              <div className="p-6 client-card">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          className="form-checkbox  h-4 w-4 text-accent accent-red-500"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                      {client.initials}
                    </div>
                    <div>
                      <div className="font-medium">{client.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {client.email}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`status-pill status-${client.status.toLowerCase()} dark:text-white`}
                  >
                    {client.status.charAt(0).toUpperCase() +
                      client.status.slice(1)}
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 text-sm ml-8">
                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Assigned To
                    </div>
                    <div>{client.assignedTo}</div>
                  </div>
                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Number
                    </div>
                    <div>{client.phone}</div>
                  </div>
                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Created on
                    </div>
                    <div className="truncate">{client.createdOn}</div>
                  </div>

                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Inactive Days
                    </div>
                    <div>{client.inactiveDays}</div>
                  </div>
                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Total Days
                    </div>
                    <div>{client.totalDays}</div>
                  </div>
                </div>

                <div className="mt-7 flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm text-accent border border-accent rounded-lg dark:border-gray-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm  border border-gray-300 dark:border-gray-600 rounded-lg">
                    Delete
                  </button>
                  {/* <button
              className="px-3 py-1 text-sm text-accent border border-accent rounded-lg dark:border-gray-600">
              View
            </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
