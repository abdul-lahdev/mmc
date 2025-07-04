import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Nodata from "../img/no-data.png";
import { useRouter } from "next/router";

export default function Agents() {
  const router = useRouter();
  // Add modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [DeleteModalAnimation, setDeleteModalAnimation] = useState(false);
  const [AddAgentModalOpen, setAddAgentModalOpen] = useState(false);
  const [AgentsModalAnimation, setAgentsModalAnimation] = useState(false);

  // table objects

  const tableData = [
    {
      initials: "AB",
      name: "Alice Brown",
      email: "brow@gmail.com",
      ID: "XYZ123",
      RefNum: "1237890",
      team: "dummy team",
      joindate: "2024-11-01",
      leads: 12,
      policies: 95,
      status: "Active",
      level: "Senior",
    },
    {
      initials: "MW",
      name: "Megan Williams",
      email: "megan123@gmail.com",
      ID: "abc123",
      RefNum: "0987654",
      team: "dummy team",
      joindate: "2022-11-01",
      leads: 10,
      policies: 95,
      status: "Active",
      level: "Junior",
    },
    {
      initials: "MS",
      name: "Mike Shawn",
      email: "mike123@gmail.com",
      ID: "abc123",
      RefNum: "0987654",
      team: "demo team",
      joindate: "2022-11-01",
      leads: 10,
      policies: 95,
      status: "Active",
      level: "Senior",
    },
    {
      initials: "JD",
      name: "James Davis",
      email: "james123@gmail.com",
      ID: "abc123",
      RefNum: "0987654",
      team: "dummy team",
      joindate: "2022-11-01",
      leads: 10,
      policies: 95,
      status: "Active",
      level: "Senior",
    },
    {
      initials: "SM",
      name: "Susan Miller",
      email: "susan123@gmail.com",
      ID: "abc123",
      RefNum: "0987654",
      team: "dummy team",
      joindate: "2022-11-01",
      leads: 10,
      policies: 95,
      status: "Active",
      level: "Junior",
    },
    {
      initials: "NW",
      name: "Nina Williams",
      email: "nina123@gmail.com",
      ID: "abc123",
      RefNum: "0987654",
      team: "dummy team",
      joindate: "2022-11-01",
      leads: 10,
      policies: 95,
      status: "Active",
      level: "Senior",
    },
    {
      initials: "KW",
      name: "Kim Woo",
      email: "kim123@gmail.com",
      ID: "abc123",
      RefNum: "0987654",
      team: "dummy team",
      joindate: "2022-11-01",
      leads: 10,
      policies: 95,
      status: "Active",
      level: "Mid",
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
      item.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ID.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.joindate.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All Statuses" || item.status === statusFilter;
    const matchesAgent =
      agentFilter === "All Agents" || item.team === agentFilter;

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

      {/* Add Agent Modal */}
      {AddAgentModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
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
                AgentsModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"
              }
              duration-500 ease-out
            `}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4 border-b dark:border-gray-600 pb-4">
                      Add Agent
                    </h3>
                    <form className="w-full max-w-lg">
                      <div className="w-full  mb-4">
                        <label
                          className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                          htmlFor="grid-address"
                        >
                          Sponsor ID
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          id="grid-address"
                          type="text"
                          placeholder="Enter Sponsor ID"
                        />
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-first-name"
                          >
                            First Name
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                          />
                          {/* <p className= "text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-first-name"
                          >
                            Last Name
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                          />
                          {/* <p className= "text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-last-name"
                          >
                            Phone
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="123 456 789"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-last-name"
                          >
                            Email
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Agent@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-2 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-last-name"
                          >
                            Country
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Spain"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-last-name"
                          >
                            Date Of Birth
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="12-6-1999"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-state"
                          >
                            Gender
                          </label>
                          <div className="relative">
                            <select
                              className="appearance-none block w-full bg-gray-100 text-gray-400 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700  dark:text-gray-400 "
                              id="grid-state"
                            >
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current dark:fill-gray-400 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full  mb-4">
                        <label
                          className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                          htmlFor="grid-address"
                        >
                          Address
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          id="grid-address"
                          type="text"
                          placeholder="Enter your address"
                        />
                      </div>

                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-city"
                          >
                            City
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Enter City"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-state"
                          >
                            State
                          </label>
                          <div className="relative">
                            <select
                              className="appearance-none block w-full bg-gray-100 text-gray-400 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700  dark:text-gray-400 "
                              id="grid-state"
                            >
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current dark:fill-gray-400 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                          <label
                            className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                            for="grid-zip"
                          >
                            Zip
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            id="grid-zip"
                            type="text"
                            placeholder="90210"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800  py-3  sm:flex sm:flex-row-reverse border-t dark:border-gray-600  mt-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setAddAgentModalOpen(false)}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setTimeout(() => setAddAgentModalOpen(false), 500);
                      setAgentsModalAnimation(false);
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
              Agents
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Your all imported or generated agents here
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
                <i className="fa-solid fa-upload"></i>
                <span className="text-sm ml-2 hidden md:block">Upload Cv</span>
              </span>
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                setAddAgentModalOpen(true);
                setTimeout(() => setAgentsModalAnimation(true), 10);
              }}
            >
              <i className="fa-solid fa-plus mt-1"></i>
              <span className="text-sm ml-2 hidden md:block">Add Agent</span>
            </button>
          </div>
        </div>
      </div>

      {/*
  <!-- Client Table --> */}
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
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Ref Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Team
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Joined Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Leads
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Policies
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
                      Level
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
                      <td
                        className="px-6 py-4 whitespace-nowrap"
                        onClick={() => router.push("/agent_view")}
                      >
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
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        onClick={() => router.push("/agent_view")}
                      >
                        {item.ID}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        onClick={() => router.push("/agent_view")}
                      >
                        {item.RefNum}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap"
                        onClick={() => router.push("/agent_view")}
                      >
                        {item.team}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        onClick={() => router.push("/agent_view")}
                      >
                        {item.joindate}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        onClick={() => router.push("/agent_view")}
                      >
                        {item.leads}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        onClick={() => router.push("/agent_view")}
                      >
                        {item.policies}
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        onClick={() => router.push("/agent_view")}
                      >
                        <span
                          className={`status-pill status-${item.status.toLowerCase()} dark:text-white`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm"
                        onClick={() => router.push("/agent_view")}
                      >
                        {item.level}
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
                    <div className="text-gray-500 dark:text-gray-400">Team</div>
                    <div>{client.team}</div>
                  </div>
                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Ref Number
                    </div>
                    <div>{client.RefNum}</div>
                  </div>
                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Joined Date
                    </div>
                    <div className="truncate">{client.joindate}</div>
                  </div>

                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Leads
                    </div>
                    <div>{client.leads}</div>
                  </div>
                  <div className="w-24">
                    <div className="text-gray-500 dark:text-gray-400">
                      Policies
                    </div>
                    <div>{client.policies}</div>
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
