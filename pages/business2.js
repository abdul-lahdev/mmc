import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Nodata from "../img/no-data.png";

export default function Business() {
  // Add modal state
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  // table objects

  const tableData = [
    {
      policynumber: 123,
      initials: "NW",
      name: "Nina Williams",
      email: "nina123@gmail.com",
      courier: "FedEx",
      faceamount: 109,
      policytype: "Term Life",
      totalamount: 12345,
      tenure: "10 years",
      premium: "$120/month",
      payabledate: "12/03/2022",
      issuedate: "12/03/2020",
      status: "New",
    },
    {
      policynumber: 124,
      initials: "JD",
      name: "John Doe",
      email: "john.doe@example.com",
      courier: "UPS",
      faceamount: 200,
      policytype: "Whole Life",
      totalamount: 15000,
      tenure: "20 years",
      premium: "$200/month",
      payabledate: "15/04/2023",
      issuedate: "10/04/2021",
      status: "Active",
    },
    {
      policynumber: 125,
      initials: "AS",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      courier: "DHL",
      faceamount: 150,
      policytype: "Universal Life",
      totalamount: 18000,
      tenure: "15 years",
      premium: "$150/month",
      payabledate: "01/01/2023",
      issuedate: "01/01/2020",
      status: "Lapsed",
    },
    {
      policynumber: 126,
      initials: "MK",
      name: "Michael King",
      email: "michael.king@example.com",
      courier: "BlueDart",
      faceamount: 250,
      policytype: "Endowment",
      totalamount: 22000,
      tenure: "25 years",
      premium: "$250/month",
      payabledate: "20/06/2023",
      issuedate: "20/06/2022",
      status: "Active",
    },
    {
      policynumber: 127,
      initials: "RL",
      name: "Rachel Lee",
      email: "rachel.lee@example.com",
      courier: "FedEx",
      faceamount: 175,
      policytype: "Money Back",
      totalamount: 19500,
      tenure: "12 years",
      premium: "$170/month",
      payabledate: "05/09/2023",
      issuedate: "05/09/2021",
      status: "Pending",
    },
    {
      policynumber: 128,
      initials: "TS",
      name: "Tom Sanders",
      email: "tom.sanders@example.com",
      courier: "DTDC",
      faceamount: 300,
      policytype: "Term Life",
      totalamount: 25000,
      tenure: "30 years",
      premium: "$300/month",
      payabledate: "28/11/2023",
      issuedate: "28/11/2019",
      status: "Cancelled",
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
      item.status.toLowerCase().includes(searchQuery.toLowerCase());

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
      {/* Agent Assignment Modal */}
      {isAgentModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
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
                          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 dark:bg-gray-700">
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
                  onClick={() => setIsAgentModalOpen(false)}
                >
                  Assign
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsAgentModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl banner-pattern p-6 mb-3">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Business
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Your all imported or generated business here
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
                onClick={() => setIsAgentModalOpen(true)}
                className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
              >
                <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white flex items-center">
                  {" "}
                  <i className="fa-solid fa-plus"></i>
                  <span className="text-sm ml-2 hidden md:block">
                    Assign Agent
                  </span>
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

            <Link
              href=""
              className="px-4 py-2 border-red-theme text-white bg-red-theme flex items-center dark:text-white rounded-md transition-colors text-sm font-semibold"
            >
              <i className="fa-solid fa-plus"></i>
              <span className="text-sm ml-2 hidden md:block">Add Business</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Summary Stats */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 ">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Businesses</p>
      <p className="text-2xl font-bold text-black dark:text-white">142</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">New This Week</p>
      <p className="text-2xl font-bold text-black dark:text-white">24</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Converted</p>
      <p className="text-2xl font-bold text-black dark:text-white">18</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 ">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Unassigned</p>
      <p className="text-2xl font-bold text-black dark:text-white">7</p>
    </div>
  </div> */}

      {/*
  <!-- Client Table --> */}
      <div className="   shadow-sm overflow-hidden">
        {/*
    <!-- Desktop Table --> */}
        <div className="hidden md:block">
          {/*
      <!-- Filter Panel --> */}
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-3 sticky top-0 z-10">
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
                <thead className="bg-gray-100 dark:bg-gray-800">
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
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Policy Number
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Client Name
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Courier
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Face Amount
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Policy Type
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Total Amount
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Tenure
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Premium
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Payable Date
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Issue Date
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
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
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.policynumber}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap">
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
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.courier}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.faceamount}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap">
                        {item.policytype}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.totalamount}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.tenure}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.premium}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.payabledate}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        {item.issuedate}
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-sm">
                        <span
                          className={`status-pill status-${item.status.toLowerCase()} dark:text-white`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-2 py-1 whitespace-nowrap text-left text-sm font-medium">
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
                  <button className="px-2 py-1 text-sm text-accent border border-accent rounded-lg dark:border-gray-600">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-sm  border border-gray-300 dark:border-gray-600 rounded-lg">
                    Delete
                  </button>
                  {/* <button
              className="px-2 py-1 text-sm text-accent border border-accent rounded-lg dark:border-gray-600">
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
