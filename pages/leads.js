import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Nodata from "../img/no-data.png";

export default function Leads() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [DeleteModalAnimation, setDeleteModalAnimation] = useState(false);
  // Add modal state
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);
  const [isBuyLeadsModalOpen, setIsBuyLeadsModalOpen] = useState(false);
  // Animation state for Add Lead Modal
  const [addLeadModalAnimation, setAddLeadModalAnimation] = useState(false);
  // animation state for buy lead modal
  const [BuyLeadsModalAnimation, setBuyLeadsModalAnimation] = useState(false);
  // animation state for agent modal
  const [agentModalAnimation, setAgentModalAnimation] = useState(false);

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
      manager: "Michael Chen",
      status: "Submitted",
    },
    {
      initials: "MS",
      name: "Mike Shawn",
      email: "mike123@gmail.com",
      phone: "(555) 987-6543",
      date: "25/04/2025",
      leads: 10,
      score: 40,
      manager: "Sarah jhon",
      status: "Working",
    },
    {
      initials: "JD",
      name: "James Davis",
      email: "james123@gmail.com",
      phone: "(555) 987-6543",
      date: "27/04/2025",
      leads: 15,
      score: 40,
      manager: "jhon Connor",
      status: "Submitted",
    },
    {
      initials: "SM",
      name: "Susan Miller",
      email: "susan123@gmail.com",
      phone: "(555) 987-6543",
      date: "30/04/2025",
      leads: 20,
      score: 40,
      manager: "Terry Louis",
      status: "New",
    },
    {
      initials: "NW",
      name: "Nina Williams",
      email: "nina123@gmail.com",
      phone: "(555) 987-6543",
      date: "31/04/2025",
      leads: 20,
      score: 40,
      manager: "Robert Lee",
      status: "New",
    },
    {
      initials: "KW",
      name: "Kim Woo",
      email: "kim123@gmail.com",
      phone: "(555) 987-6543",
      date: "31/04/2025",
      leads: 26,
      score: 40,
      manager: "Kelly Woods",
      status: "New",
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
              ${
                DeleteModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"
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
      {/* Agent Assignment Modal */}
      {isAgentModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto  backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0  dark:bg-gray-900 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
              ${agentModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
              duration-500 ease-out
            `}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
                      Assign Agent
                    </h3>
                    <div className="mt-2">
                      {/* Agent Selection Form */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Select Agent
                          </label>
                          <select className="w-full  bg-gray-100 text-gray-700 px-3 py-2 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                            <option value="">Choose an agent...</option>
                            <option value="1">John Doe</option>
                            <option value="2">Sarah Johnson</option>
                            <option value="3">Michael Chen</option>
                            <option value="4">Emily Rodriguez</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setIsAgentModalOpen(false);
                    setAgentModalAnimation(false);
                  }}
                >
                  Assign
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setAgentModalAnimation(false);
                    setTimeout(() => setIsAgentModalOpen(false), 500);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Add Lead Modal */}
      {isAddLeadModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto  backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0  dark:bg-gray-900 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
              ${
                addLeadModalAnimation
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
                      Add Lead
                    </h3>
                    <form class="w-full max-w-lg">
                      <div class="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                          <label
                            class="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-first-name"
                          >
                            Name
                          </label>
                          <input
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                          />
                          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                          <label
                            class="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-last-name"
                          >
                            Email
                          </label>
                          <input
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Agent@gmail.com"
                          />
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-4">
                        <div class="w-full px-3">
                          <label
                            class="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-password"
                          >
                            Phone
                          </label>
                          <input
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="4543545435"
                          />
                          {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800  py-3  sm:flex sm:flex-row-reverse border-t dark:border-gray-600 mt-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setIsAddLeadModalOpen(false);
                      setAddLeadModalAnimation(false);
                    }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setAddLeadModalAnimation(false);
                      setTimeout(() => setIsAddLeadModalOpen(false), 500);
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
      {/* Buy Leads Modal */}
      {isBuyLeadsModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto  backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0  dark:bg-gray-900 opacity-75"></div>
            </div>
            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full
              ${
                BuyLeadsModalAnimation
                  ? "scale-100 skew-y-0"
                  : "scale-0 skew-y-6"
              }            
             duration-500 ease-out`}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <section className="bg-white dark:bg-gray-800">
                      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
                        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Lead Packages
                          </h2>
                          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Pick the best package for you and start earning with
                            Agent's Edge
                          </p>
                        </div>
                        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                          {/* <!-- Pricing Card --> */}
                          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                              Package 1
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                              Lorem ipsum.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                              <span className="mr-2 text-5xl font-extrabold">
                                $29
                              </span>
                              <span className="text-gray-500 dark:text-gray-400">
                                /month
                              </span>
                            </div>
                            <Link
                              href=""
                              className="px-4 py-2 border-red-theme text-white bg-red-theme  flex items-center dark:text-white rounded-md transition-colors justify-center text-sm font-semibold"
                            >
                              <span className="text-sm ml-2 hidden md:block">
                                Get Started
                              </span>
                            </Link>
                            {/* <!-- List --> */}
                            <ul
                              role="list"
                              className="mt-8 space-y-4 text-left"
                            >
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>Lorem ipsum Lorem ipsum</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>Lorem ipsum, Lorem ipsum</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Total leads:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Premium support:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Free updates:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Pricing Card --> */}
                          <div className="flex flex-col scale-y-[1.1] p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-red-500 shadow dark:border-red-500 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                              Package 2
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                              Lorem ipsum.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                              <span className="mr-2 text-5xl font-extrabold">
                                $99
                              </span>
                              <span className="text-gray-500 dark:text-gray-400">
                                /month
                              </span>
                            </div>
                            <Link
                              href=""
                              className="px-4 py-2 border-red-theme text-white bg-red-theme  flex items-center dark:text-white rounded-md transition-colors justify-center text-sm font-semibold"
                            >
                              <span className="text-sm ml-2 hidden md:block">
                                Get Started
                              </span>
                            </Link>
                            {/* <!-- List --> */}
                            <ul
                              role="list"
                              className="mt-8 space-y-4 text-left"
                            >
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>Lorem ipsum Lorem ipsum</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>Lorem ipsum, Lorem ipsum</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Total leads:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Premium support:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Free updates:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Pricing Card --> */}
                          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">
                              Package 3
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                              Lorem ipsum.
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                              <span className="mr-2 text-5xl font-extrabold">
                                $499
                              </span>
                              <span className="text-gray-500 dark:text-gray-400">
                                /month
                              </span>
                            </div>
                            <Link
                              href=""
                              className="px-4 py-2 border-red-theme text-white bg-red-theme  flex items-center dark:text-white rounded-md transition-colors justify-center text-sm font-semibold"
                            >
                              <span className="text-sm ml-2 hidden md:block">
                                Get Started
                              </span>
                            </Link>
                            {/* <!-- List --> */}
                            <ul
                              role="list"
                              className="mt-8 space-y-4 text-left"
                            >
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>Lorem ipsum Lorem ipsum</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>Lorem ipsum, Lorem ipsum</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Total leads:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Premium support:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                              <li className="flex items-center space-x-3">
                                {/* <!-- Icon --> */}
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                <span>
                                  Free updates:{" "}
                                  <span className="font-semibold">
                                    Lorem ipsum
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300  dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setBuyLeadsModalAnimation(false);
                      setTimeout(() => setIsBuyLeadsModalOpen(false), 500);
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
              Leads
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Your all imported or generated leads here
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
            >
              <button
                onClick={() => {
                  setIsAgentModalOpen(true);
                  setTimeout(() => setAgentModalAnimation(true), 10); // allow modal to mount first
                }}
                className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
              >
                <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white flex items-center">
                  {" "}
                  <i className="fa-solid fa-user-plus"></i>
                  <span className="text-sm ml-2 hidden md:block">
                    Assign Agent
                  </span>
                </span>
              </button>
            </div>
            <div
              className="transform transition-all duration-300 ease-in-out origin-top"
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
                className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
              >
                <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white flex items-center">
                  {" "}
                  <i className="fa-solid fa-trash"></i>
                  <span className="text-sm ml-2 hidden md:block">Delete</span>
                </span>
              </button>
            </div>

            <button className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200">
              <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white flex items-center">
                {" "}
                <i className="fa-solid fa-download"></i>
                <span className="text-sm ml-2 hidden md:block">Import</span>
              </span>
            </button>

            <button
              onClick={() => {
                setIsAddLeadModalOpen(true);
                setTimeout(() => setAddLeadModalAnimation(true), 10);
              }}
              className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
            >
              <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white flex items-center">
                {" "}
                <i className="fa-solid fa-plus"></i>
                <span className="text-sm ml-2 hidden md:block">Add Lead</span>
              </span>
            </button>
            <button
              onClick={() => {
                setIsBuyLeadsModalOpen(true);
                setTimeout(() => setBuyLeadsModalAnimation(true), 10);
              }}
              className="px-4 py-2 border-red-theme text-white bg-red-theme flex items-center dark:text-white rounded-md transition-colors text-sm font-semibold"
            >
              <i className="fa-solid fa-plus"></i>
              <span className="text-sm ml-2 hidden md:block">Buy Leads</span>
            </button>
          </div>
        </div>
      </div>
      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 ">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Total Leads
          </p>
          <p className="text-2xl font-bold text-black dark:text-white">142</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            New This Week
          </p>
          <p className="text-2xl font-bold text-black dark:text-white">24</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Converted
          </p>
          <p className="text-2xl font-bold text-black dark:text-white">18</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Unassigned
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
                    placeholder="Search by name, email, or phone"
                  />
                </div>
              </div>
              <div className="flex flex-row md:flex-row gap-3">
                <div className="relative w-full">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none"
                  >
                    {uniqueStatuses.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
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
                <div className="relative w-full">
                  <select
                    value={agentFilter}
                    onChange={(e) => setAgentFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none"
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
            </div>
          </div>
          <div className="dark:bg-darkcard rounded-2xl shadow-sm overflow-hidden">
            {filteredData.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
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
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Created On
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Inactive Days
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Total Days
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Assigned To
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="dark:bg-gray-800 dark:divide-gray-700 bg-white divide-y divide-gray-200">
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800 "
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                            {item.initials}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {item.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.leads}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {item.score}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="relative">
                          <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                            <option value="2">Sarah Johnson</option>
                            <option value="3">Michael Chen</option>
                            <option value="4">Emily Rodriguez</option>
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
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="relative">
                          <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                            <option value="">Submitted</option>
                            <option value="1">New</option>
                            <option value="2">Working</option>
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
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <button className="text-accent hover:text-accent-dark mr-3">
                          <i className="fas fa-pencil text-gray-400"></i>
                        </button>
                        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mr-3">
                          <i className="fas fa-trash text-gray-400"></i>
                        </button>
                        {/* <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <i className="fas fa-eye text-gray-400"></i>
                  </button> */}
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6 sticky top-0 z-10">
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
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                    placeholder="Search by name, email, or phone"
                  />
                </div>
              </div>
              <div className="flex flex-row md:flex-row gap-3">
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
                  <select className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
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
