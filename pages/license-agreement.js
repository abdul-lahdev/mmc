import React, { useState } from "react";
import Head from "next/head";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DropdownMenu from "../components/Dropdown";
import Link from "next/link";
import Image from "next/image";
import Nodata from "../img/no-data.png";

export default function License_agreement() {
  const [activeTab, setActiveTab] = useState("Licensing");
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
  const [isAddLicenseModalOpen, setIsAddLicenseModalOpen] = useState(false);
  const [addLicenseModalAnimation, setAddLicenseModalAnimation] =
    useState(false);
  const [licenseForm, setLicenseForm] = useState({
    residency_status: "Resident",
    state: "",
    license_no: "",
    line_of_authority: {
      life: false,
      life_effective_date: "",
      life_expiration_date: "",
      health: false,
      health_effective_date: "",
      health_expiration_date: "",
    },
    file: null,
  });

  const handleLicenseInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "life" || name === "health") {
      setLicenseForm((prev) => ({
        ...prev,
        line_of_authority: {
          ...prev.line_of_authority,
          [name]: checked,
        },
      }));
    } else if (
      name === "life_effective_date" ||
      name === "life_expiration_date" ||
      name === "health_effective_date" ||
      name === "health_expiration_date"
    ) {
      setLicenseForm((prev) => ({
        ...prev,
        line_of_authority: {
          ...prev.line_of_authority,
          [name]: value,
        },
      }));
    } else if (name === "file") {
      setLicenseForm((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setLicenseForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddLicense = (e) => {
    e.preventDefault();
    // You can add logic to submit the form here
    setIsAddLicenseModalOpen(false);
  };

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
      carrier: "Silac",
      course_name: "Evolve",
      date_passed: "june 18 2025",
      status: "Submitted",
      last_status_date: "6/18/25 ",
      attachment: "download",
    },
    {
      carrier: "AIG",
      course_name: "Other",
      date_passed: "june 18 2025",
      status: "Submitted",
      last_status_date: "6/18/25 ",
      attachment: "download",
    },
    {
      carrier: "American Equity",
      course_name: "Destination Series",
      date_passed: "june 18 2025",
      status: "Submitted",
      last_status_date: "6/18/25 ",
      attachment: "download",
    },
    {
      carrier: "Silac",
      course_name: "Evolve",
      date_passed: "june 18 2025",
      status: "Submitted",
      last_status_date: "6/18/25 ",
      attachment: "download",
    },
    {
      carrier: "American National",
      course_name: "Other",
      date_passed: "june 18 2025",
      status: "Submitted",
      last_status_date: "6/18/25 ",
      attachment: "download",
    },
    {
      carrier: "Silac",
      course_name: "Evolve",
      date_passed: "june 18 2025",
      status: "Submitted",
      last_status_date: "6/18/25 ",
      attachment: "download",
    },
  ];
  const tableData2 = [
    // {
    //     initials: "MW",
    //     name: "Megan Williams",
    //     email: "megan123@gmail.com",
    //     phone: "(555) 987-6543",
    //     date: "25/04/2025",
    //     leads: 20,
    //     score: 30,
    //     manager: "Michael Chen",
    //     status: "Contacted"
    // },
  ];
  const tableData3 = [
    {
      course_type: "Anti-Money Laundering",
      course_name: "California 8-hour",
      vendor: "AD Banker",
      date_completed: "2024-11-01",
      Course_file: "download",
    },
    {
      course_type: "Anti-Money Laundering",
      course_name: "California 8-hour",
      vendor: "AD Banker",
      date_completed: "2024-11-01",
      Course_file: "download",
    },
    {
      course_type: "Anti-Money Laundering",
      course_name: "California 8-hour",
      vendor: "AD Banker",
      date_completed: "2024-11-01",
      Course_file: "download",
    },
    {
      course_type: "Anti-Money Laundering",
      course_name: "California 8-hour",
      vendor: "AD Banker",
      date_completed: "2024-11-01",
      Course_file: "download",
    },
    {
      course_type: "Anti-Money Laundering",
      course_name: "California 8-hour",
      vendor: "AD Banker",
      date_completed: "2024-11-01",
      Course_file: "download",
    },
    {
      course_type: "Anti-Money Laundering",
      course_name: "California 8-hour",
      vendor: "AD Banker",
      date_completed: "2024-11-01",
      Course_file: "download",
    },
  ];
  const tableData = [
    {
      residency_status: "Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: "Fraternal Life",
      status: "Submitted",
      file: "download",
    },
    {
      residency_status: "Non-Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: " Life",
      status: "Verified",
      file: "download",
    },
    {
      residency_status: "Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: "Fraternal Life",
      status: "Submitted",
      file: "download",
    },
    {
      residency_status: "Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: "Health",
      status: "Denied",
      file: "download",
    },
    {
      residency_status: "Non-Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: "Life Provisional",
      status: "Submitted",
      file: "download",
    },
    {
      residency_status: "Non-Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: "Fraternal Life",
      status: "Denied",
      file: "download",
    },
    {
      residency_status: "Non-Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: "Life Provisional",
      status: "Submitted",
      file: "download",
    },
    {
      residency_status: "Resident",
      state: "Alaska",
      license_no: "123213213",
      license_name: "Jhon doe Sr",
      effective_date: "05/12/2020",
      expiration_date: "15/12/2020",
      license_type: "Fraternal Life",
      status: "Submitted",
      file: "download",
    },
  ];
  const tableData5 = [
    {
      residency_status: "Resident",
      source: "Direct",
      carrier: "Northwestern Mutual",
      policy_no: "POL123456",
      per_claim_amount: "$1,000,000",
      aggregate_amount: "$2,000,000",
      effective_date: "2024-01-01",
      expiration_date: "2025-01-01",
      eo_status: "Active",
      document: "View",
    },
    {
      residency_status: "Non-Resident",
      source: "Agency",
      carrier: "Prudential",
      policy_no: "POL789012",
      per_claim_amount: "$2,000,000",
      aggregate_amount: "$4,000,000",
      effective_date: "2024-02-15",
      expiration_date: "2025-02-15",
      eo_status: "Active",
      document: "View",
    },
    {
      residency_status: "Resident",
      source: "Direct",
      carrier: "New York Life",
      policy_no: "POL345678",
      per_claim_amount: "$1,500,000",
      aggregate_amount: "$3,000,000",
      effective_date: "2024-03-01",
      expiration_date: "2025-03-01",
      eo_status: "Pending",
      document: "View",
    },
    {
      residency_status: "Non-Resident",
      source: "Agency",
      carrier: "MetLife",
      policy_no: "POL901234",
      per_claim_amount: "$2,500,000",
      aggregate_amount: "$5,000,000",
      effective_date: "2024-04-15",
      expiration_date: "2025-04-15",
      eo_status: "Active",
      document: "View",
    },
  ];

  // const tableData5 = [
  //     {
  //         initials: "AB",
  //         name: "Northwestern Mutual",
  //         email: "brow@gmail.com",
  //         LicenseNum: "1237890",
  //         state: "California",
  //         issue_date: "2024-11-01",
  //         expire_date: "2025-12-03",
  //         status: "Active",

  //     },
  //     {
  //         initials: "MW",
  //         name: "Prudential",
  //         email: "megan123@gmail.com",
  //         LicenseNum: "1237890",
  //         state: "California",
  //         issue_date: "2024-11-01",
  //         expire_date: "2025-12-03",
  //         status: "Active",
  //     },
  //     {
  //         initials: "MS",
  //         name: "New York Life",
  //         email: "mike123@gmail.com",
  //         LicenseNum: "1237890",
  //         state: "California",
  //         issue_date: "2024-11-01",
  //         expire_date: "2025-12-03",
  //         status: "Active",
  //     },
  //     {
  //         initials: "JD",
  //         name: "California Life",
  //         email: "james123@gmail.com",
  //         LicenseNum: "1237890",
  //         state: "California",
  //         issue_date: "2024-11-01",
  //         expire_date: "2025-12-03",
  //         status: "Active",
  //     },
  //     {
  //         initials: "SM",
  //         name: "LA Life",
  //         email: "susan123@gmail.com",
  //         LicenseNum: "1237890",
  //         state: "Utah",
  //         issue_date: "2024-11-01",
  //         expire_date: "2025-12-03",
  //         status: "Active",
  //     },
  //     {
  //         initials: "NW",
  //         name: "San Francisco Life",
  //         email: "nina123@gmail.com",
  //         LicenseNum: "1237890",
  //         state: "California",
  //         issue_date: "2024-11-01",
  //         expire_date: "2025-12-03",
  //         status: "Active",
  //     },
  //     {
  //         initials: "KW",
  //         name: "Prudential",
  //         email: "kim123@gmail.com",
  //         LicenseNum: "1237890",
  //         state: "Utah",
  //         issue_date: "2024-11-01",
  //         expire_date: "2025-12-03",
  //         status: "Active",
  //     },
  // ];

  // table checkboxes states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const allSelected = selectedItems.length === tableData.length;
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [agentFilter, setAgentFilter] = useState("All Couriers");
  const uniqueStatuses = [
    "All Statuses",
    ...new Set(tableData2.map((item) => item.status)),
  ];
  const uniqueAgents = [
    "All Couriers",
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
      agentFilter === "All Couriers" || item.manager === agentFilter;

    return matchesSearch && matchesStatus && matchesAgent;
  });
  // Get unique statuses and agents for filter options
  const uniqueStatuses2 = [
    "All Statuses",
    ...new Set(tableData3.map((item) => item.status)),
  ];
  const uniqueAgents2 = [
    "All Couriers",
    ...new Set(tableData3.map((item) => item.manager)),
  ];
  const filteredData3 = tableData3.filter((item) => {
    const matchesSearch =
      item.course_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date_completed.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });
  const filteredData4 = tableData4.filter((item) => {
    const matchesSearch =
      item.carrier.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date_passed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.last_status_date.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });
  // const filteredData5 = tableData5.filter((item) => {
  //     const matchesSearch =
  //         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         item.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         item.ID.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         item.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         item.joindate.toLowerCase().includes(searchQuery.toLowerCase());

  //     const matchesStatus =
  //         statusFilter === "All Statuses" || item.status === statusFilter;
  //     const matchesAgent =
  //         agentFilter === "All Couriers" || item.team === agentFilter;

  //     return matchesSearch && matchesStatus && matchesAgent;
  // });
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

  // LOA options
  const options = [
    "All",
    "Life",
    "Health",
    "Fraternal Life",
    "Life Provisional",
  ];
  // state options
  const options1 = [
    "All",
    "Albama",
    "Alaska",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
  ];
  // status options
  const options2 = [
    "All",
    "Submitted",
    "Verified",
    "More info",
    "Denied",
    "Expired",
    "Revoked",
  ];

  //    appointment tab status
  const options3 = [
    "All",
    "Approved",
    "Initiated",
    "More info Needed",
    "Pending With Agent",
    "Rejected",
    "Sent To Carrier",
    "Terminated",
    "Waiting 1st App",
    "Withdrawn",
  ];
  //    appointment tab product
  const options4 = [
    "All",
    "Annuity",
    "Life",
    "Life & Annuity",
    "Life & Health",
    "Life-IUL",
    "Life-Promise",
    "TBD",
  ];
  //    appointment tab region
  const options5 = [
    "All",
    "All But NJ,NY,PR,MT",
    "All But NY",
    "All But NY,PR,MT",
    "All But PR",
    "All But PR,MT",
    "All But PR,NY",
    "NY Only",
    "PR Only",
    "TBD",
  ];

  const options6 = ["All", "Submitted", "Verified", "More info", "Denied"];

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  // Add Course Modal state and handlers
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  const [addCourseModalAnimation, setAddCourseModalAnimation] = useState(false);
  const [courseForm, setCourseForm] = useState({
    course_name: "",
    course_type: "",
    vendor: "",
    date_completed: "",
    file: null,
  });
  const handleCourseInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setCourseForm((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setCourseForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleAddCourse = (e) => {
    e.preventDefault();
    // Add logic to submit the course form here
    setAddCourseModalAnimation(false);
    setTimeout(() => setIsAddCourseModalOpen(false), 500);
  };

  // Add Training Modal state and handlers
  const [isAddTrainingModalOpen, setIsAddTrainingModalOpen] = useState(false);
  const [addTrainingModalAnimation, setAddTrainingModalAnimation] =
    useState(false);
  const [trainingForm, setTrainingForm] = useState({
    carrier: "",
    course_name: "",
    passed_date: "",
    file: null,
    other_course_name: "",
  });
  const handleTrainingInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setTrainingForm((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setTrainingForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleAddTraining = (e) => {
    e.preventDefault();
    // Add logic to submit the training form here
    setAddTrainingModalAnimation(false);
    setTimeout(() => setIsAddTrainingModalOpen(false), 500);
  };

  // Add E&O Modal state and handlers
  const [isAddEOModalOpen, setIsAddEOModalOpen] = useState(false);
  const [addEOModalAnimation, setAddEOModalAnimation] = useState(false);
  const [eoForm, setEOForm] = useState({
    residency_status: "Resident",
    source: "Direct",
    carrier: "",
    policy_no: "",
    per_claim_amount: "",
    aggregate_amount: "",
    effective_date: "",
    expiration_date: "",
    file: null,
  });
  const [eoType, setEOType] = useState(""); // Track selected E&O type

  const handleEOInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setEOForm((prev) => ({ ...prev, file: e.target.files[0] }));
    } else {
      setEOForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEOTypeChange = (e) => {
    setEOType(e.target.value);
  };

  const handleAddEO = (e) => {
    e.preventDefault();
    // Add logic to submit the E&O form here
    setAddEOModalAnimation(false);
    setTimeout(() => setIsAddEOModalOpen(false), 500);
  };

  return (
    <>
      {/*
    <!-- Client Profile (Example - would be shown when a client is selected) --> */}
      <div class="bg-white rounded-xl shadow-sm overflow-hidden dark:bg-gray-800 ">
        <div class="p-6 border-b border-gray-200 dark:border-gray-600">
          <div class="flex items-center justify-between flex-wrap">
            <div class="flex items-center md:mb-0 mb-4">
              <div class="ml-4">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                  License Agreement
                </h2>
                <div class="flex items-center mt-1">
                  <span class=" text-xs text-gray-500 dark:text-gray-400">
                    Member since 2018
                  </span>
                </div>
              </div>
            </div>
            <div class="flex space-x-2">
              <div>
                {/*
                                 <button className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200">
                                    <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                                    <span className="relative z-10 group-hover:text-white flex items-center">
                                        {" "}
                                        <i className="fa-solid fa-upload"></i>
                                        <span className="text-sm ml-2 hidden md:block">Upload Cv</span>
                                    </span>
                                </button> 
                                */}
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-1">
          {/*
            <!-- Right Pane - Tabs Content --> */}
          <div class="px-6 py-1">
            {/*
                <!-- Policies Tab Content --> */}
            <div className="mt-4">
              {/* Tabs header */}
              <div className="flex space-x-4 border-b dark:border-gray-700 mb-4">
                {[
                  "Licensing",
                  "Appointments",
                  "E&O Insurance",
                  "CE Courses",
                  "Product Specific Course Training",
                ].map((tab) => (
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
              {activeTab === "Licensing" && (
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
                        <div class="bg-white dark:bg-gray-800 rounded-xl  py-4 mb-3  ">
                          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div class="flex-1">
                              <div className="relative">
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
                              {/* dropdown menu */}
                              <DropdownMenu label="LOA" options={options} />

                              <DropdownMenu label="State" options={options1} />

                              <DropdownMenu label="Status" options={options2} />

                              <button
                                className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
                                onClick={() => {
                                  setIsAddLicenseModalOpen(true);
                                  setTimeout(
                                    () => setAddLicenseModalAnimation(true),
                                    10
                                  );
                                }}
                              >
                                <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                                <span className="relative z-10 group-hover:text-white flex items-center">
                                  {" "}
                                  <i className="fa-solid fa-plus"></i>
                                  <span className="text-sm ml-2 hidden md:block">
                                    License
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700 ">
                            <thead className="  bg-gray-100 dark:bg-gray-800">
                              {/* <tr className='bg-gray-100 dark:bg-gray-800 text-center'>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th colSpan="4" className="border-x dark:border-gray-600 border-gray-300 px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                                    <span className='relative right-[41px]'>Line Of Authority</span>
                                                                </th>
                                                                <th></th>
                                                                <th></th>

                                                            </tr> */}
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
                                  Residency Status
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  State
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  License #
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Name on License
                                </th>
                                <th
                                  scope="col"
                                  className=" px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Effective Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Expiration Date
                                </th>

                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  License Type
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
                                  File
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
                                  <td className="px-4 py-4 text-left">
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
                                          {item.residency_status}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {item.state}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {item.license_no}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    {item.license_name}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {item.effective_date}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {item.expiration_date}
                                  </td>

                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {item.license_type}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span
                                      className={`status-pill status-${item.status.toLowerCase()} dark:text-white`}
                                    >
                                      {item.status}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    {item.file}
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
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm px-0 py-4 mb-6  ">
                          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div class="flex-1">
                              <div className="relative">
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

              {activeTab === "Appointments" && (
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
                      <div class="bg-white dark:bg-gray-800 rounded-xl  py-4 mb-3 ">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div class="flex-1">
                            <div className="relative">
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
                            <DropdownMenu label="Status" options={options3} />
                            <DropdownMenu label="Product" options={options4} />
                            <DropdownMenu label="Region" options={options5} />
                          </div>
                        </div>
                      </div>
                      <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                        {filteredData2.length > 0 ? (
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="  bg-gray-100 dark:bg-gray-800">
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
                              No Carrier Appointments found
                            </p>
                            {searchQuery ||
                            statusFilter !== "All Statuses" ||
                            agentFilter !== "All Couriers" ? (
                              <button
                                onClick={() => {
                                  setSearchQuery("");
                                  setStatusFilter("All Statuses");
                                  setAgentFilter("All Couriers");
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
                      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6  ">
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

              {activeTab === "E&O Insurance" && (
                <div className="overflow-x-auto">
                  <div className="bg-white dark:bg-gray-800 rounded-xl py-4 mb-6">
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
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                            placeholder="Search by name, email, or phone"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-row gap-3">
                        <button
                          className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
                          onClick={() => {
                            setIsAddEOModalOpen(true);
                            setTimeout(() => setAddEOModalAnimation(true), 10);
                          }}
                        >
                          <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                          <span className="relative z-10 group-hover:text-white flex items-center">
                            <i className="fa-solid fa-plus"></i>
                            <span className="text-sm ml-2 hidden md:block">
                              E&O
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                    <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700 ">
                      <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr className="bg-gray-100 dark:bg-gray-700">
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
                            Source
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
                            Policy No
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            Per Claim Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            Aggregate Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            Effective Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            Expiration Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            E&O Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            Document
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {tableData5.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 text-left">
                              <div className="checkbox-wrapper">
                                <input
                                  type="checkbox"
                                  checked={selectedItems.includes(index)}
                                  onChange={() => handleSelectRow(index)}
                                  className="form-checkbox h-4 w-4 text-accent accent-red-500"
                                />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.source}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.carrier}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.policy_no}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.per_claim_amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.aggregate_amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.effective_date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.expiration_date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span
                                className={`status-pill status-${item.eo_status.toLowerCase()} dark:text-white`}
                              >
                                {item.eo_status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.document}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === "CE Courses" && (
                <>
                  <div className=" overflow-hidden">
                    {/*
          <!-- Desktop Table --> */}
                    <div className="hidden md:block">
                      {/*
            <!-- Filter Panel --> */}
                      <div class="bg-white dark:bg-gray-800 rounded-xl  py-4 mb-3 ">
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
                            <button
                              className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
                              onClick={() => {
                                setIsAddCourseModalOpen(true);
                                setTimeout(
                                  () => setAddCourseModalAnimation(true),
                                  10
                                );
                              }}
                            >
                              <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                              <span className="relative z-10 group-hover:text-white flex items-center">
                                <i className="fa-solid fa-plus"></i>
                                <span className="text-sm ml-2 hidden md:block">
                                  Course
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto  thin-scrollbar ">
                        {filteredData3.length > 0 ? (
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className=" bg-gray-100 dark:bg-gray-800">
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
                                  Course Type
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Course Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Vendor
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Date Completed
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Course file
                                </th>
                              </tr>
                            </thead>
                            <tbody className="dark:bg-gray-800 dark:divide-gray-700 bg-white divide-y divide-gray-200">
                              {filteredData3.map((item, index) => (
                                <tr
                                  key={index}
                                  className="hover:bg-gray-50 dark:hover:bg-gray-800 "
                                >
                                  <td className="px-4 py-4 text-left">
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
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.course_type}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.course_name}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap"
                                    id="ok"
                                  >
                                    {item.vendor}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.date_completed}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.Course_file}
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
                            agentFilter !== "All Couriers" ? (
                              <button
                                onClick={() => {
                                  setSearchQuery("");
                                  setStatusFilter("All Statuses");
                                  setAgentFilter("All Couriers");
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
                      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6 ">
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
                </>
              )}
              {activeTab === "Product Specific Course Training" && (
                <>
                  <div className="   shadow-sm overflow-hidden">
                    {/*
          <!-- Desktop Table --> */}
                    <div className="hidden md:block">
                      {/*
            <!-- Filter Panel --> */}
                      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-3 ">
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
                            <DropdownMenu label="Status" options={options6} />

                            <button
                              className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
                              onClick={() => {
                                setIsAddTrainingModalOpen(true);
                                setTimeout(
                                  () => setAddTrainingModalAnimation(true),
                                  10
                                );
                              }}
                            >
                              <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                              <span className="relative z-10 group-hover:text-white flex items-center">
                                <i className="fa-solid fa-plus"></i>
                                <span className="text-sm ml-2 hidden md:block">
                                  Training
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="dark:bg-darkcard rounded-2xl max-h-[530px] overflow-y-auto shadow-sm thin-scrollbar ">
                        {filteredData4.length > 0 ? (
                          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400  divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className=" bg-gray-100 dark:bg-gray-800">
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
                                  Course Name
                                </th>

                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Date passed
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
                                  Last status date
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                  Attachment
                                </th>
                              </tr>
                            </thead>
                            <tbody className="dark:bg-gray-800 dark:divide-gray-700 bg-white divide-y divide-gray-200">
                              {filteredData4.map((item, index) => (
                                <tr
                                  key={index}
                                  className="hover:bg-gray-50 dark:hover:bg-gray-800 "
                                >
                                  <td className="px-4 py-4 text-left">
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
                                      <div className="ml-4">
                                        <div className="text-sm font-medium">
                                          {item.carrier}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.course_name}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.date_passed}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap"
                                    id="ok"
                                  >
                                    {item.status}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.last_status_date}
                                  </td>
                                  <td
                                    className="px-6 py-4 whitespace-nowrap text-sm"
                                    id="ok"
                                  >
                                    {item.attachment}
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
                            agentFilter !== "All Couriers" ? (
                              <button
                                onClick={() => {
                                  setSearchQuery("");
                                  setStatusFilter("All Statuses");
                                  setAgentFilter("All Couriers");
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
                      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6 ">
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add License Modal */}
      {isAddLicenseModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0   opacity-100 backdrop-blur-sm"></div>
            </div>
            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-2xl sm:w-full
                    ${
                      addLicenseModalAnimation
                        ? "scale-100 skew-y-0"
                        : "scale-0 skew-y-6"
                    }            
                   duration-500 ease-out`}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <section className="bg-white dark:bg-gray-800">
                      <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4 border-b dark:border-gray-600 pb-4">
                        Add License
                      </h3>
                      <form onSubmit={handleAddLicense} className="space-y-4">
                        {/* Residency Status */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-3 ">
                          <div>
                            <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Residency Status
                            </label>
                            <select
                              name="residency_status"
                              value={licenseForm.residency_status}
                              onChange={handleLicenseInputChange}
                              className=" block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              required
                            >
                              <option value="">Select</option>
                              <option value="Resident">Resident</option>
                              <option value="Non-Resident">Non-Resident</option>
                            </select>
                          </div>
                          {/* State */}
                          <div>
                            <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              State
                            </label>
                            <select
                              name="state"
                              value={licenseForm.state}
                              onChange={handleLicenseInputChange}
                              className=" block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              required
                            >
                              <option value="">Select State</option>
                              {usStates.map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                          </div>
                          {/* License No */}
                          <div className="col-span-2">
                            <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              License No
                            </label>
                            <input
                              type="text"
                              name="license_no"
                              value={licenseForm.license_no}
                              onChange={handleLicenseInputChange}
                              className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              required
                            />
                          </div>
                          {licenseForm.residency_status === "Resident" && (
                            <div className="col-span-2">
                              <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Name as it appears on License
                              </label>
                              <input
                                type="text"
                                name="name_on_license"
                                value={licenseForm.name_on_license || ""}
                                onChange={handleLicenseInputChange}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                          )}
                        </div>

                        {/* Line of Authority */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <label className="block  tracking-wide text-gray-700 text-sm font-bold  dark:text-gray-300">
                              Line of Authority
                            </label>
                            <div className="flex items-center gap-[141px]">
                              <label className="block  tracking-wide text-gray-700 text-sm font-bold  dark:text-gray-300">
                                Effective Date
                              </label>
                              <label className="block  tracking-wide text-gray-700 text-sm font-bold  dark:text-gray-300">
                                Expiration Date
                              </label>
                            </div>
                          </div>

                          <div className="flex items-center mb-3 justify-between">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                name="life"
                                checked={licenseForm.line_of_authority.life}
                                onChange={handleLicenseInputChange}
                                className="form-checkbox h-4 w-4 text-accent accent-red-500 mr-2"
                              />
                              <span className="block  tracking-wide text-gray-700 text-sm font-bold  dark:text-gray-300">
                                Life
                              </span>
                            </div>

                            <div className="flex gap-2 flex-2">
                              <div>
                                <input
                                  type="date"
                                  name="life_effective_date"
                                  value={
                                    licenseForm.line_of_authority
                                      .life_effective_date
                                  }
                                  onChange={handleLicenseInputChange}
                                  className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                  required
                                />
                              </div>
                              <div>
                                <input
                                  type="date"
                                  name="life_expiration_date"
                                  value={
                                    licenseForm.line_of_authority
                                      .life_expiration_date
                                  }
                                  onChange={handleLicenseInputChange}
                                  className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                name="health"
                                checked={licenseForm.line_of_authority.health}
                                onChange={handleLicenseInputChange}
                                className="form-checkbox h-4 w-4 text-accent accent-red-500 mr-2"
                              />
                              <span className="block  tracking-wide text-gray-700 text-sm font-bold  dark:text-gray-300">
                                Health
                              </span>
                            </div>

                            <div className="flex gap-2 flex-2">
                              <input
                                type="date"
                                name="health_effective_date"
                                value={
                                  licenseForm.line_of_authority
                                    .health_effective_date
                                }
                                onChange={handleLicenseInputChange}
                                className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                              <input
                                type="date"
                                name="health_expiration_date"
                                value={
                                  licenseForm.line_of_authority
                                    .health_expiration_date
                                }
                                onChange={handleLicenseInputChange}
                                className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        {/* File Uploader */}
                        <div>
                          <label className="block  tracking-wide text-gray-700 text-sm font-bold mb-2  dark:text-gray-300">
                            Upload File
                          </label>

                          <div class="flex items-center justify-center w-full">
                            <label
                              for="dropzone-file"
                              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span class="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800  py-3 mt-4 border-t dark:border-gray-600  sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="px-4 py-2 ml-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Add License
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setAddLicenseModalAnimation(false);
                      setTimeout(() => setIsAddLicenseModalOpen(false), 500);
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

      {/* Add Course Modal */}
      {isAddCourseModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0  opacity-100 backdrop-blur-sm"></div>
            </div>
            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-2xl sm:w-full
                ${
                  addCourseModalAnimation
                    ? "scale-100 skew-y-0"
                    : "scale-0 skew-y-6"
                } duration-500 ease-out`}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <section className="bg-white dark:bg-gray-800">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4 border-b dark:border-gray-600 pb-4">
                        Add Course
                      </h3>
                      <form onSubmit={handleAddCourse} className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-3 ">
                          <div className="col-span-2">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Course Type
                            </label>
                            <div className="flex gap-2">
                              <select
                                name="course_type"
                                value={courseForm.course_type}
                                onChange={handleCourseInputChange}
                                className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              >
                                <option value="">Select Course Type</option>
                                <option value="Anti-money laundering">
                                  Anti-money laundering
                                </option>
                                <option value="Long-term care">
                                  Long-term care
                                </option>
                                <option value="Annuity">Annuity</option>
                                <option value="Other">Other</option>
                                <option value="4-Hour CA Life">
                                  4-Hour CA Life
                                </option>
                                <option value="ny-reg187">ny-reg187</option>
                                <option value="IUL">IUL</option>
                              </select>
                            </div>
                          </div>
                          {courseForm.course_type ===
                            "Anti-money laundering" && (
                            <div className="col-span-2">
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Vendor
                              </label>
                              <select
                                name="vendor"
                                value={courseForm.vendor}
                                onChange={handleCourseInputChange}
                                className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              >
                                <option value="">Select Vendor</option>
                                <option value="Ad banker">Ad banker</option>
                                <option value="Kaplan">Kaplan</option>
                                <option value="Limra">Limra</option>
                                <option value="Other">Other</option>
                                <option value="TBD">TBD</option>
                              </select>
                            </div>
                          )}
                          {courseForm.course_type !== "Anti-money laundering" &&
                            courseForm.course_type !== "Other" &&
                            courseForm.course_type !== "4-Hour CA Life" &&
                            courseForm.course_type !== "ny-reg187" &&
                            courseForm.course_type !== "IUL" && (
                              <div className="col-span-2">
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                  Course Name
                                </label>
                                <select
                                  name="course_name"
                                  value={courseForm.course_name}
                                  onChange={handleCourseInputChange}
                                  className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                  required
                                >
                                  {courseForm.course_type ===
                                  "Long-term care" ? (
                                    <>
                                      <option value="">Select Course</option>
                                      <option value="NAIC 8-hour">
                                        NAIC 8-hour
                                      </option>
                                      <option value="NAIC 4-hour">
                                        NAIC 4-hour
                                      </option>
                                    </>
                                  ) : courseForm.course_type === "Annuity" ? (
                                    <>
                                      <option value="">Select Course </option>
                                      <option value="4-Hour Annuity">
                                        4-Hour Annuity
                                      </option>
                                      <option value="8-hour Texas ongoing">
                                        8-hour Texas ongoing
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      <option value="a"></option>
                                    </>
                                  )}
                                </select>
                              </div>
                            )}
                          {courseForm.course_type === "Other" && (
                            <div className="col-span-2">
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Input Course Name
                              </label>
                              <input
                                type="text"
                                name="course_name"
                                value={courseForm.course_name}
                                onChange={handleCourseInputChange}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                          )}

                          <div className="col-span-2">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Date Completed
                            </label>
                            <input
                              type="date"
                              name="date_completed"
                              value={courseForm.date_completed}
                              onChange={handleCourseInputChange}
                              className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              required
                            />
                          </div>
                        </div>
                        {/* File Uploader */}
                        <div>
                          <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                            Upload File
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="course-dropzone-file"
                              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                                    strokeLinejoin="round"
                                    strokeWidth="2"
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
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="course-dropzone-file"
                                name="file"
                                type="file"
                                className="hidden"
                                onChange={handleCourseInputChange}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800  py-3 mt-4 border-t dark:border-gray-600  sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="px-4 py-2 ml-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            Add Course
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                              setAddCourseModalAnimation(false);
                              setTimeout(
                                () => setIsAddCourseModalOpen(false),
                                500
                              );
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Training Modal */}
      {isAddTrainingModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-50 backdrop-blur-sm"></div>
            </div>
            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-2xl sm:w-full
                ${
                  addTrainingModalAnimation
                    ? "scale-100 skew-y-0"
                    : "scale-0 skew-y-6"
                } duration-500 ease-out`}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <section className="bg-white dark:bg-gray-800">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4 border-b dark:border-gray-600 pb-4">
                        Add Training
                      </h3>
                      <form onSubmit={handleAddTraining} className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-3 ">
                          <div className="col-span-2">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Carrier
                            </label>
                            <select
                              name="carrier"
                              value={trainingForm.carrier}
                              onChange={handleTrainingInputChange}
                              className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              required
                            >
                              <option value="">Select Carrier</option>
                              <option value="Aetna">Aetna</option>
                              <option value="AIG">AIG</option>
                              <option value="AIG partners group">
                                AIG partners group
                              </option>
                              <option value="American equity">
                                American equity
                              </option>
                              <option value="American national (ANICO)">
                                American national (ANICO)
                              </option>
                              <option value="Fidelity & Guaranty Life">
                                Fidelity & Guaranty Life
                              </option>
                              <option value="Foresters Financial">
                                Foresters Financial
                              </option>
                              <option value="North American">
                                North American
                              </option>
                              <option value="Pacific Life">Pacific Life</option>
                              <option value="SILAC">SILAC</option>
                              <option value="The Standard">The Standard</option>
                            </select>
                          </div>
                          <div className="col-span-2">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Course Name
                            </label>
                            <select
                              name="course_name"
                              value={trainingForm.course_name}
                              onChange={handleTrainingInputChange}
                              className="block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              required
                            >
                              <option value="">Select Course Name</option>
                              {trainingForm.carrier === "Aetna" ? (
                                <option value="Others">Others</option>
                              ) : trainingForm.carrier === "AIG" ? (
                                <>
                                  <option value="AIG Annuities">
                                    AIG Annuities
                                  </option>
                                  <option value="Assured">Assured</option>
                                  <option value="Fixed and Income Product">
                                    Fixed and Income Product
                                  </option>
                                  <option value="Index(23445.17)">
                                    Index(23445.17)
                                  </option>
                                  <option value="Variables(R5676PT.65)">
                                    Variables(R5676PT.65)
                                  </option>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier ===
                                "AIG partners group" ? (
                                <>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier === "American equity" ? (
                                <>
                                  <option value="Assetshield bonus">
                                    Assetshield bonus
                                  </option>
                                  <option value="Balanceshield">
                                    Balanceshield{" "}
                                  </option>
                                  <option value="Retirement Gold">
                                    Retirement Gold{" "}
                                  </option>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier ===
                                "American national (ANICO)" ? (
                                <>
                                  <option value="Annuity Suitability and MYG">
                                    Annuity Suitability and MYG
                                  </option>
                                  <option value="Life Solutions & Puerto Rico Rule 93">
                                    Life Solutions & Puerto Rico Rule 93
                                  </option>
                                  <option value="Rate Certainty Annuity Suitability">
                                    Rate Certainty Annuity Suitability
                                  </option>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier ===
                                "Fidelity & Guaranty Life" ? (
                                <>
                                  <option value="F&G 1-2-3">F&G 1-2-3</option>
                                  <option value="Accelerator Plus 10 & 14">
                                    Accelerator Plus 10 & 14
                                  </option>
                                  <option value="F&G Flex Accumulator">
                                    F&G Flex Accumulator
                                  </option>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier ===
                                "Foresters Financial" ? (
                                <>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier === "North American" ? (
                                <>
                                  <option value="Benefit Solutions">
                                    Benefit Solutions
                                  </option>
                                  <option value="Charter Plus">
                                    Charter Plus
                                  </option>
                                  <option value="Control x">Control x</option>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier === "Pacific Life" ? (
                                <>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier === "SILAC" ? (
                                <>
                                  <option value="Denali">Denali</option>
                                  <option value="Denali 2025">
                                    Denali 2025
                                  </option>
                                  <option value="Evolve 2025">
                                    Evolve 2025
                                  </option>
                                  <option value="Others">Others</option>
                                </>
                              ) : trainingForm.carrier === "The Standard" ? (
                                <>
                                  <option value="Annuity Product Training">
                                    Annuity Product Training
                                  </option>
                                  <option value="Others">Others</option>
                                </>
                              ) : (
                                <option value="Evolve"></option>
                              )}
                            </select>
                          </div>
                          {trainingForm.course_name === "Others" && (
                            <div className="col-span-2">
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Other Course Name
                              </label>
                              <input
                                type="text"
                                name="other_course_name"
                                value={trainingForm.other_course_name || ""}
                                onChange={handleTrainingInputChange}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                          )}
                          <div className="col-span-2">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Passed Date
                            </label>
                            <input
                              type="date"
                              name="passed_date"
                              value={trainingForm.passed_date}
                              onChange={handleTrainingInputChange}
                              className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              required
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                              Upload File
                            </label>
                            <div className="flex items-center justify-center w-full">
                              <label
                                htmlFor="training-dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                  </svg>
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop product training files here
                                  </p>
                                  {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                </div>
                                <input
                                  id="training-dropzone-file"
                                  name="file"
                                  type="file"
                                  className="hidden"
                                  onChange={handleTrainingInputChange}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800  py-3 mt-4 border-t dark:border-gray-600  sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="px-4 py-2 ml-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            Add Training
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                              setAddTrainingModalAnimation(false);
                              setTimeout(
                                () => setIsAddTrainingModalOpen(false),
                                500
                              );
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add E&O Modal */}
      {isAddEOModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0  opacity-100 backdrop-blur-sm"></div>
            {/* Modal panel */}
            <div
              className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-3xl sm:w-full
                ${
                  addEOModalAnimation
                    ? "scale-100 skew-y-0"
                    : "scale-0 skew-y-6"
                } duration-500 ease-out`}
            >
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <section className="bg-white dark:bg-gray-800">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4 border-b dark:border-gray-600 pb-4">
                        Accept PHP's E&O Insurance
                      </h3>
                      <p>
                        E&O is required by many of our carriers. As a PHP
                        associate, you will be required to have E&O insurance as
                        a condition of appointment. PHP offers convenient and
                        competitively priced E&O coverage, or you can purchase
                        E&O insurance from an external source.
                      </p>
                      <p className="text-lg  mt-4 mb-6">
                        Highlights of PHP's E&O coverage{" "}
                      </p>
                      <ul className="list-disc ml-5 mb-6">
                        <li className="text-lg font-bold mb-2">
                          Cost is $35/month
                        </li>
                        <li className="text-lg font-bold mb-2">
                          First 90 days are provided at no charge
                        </li>
                        <li className="text-lg font-bold mb-2">
                          Participants that have not placed a policy for 6
                          consecutive months will automatically be dropped from
                          the coverage{" "}
                        </li>
                      </ul>
                      <p className="mb-6">
                        Please review the information in the link below for
                        eligibility requirements and details concerning the
                        program.
                      </p>

                      <a
                        href="#"
                        target="_blank"
                        className="text-blue-500 underline mb-6"
                      >
                        PHP E&O Coverage Information{" "}
                      </a>

                      <div className="flex  gap-4 mt-6 mb-6">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id="php-eo"
                            name="eo-type"
                            value="php-eo"
                            checked={eoType === "php-eo"}
                            onChange={handleEOTypeChange}
                            className="h-4 w-4 text-accent accent-red-500"
                          />
                          <label
                            htmlFor="php-eo"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            PHP E&O
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id="own-eo"
                            name="eo-type"
                            value="own-eo"
                            checked={eoType === "own-eo"}
                            onChange={handleEOTypeChange}
                            className="h-4 w-4 text-accent accent-red-500"
                          />
                          <label
                            htmlFor="own-eo"
                            className="text-gray-700 dark:text-gray-300"
                          >
                            I will provide my own E&O
                          </label>
                        </div>
                      </div>

                      {/* PHP E&O Section - Show when PHP E&O is selected */}
                      {eoType === "php-eo" && (
                        <div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
                            By entering your Pin below and clicking sumbit, you
                            are acknowledging that you want to participate in
                            the PHP E&O offering.
                          </p>
                          <div>
                            <div className="flex flex-wrap gap-4 items-end">
                              <div>
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                  Pin 1
                                </label>
                                <input
                                  type="text"
                                  maxLength="1"
                                  className="appearance-none block w-12 h-12 text-center bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                  Pin 2
                                </label>
                                <input
                                  type="text"
                                  maxLength="1"
                                  className="appearance-none block w-12 h-12 text-center bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                  Pin 3
                                </label>
                                <input
                                  type="text"
                                  maxLength="1"
                                  className="appearance-none block w-12 h-12 text-center bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                  Pin 4
                                </label>
                                <input
                                  type="text"
                                  maxLength="1"
                                  className="appearance-none block w-12 h-12 text-center bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                  Pin 5
                                </label>
                                <input
                                  type="text"
                                  maxLength="1"
                                  className="appearance-none block w-12 h-12 text-center bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                              </div>
                              <div>
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                  Pin 6
                                </label>
                                <input
                                  type="text"
                                  maxLength="1"
                                  className="appearance-none block w-12 h-12 text-center bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                              </div>
                              <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors">
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* E&O Form - Show when "I will provide my own E&O" is selected */}
                      {eoType === "own-eo" && (
                        <form onSubmit={handleAddEO} className="space-y-4 mt-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-3 ">
                            <div>
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Carrier
                              </label>
                              <input
                                type="text"
                                name="carrier"
                                value={eoForm.carrier}
                                onChange={handleEOInputChange}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Policy No
                              </label>
                              <input
                                type="text"
                                name="policy_no"
                                value={eoForm.policy_no}
                                onChange={handleEOInputChange}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Per Claim Amount
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="per_claim_amount"
                                  value={eoForm.per_claim_amount}
                                  onChange={handleEOInputChange}
                                  className="appearance-none block w-full pl-8 bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Aggregate Amount
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="aggregate_amount"
                                  value={eoForm.aggregate_amount}
                                  onChange={handleEOInputChange}
                                  className="appearance-none block w-full pl-8 bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Effective Date
                              </label>
                              <input
                                type="date"
                                name="effective_date"
                                value={eoForm.effective_date}
                                onChange={handleEOInputChange}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                            <div>
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Expiration Date
                              </label>
                              <input
                                type="date"
                                name="expiration_date"
                                value={eoForm.expiration_date}
                                onChange={handleEOInputChange}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                required
                              />
                            </div>
                            <div className="col-span-2">
                              <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                                Upload File
                              </label>
                              <div className="flex items-center justify-center w-full">
                                <label
                                  htmlFor="eo-dropzone-file"
                                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                      />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                      <span className="font-semibold">
                                        Click to upload
                                      </span>{" "}
                                      or drag and drop E&O Insurance here
                                    </p>
                                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                                  </div>
                                  <input
                                    id="eo-dropzone-file"
                                    name="file"
                                    type="file"
                                    className="hidden"
                                    onChange={handleEOInputChange}
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-800  py-3 mt-4 border-t dark:border-gray-600  sm:flex sm:flex-row-reverse">
                            <button
                              type="submit"
                              className="px-4 py-2 ml-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                              Add E&O
                            </button>
                            <button
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => {
                                setAddEOModalAnimation(false);
                                setTimeout(
                                  () => setIsAddEOModalOpen(false),
                                  500
                                );
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      )}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
