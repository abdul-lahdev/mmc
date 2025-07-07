import Head from "next/head";
import { useEffect, useState } from "react";
import useDarkMode from "../utils/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chart from "../components/Chart";
import DonutChart from "../components/DonutChart";
export default function Home() {
  const [isDark, toggleDark] = useDarkMode();
// Table data 



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
      status: "Submitted"
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
      status: "Working"
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
      status: "Submitted"
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
      status: "New"
    },
    
  ];

  // Add search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [agentFilter, setAgentFilter] = useState('All Agents');

  // Get unique statuses and agents for filter options
  const uniqueStatuses = ['All Statuses', ...new Set(tableData.map(item => item.status))];
  const uniqueAgents = ['All Agents', ...new Set(tableData.map(item => item.manager))];

  // Filter table data based on search and filters
  const filteredData = tableData.filter(item => {
    const matchesSearch = (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesStatus = statusFilter === 'All Statuses' || item.status === statusFilter;
    const matchesAgent = agentFilter === 'All Agents' || item.manager === agentFilter;

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
  return (
    <>
      <Head>
        <title>MCA | Dashboard</title>
      </Head>

      <div className="flex justify-between bg-white dark:bg-gray-800 rounded-xl banner-pattern p-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, Michael Scott!
          </h1>
          <p className="mt-2 text-gray-600">
            Your next level is within reach. Keep climbing!
          </p>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex-shrink-0">
            <i className="fas fa-trophy text-yellow-500 text-2xl"></i>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              You're #3 in your region this week
            </p>
            <p className="text-sm text-gray-500">Just $2,450 AP away from #2</p>
          </div>
        </div>
      </div>
      {/*
        <!-- Quick Stats --> */}
      <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-5 mt-5">
        <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total AP (Month)
          </h3>

          <div className="mt-2 flex items-center justify-between align-bottom">
            <p className=" text-2xl font-bold text-gray-900 dark:text-white">
              $42,580
            </p>
            <i className="fas fa-chart-bar text-gray-400"></i>
          </div>
          <p className="mt-1 text-xs text-gray-500">Updated daily</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Policies Placed
          </h3>

          <div className="mt-2 flex items-center justify-between">
            <p className=" text-2xl font-bold text-gray-900 dark:text-white">
              18
            </p>
            <i className="fas fa-file-signature text-gray-400"></i>
          </div>
          <p className="mt-1 text-xs text-gray-500">+2 from last week</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Pending Applications
          </h3>
          <div className="flex mt-2 items-center justify-between">
            <p className=" text-2xl font-bold text-gray-900 dark:text-white">
              7
            </p>
            <i className="fas fa-clock text-gray-400"></i>
          </div>
          <p className="mt-1 text-xs text-gray-500">3 need follow-up</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Policies In Force
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <p className=" text-2xl font-bold text-gray-900 dark:text-white">
              142
            </p>
            <i className="fas fa-shield-alt text-gray-400"></i>
          </div>
          <p className="mt-1 text-xs text-gray-500">98% persistency</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm stat-card transition-all duration-200 dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Commission (MTD)
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              $12,450
            </p>
            <i className="fas fa-dollar-sign text-gray-400"></i>
          </div>
          <p className="mt-1 text-xs text-gray-500">Updated in real time</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* <!-- Pipeline Snapshot --> */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Pipeline Snapshot
              </h2>
               <div className="flex space-x-2">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <i className="fas fa-upload mr-1"></i> Upload Doc
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-[#D3202F] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <i className="fas fa-plus mr-1"></i> Add New Lead
                </button>
            
              </div>
            </div>
            {/* <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800"> */}

            {/* </div> */}
            {/* <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]  gap-4 mt-6"> */}
            {/*
              <!-- New Leads --> */}
            {/* <div className="pipeline-stage text-center p-3 rounded-lg bg-blue-50 cursor-pointer dark:bg-gray-700">
                <div className="text-blue-600 text-2xl font-bold">42</div>
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">New</div>
                <div className="text-xs text-blue-500 mt-1">+5 today</div>
              </div> */}

            {/*
              <!-- Contacted --> */}
            {/* <div className="pipeline-stage text-center p-3 rounded-lg bg-purple-50 cursor-pointer dark:bg-gray-700">
                <div className="text-purple-600 text-2xl font-bold">28</div>
                <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mt-1">Contacted</div>
                <div className="text-xs text-purple-500 mt-1">+3 today</div>
              </div> */}

            {/*
              <!-- Working --> */}
            {/* <div className="pipeline-stage text-center p-3 rounded-lg bg-yellow-50 cursor-pointer dark:bg-gray-700">
                <div className="text-yellow-600 text-2xl font-bold">15</div>
                <div className="text-xs font-semibold text-yellow-600 uppercase tracking-wider mt-1">Working</div>
                <div className="text-xs text-yellow-500 mt-1">+2 today</div>
              </div> */}

            {/*
              <!-- Quoted --> */}
            {/* <div className="pipeline-stage text-center p-3 rounded-lg bg-green-50 cursor-pointer dark:bg-gray-700">
                <div className="text-green-600 text-2xl font-bold">9</div>
                <div className="text-xs font-semibold text-green-600 uppercase tracking-wider mt-1">Quoted</div>
                <div className="text-xs text-green-500 mt-1">+1 today</div>
              </div> */}

            {/*
              <!-- Closed --> */}
            {/* <div className="pipeline-stage text-center p-3 rounded-lg bg-red-50 cursor-pointer dark:bg-gray-700">
                <div className="text-red-600 text-2xl font-bold">4</div>
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-1">Closed</div>
                <div className="text-xs text-red-500 mt-1">2 won</div>
              </div> */}
            {/* </div> */}
            <div class="flex justify-between gap-4 mt-6">
              <div class="pipeline-stage w-[150px] text-center p-3 rounded-lg bg-blue-50 cursor-pointer dark:bg-gray-700">
                <div class="text-blue-600 text-2xl font-bold">42</div>
                <div class="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">
                  New
                </div>
                <div class="text-xs text-blue-500 mt-1">+5 today</div>
              </div>

              <div class="pipeline-stage w-[150px] text-center p-3 rounded-lg bg-purple-50 cursor-pointer dark:bg-gray-700">
                <div class="text-purple-600 text-2xl font-bold">28</div>
                <div class="text-xs font-semibold text-purple-600 uppercase tracking-wider mt-1">
                  Contacted
                </div>
                <div class="text-xs text-purple-500 mt-1">+3 today</div>
              </div>

              <div class="pipeline-stage w-[150px] text-center p-3 rounded-lg bg-yellow-50 cursor-pointer dark:bg-gray-700">
                <div class="text-yellow-600 text-2xl font-bold">15</div>
                <div class="text-xs font-semibold text-yellow-600 uppercase tracking-wider mt-1">
                  Working
                </div>
                <div class="text-xs text-yellow-500 mt-1">+2 today</div>
              </div>

              <div class="pipeline-stage w-[150px] text-center p-3 rounded-lg bg-green-50 cursor-pointer dark:bg-gray-700">
                <div class="text-green-600 text-2xl font-bold">9</div>
                <div class="text-xs font-semibold text-green-600 uppercase tracking-wider mt-1">
                  Quoted
                </div>
                <div class="text-xs text-green-500 mt-1">+1 today</div>
              </div>

              <div class="pipeline-stage w-[150px] text-center p-3 rounded-lg bg-red-50 cursor-pointer dark:bg-gray-700">
                <div class="text-red-600 text-2xl font-bold">4</div>
                <div class="text-xs font-semibold text-red-600 uppercase tracking-wider mt-1">
                  Closed
                </div>
                <div class="text-xs text-red-500 mt-1">2 won</div>
              </div>
            </div>
            {/* training horizontal */}


          </div>
          <div className="bg-white mt-5 dark:bg-gray-800 rounded-xl shadow-sm p-6">
                     <div className="">
  <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
    Training
  </h2>

  <div className="flex flex-col md:flex-row md:gap-[2rem] gap-6 mb-6">
    {/* Left: Image with play button */}
    <div className="relative w-full md:w-1/2">
      <img
        className="w-full h-[10rem] rounded-lg"
        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="Training video"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="p-3 text-white bg-red-600 rounded-full bg-opacity-90 hover:bg-opacity-100">
          <i className="fas fa-play"></i>
        </button>
      </div>
    </div>

    {/* Right: Title, progress bar, button */}
    <div className="flex flex-col justify-center align-center w-full md:w-1/2">
     <h3 className="mt-1 text-md font-semibold text-gray-900 dark:text-white">
                  This Week's Highlight: Advanced Sales Techniques
                </h3>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-3">
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
      </div>

      <button className="w-full mt-4 px-4 py-2 text-sm font-medium btn-outline-red rounded-lg transition-colors duration-200">
        Continue Your Training
      </button>
    </div>
  </div>
</div>
</div>
        </div>
        {/* <!-- Activity Feed -->  */}
        <div className="lg:col-span-1">
          <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Activity Feed
            </h2>
            <div className="space-y-4 h-[26rem] overflow-y-auto thin-scrollbar">
              <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                      <i className="text-red-600 fas fa-user-plus text-xs"></i>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      New lead assigned
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Robert Johnson from LinkedIn
                    </p>
                    <p className="text-xs text-gray-400">10 minutes ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                      <i className="text-red-600 fas fa-file-signature text-xs"></i>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Policy submitted
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Whole Life for Sarah Miller
                    </p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                      <i className="text-red-600 fas fa-trophy text-xs"></i>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Leaderboard update
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      You're #1 in AP for today
                    </p>
                    <p className="text-xs text-gray-400">3 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                      <i className="text-red-600 fas fa-bullhorn text-xs"></i>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      New announcement
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quarterly bonus program starts next week
                    </p>
                    <p className="text-xs text-gray-400">5 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                      <i className="text-red-600 fas fa-calendar-check text-xs"></i>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Appointment reminder
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Follow-up with David Wilson tomorrow
                    </p>
                    <p className="text-xs text-gray-400">Yesterday</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-lg activity-item transition-colors duration-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-red-50 rounded-full dark:bg-gray-700">
                      <i className="text-red-600 fas fa-chart-line text-xs"></i>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Performance report
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Your persistency rate is 98.2%
                    </p>
                    <p className="text-xs text-gray-400">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <h2 className="py-4 px-6 text-lg font-semibold text-gray-900 dark:text-white">
              Key Performance
            </h2>

          

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        {/* <!-- KPIs --> */}
        <div className="lg:col-span-2">
          {/* <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800 mb-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Sales Goal Progress
                </h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  $42,580 / $75,000
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                <div
                  className="bg-red-600 h-3 rounded-full"
                  style={{ width: "57%" }}
                ></div>
              </div>
           
          </div> */}
            <div className="bg-white dark:bg-gray-800 w-full rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2 dark:border-gray-700">
              Leaderboard Summary
            </h2>
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                  Top 5 Agents (Today)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        1
                      </div>
                      <span>Sarah Johnson</span>
                    </div>
                    <span className="font-semibold text-accent">$8,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        2
                      </div>
                      <span>Michael Chen</span>
                    </div>
                    <span className="font-semibold text-accent">$7,890</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        3
                      </div>
                      <span>You</span>
                    </div>
                    <span className="font-semibold text-accent">$6,750</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        4
                      </div>
                      <span>David Wilson</span>
                    </div>
                    <span className="font-semibold text-accent">$5,620</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        5
                      </div>
                      <span>Jessica Lee</span>
                    </div>
                    <span className="font-semibold text-accent">$4,980</span>
                  </div>
                    <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        6
                      </div>
                      <span>James Leo</span>
                    </div>
                    <span className="font-semibold text-accent">$1,480</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                  Top 5 Teams (This Week)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        1
                      </div>
                      <span>Alpha Team</span>
                    </div>
                    <span className="font-semibold text-accent">$42,150</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        2
                      </div>
                      <span>Bravo Team</span>
                    </div>
                    <span className="font-semibold text-accent">$38,760</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        3
                      </div>
                      <span>Charlie Team</span>
                    </div>
                    <span className="font-semibold text-accent">$35,890</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        4
                      </div>
                      <span>Delta Team</span>
                    </div>
                    <span className="font-semibold text-accent">$32,540</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        5
                      </div>
                      <span>Echo Team</span>
                    </div>
                    <span className="font-semibold text-accent">$28,970</span>
                  </div>
                    <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center justify-center mr-3">
                        6
                      </div>
                      <span>Hash Team</span>
                    </div>
                    <span className="font-semibold text-accent">$8,990</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 mt-4  bg-white rounded-xl shadow-sm dark:bg-gray-800 mb-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Persistency Rate
                </h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  98.2%
                </span>
              </div>
              <div className="relative w-full ">
                <Chart />
                {/* <canvas id="persistencyChart"></canvas> */}
              </div>
      
          </div>
        </div>
  <div className="lg:col-span-1 space-y-4">
  {/* Lead To Quote */}
  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-left">
       <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
      Lead to Quote Ratio
    </h3>
  <div className="flex flex-col items-center justify-center">
 
    <DonutChart />
  </div>

  </div>

  {/* Quote to Close */}
<div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-left">
   <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
      Quote to Close Ratio
    </h3>
  <div className="flex flex-col items-center justify-center">
   
    <DonutChart />
  </div>
</div>


  {/* Custom Legend */}
  {/* <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm text-center">
    <div className="flex justify-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
      <div className="flex items-center gap-1">
        <span className="w-4 h-4 bg-[#f87171] rounded-sm"></span> Red
      </div>
      <div className="flex items-center gap-1">
        <span className="w-4 h-4 bg-[#60a5fa] rounded-sm"></span> Blue
      </div>
      <div className="flex items-center gap-1">
        <span className="w-4 h-4 bg-[#facc15] rounded-sm"></span> Yellow
      </div>
    </div>
  </div> */}
</div>

      </div>


  <h2 className="py-4 px-6 text-lg font-semibold text-gray-900 dark:text-white">
              Recent Leads
            </h2>

            <div className="bg-white dark:bg-gray-800 w-full rounded-xl shadow-sm p-6">
                  <div className=" md:block">
               
                        <div className="dark:bg-darkcard rounded-2xl shadow-sm ">
                          {filteredData.length > 0 ? (
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                              <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                  <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Name</th>
                                  <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Number</th>
                                  <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Created On</th>
                                  <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Inactive Days</th>
                                  <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Total Days</th>
                                  <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Assigned To</th>
                                  <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Status</th>
                                </tr>
                              </thead>
                              <tbody className="dark:bg-gray-800 dark:divide-gray-700 bg-white divide-y divide-gray-200">
                                {filteredData.map((item, index) => (
                                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 ">
                                  
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="flex items-center">
                                        <div
                                          className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
                                          {item.initials}
                                        </div>
                                        <div className="ml-4">
                                          <div className="text-sm font-medium">{item.name}</div>
                                          <div className="text-xs text-gray-500 dark:text-gray-400">{item.email}</div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{item.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{item.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.leads}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">{item.score}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
              
                                      <div className="relative">
                                        <select
              
                                          className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                                          <option value="2">Sarah Johnson</option>
                                          <option value="3">Michael Chen</option>
                                          <option value="4">Emily Rodriguez</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                          <svg className="w-4 h-4 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                          </svg>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
              
                                      <div className="relative">
                                        <select
              
                                          className="appearance-none bg-white border border-gray-300 dark:border-gray-600 w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-md text-sm focus:outline-none">
                                          <option value="">Submitted</option>
                                          <option value="1">New</option>
                                          <option value="2">Working</option>
              
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                          <svg className="w-4 h-4 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                          </svg>
                                        </div>
                                      </div>
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
                              <p className="text-gray-500 dark:text-gray-400 text-lg">No records found</p>
                              {searchQuery || statusFilter !== 'All Statuses' || agentFilter !== 'All Agents' ? (
                                <button
                                  onClick={() => {
                                    setSearchQuery('');
                                    setStatusFilter('All Statuses');
                                    setAgentFilter('All Agents');
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
            </div>

    </>
  );
}
