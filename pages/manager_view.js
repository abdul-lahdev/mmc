import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Nodata from "../img/no-data.png";
// import Nodata2 from '../img/no-data.png';
// import Nodata3 from '../img/no-data.png';

export default function Manager_view() {
  const [activeTab, setActiveTab] = useState("Commissions");
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

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

  const tableData4 = [
    {
      carrier: "Northwestern Mutual",
      policy: "NM-847392",
      type: "Whole Life",
      face_amount: "$500,000",
      premium: "$450/mo",
      commission: "$123",
      issue_date: "25/04/2025",
      status: "Active",
    },
    {
      carrier: "Prudential",
      policy: "PRU-562891",
      type: "Term Life",
      face_amount: "$1,000,000",
      premium: "$620/mo",
      commission: "$123",
      issue_date: "25/04/2025",
      status: "Active",
    },
    {
      carrier: "New York Life",
      policy: "NYL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "25/04/2025",
      commission: "$123",
      status: "Active",
    },
    {
      carrier: "California Life",
      policy: "CL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "25/04/2025",
      commission: "$123",
      status: "Active",
    },
    {
      carrier: "LA Life",
      policy: "LA-349201",
      type: "Whole Life",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "25/04/2025",
      commission: "$123",
      status: "Active",
    },
    {
      carrier: "San francisco Life",
      policy: "SFL-339201",
      type: "Term Life",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      commission: "$123",
      issue_date: "25/04/2025",
      status: "Active",
    },
    {
      carrier: "Prudential",
      policy: "PRU-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "25/04/2025",
      commission: "$123",
      status: "Active",
    },
    {
      carrier: "New York Life",
      policy: "NYL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      commission: "$123",
      status: "Active",
      issue_date: "25/04/2025",
    },
  ];
  const tableData2 = [
    {
      initials: "MW",
      name: "Megan Williams",
      email: "megan123@gmail.com",
      phone: "(555) 987-6543",
      date: "25/04/2025",
      leads: 20,
      score: 30,
      manager: "Michael Chen",
      status: "Contacted",
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
      status: "Converted",
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
  const tableData3 = [
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
  const tableData = [
    {
      // initialsCarrier: "NM",
      carrier: "Northwestern Mutual",
      policy: "NM-847392",
      type: "Whole Life",
      face_amount: "$500,000",
      premium: "$450/mo",
      issue_date: "05/12/2020",
      status: "Active",
    },
    {
      // initialsCarrier: "PR",
      carrier: "Prudential",
      policy: "PRU-562891",
      type: "Term Life",
      face_amount: "$1,000,000",
      premium: "$620/mo",
      issue_date: "11/03/2021",
      status: "Active",
    },
    {
      // initialsCarrier: "NY",
      carrier: "New York Life",
      policy: "NYL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      // initialsCarrier: "CL",
      carrier: "California Life",
      policy: "CL-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      // initialsCarrier: "LA",
      carrier: "LA Life",
      policy: "LA-349201",
      type: "Whole Life",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      // initialsCarrier: "SF",
      carrier: "San francisco Life",
      policy: "SFL-339201",
      type: "Term Life",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      // initialsCarrier: "PR",
      carrier: "Prudential",
      policy: "PRU-349201",
      type: "Disability",
      face_amount: "$1,000,000",
      premium: "$170/mo",
      issue_date: "02/15/2023",
      status: "Active",
    },
    {
      // initialsCarrier: "NY",
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const allSelected = selectedItems.length === tableData.length;
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [agentFilter, setAgentFilter] = useState("All Carriers");
  const uniqueStatuses = [
    "All Statuses",
    ...new Set(tableData2.map((item) => item.status)),
  ];
  const uniqueAgents = [
    "All Carriers",
    ...new Set(tableData2.map((item) => item.manager)),
  ];
  const filteredData2 = tableData2.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All Statuses" || item.status === statusFilter;
    const matchesAgent =
      agentFilter === "All Carriers" || item.manager === agentFilter;

    return matchesSearch && matchesStatus && matchesAgent;
  });
  // Get unique statuses and agents for filter options
  const uniqueStatuses2 = [
    "All Statuses",
    ...new Set(tableData3.map((item) => item.status)),
  ];
  const uniqueAgents2 = [
    "All Carriers",
    ...new Set(tableData3.map((item) => item.manager)),
  ];
  const filteredData3 = tableData3.filter((item) => {
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
      agentFilter === "All Carriers" || item.team === agentFilter;

    return matchesSearch && matchesStatus && matchesAgent;
  });
  const filteredData4 = tableData4.filter((item) => {
    const matchesSearch =
      item.carrier.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.policy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.face_amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All Statuses" || item.status === statusFilter;
    const matchesAgent =
      agentFilter === "All Carriers" || item.team === agentFilter;

    return matchesSearch && matchesStatus && matchesAgent;
  });
  // const [selectedItems, setSelectedItems] = useState([]);
  // const allSelected = selectedItems.length === tableData.length;

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
      {/*
    <!-- Client Profile (Example - would be shown when a client is selected) --> */}
      <div class="bg-white rounded-xl shadow-sm overflow-hidden dark:bg-gray-800 h-full">
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
              <div className="relative">
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
              <div>
                <button className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200">
                  <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 group-hover:text-white flex items-center">
                    {" "}
                    <i className="fa-solid fa-upload"></i>
                    <span className="text-sm ml-2 hidden md:block">
                      Upload Cv
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4">
          {/*
            <!-- Left Pane - Client Details --> */}
          <div class="p-6 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-600 lg:col-span-1">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Manager Details
            </h3>

            <div class="space-y-4 pb-[1.5rem]">
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
                  TEAM
                </p>
                <p class="text-sm text-gray-900 dark:text-white">Dummy Team</p>
              </div>

              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  BUNDLE
                </p>
                <p class="text-sm text-gray-900 dark:text-white mt-1">xyz</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  REF NUMBER
                </p>
                <p class="text-sm text-gray-900 dark:text-white mt-1">xyz123</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  ID
                </p>
                <p class="text-sm text-gray-900 dark:text-white mt-1">
                  xyz-123-098
                </p>
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  JOINED DATE
                </p>
                <p class="text-sm text-gray-900 dark:text-white mt-1">
                  24/10/2024
                </p>
              </div>
            </div>
            {/* <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 mt-6">Total Earned </h3>
            <div class=" text-center p-3 rounded-lg  cursor-pointer dark:bg-gray-700">
            <div class="text-gray-500 text-5xl font-bold">$420</div> */}
            {/* <div class="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">New</div>
            <div class="text-xs text-blue-500 mt-1">+5 today</div> */}
            {/* </div> */}
            {/* <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 mt-6">Documents</h3> */}
            {/* <div class="space-y-4 pb-4">
                    {[...Array(3)].map((_any, i) => (
                    <div key={i}>
                        <div
                            className="max-w-md mx-auto border dark:border-gray-600 border-bg-gray-600 rounded-lg bg-white dark:bg-gray-800 p-4  flex items-center justify-between">
                          
                            <div className="flex items-center space-x-4">
                                <div className="text-red-600 text-2xl">
                                    <i className="fas fa-file-pdf"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800 dark:text-white">Project-Plan.pdf
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">1.2 MB</p>
                                </div>
                            </div>

                            <div
                                className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full dark:bg-gray-700">
                                PDF
                            </div>
                        </div>
                    </div>
                    ))}
                    

                </div> */}
          </div>

          {/*
            <!-- Right Pane - Tabs Content --> */}
          <div class="px-6 py-1 lg:col-span-3">
            {/*
                <!-- Policies Tab Content --> */}
            <div className="mt-4">
              {/* Tabs header */}
              <div className="flex space-x-4 border-b dark:border-gray-700 mb-4">
                {["Commissions", "stream"].map((tab) => (
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
              </div>

              {/* Tabs content */}
              {activeTab === "policies" && (
                <div>
                  <div className="overflow-x-auto">
                    <div
                      className="shadow-sm "
                      // style={{ maxHeight: '480px' }}
                    >
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

                        <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="sticky top-0  z-10 bg-gray-100 dark:bg-gray-700">
                              <tr className="bg-gray-100 dark:bg-gray-700 text-left">
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
              )}

              {activeTab === "leads" && (
                <div className="overflow-x-auto">
                  <div
                    className="shadow-sm overflow-y-auto"
                    // style={{ maxHeight: '480px' }}
                  >
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
                                onChange={(e) =>
                                  setStatusFilter(e.target.value)
                                }
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
                      <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                        {filteredData2.length > 0 ? (
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="sticky top-0  z-10 bg-gray-100 dark:bg-gray-700">
                              <tr className="bg-gray-100 dark:bg-gray-700 text-left">
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
                              {filteredData2.map((item, index) => (
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
                                    {item.manager}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span
                                      className={`status-pill status-${item.status.toLowerCase()} dark:text-white`}
                                    >
                                      {item.status}
                                    </span>
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
                            agentFilter !== "All Carriers" ? (
                              <button
                                onClick={() => {
                                  setSearchQuery("");
                                  setStatusFilter("All Statuses");
                                  setAgentFilter("All Carriers");
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
                                <option>All Agent</option>
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
                      {filteredData2.map((client, index) => (
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
                                  <div className="font-medium">
                                    {client.name}
                                  </div>
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
                                <div className="truncate">
                                  {client.createdOn}
                                </div>
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
                </div>
              )}
              {activeTab === "Commissions" && (
                <>
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
                              onClick={() => setIsAgentModalOpen(false)}
                            >
                              Delete
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
                                onChange={(e) =>
                                  setStatusFilter(e.target.value)
                                }
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
                      <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                        {filteredData4.length > 0 ? (
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="sticky top-0  z-10 bg-gray-100 dark:bg-gray-700">
                              <tr className="bg-gray-100 dark:bg-gray-700 text-left">
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
                                  Carrier Name
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
                                  Commission $
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
                              </tr>
                            </thead>
                            <tbody className="dark:bg-gray-800 dark:divide-gray-700 bg-white divide-y divide-gray-200">
                              {filteredData4.map((item, index) => (
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
                                    id="ok"
                                  >
                                    <div className="flex items-center">
                                      {/* <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                                        {item.initialsCarrier}
                                      </div> */}
                                      <div className="ml-4">
                                        <div className="text-sm font-medium">
                                          {item.carrier}
                                        </div>
                                        {/* <div className="text-xs text-gray-500 dark:text-gray-400">
                                          {item.email}
                                        </div> */}
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.policy}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.type}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap"
                                    id="ok"
                                  >
                                    {item.face_amount}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.premium}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.commission}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.issue_date}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    <span
                                      className={`status-pill status-${item.status.toLowerCase()} dark:text-white`}
                                    >
                                      {item.status}
                                    </span>
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
                            agentFilter !== "All Carriers" ? (
                              <button
                                onClick={() => {
                                  setSearchQuery("");
                                  setStatusFilter("All Statuses");
                                  setAgentFilter("All Carriers");
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
                                  <div className="font-medium">
                                    {client.name}
                                  </div>
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
                                  Team
                                </div>
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
                                <div className="truncate">
                                  {client.joindate}
                                </div>
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
              )}
              {activeTab === "stream" && (
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Upline Table */}
                    <div className=" ">
                      <h4 className="text-md font-semibold mb-2 text-gray-700 dark:text-white">
                        Upline
                      </h4>
                      <div className="dark:bg-darkcard rounded-2xl  shadow-sm overflow-hidden">
                        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                              <th className="p-2 border-b dark:border-gray-600">
                                <div className="ml-4">
                                  <div className="text-sm font-medium">
                                    Name / Level
                                  </div>
                                  {/* <div className="text-sm text-gray-500 dark:text-gray-400">Level</div> */}
                                </div>
                              </th>
                              <th className="p-2 font-medium border-b dark:border-gray-600">
                                Designation
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                                    SW
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium">
                                      Sameer Daniel
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Senior
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                Executive
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                                    JD
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium">
                                      John Doe
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Junior
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                Sales
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Downline Table */}
                    <div className="border-l border-gray-300 dark:border-gray-600 pl-5">
                      <h4 className="text-md font-semibold mb-2 text-gray-700 dark:text-white">
                        Downline
                      </h4>
                      <div className="dark:bg-darkcard rounded-2xl  shadow-sm overflow-hidden">
                        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                              <th className="p-2 border-b dark:border-gray-600">
                                <div className="ml-4">
                                  <div className="text-sm font-medium">
                                    Name / Level
                                  </div>
                                </div>
                              </th>
                              <th className="p-2 font-medium border-b dark:border-gray-600">
                                Designation
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                                    SW
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium">
                                      Sameer Daniel
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Senior
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                Executive
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                                    JD
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium">
                                      John Doe
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      Junior
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                                Sales
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "referralAgents" && (
                <>
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
                              onClick={() => setIsAgentModalOpen(false)}
                            >
                              Delete
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
                                onChange={(e) =>
                                  setStatusFilter(e.target.value)
                                }
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
                      <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                        {filteredData3.length > 0 ? (
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="sticky top-0  z-10 bg-gray-100 dark:bg-gray-700">
                              <tr className="bg-gray-100 dark:bg-gray-700 text-left">
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
                              {filteredData3.map((item, index) => (
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
                                    id="ok"
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
                                    id="ok"
                                  >
                                    {item.ID}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.RefNum}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap"
                                    id="ok"
                                  >
                                    {item.team}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.joindate}
                                  </td>

                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    <span
                                      className={`status-pill status-${item.status.toLowerCase()} dark:text-white`}
                                    >
                                      {item.status}
                                    </span>
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
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
                            agentFilter !== "All Carriers" ? (
                              <button
                                onClick={() => {
                                  setSearchQuery("");
                                  setStatusFilter("All Statuses");
                                  setAgentFilter("All Carriers");
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
                                  <div className="font-medium">
                                    {client.name}
                                  </div>
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
                                  Team
                                </div>
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
                                <div className="truncate">
                                  {client.joindate}
                                </div>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
