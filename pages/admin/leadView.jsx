import Tooltip from "../../components/Tooltip";
import UniversalDropdown from "../../components/UniversalDropdown";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Select from "react-select";
import AllActivitiesDropdown from "../../components/AllActivitiesDropdown";
import AllUsersDropdown from "../../components/AllUsersDropdown";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import FileUploader from "../../components/FileUploader";
import Link from "next/link";
import CreatableSelect from 'react-select/creatable';

import { useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import DatePicker from "../../components/Datepicker";

// here
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function LeadView() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState("Details");
  const [rightactiveTab, setRightActiveTab] = useState("Summary");
  const [addFields, setAddFields] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [secOpenIndex, setSecOpenIndex] = useState(0);
  const [urlText, setUrlText] = useState("www.example.com");
  const [paraAreaText, setParaAreaText] = useState("Add Description");
  const [task, setTask] = useState([]);
  const [taskSection, setTaskSection] = useState(false);
  const [filterValue, setFilterValue] = useState("All");
  const [callOpen, setCallOpen] = useState(false);
  const [phoneTabs, setPhoneTabs] = useState("newNumber");
  // Opportunities
  const [oppotunities, setOppotunities] = useState([]);
  const [addOpportunities, setAddOpportunities] = useState(false);
  // Opportunities
  const [open, setOpen] = useState(false);
  const [fileOpen, setFileOpen] = useState(false);
  const [addressData, setAddressData] = useState([]);
  const [editorData, setEditorData] = useState("<p>Hello from CKEditor!</p>");
  const [addFieldValue, setaddFieldValue] = useState([])

  // CC BCC
  const [ccVal, setccVal] = useState(true)
  const [bccVal, setBccVal] = useState(true)
  const [emailTemplate, setEmailTemplate] = useState(false)

  // Functions
  function addTaskBtn(e) {
    e.stopPropagation();
    setOpenIndex(1);
    setTaskSection(true);
  }

  function handlSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    // setAddressData([formObj]);
    setAddressData((prev) => [...prev, formObj]);
    setAddFields(false);
  }

  function opportunitiesHandle(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    setAddOpportunities(false)
    setOppotunities((prev) => [...prev, formObj])
  }

  function taskHandSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    setTask((prev) => [...prev, formObj]);
    setTaskSection(false);
  }

  function checkFilter(e) {
    // console.log(e.target.textContent);
    setFilterValue(e.target.textContent);
  }

  useEffect(() => {
    console.log("Updated addressData:", taskSection);
  }, [taskSection]);

  useEffect(() => {
    console.log("Updated addressData:", addressData);
  }, [addressData]);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const secToggle = (index) => {
    setSecOpenIndex(secOpenIndex === index ? null : index);
  };

  const handleDelete = (deleteIndex) => {
    setAddressData((prev) => prev.filter((_, index) => index !== deleteIndex));
  };

  // Objects
  const images = [
    {
      url: "/images/avatarsetting.png",
    },
    {
      url: "/images/avatarsetting.png",
    },
  ];

  const filesData = [
    {
      fname: 'bankstatement.pdf',
      date: '01/12/25',
      time: '10:00',
      size: '275kb',
    },
    {
      fname: 'merchant_request.pdf',
      date: '01/12/25',
      time: '10:00',
      size: '275kb',
    },
    {
      fname: 'financials.pdf',
      date: '01/12/25',
      time: '10:00',
      size: '275kb',
    },

  ]

  //  const opptAccordionData = [
  //     {
  //       description: "abc",
  //       point: [
  //         {
  //           text: "Pricing",
  //         },
  //         {
  //           text: "Premium support scope",
  //         },
  //         {
  //           text: "Timeline",
  //         },
  //       ],
  //       broker: "Ticon Millers",
  //       funder: "Fariz Wilson",
  //       merchant: "Ovais Wilson",
  //       position: "2nd",
  //       type: "Weeks",
  //       type: 40,
  //       terms: 40,
  //     },
  //     {
  //       description: "abc",
  //       point: [
  //         {
  //           text: "Pricing",
  //         },
  //         {
  //           text: "Premium support scope",
  //         },
  //         {
  //           text: "Timeline",
  //         },
  //       ],
  //       broker: "Mike Millers",
  //       funder: "Mike Wilson",
  //       merchant: "Tom Wilson",
  //       position: "2nd",
  //       type: "Weeks",
  //       type: 40,
  //       terms: 40,
  //     },
  //   ];




  const productType = [
    {
      value: 'Performance & Growth', label: 'Performance & Growth'
    },
    {
      value: 'Process & Optimization', label: 'Process & Optimization'
    },
    {
      value: 'Recruitment & Onboarding', label: 'Recruitment & Onboarding'
    },
    {
      value: 'Reporting & Analytics', label: 'Reporting & Analytics'
    },
    {
      value: 'Sales', label: 'Sales'
    },

  ]

  const productTier = [
    {
      value: 'Accelerate', label: 'Accelerate'
    },
    {
      value: 'Elite', label: 'Elite'
    },
    {
      value: 'Intro', label: 'Intro'
    },
    {
      value: 'Platinum', label: 'Platinum'
    },

  ]

  const options = [
    { value: "Pakistan", label: "Pakistan" },
    { value: "Iran", label: "Iran" },
    { value: "USA", label: "USA" },
    { value: "England", label: "England" },
    { value: "Africa", label: "Africa" },
    { value: "India", label: "India" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Colombia", label: "Colombia" },
  ];

  const opportSelect = [
    { value: 'Tiage Set', label: 'Tiage Set' },
    { value: 'Triage Showed', label: 'Triage Showed' },
    { value: 'No Show', label: 'No Show' },
    { value: 'Demo Completed', label: 'Demo Completed' },
    { value: 'Won', label: 'Won' },
    { value: 'Lost', label: 'Lost' },

  ]
  const opAssigned = [
    { value: 'Fariz Elahi', label: 'Fariz Elahi' },
    { value: 'Ovais', label: 'Ovais' },
  ]
  const opContact = [
    { value: 'Emily Wilson', label: 'Emily Wilson' },
  ]


  const userOpt = [
    { value: 'mikeWilson', label: 'Mike Wilson' }
  ]

  const fieldsAdd = [
    {
      value: 'productType', label: 'Product Type',
    },
    {
      value: 'productTier', label: 'Product Tier',
    },

    {
      value: 'contractLink', label: 'Contract Link',
    },
    {
      value: 'trackingID', label: 'Tracking ID',
    },
    {
      value: 'discount', label: 'Discount',
    },
  ]

  const sendingData = [
    {
      value: 'hamdan@gmail.com', label: 'hamdan@gmail.com'
    },
  ]

  const activities = [
    { value: "Notes", label: "Notes" },
    { value: "strawberry", label: "Emailse" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const accordionData = [
    {
      title: "About",
      content: (
        <>
          <div className="flex items-center gap-3 group">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                className="w-[20px] h-[20px]"
              >
                <path
                  fill="currentColor"
                  d="M10.457 6.264a2.193 2.193 0 1 1-4.385 0 2.193 2.193 0 0 1 4.385 0Zm-2.193-.878a.876.876 0 1 0 0 1.755.876.876 0 1 0 0-1.755Zm5.263.878c0 2.396-3.207 6.661-4.614 8.421a.828.828 0 0 1-1.3 0C6.184 12.925 3 8.66 3 6.264a5.264 5.264 0 1 1 10.527 0ZM8.264 2.316a3.949 3.949 0 0 0-3.948 3.948c0 .34.123.866.42 1.568.287.68.695 1.43 1.164 2.19.779 1.267 1.684 2.467 2.364 3.361.68-.893 1.584-2.094 2.363-3.36.469-.76.877-1.511 1.165-2.191.296-.702.42-1.228.42-1.568a3.949 3.949 0 0 0-3.948-3.948Z"
                ></path>
              </svg>
            </div>
            <div className="flex items-center justify-between w-full">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  addressData.length > 0
                    ? setAddFields(false)
                    : setAddFields(true);
                }}
              >
                {!addressData.length > 0 ? (
                  "Location"
                ) : (
                  <div>
                    <span className="inline-flex items-center rounded-[25px] bg-[#F8FAFC] px-4 py-1 text-[14px] font-[400] border text-[#90A1B9] border-solid border-[#90A1B9] ">
                      {addressData[0].type}
                    </span>
                    <p className="text-[#45556C] text-[14px] font-[400] mt-2">
                      {addressData[0].address}
                    </p>
                    <p className="text-[#45556C] text-[14px] font-[400]">
                      {addressData[0].contAddress}
                    </p>
                    <p className="text-[#45556C] text-[14px] font-[400]">
                      <span>{addressData[0].city}</span>,{" "}
                      <span>{addressData[0].state}</span>{" "}
                      <span>{addressData[0].postalCode}</span>
                    </p>
                    <p className="text-[#45556C] text-[14px] font-[400]">
                      {addressData[0].country}
                    </p>
                    <div>and {addressData.length} more</div>
                  </div>
                )}
              </div>
              <div>
                <span
                  onClick={() => {
                    setOpen(true);
                    addressData.length > 0
                      ? setAddFields(false)
                      : setAddFields(true);
                  }}
                  className="opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="w-[20px]"
                  >
                    <path
                      fill="currentColor"
                      d="M13.46 1.513a1.745 1.745 0 0 0-2.473 0l-8.754 8.754c-.234.234-.397.53-.47.853l-.754 3.358c-.056.251.16.522.427.522a.44.44 0 0 0 .088-.009s2.313-.49 3.357-.736c.316-.074.598-.233.828-.462L14.49 5.01a1.747 1.747 0 0 0-.002-2.472L13.46 1.513ZM4.78 12.864a.408.408 0 0 1-.2.113c-.497.117-1.298.293-1.988.443l.453-2.012a.437.437 0 0 1 .117-.214L9.776 4.58l1.644 1.644-6.641 6.64Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                className="w-[20px] h-[20px]"
              >
                <path
                  fill="currentColor"
                  d="M4.112 4.906a3.804 3.804 0 0 1 5.554 5.195l-.14.161a.636.636 0 0 1-.957-.835l.143-.162a2.536 2.536 0 0 0-.117-3.462C7.605 4.79 6 4.79 4.987 5.803L2.012 8.8a2.536 2.536 0 0 0 0 3.586c.944.921 2.46.995 3.462.117l.164-.143a.633.633 0 0 1 .894.06.633.633 0 0 1-.058.895l-.164.143a3.804 3.804 0 0 1-5.195-.175c-1.487-1.484-1.487-3.917 0-5.38l2.997-2.997zm7.776 6.587a3.806 3.806 0 0 1-5.382 0 3.784 3.784 0 0 1-.175-5.195l.124-.143a.636.636 0 0 1 .958.836l-.125.142a2.536 2.536 0 0 0 3.704 3.463l2.996-2.997a2.535 2.535 0 0 0-3.462-3.702l-.164.142a.634.634 0 0 1-.836-.956l.164-.142a3.804 3.804 0 0 1 5.195 5.554l-2.997 2.997z"
                ></path>
              </svg>
            </div>
            <div className="w-full">
              <input
                type="text"
                onChange={(e) => setUrlText(e.target.value)}
                value={urlText}
                className="h-[30px] cursor-pointer w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] text-[#2860af] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]"
              />
            </div>
          </div>
          <div className="flex items-start gap-3 mt-4">
            <div>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                className="w-[20px] h-[20px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.14286C1 2.78661 1.28661 2.5 1.64286 2.5H12.3571C12.7134 2.5 13 2.78661 13 3.14286C13 3.49911 12.7134 3.78571 12.3571 3.78571H1.64286C1.28661 3.78571 1 3.49911 1 3.14286ZM1 7.42857C1 7.07232 1.28661 6.78571 1.64286 6.78571H12.3571C12.7134 6.78571 13 7.07232 13 7.42857C13 7.78482 12.7134 8.07143 12.3571 8.07143H1.64286C1.28661 8.07143 1 7.78482 1 7.42857ZM6.14286 11.7143C6.14286 12.0705 5.85625 12.3571 5.5 12.3571H1.64286C1.28661 12.3571 1 12.0705 1 11.7143C1 11.358 1.28661 11.0714 1.64286 11.0714H5.5C5.85625 11.0714 6.14286 11.358 6.14286 11.7143Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="w-full">
              <textarea
                type="text"
                onChange={(e) => setParaAreaText(e.target.value)}
                value={paraAreaText}
                className="h-[25px]  cursor-pointer w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]"
              ></textarea>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Task",
      content: (
        <>
          <div>
            {!task.length > 0 ? (
              <div
                className={`${!taskSection ? "flex" : "hidden"
                  }  flex-col items-center justify-center`}
              >
                <p className="text-center">
                  Assign actions to yourself or team members.
                </p>
                <span
                  onClick={() => setTaskSection(true)}
                  className="cursor-pointer text-[#245bc6] border-[transparent] border-b hover:border-[#245bc6] hover:border-b"
                >
                  Add Task
                </span>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-3">
                  {task.map((ele, index) => (
                    <div
                      className="flex items-center justify-between group"
                      key={index}
                    >
                      <div className="flex items-center gap-2">
                        <div className="rounded-[50%] bg-[#000] text-[#fff] text-[18px] w-[40px] h-[40px] flex items-center justify-center">
                          ss
                        </div>
                        <div>
                          <p className="text-[14px] text-[#0F172B] font-[500] ">
                            {ele.taskDescpt}
                          </p>
                          <p className="text-[12px] font-[400] text-[#45556C]">
                            {ele.date}
                          </p>
                        </div>
                      </div>
                      <div>
                        <span
                          className="opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                          onClick={(e) => console.log(e)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                            className="w-[20px]"
                          >
                            <path
                              fill="currentColor"
                              d="M13.46 1.513a1.745 1.745 0 0 0-2.473 0l-8.754 8.754c-.234.234-.397.53-.47.853l-.754 3.358c-.056.251.16.522.427.522a.44.44 0 0 0 .088-.009s2.313-.49 3.357-.736c.316-.074.598-.233.828-.462L14.49 5.01a1.747 1.747 0 0 0-.002-2.472L13.46 1.513ZM4.78 12.864a.408.408 0 0 1-.2.113c-.497.117-1.298.293-1.988.443l.453-2.012a.437.437 0 0 1 .117-.214L9.776 4.58l1.644 1.644-6.641 6.64Z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex my-5">
                  <span
                    onClick={() => setTaskSection(true)}
                    className="cursor-pointer text-[#245bc6] border-[transparent] border-b hover:border-[#245bc6] hover:border-b"
                  >
                    Add Task
                  </span>
                </div>
              </>
            )}
          </div>
          <div className={`${taskSection ? "block" : "hidden"}`}>
            <form action="" onSubmit={taskHandSubmit}>
              <div>
                <input
                  type="text"
                  name="taskDescpt"
                  className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
                  placeholder="Task Description"
                />
                <div className="reactSelectSetting w-full mt-3">
                  <Select name="userOpt" options={userOpt} />
                </div>
                <div className="mt-3">
                  <input
                    type="time"
                    name="time"
                    className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
                  />
                </div>
                <div className="mt-3">
                  <DatePicker value={selectedDate} onChange={setSelectedDate} />
                </div>
                <div className="flex items-center justify-end mt-3">
                  {/* <div className="cursor-pointer ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      className="w-[20px] h-[20px]"
                    >
                      <path
                        fill="currentColor"
                        d="M13.813 3.188H11.56l-.93-1.552C10.37 1.24 9.968 1 9.51 1H6.74c-.459 0-.886.241-1.12.636l-.93 1.552H2.437A.436.436 0 0 0 2 3.624v.438c0 .243.195.437.438.437h.437v8.75c0 .967.783 1.75 1.75 1.75h7a1.75 1.75 0 0 0 1.75-1.75V4.5h.438a.435.435 0 0 0 .437-.438v-.437a.436.436 0 0 0-.438-.438ZM6.7 2.39a.162.162 0 0 1 .14-.079h2.57a.16.16 0 0 1 .14.08l.478.796H6.222L6.7 2.39Zm4.925 11.296h-7a.438.438 0 0 1-.438-.437V4.5h7.875v8.75c0 .24-.196.438-.437.438Zm-3.5-1.312a.437.437 0 0 0 .438-.438V6.25a.437.437 0 1 0-.876 0v5.688c0 .24.197.437.438.437Zm-2.188 0a.44.44 0 0 0 .438-.438V6.25a.437.437 0 1 0-.875 0v5.688c0 .24.197.437.438.437Zm4.375 0a.437.437 0 0 0 .438-.438V6.25a.437.437 0 1 0-.875 0v5.688c0 .24.197.437.438.437Z"
                      ></path>
                    </svg>
                  </div> */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTaskSection(false)}
                      className="flex items-center justify-center text-center h-[38px] gap-2 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[60px] text-[#62748E] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#e5e5e5] "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center justify-center text-center h-[38px] gap-2 bg-[#2B7FFF] border border-[#8EC5FF] rounded-[60px] text-[#fff] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#2873e6] "
                    >
                      Add Task
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      ),
    },
    {
      title: "Opportunity",
      content: (
        <>
          {!oppotunities.length > 0 ? (
            <>
              <div
                className={` justify-center flex-col items-center ${!addOpportunities ? "flex" : "hidden"
                  }`}
              >
                <p>Identify and keep track of deals.</p>
                <button
                  onClick={() => setAddOpportunities(true)}
                  className="cursor-pointer text-[#245bc6] border-[transparent] border-b hover:border-[#245bc6] hover:border-b"
                >
                  Add Opportunity
                </button>
              </div>
            </>
          ) : (
            <>
              <div>

                {oppotunities.map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#F1F5F9] mt-5 rounded-[6px] mb-3"
                  >
                    <button
                      onClick={() => secToggle(index)}
                      className="w-full rounded-[6px] group rounded-b-[0]  flex items-center bg-[#fff] justify-between p-4 text-left text-[#020618] text-[14px] font-medium hover:bg-gray-100"
                    >
                      <div className="border-l-4 border-[green] pl-3">
                        <div className='flex items-center gap-2'>
                          <div className='w-[45px] h-[45px] rounded-[50%] bg-[url(/images/avatarsetting.png)] bg-cover bg-center'></div>
                          <div>
                            <p>${item.price}</p>
                            <p>60%</p>
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className='bg-[green] text-[white] px-[17px] py-[3px] rounded-[13px]'>{item.dealVal}</span>
                        </div>

                      </div>
                      <div onClick={(e) => e.stopPropagation()} className="opacity-0 group-hover:opacity-100 transition duration-300 flex items-center gap-3">
                        <div>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.99935 8.66683C8.36754 8.66683 8.66602 8.36835 8.66602 8.00016C8.66602 7.63197 8.36754 7.3335 7.99935 7.3335C7.63116 7.3335 7.33268 7.63197 7.33268 8.00016C7.33268 8.36835 7.63116 8.66683 7.99935 8.66683Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12.666 8.66683C13.0342 8.66683 13.3327 8.36835 13.3327 8.00016C13.3327 7.63197 13.0342 7.3335 12.666 7.3335C12.2978 7.3335 11.9993 7.63197 11.9993 8.00016C11.9993 8.36835 12.2978 8.66683 12.666 8.66683Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M3.33268 8.66683C3.70087 8.66683 3.99935 8.36835 3.99935 8.00016C3.99935 7.63197 3.70087 7.3335 3.33268 7.3335C2.96449 7.3335 2.66602 7.63197 2.66602 8.00016C2.66602 8.36835 2.96449 8.66683 3.33268 8.66683Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        </div>
                        <div>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.99998 13.3332H14M2 13.3332H3.11636C3.44248 13.3332 3.60554 13.3332 3.75899 13.2963C3.89504 13.2637 4.0251 13.2098 4.1444 13.1367C4.27895 13.0542 4.39425 12.9389 4.62486 12.7083L13 4.33316C13.5523 3.78087 13.5523 2.88544 13 2.33316C12.4477 1.78087 11.5523 1.78087 11 2.33316L2.62484 10.7083C2.39424 10.9389 2.27894 11.0542 2.19648 11.1888C2.12338 11.3081 2.0695 11.4381 2.03684 11.5742C2 11.7276 2 11.8907 2 12.2168V13.3332Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        </div>
                        <div>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.33333 10.3333H12M9.33333 12.6667H14M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7981 6.15582 13.5598 6.43871 14.2563C6.49285 14.3897 6.51992 14.4563 6.532 14.5102C6.54381 14.5629 6.54813 14.6019 6.54814 14.6559C6.54814 14.7111 6.53812 14.7713 6.51807 14.8916L6.12275 17.2635C6.08135 17.5119 6.06065 17.6361 6.09917 17.7259C6.13289 17.8045 6.19552 17.8671 6.27412 17.9008C6.36393 17.9393 6.48812 17.9186 6.73651 17.8772L9.10843 17.4819C9.22872 17.4619 9.28887 17.4519 9.34409 17.4519C9.3981 17.4519 9.43711 17.4562 9.48981 17.468C9.54369 17.4801 9.61035 17.5072 9.74366 17.5613C10.4402 17.8442 11.2019 18 12 18Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        </div>
                      </div>
                    </button>
                    <div
                      className={`px-5 overflow-hidden border-t  bg-[#fff] transition-all duration-300 text-gray-600 ${secOpenIndex === index
                        ? "max-h-[500px] py-4 border-[#F1F5F9 ]"
                        : "max-h-0 py-0"
                        }`}
                    >
                      <div key={index}>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2'>
                            <span>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.6654 17.5C16.6654 16.337 16.6654 15.7555 16.5218 15.2824C16.1987 14.217 15.365 13.3834 14.2996 13.0602C13.8265 12.9167 13.245 12.9167 12.082 12.9167H7.91537C6.7524 12.9167 6.17091 12.9167 5.69775 13.0602C4.63241 13.3834 3.79873 14.217 3.47556 15.2824C3.33203 15.7555 3.33203 16.337 3.33203 17.5M13.7487 6.25C13.7487 8.32107 12.0698 10 9.9987 10C7.92763 10 6.2487 8.32107 6.2487 6.25C6.2487 4.17893 7.92763 2.5 9.9987 2.5C12.0698 2.5 13.7487 4.17893 13.7487 6.25Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                            </span>
                            <p>
                              {item.contactVal}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.33398 8.66699L10.7773 12.4773C11.218 12.7858 11.4384 12.9401 11.6782 12.9999C11.8899 13.0526 12.1114 13.0526 12.3231 12.9999C12.5629 12.9401 12.7833 12.7858 13.224 12.4773L18.6673 8.66699M8.53398 17.3337H15.4673C16.5874 17.3337 17.1475 17.3337 17.5753 17.1157C17.9516 16.9239 18.2576 16.618 18.4493 16.2416C18.6673 15.8138 18.6673 15.2538 18.6673 14.1337V9.86699C18.6673 8.74689 18.6673 8.18683 18.4493 7.75901C18.2576 7.38269 17.9516 7.07673 17.5753 6.88498C17.1475 6.66699 16.5874 6.66699 15.4673 6.66699H8.53398C7.41388 6.66699 6.85383 6.66699 6.426 6.88498C6.04968 7.07673 5.74372 7.38269 5.55197 7.75901C5.33398 8.18683 5.33398 8.74689 5.33398 9.86699V14.1337C5.33398 15.2538 5.33398 15.8138 5.55197 16.2416C5.74372 16.618 6.04968 16.9239 6.426 17.1157C6.85383 17.3337 7.41388 17.3337 8.53398 17.3337Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                            </span>
                            <span>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_72_4060)"> <path d="M13.3671 7.99967C14.0182 8.12672 14.6167 8.44518 15.0858 8.9143C15.5549 9.38342 15.8734 9.98185 16.0004 10.633M13.3671 5.33301C14.7199 5.4833 15.9815 6.08912 16.9446 7.05101C17.9077 8.0129 18.5151 9.27368 18.6671 10.6263M10.8184 13.2417C10.0174 12.4407 9.38483 11.5349 8.92084 10.5685C8.88092 10.4854 8.86097 10.4438 8.84564 10.3912C8.79115 10.2043 8.83029 9.9748 8.94363 9.81652C8.97552 9.77197 9.01363 9.73387 9.08984 9.65766C9.32291 9.42459 9.43944 9.30806 9.51563 9.19087C9.80296 8.74894 9.80296 8.17922 9.51563 7.7373C9.43944 7.62011 9.32291 7.50358 9.08984 7.2705L8.95992 7.14059C8.60563 6.7863 8.42848 6.60915 8.23823 6.51292C7.85985 6.32154 7.41301 6.32154 7.03464 6.51292C6.84438 6.60915 6.66723 6.7863 6.31294 7.14059L6.20785 7.24568C5.85477 7.59876 5.67823 7.7753 5.54339 8.01533C5.39378 8.28166 5.28621 8.69532 5.28712 9.00081C5.28793 9.2761 5.34134 9.46425 5.44814 9.84055C6.02212 11.8628 7.1051 13.7711 8.69709 15.363C10.2891 16.955 12.1973 18.038 14.2196 18.612C14.5959 18.7188 14.784 18.7722 15.0593 18.773C15.3648 18.7739 15.7785 18.6664 16.0448 18.5167C16.2848 18.3819 16.4614 18.2054 16.8145 17.8523L16.9195 17.7472C17.2738 17.3929 17.451 17.2158 17.5472 17.0255C17.7386 16.6471 17.7386 16.2003 17.5472 15.8219C17.451 15.6317 17.2738 15.4545 16.9195 15.1002L16.7896 14.9703C16.5566 14.7372 16.44 14.6207 16.3228 14.5445C15.8809 14.2572 15.3112 14.2572 14.8693 14.5445C14.7521 14.6207 14.6355 14.7372 14.4025 14.9703C14.3263 15.0465 14.2882 15.0846 14.2436 15.1165C14.0853 15.2298 13.8558 15.269 13.6689 15.2145C13.6163 15.1992 13.5748 15.1792 13.4916 15.1393C12.5252 14.6753 11.6195 14.0428 10.8184 13.2417Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g> <defs> <clipPath id="clip0_72_4060"> <rect width="16" height="16" fill="white" transform="translate(4 4)" /> </clipPath> </defs> </svg>
                            </span>
                          </div>
                        </div>
                        <textarea value={`${item.notesVal}`} id="" className="mt-3 w-full h-[60px] bg-[#F1F5F9] rounded-[8px] p-2 resize-none focus-visible:outline-[#f1f5f9]"></textarea>
                        <div className="mt-3">
                          <label htmlFor="" className="block text-[#314158] text-[16px]/[24px] font-[500] mb-2">Attachment</label>
                          <div className='flex items-center justify-between border border-[#F1F5F9] rounded-[6px] p-2'>
                            <div className="flex items-center gap-3">
                              <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#57B7DF" fillRule="evenodd" d="M3.45 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h9.1a.7.7 0 0 0 .7-.7V5.2L9.05 1h-5.6Z" clipRule="evenodd"></path><path fill="#000" fillOpacity=".2" d="m9.05 1 4.2 4.2H10.1c-.58 0-1.05-.47-1.05-1.05V1Z"></path><path fill="#fff" fillRule="evenodd" d="M6.25 9.4a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1ZM5.2 12.9h6.3L9.75 9.75a.212.212 0 0 0-.319 0L7.65 12.2l-1.081-1.05a.212.212 0 0 0-.319 0L4.5 12.9h.7Z" clipRule="evenodd"></path></svg>
                              <div>
                                <p>
                                  {/* {
                                    item.imagesrc.map((ele, index) => (
                                      console.log(ele)
                                    ))
                                  } */}
                                  Image Source                                </p>
                                <div className='flex items-center gap-3'>
                                  <span>Image</span>
                                  <span className='block w-[6px] h-[6px] bg-[red] rounded-[50%]'></span>
                                  <span>3.37 KB</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.0007 10.8337C10.4609 10.8337 10.834 10.4606 10.834 10.0003C10.834 9.54009 10.4609 9.16699 10.0007 9.16699C9.54041 9.16699 9.16732 9.54009 9.16732 10.0003C9.16732 10.4606 9.54041 10.8337 10.0007 10.8337Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M15.834 10.8337C16.2942 10.8337 16.6673 10.4606 16.6673 10.0003C16.6673 9.54009 16.2942 9.16699 15.834 9.16699C15.3737 9.16699 15.0007 9.54009 15.0007 10.0003C15.0007 10.4606 15.3737 10.8337 15.834 10.8337Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M4.16732 10.8337C4.62755 10.8337 5.00065 10.4606 5.00065 10.0003C5.00065 9.54009 4.62755 9.16699 4.16732 9.16699C3.70708 9.16699 3.33398 9.54009 3.33398 10.0003C3.33398 10.4606 3.70708 10.8337 4.16732 10.8337Z" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                            </div>
                          </div>
                        </div>

                        <div className='mt-3'>
                          <label htmlFor="" className="block text-[#314158] text-[16px]/[24px] font-[500] mb-2">Fields</label>
                          <div className="grid grid-cols-[1fr_2fr] items-center">
                            <div>Product Type</div>
                            <div><input type="text" value={`${item.productType}`} className="h-[40px] cursor-pointer w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] text-[#314158 ] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]" /></div>
                            <div>Product Tier</div>
                            <div><input type="text" value={`${item.productTier}`} className="h-[40px] cursor-pointer w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] text-[#314158 ] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]" /></div>
                            <div>Contract Link</div>
                            <div><input type="text" value={`${item.contractLink}`} className="h-[40px] cursor-pointer w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] text-[#314158 ] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]" /></div>
                            <div>Tracking ID</div>
                            <div><input type="text" value={`${item.tracingId}`} className="h-[40px] cursor-pointer w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] text-[#314158 ] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]" /></div>
                            <div>Discount</div>
                            <div><input type="text" value={`${item.discountVal}`} className="h-[40px] cursor-pointer w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] text-[#314158 ] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              <div className={`mt-3 cursor-pointer text-center ${addOpportunities ? 'hidden' : 'block'}`} onClick={() => setAddOpportunities(true)}>Add More <span className="text-[#155DFC]">Opportunities</span></div>
            </>
          )}

          {addOpportunities && (
            <>
              <div>
                <form action="" onSubmit={opportunitiesHandle}>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        $
                      </div>
                      <input
                        id="price"
                        name="price"
                        required
                        type="number"
                        placeholder="Enter Amount"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="currency"
                          required
                          name="payment"
                          aria-label="Currency"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                          <option>One-time</option>
                          <option>Monthly</option>
                          <option>annual</option>
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="oppotunitiesSelectSet">
                      <Select
                        options={opportSelect}
                        name="dealVal"
                        required
                        classNamePrefix="react-select"
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          control: (base) => ({ ...base, zIndex: 10 }), // optional
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="" className='block text-[#314158] text-[16px]/[24px] font-[500] mb-2'>Estimated Close</label>
                    <DatePicker value={selectedDate} onChange={setSelectedDate} />
                  </div>
                  <div className='mt-3'>
                    <label htmlFor="" className='block text-[#314158] text-[16px]/[24px] font-[500] mb-2'>Assigned to</label>
                    <div className="oppotunitiesSelectSet">
                      <Select
                        options={opAssigned}
                        name="assignedVal"
                        classNamePrefix="react-select"
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          control: (base) => ({ ...base, zIndex: 10 }), // optional
                        }}
                      />
                    </div>
                  </div>
                  <div className='mt-3'>
                    <label htmlFor="" className='block text-[#314158] text-[16px]/[24px] font-[500] mb-2'>Contact</label>
                    <div className="oppotunitiesSelectSet">
                      <Select
                        options={opContact}
                        name="contactVal"
                        classNamePrefix="react-select"
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          control: (base) => ({ ...base, zIndex: 10 }), // optional
                        }}
                      />
                    </div>

                  </div>
                  <div className='mt-3'>
                    <label htmlFor="" className='block text-[#314158] text-[16px]/[24px] font-[500] mb-2'>Notes</label>

                    <textarea name="notesVal" id="" className="w-full h-[153px] bg-[#F1F5F9] rounded-[8px] p-2 resize-none focus-visible:outline-[#f1f5f9]" placeholder='Add Notes...' ></textarea>

                  </div>
                  <div className="mt-3">
                    <main className="">
                      <label htmlFor="" className='block text-[#314158] text-[16px]/[24px] font-[500] mb-2'>Attachement</label>
                      <FileUploader />
                    </main>
                  </div>
                  <div className='mt-3'>
                    <label htmlFor="" className='block text-[#314158] text-[16px]/[24px] font-[500] mb-2'>Fields</label>
                    <div className="mb-3">
                      <div className="oppotunitiesSelectSet">
                        <Select
                          isMulti
                          name="productTir"
                          placeholder='Select...'
                          onChange={(e) => {
                            setaddFieldValue(e)
                            console.log(e);
                          }}
                          options={fieldsAdd}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          menuPortalTarget={document.body}
                          styles={{
                            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                            control: (base) => ({ ...base, zIndex: 10 }), // optional
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      {addFieldValue.some((item) => item.value === 'productType') && (
                        <div className='productType grid grid-cols-[1fr_2fr] items-center'>
                          <label htmlFor="">Product Type</label>
                          <div className='oppotunitiesSelectSet'>
                            <Select
                              isMulti
                              name="productType"
                              options={productType}
                              className="basic-multi-select"
                              placeholder='Choose a Value'
                              classNamePrefix="select"
                              menuPortalTarget={document.body}
                              styles={{
                                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                                control: (base) => ({ ...base, zIndex: 10 }),
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {addFieldValue.some((item) => item.value === 'productTier') && (
                        <div className='productTier grid grid-cols-[1fr_2fr] mt-3 items-center'>
                          <label htmlFor="">Product Tier</label>
                          <div className="oppotunitiesSelectSet">
                            <Select
                              name="productTier"
                              placeholder='Choose a Value'
                              options={productTier}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              menuPortalTarget={document.body}
                              styles={{
                                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                                control: (base) => ({ ...base, zIndex: 10 }),
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {addFieldValue.some((item) => item.value === 'contractLink') && (
                        <div className='contractLink grid grid-cols-[1fr_2fr] mt-3 items-center'>
                          <label htmlFor="">Contract Link</label>
                          <input
                            type="text"
                            name="contractLink"
                            className='h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]'
                          />
                        </div>
                      )}

                      {addFieldValue.some((item) => item.value === 'trackingID') && (
                        <div className='trackingID grid grid-cols-[1fr_2fr] mt-3 items-center'>
                          <label htmlFor="">Tracking ID</label>
                          <input
                            type="text"
                            name="tracingId"
                            className='h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]'
                          />
                        </div>
                      )}

                      {addFieldValue.some((item) => item.value === 'discount') && (
                        <div className='discount grid grid-cols-[1fr_2fr] mt-3 items-center'>
                          <label htmlFor="">Discount</label>
                          <input
                            type="text"
                            name="discountVal"
                            className='h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]'
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end mt-3 gap-3">
                      <button onClick={() => setAddOpportunities(false)} type="button" className='flex items-center justify-center text-center h-[38px] gap-2 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[60px] text-[#62748E] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#e5e5e5] '>Cancel</button>
                      <button type='submit' className="flex items-center justify-center text-center h-[38px] gap-2 bg-[#2B7FFF] border border-[#8EC5FF] rounded-[60px] text-[#fff] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#2873e6] ">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </>
      ),
    },
  ];




  // <div>
  //   data.map((e)=>(
  //     <div>{e.price}</div>
  //   ))
  // </div>

  const detailsAccordionData = [
    {
      description: "abc",
      point: [
        {
          text: "Pricing",
        },
        {
          text: "Premium support scope",
        },
        {
          text: "Timeline",
        },
      ],
      broker: "Ticon Millers",
      funder: "Fariz Wilson",
      merchant: "Ovais Wilson",
      position: "2nd",
      type: "Weeks",
      type: 40,
      terms: 40,
    },
    {
      description: "abc",
      point: [
        {
          text: "Pricing",
        },
        {
          text: "Premium support scope",
        },
        {
          text: "Timeline",
        },
      ],
      broker: "Mike Millers",
      funder: "Mike Wilson",
      merchant: "Tom Wilson",
      position: "2nd",
      type: "Weeks",
      type: 40,
      terms: 40,
    },
  ];



  const dropDownOpt = [
    {
      name: "Status 01",
      url: "#",
    },
    {
      name: "Status 02",
      url: "#",
    },
    {
      name: "Status 03",
      url: "#",
    },
  ];

  return (
    <>
      {/* Address Moda */}
      <div>
        <Transition show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div
                      className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-y-auto"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <div className="sm:flex sm:items-start">
                        <div className="w-full">
                          {addFields ? (
                            <form action="" onSubmit={handlSubmit}>
                              <div className="w-full">
                                <div className="flex justify-between">
                                  <h1 className="text-[#0F172B] text-[16px] font-[700]">
                                    Address
                                  </h1>
                                  <span
                                    onClick={() => setOpen(false)}
                                    className="cursor-pointer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 16 16"
                                      className="w-[15px]"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M13.705 12.468a.896.896 0 0 1 0 1.27.902.902 0 0 1-1.273 0L8.001 9.284l-4.463 4.45a.902.902 0 0 1-1.273 0 .896.896 0 0 1 0-1.269l4.464-4.45-4.465-4.484a.896.896 0 0 1 0-1.27.902.902 0 0 1 1.272 0L8.001 6.75l4.463-4.451a.902.902 0 0 1 1.272 0 .896.896 0 0 1 0 1.27L9.272 8.016l4.433 4.45Z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="w-full">
                                  <label
                                    htmlFor=""
                                    className="text-[#314158] text-[16px] font-[500] mb-2 block "
                                  >
                                    Type
                                  </label>
                                  <div className="relative w-full">
                                    <select
                                      name="type"
                                      className="appearance-none h-[44px] bg-[#F1F5F9] rounded-[8px] w-full px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white text-sm focus:outline-none"
                                    >
                                      <option>Business</option>
                                      <option>Mailing</option>
                                      <option>Other</option>
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
                                <div className="w-full mt-3">
                                  <label
                                    htmlFor=""
                                    className="text-[#314158] text-[16px] font-[500] mb-2 block "
                                  >
                                    Address
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      name="address"
                                      required
                                      className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
                                    />
                                  </div>
                                </div>
                                <div className="w-full mt-3">
                                  <label
                                    htmlFor=""
                                    className="text-[#314158] text-[16px] font-[500] mb-2 block "
                                  >
                                    Address (cont.)
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      name="contAddress"
                                      className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
                                    />
                                  </div>
                                </div>
                                <div className="grid xxl:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr] sm:grid-cols-[1fr] gap-4">
                                  <div className="w-full mt-3">
                                    <label
                                      htmlFor=""
                                      className="text-[#314158] text-[16px] font-[500] mb-2 block "
                                    >
                                      City
                                    </label>
                                    <div>
                                      <input
                                        name="city"
                                        required
                                        type="text"
                                        className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
                                      />
                                    </div>
                                  </div>
                                  <div className="w-full mt-3">
                                    <label
                                      htmlFor=""
                                      className="text-[#314158] text-[16px] font-[500] mb-2 block "
                                    >
                                      State
                                    </label>
                                    <div>
                                      <input
                                        required
                                        name="state"
                                        type="text"
                                        className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="grid xxl:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr] sm:grid-cols-[1fr]  gap-4">
                                  <div className="w-full mt-3">
                                    <label
                                      htmlFor=""
                                      required
                                      className="text-[#314158] text-[16px] font-[500] mb-2 block "
                                    >
                                      Postal Code
                                    </label>
                                    <div>
                                      <input
                                        type="number"
                                        name="postalCode"
                                        required
                                        className="h-[44px] w-full px-3 bg-[#F1F5F9] rounded-[8px] text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[#d9dde1]"
                                      />
                                    </div>
                                  </div>
                                  <div className="w-full mt-3">
                                    <label
                                      htmlFor=""
                                      className="text-[#314158] text-[16px] font-[500] mb-2 block "
                                    >
                                      Country
                                    </label>
                                    <div className="reactSelectSetting w-full">
                                      <Select
                                        name="country"
                                        options={options}
                                        styles={{
                                          menuPortal: (base) => ({
                                            ...base,
                                            zIndex: 9999,
                                          }),
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full mt-5 ">
                                  <div className="flex items-center w-full gap-3">
                                    <button
                                      onClick={() => setAddFields(false)}
                                      className="flex items-center justify-center text-center h-[38px] w-[50%] gap-2 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[60px] text-[#62748E] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#e5e5e5] "
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      type="submit"
                                      // onClick={addContent}
                                      className="flex items-center justify-center text-center h-[38px] w-[50%] gap-2 bg-[#2B7FFF] border border-[#8EC5FF] rounded-[60px] text-[#fff] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#2873e6] "
                                    >
                                      Save
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <>
                              <div>
                                {addressData.map((ele, index) => (
                                  <div
                                    className="mt-3 flex items-center justify-between"
                                    key={index}
                                  >
                                    <div>
                                      <span className="inline-flex items-center rounded-[25px] bg-[#F8FAFC] px-4 py-1 text-[14px] font-[400] border text-[#90A1B9] border-solid border-[#90A1B9] ">
                                        {ele.type}
                                      </span>
                                      <p className="text-[#45556C] text-[14px] font-[400] mt-2">
                                        {ele.address}
                                      </p>
                                      <p className="text-[#45556C] text-[14px] font-[400]">
                                        {ele.contAddress}
                                      </p>
                                      <p className="text-[#45556C] text-[14px] font-[400]">
                                        <span>{ele.city}</span>,{" "}
                                        <span>{ele.state}</span>{" "}
                                        <span>{ele.postalCode}</span>
                                      </p>
                                      <p className="text-[#45556C] text-[14px] font-[400]">
                                        {ele.country}
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Tooltip text="Edit" position="top">
                                        <span
                                          className="cursor-pointer"
                                          onClick={() => setAddFields(true)}
                                        >
                                          <svg
                                            className="w-[20px]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill="#90A1B9"
                                              d="M13.46 1.513a1.745 1.745 0 0 0-2.473 0l-8.754 8.754c-.234.234-.397.53-.47.853l-.754 3.358c-.056.251.16.522.427.522a.44.44 0 0 0 .088-.009s2.313-.49 3.357-.736c.316-.074.598-.233.828-.462L14.49 5.01a1.747 1.747 0 0 0-.002-2.472L13.46 1.513ZM4.78 12.864a.408.408 0 0 1-.2.113c-.497.117-1.298.293-1.988.443l.453-2.012a.437.437 0 0 1 .117-.214L9.776 4.58l1.644 1.644-6.641 6.64Z"
                                            ></path>
                                          </svg>
                                        </span>
                                      </Tooltip>
                                      <Tooltip text="Delete" position="top">
                                        <span
                                          className="cursor-pointer"
                                          onClick={() => handleDelete(index)}
                                        >
                                          <svg
                                            className="w-[20px]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill="#90A1B9"
                                              d="M13.813 3.188H11.56l-.93-1.552C10.37 1.24 9.968 1 9.51 1H6.74c-.459 0-.886.241-1.12.636l-.93 1.552H2.437A.436.436 0 0 0 2 3.624v.438c0 .243.195.437.438.437h.437v8.75c0 .967.783 1.75 1.75 1.75h7a1.75 1.75 0 0 0 1.75-1.75V4.5h.438a.435.435 0 0 0 .437-.438v-.437a.436.436 0 0 0-.438-.438ZM6.7 2.39a.162.162 0 0 1 .14-.079h2.57a.16.16 0 0 1 .14.08l.478.796H6.222L6.7 2.39Zm4.925 11.296h-7a.438.438 0 0 1-.438-.437V4.5h7.875v8.75c0 .24-.196.438-.437.438Zm-3.5-1.312a.437.437 0 0 0 .438-.438V6.25a.437.437 0 1 0-.876 0v5.688c0 .24.197.437.438.437Zm-2.188 0a.44.44 0 0 0 .438-.438V6.25a.437.437 0 1 0-.875 0v5.688c0 .24.197.437.438.437Zm4.375 0a.437.437 0 0 0 .438-.438V6.25a.437.437 0 1 0-.875 0v5.688c0 .24.197.437.438.437Z"
                                            ></path>
                                          </svg>
                                        </span>
                                      </Tooltip>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-5 border-t-[2px] border-[#F1F5F9] pt-5">
                                <button
                                  className="h-[38px] appearance-none bg-[#F1F5F9] hover:bg-gray-100 px-4 py-2 pr-10 dark:bg-gray-800 dark:text-white rounded-[60px] text-sm focus:outline-none"
                                  onClick={() => setAddFields(true)}
                                >
                                  + Add Address
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {/*Address Moda */}

      {/* FILE VIEW MODAL */}
      <div>
        <Transition show={fileOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setFileOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-[80%]">
                    <div
                      className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-y-auto"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-[#f6f6f6] pb-3">
                          <div>
                            <span>Close (Example)</span>
                            <span> {">"} </span>
                            <span>Notes</span>
                          </div>
                          <span
                            className="cursor-pointer"
                            onClick={() => setFileOpen(false)}
                          >
                            X
                          </span>
                        </div>
                        <div className="grid grid-cols-[3fr_1fr]">
                          <div className="bg-[#F8FAFC] p-4 border-r border-[#f6f6f6]">
                            <div className="flex justify-between items-center">
                              <div>
                                <span>Notes</span>
                              </div>
                              <div>
                                <Menu
                                  as="div"
                                  className="relative inline-block text-left"
                                >
                                  <div>
                                    <MenuButton>
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        {" "}
                                        <path
                                          d="M11.9993 12.6663C12.3675 12.6663 12.666 12.3679 12.666 11.9997C12.666 11.6315 12.3675 11.333 11.9993 11.333C11.6312 11.333 11.3327 11.6315 11.3327 11.9997C11.3327 12.3679 11.6312 12.6663 11.9993 12.6663Z"
                                          stroke="#90A1B9"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />{" "}
                                        <path
                                          d="M16.666 12.6663C17.0342 12.6663 17.3327 12.3679 17.3327 11.9997C17.3327 11.6315 17.0342 11.333 16.666 11.333C16.2978 11.333 15.9993 11.6315 15.9993 11.9997C15.9993 12.3679 16.2978 12.6663 16.666 12.6663Z"
                                          stroke="#90A1B9"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />{" "}
                                        <path
                                          d="M7.33268 12.6663C7.70087 12.6663 7.99935 12.3679 7.99935 11.9997C7.99935 11.6315 7.70087 11.333 7.33268 11.333C6.96449 11.333 6.66602 11.6315 6.66602 11.9997C6.66602 12.3679 6.96449 12.6663 7.33268 12.6663Z"
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
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                  >
                                    <div className="py-1">
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
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="bg-[#fff] w-[80%] p-4 rounded-[6px]">
                                <div className="flex items-center gap-3">
                                  <div className="w-[25px] h-[25px] bg-[black] rounded-[50%]"></div>
                                  <p>Jun 23</p>
                                  <span className="block w-[4px] h-[4px] rounded-[50%] bg-[#000]"></span>
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 16 16"
                                      className="w-[20px] h-[20px]"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M13.46 1.513a1.745 1.745 0 0 0-2.473 0l-8.754 8.754c-.234.234-.397.53-.47.853l-.754 3.358c-.056.251.16.522.427.522a.44.44 0 0 0 .088-.009s2.313-.49 3.357-.736c.316-.074.598-.233.828-.462L14.49 5.01a1.747 1.747 0 0 0-.002-2.472L13.46 1.513ZM4.78 12.864a.408.408 0 0 1-.2.113c-.497.117-1.298.293-1.988.443l.453-2.012a.437.437 0 0 1 .117-.214L9.776 4.58l1.644 1.644-6.641 6.64Z"
                                      ></path>
                                    </svg>
                                  </span>
                                </div>
                                <div>
                                  <h1>Mobile Apps</h1>
                                  <p>
                                    Make sure to download our iOS and Android
                                    apps. They give you quick access to the most
                                    important features, while on the go:
                                  </p>
                                  <ul>
                                    <li className="list-disc ml-4">
                                      Email, SMS, and Calling
                                    </li>
                                    <li className="list-disc ml-4">Inbox</li>
                                    <li className="list-disc ml-4">
                                      Leads and Contacts
                                    </li>
                                    <li className="list-disc ml-4">
                                      Lead and Opportunity Management
                                    </li>
                                    <li className="list-disc ml-4">
                                      Reporting and Smart Views
                                    </li>
                                  </ul>
                                  <div>
                                    Attachments <span>1.95 MB</span>{" "}
                                  </div>
                                  <div className="mt-3">
                                    <PhotoProvider>
                                      <div className="foo flex gap-3">
                                        {images.map((item, index) => (
                                          <PhotoView key={index} src={item.url}>
                                            <img
                                              src={item.url}
                                              alt=""
                                              className="w-[100px] h-[50px] object-cover  cursor-pointer rounded-[6px]"
                                            />
                                          </PhotoView>
                                        ))}
                                      </div>
                                    </PhotoProvider>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="">0 comments</div>
                            <div className="mt-4 grid grid-cols-[15%_85%] items-center">
                              <div className="w-[30px] h-[30px] bg-black rounded-[50%]"></div>
                              <textarea className="min-h-[40px] resize-none w-full px-3 hover:bg-[#F1F5F9] rounded-[8px] border border-[#d9dde1] text-[#202020] text-[16px] font-500 focus-visible:outline-[#d9dde1] focus-visible:text-[#90A1B9]"></textarea>
                            </div>
                            <div className="mt-3 flex justify-end">
                              <button className="bg-[#e3e3e3] px-2 py-1 rounded-md">
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {/* FILE VIEW MODAL  END*/}

      {/* Call VIEW MODAL */}
      <div>
        <Transition show={callOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setCallOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-[50%]">
                    <div
                      className="bg-white overflow-y-auto"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <div className="px-4 py-4 flex justify-between items-center">
                        <h1>Add a Personal Phone Number</h1>
                        <span>X</span>
                      </div>
                      <div className="px-4 py-4 bg-[#f8fafc]">
                        <h1 className="color-[#0F172B] font-[600] text-[16px]">
                          To make calls in Close you need to have a phone
                          number.
                        </h1>
                        <p className="text-[#62748E] text-[14px] font-[400]">
                          You can rent one through us or bring your own.
                        </p>
                      </div>
                      <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 px-4 my-3">
                        <div
                          onClick={(e) => setPhoneTabs("newNumber")}
                          className={`border   ${phoneTabs === "newNumber"
                            ? "bg-[#eef3ff] border-[#6da2ec]"
                            : "border-[#62748E]"
                            } flex flex-col items-center justify-center min-h-[138px] cursor-pointer rounded-[6px] p-2`}
                        >
                          <h1 className="color-[#0F172B] font-[600] text-[16px]">
                            New Number
                          </h1>
                          <p className="text-[#62748E] text-[14px] font-[400] text-center">
                            We register a new number for you.
                          </p>
                        </div>
                        <div
                          onClick={(e) => setPhoneTabs("externalNumber")}
                          className={`border ${phoneTabs === "externalNumber"
                            ? "bg-[#eef3ff] border-[#6da2ec]"
                            : "border-[#62748E]"
                            } flex flex-col items-center justify-center min-h-[138px] cursor-pointer rounded-[6px] p-2`}
                        >
                          <h1 className="color-[#0F172B] font-[600] text-[16px]">
                            External Number
                          </h1>
                          <p className="text-[#62748E] text-[14px] font-[400] text-center">
                            Add any phone number for outgoing calls.
                          </p>
                        </div>
                        <div
                          onClick={(e) => setPhoneTabs("portingByc")}
                          className={`border ${phoneTabs === "portingByc"
                            ? "bg-[#eef3ff] border-[#6da2ec]"
                            : "border-[#62748E]"
                            } flex flex-col items-center justify-center min-h-[138px] cursor-pointer rounded-[6px] p-2`}
                        >
                          <h1 className="color-[#0F172B] font-[600] text-[16px]">
                            Porting & BYOC
                          </h1>
                          <p className="text-[#62748E] text-[14px] font-[400] text-center">
                            Number porting or advanced VoIP setup.
                          </p>
                        </div>
                      </div>

                      <div className="px-4">
                        {phoneTabs === "newNumber" ? (
                          <>New Number ayega</>
                        ) : phoneTabs === "externalNumber" ? (
                          <>external Number</>
                        ) : (
                          <>Csss</>
                        )}
                      </div>
                    </div>
                  </DialogPanel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {/* FILE VIEW MODAL  END*/}

      <div className="border-b-[2px] border-[#F1F5F9] pb-5 grid xxl:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr] sm:grid-cols-[1fr] grid-cols-[1fr] gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[48px] h-[48px] rounded-[50%] border border-[#CAD5E2] bg-[#F1F5F9] flex items-center justify-center text-[#45556C] text-[14px] font-[600]">
            LN
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-[700] text-[18px] text-[#0F172B]">
                Lead Name
              </h1>
              <span>hel</span>
            </div>
            <p className="text-[#90A1B9] text-[12px] font-[500] ">
              Last Updated <span>01/12/25 (10:00 am)</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <div>
            <Tooltip text="Fint Match Finder" position="bottom">
              <button className="h-[38px] flex items-center gap-2 bg-[#2B7FFF] border border-[#8EC5FF] rounded-[60px] text-[#fff] text-[12px] font-[700] leading-5 px-4 py-3 text-center cursor-pointer select-none hover:bg-[#2873e6] ">
                <span>
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
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </svg>
                </span>
                Match Funder
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip text="This is a tooltip!" position="bottome">
              <button className="h-[38px] w-[38px] flex items-center justify-center bg-[#F8FAFC] border border-[#F1F5F9] rounded-[50%] text-gray-900 text-sm font-semibold leading-5  text-center shadow-sm cursor-pointer select-none hover:bg-gray-50 focus:outline focus:outline-2 focus:outline-gray-200 focus:outline-offset-2 focus-visible:shadow-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <g clip-path="url(#clip0_450_7807)">
                    {" "}
                    <path
                      d="M8.44185 1.16943L0.228516 14.7929C6.97518 14.8665 6.40025 15.3241 9.78478 9.44143L8.53572 7.36997L5.82105 11.8958C5.45198 12.5294 4.68932 12.7844 3.98318 12.7214L8.44398 5.3241L14.1538 14.7929H15.773V13.2846C15.773 13.2846 9.51385 2.9401 8.44185 1.16943Z"
                      fill="#62748E"
                    />{" "}
                    <path
                      d="M13.4157 3.91895H11.2109L12.3533 5.81441L13.4147 3.91895H13.4157Z"
                      fill="#62748E"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_450_7807">
                      {" "}
                      <rect width="16" height="16" fill="white" />{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </svg>
              </button>
            </Tooltip>
          </div>
          <div className="h-[38px] flex overflow-hidden bg-[#F8FAFC] border divide-x rounded-[40px] rtl:flex-row-reverse ">
            <button className="flex items-center gap-2 px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6  hover:bg-gray-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_450_7817)">
                  {" "}
                  <path
                    d="M9.36709 4.00016C10.0182 4.12721 10.6167 4.44567 11.0858 4.91479C11.5549 5.38391 11.8734 5.98234 12.0004 6.6335M9.36709 1.3335C10.7199 1.48379 11.9815 2.08961 12.9446 3.0515C13.9077 4.01339 14.5151 5.27417 14.6671 6.62683M6.81841 9.24221C6.01736 8.44116 5.38483 7.5354 4.92084 6.56898C4.88092 6.48586 4.86097 6.44429 4.84564 6.3917C4.79115 6.2048 4.83029 5.97529 4.94363 5.817C4.97552 5.77246 5.01363 5.73436 5.08984 5.65815C5.32291 5.42508 5.43944 5.30854 5.51563 5.19136C5.80296 4.74943 5.80296 4.17971 5.51563 3.73778C5.43944 3.6206 5.32291 3.50406 5.08984 3.27099L4.95992 3.14108C4.60563 2.78678 4.42848 2.60964 4.23823 2.51341C3.85985 2.32203 3.41301 2.32203 3.03464 2.51341C2.84438 2.60964 2.66723 2.78678 2.31294 3.14108L2.20785 3.24617C1.85477 3.59925 1.67823 3.77579 1.54339 4.01581C1.39378 4.28215 1.28621 4.69581 1.28712 5.00129C1.28793 5.27659 1.34134 5.46474 1.44814 5.84104C2.02212 7.8633 3.1051 9.77154 4.69709 11.3635C6.28908 12.9555 8.19732 14.0385 10.2196 14.6125C10.5959 14.7193 10.784 14.7727 11.0593 14.7735C11.3648 14.7744 11.7785 14.6668 12.0448 14.5172C12.2848 14.3824 12.4614 14.2059 12.8145 13.8528L12.9195 13.7477C13.2738 13.3934 13.451 13.2162 13.5472 13.026C13.7386 12.6476 13.7386 12.2008 13.5472 11.8224C13.451 11.6321 13.2738 11.455 12.9195 11.1007L12.7896 10.9708C12.5566 10.7377 12.44 10.6212 12.3228 10.545C11.8809 10.2577 11.3112 10.2577 10.8693 10.545C10.7521 10.6212 10.6355 10.7377 10.4025 10.9708C10.3263 11.047 10.2882 11.0851 10.2436 11.117C10.0853 11.2303 9.85582 11.2695 9.66892 11.215C9.61633 11.1997 9.57476 11.1797 9.49164 11.1398C8.52523 10.6758 7.61946 10.0433 6.81841 9.24221Z"
                    stroke="#62748E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_450_7817">
                    {" "}
                    <rect width="16" height="16" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
              <span className="text-[12px] text-[#62748E] font-[500]">
                Call
              </span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6  hover:bg-gray-100">
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
                  stroke="#62748E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>
              <span className="text-[12px] text-[#62748E] font-[500]">SMS</span>
            </button>
            <button onClick={() => {
              setEmailTemplate(true);
              setRightActiveTab('Activity');
            }}
              className="flex items-center gap-2 px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6  hover:bg-gray-100">
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
                  stroke="#62748E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>
              <span className="text-[12px] text-[#62748E] font-[500]">
                Email
              </span>
            </button>
          </div>
          <div>
            <Tooltip text="Change lead Status" position="bottom">
              <div className="relative w-full">
                <select className="h-[38px] appearance-none bg-[#F1F5F9] hover:bg-gray-100 w-full px-4 py-2 pr-10 rounded-[60px] text-sm focus:outline-none">
                  <option className="border border-[red] rounded-[12px]">
                    Lead Status
                  </option>
                  <option>Status 01</option>
                  <option>Status 02</option>
                  <option>Status 03</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="w-4 h-4 "
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
            </Tooltip>
          </div>
        </div>
      </div >
      <div className="grid xxl:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_3fr]">
        <div>
          {/* HERE */}
          <div className="flex space-x-4 border-b dark:border-gray-700 h-[54px]">
            {["Details", "Files"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm ${activeTab === tab
                  ? "border-b-2 border-[#155DFC] text-[#155DFC]"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                <span className={`bg-[#F1F5F9] rounded-[4px] h-[18px] w-[19px] text-[#45556C] text-[10px]  ${tab.charAt(0).toUpperCase() + tab.slice(1) === 'Files' ? 'inline-block ml-1' : 'hidden'}`}>
                  {filesData.length}
                </span>
              </button>
            ))}
          </div>

          {activeTab === "Details" && (
            <div className="max-w-2xl mx-auto bg-white pr-3">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#F1F5F9] mt-5 rounded-[6px] "
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full rounded-[6px] rounded-bl-[0] rounded-br-[0] flex items-center bg-[#F1F5F9] justify-between py-3 px-4 text-left text-[#020618] text-[14px] font-medium hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.title}</span>
                      {item.title === "Task" ? (
                        <span
                          onClick={addTaskBtn}
                          className="w-[20px] h-[20px] rounded-[50%] flex items-center justify-center hover:bg-[#d9d9d9]"
                        >
                          +
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 rounded-[50%] hover:bg-[#d9d9d9] ${openIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {/* {openIndex === index && (
                    <div className="px-5 py-4 text-gray-600">
                      {item.content}
                    </div>
                  )} */}
                  <div
                    className={`px-5 overflow-hidden transition-all duration-300 text-gray-600 ${openIndex === index
                      ? "min-h-[75px] py-4"
                      : "max-h-0 py-0"
                      }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Files" && (
            <div className="pr-3">
              <div className="flex gap-3 items-center py-2">
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
                      className="block w-full pl-10 pr-3 py-2 dark:border-gray-600 rounded-[26px] bg-[#F8FAFC] dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent dark:text-white"
                      placeholder="Search by activity"
                    />
                  </div>
                </div>
                <Tooltip text="All Types" position="bottom">
                  {/* <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      className="w-[20px] h-[20px]"
                    >
                      <path
                        fill="#777"
                        fill-rule="evenodd"
                        d="M4.893 1a.612.612 0 0 0-.613.613v11.024c0 .339.274.613.613.613h7.962a.612.612 0 0 0 .612-.613V4.675L9.793 1h-4.9Z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#000"
                        fill-opacity=".2"
                        d="m9.793 1 3.675 3.675H10.71a.919.919 0 0 1-.918-.919V1Z"
                      ></path>
                      <path
                        fill="#C6C6C6"
                        fill-rule="evenodd"
                        d="M3.143 2.75a.612.612 0 0 0-.613.612v11.025c0 .339.274.613.613.613h7.962a.612.612 0 0 0 .612-.613V6.425L8.043 2.75h-4.9Z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill="#000"
                        fill-opacity=".2"
                        d="m8.043 2.75 3.675 3.675H8.96a.919.919 0 0 1-.918-.919V2.75Z"
                      ></path>
                    </svg>
                  </div> */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 16"
                          className="w-[20px] h-[20px]"
                        >
                          <path
                            fill="#777"
                            fill-rule="evenodd"
                            d="M4.893 1a.612.612 0 0 0-.613.613v11.024c0 .339.274.613.613.613h7.962a.612.612 0 0 0 .612-.613V4.675L9.793 1h-4.9Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#000"
                            fill-opacity=".2"
                            d="m9.793 1 3.675 3.675H10.71a.919.919 0 0 1-.918-.919V1Z"
                          ></path>
                          <path
                            fill="#C6C6C6"
                            fill-rule="evenodd"
                            d="M3.143 2.75a.612.612 0 0 0-.613.612v11.025c0 .339.274.613.613.613h7.962a.612.612 0 0 0 .612-.613V6.425L8.043 2.75h-4.9Z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            fill="#000"
                            fill-opacity=".2"
                            d="m8.043 2.75 3.675 3.675H8.96a.919.919 0 0 1-.918-.919V2.75Z"
                          ></path>
                        </svg>
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            All types
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Images
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            PDFs
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Documents
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Spreadsheets & CSVs
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Slides
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Video
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Audio
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Compressed files
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </Tooltip>
                <Tooltip text="Filter" position="bottom">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 16"
                          className="w-[20px] h-[20px]"
                        >
                          <path
                            fill="currentColor"
                            d="M10 13.5H8.667c-.368 0-.667.336-.667.75s.3.75.667.75H10c.368 0 .642-.336.642-.75s-.275-.75-.642-.75Zm1.753-4H8.667C8.3 9.5 8 9.838 8 10.25s.3.75.667.75h3.086c.368 0 .666-.336.666-.75s-.275-.75-.666-.75Zm1.777-4H8.668C8.3 5.5 8 5.838 8 6.25s.3.75.667.75h4.864c.368 0 .666-.336.666-.75s-.275-.75-.666-.75Zm1.778-4H8.667C8.3 1.5 8 1.836 8 2.25s.3.75.667.75h6.641c.368 0 .667-.336.667-.75s-.275-.75-.667-.75Zm-9.575 8.972-1.51 1.869V1.75c0-.415-.298-.751-.667-.751-.37 0-.667.336-.667.75V12.34l-1.51-1.84a.631.631 0 0 0-.49-.241.624.624 0 0 0-.452.2.818.818 0 0 0-.037 1.06l2.64 3.251a.636.636 0 0 0 .98 0l2.641-3.253a.818.818 0 0 0-.037-1.06c-.222-.286-.644-.264-.892.014Z"
                          ></path>
                        </svg>
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            File name (A to Z)
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            File name (Z to A)
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Latest activity (old to New)
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            Latest activity (New to Old)
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            File size (Small to Large)
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          >
                            File size (Large to Small)
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                </Tooltip>
                <Tooltip text="Upload File" position="bottom">
                  <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      className="w-[20px] h-[20px]"
                    >
                      <path
                        fill="currentColor"
                        d="M7.344 10.406v-1.75h-1.75A.655.655 0 0 1 4.937 8c0-.364.293-.656.657-.656h1.75v-1.75c0-.364.292-.657.656-.657.364 0 .656.293.656.657v1.75h1.75c.364 0 .656.292.656.656a.655.655 0 0 1-.656.656h-1.75v1.75a.655.655 0 0 1-.656.656.655.655 0 0 1-.656-.656ZM15 8a7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 7 7ZM8 2.312A5.687 5.687 0 0 0 2.312 8 5.687 5.687 0 0 0 8 13.688 5.687 5.687 0 0 0 13.688 8 5.687 5.687 0 0 0 8 2.312Z"
                      ></path>
                    </svg>
                  </div>
                </Tooltip>
              </div>
              <div className="mt-3 flex flex-col gap-3">


                {
                  filesData.map((ele, index) => (
                    <div key={index} className="flex justify-between items-center border border-[#F1F5F9] p-2 rounded-[8px]">
                      <div className="flex items-center gap-3">
                        <div className="">
                          <svg
                            width="24"
                            height="32"
                            viewBox="0 0 24 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <g clipPath="url(#clip0_649_11443)">
                              {" "}
                              <path
                                d="M0 8C0 3.58172 3.58172 0 8 0H13.6L24 10.4V24C24 28.4183 20.4183 32 16 32H8C3.58172 32 0 28.4183 0 24V8Z"
                                fill="url(#paint0_linear_649_11443)"
                              />{" "}
                              <path
                                d="M19.5996 10.4H23.9996L13.5996 0V4.4C13.5996 7.71371 16.2859 10.4 19.5996 10.4Z"
                                fill="#DCE2EB"
                              />{" "}
                              <path
                                d="M8 1H13.1855L23 10.8145V24C23 27.866 19.866 31 16 31H8C4.13401 31 1 27.866 1 24V8C1 4.13401 4.13401 1 8 1Z"
                                stroke="black"
                                strokeOpacity="0.06"
                                strokeWidth="2"
                              />{" "}
                            </g>{" "}
                            <defs>
                              {" "}
                              <linearGradient
                                id="paint0_linear_649_11443"
                                x1="12"
                                y1="0"
                                x2="12"
                                y2="32"
                                gradientUnits="userSpaceOnUse"
                              >
                                {" "}
                                <stop stop-color="#F2F6FC" />{" "}
                                <stop offset="1" stop-color="#EDF1F7" />{" "}
                              </linearGradient>{" "}
                              <clipPath id="clip0_649_11443">
                                {" "}
                                <rect width="24" height="32" fill="white" />{" "}
                              </clipPath>{" "}
                            </defs>{" "}
                          </svg>
                        </div>
                        <div>
                          <p className="">{ele.fname}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-[#90A1B9] font-[400] text-[10px]">
                              {ele.date} ({ele.time} am)
                            </span>
                            <span className="block w-[4px] h-[4px] bg-[#CAD5E2] rounded-[50%]"></span>
                            <span className="text-[#90A1B9] text-[10px] font-[400]">
                              {ele.size}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="mt-2">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    d="M11.9993 12.6663C12.3675 12.6663 12.666 12.3679 12.666 11.9997C12.666 11.6315 12.3675 11.333 11.9993 11.333C11.6312 11.333 11.3327 11.6315 11.3327 11.9997C11.3327 12.3679 11.6312 12.6663 11.9993 12.6663Z"
                                    stroke="#90A1B9"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                  <path
                                    d="M16.666 12.6663C17.0342 12.6663 17.3327 12.3679 17.3327 11.9997C17.3327 11.6315 17.0342 11.333 16.666 11.333C16.2978 11.333 15.9993 11.6315 15.9993 11.9997C15.9993 12.3679 16.2978 12.6663 16.666 12.6663Z"
                                    stroke="#90A1B9"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                  <path
                                    d="M7.33268 12.6663C7.70087 12.6663 7.99935 12.3679 7.99935 11.9997C7.99935 11.6315 7.70087 11.333 7.33268 11.333C6.96449 11.333 6.66602 11.6315 6.66602 11.9997C6.66602 12.3679 6.96449 12.6663 7.33268 12.6663Z"
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
                              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                              <div className="py-1">
                                <MenuItem>
                                  <a
                                    href="#"
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
                                    Download
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Copy activity link
                                  </a>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </Menu>
                        </span>
                        <span
                          onClick={() => {
                            setFileOpen(true);
                          }}
                          className="cursor-pointer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              d="M13.3327 11.333H9.33268M10.666 13.9997H9.33268M14.666 8.66634H9.33268M17.3327 10.9997V8.53301C17.3327 7.4129 17.3327 6.85285 17.1147 6.42503C16.9229 6.0487 16.617 5.74274 16.2407 5.55099C15.8128 5.33301 15.2528 5.33301 14.1327 5.33301H9.86602C8.74591 5.33301 8.18586 5.33301 7.75803 5.55099C7.38171 5.74274 7.07575 6.0487 6.884 6.42503C6.66602 6.85285 6.66602 7.4129 6.66602 8.53301V15.4663C6.66602 16.5864 6.66602 17.1465 6.884 17.5743C7.07575 17.9506 7.38171 18.2566 7.75803 18.4484C8.18586 18.6663 8.74591 18.6663 9.86602 18.6663H11.666M18.666 18.6663L17.666 17.6663M18.3327 15.9997C18.3327 17.2883 17.288 18.333 15.9993 18.333C14.7107 18.333 13.666 17.2883 13.666 15.9997C13.666 14.711 14.7107 13.6663 15.9993 13.6663C17.288 13.6663 18.3327 14.711 18.3327 15.9997Z"
                              stroke="#90A1B9"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />{" "}
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
          )}

          {/* HERE END */}
        </div>
        {/* border-l dar:border-grey-700 */}
        <div className="border-l border-[#F1F5F9]">
          <div className="pl-3 flex space-x-4 border-b dark:border-gray-700 h-[54px]">
            {["Summary", "Activity", "Details"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm ${rightactiveTab === tab
                  ? "border-b-2 border-[#155DFC] text-[#155DFC]"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                onClick={() => setRightActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {rightactiveTab === "Summary" && (
            <div>
              <div className="mt-5 bg-[#F8FAFC] ml-[12px] p-3 rounded-md">
                <div className="flex items-center justify-between border border-[#BEDBFF] aiBackground rounded-[8px] p-3">
                  <p className="text-[#193CB8] text-[16px] font-500">
                    Here's a smart summary generated from your recent activity
                    and engagement with this lead.
                  </p>
                  <button className="flex items-center gap-2 px-2 rounded-[60px] h-[38px] bg-[#2B7FFF] border-2 border-[#BEDBFF] text-[12px] text-[#fff] font-[700] transition-all-[0.2s] hover:bg-[#2773e7] ">
                    Regenerate
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <g clipPath="url(#clip0_703_6504)">
                          {" "}
                          <path
                            d="M4.33398 8.66634L4.85696 9.71229C5.03395 10.0663 5.12245 10.2433 5.24067 10.3966C5.34558 10.5327 5.46759 10.6547 5.60369 10.7597C5.75706 10.8779 5.93405 10.9664 6.28804 11.1434L7.33398 11.6663L6.28804 12.1893C5.93405 12.3663 5.75706 12.4548 5.60369 12.573C5.46759 12.6779 5.34558 12.7999 5.24067 12.936C5.12245 13.0894 5.03395 13.2664 4.85696 13.6204L4.33398 14.6663L3.81101 13.6204C3.63402 13.2664 3.54552 13.0894 3.4273 12.936C3.32239 12.7999 3.20038 12.6779 3.06428 12.573C2.91091 12.4548 2.73391 12.3663 2.37993 12.1893L1.33398 11.6663L2.37993 11.1434C2.73391 10.9664 2.91091 10.8779 3.06428 10.7597C3.20038 10.6547 3.32239 10.5327 3.4273 10.3966C3.54552 10.2433 3.63402 10.0663 3.81101 9.71229L4.33398 8.66634Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M10.0007 1.33301L10.7864 3.37595C10.9744 3.86477 11.0684 4.10918 11.2146 4.31477C11.3442 4.49698 11.5033 4.65617 11.6856 4.78573C11.8911 4.93191 12.1356 5.02592 12.6244 5.21393L14.6673 5.99967L12.6244 6.78542C12.1356 6.97343 11.8911 7.06743 11.6856 7.21362C11.5033 7.34318 11.3442 7.50237 11.2146 7.68458C11.0684 7.89017 10.9744 8.13458 10.7864 8.6234L10.0007 10.6663L9.2149 8.6234C9.0269 8.13458 8.93289 7.89017 8.78671 7.68458C8.65715 7.50237 8.49795 7.34318 8.31575 7.21362C8.11016 7.06743 7.86575 6.97343 7.37693 6.78542L5.33398 5.99967L7.37693 5.21393C7.86575 5.02592 8.11016 4.93191 8.31575 4.78573C8.49795 4.65617 8.65715 4.49698 8.78671 4.31477C8.93289 4.10918 9.0269 3.86477 9.2149 3.37595L10.0007 1.33301Z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </g>{" "}
                        <defs>
                          {" "}
                          <clipPath id="clip0_703_6504">
                            {" "}
                            <rect width="16" height="16" fill="white" />{" "}
                          </clipPath>{" "}
                        </defs>{" "}
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="mt-3 ml-3">
                  <h1 className="text-[#0F172B] text-[24px] font-[700]">
                    Lead Summary
                  </h1>
                  <div className="ml-3 mt-2">
                    <p className="text-[#45556C] text-[18px/28px] font-[400]">
                      This summary provides an overview of your ongoing
                      engagement with John Doe to help you quickly assess the
                      lead's status and next steps.
                    </p>
                    <p className="text-[#45556C] text-[18px]/[28px] font-[400] my-3">
                      Lead Activity Overview:
                    </p>
                    <ul className="list-disc ml-4">
                      <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                        Last contacted via email on May 17, 2025, regarding the
                        Premium Subscription Package.
                      </li>
                      <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                        Email was opened within 2 hours, and the lead clicked on
                        the pricing link.
                      </li>
                      <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                        On May 19, the lead visited your website, spending:
                      </li>
                      <li className="list-none">
                        <ul className="list-disc ml-4">
                          <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                            3 minutes on the Features page
                          </li>
                          <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                            2 minutes on the Testimonials page
                          </li>
                        </ul>
                      </li>
                      <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                        A follow-up call is scheduled for May 23 at 3:00 PM.
                      </li>
                      <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                        Notes from the last interaction:
                      </li>
                      <li className="list-none">
                        <ul className="list-disc ml-4">
                          <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                            Lead expressed interest in a monthly payment plan.
                          </li>
                          <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                            Asked for case studies or client success stories.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-3 text-[#45556C] text-[18px]/[28px] font-[400]">
                    Engagement Score: High
                  </p>
                  <p>
                    The lead is actively engaging with your content and has
                    shown clear buying signals.
                  </p>
                  <p className="my-2 text-[#45556C] text-[18px]/[28px] font-[400]">
                    Suggested Next Steps:
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                      Prepare tailored case studies for the follow-up call.
                    </li>
                    <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                      Be ready to discuss flexible pricing options.
                    </li>
                    <li className="text-[#45556C] text-[18px]/[28px] font-[400]">
                      Consider sending a reminder email 24 hours before the
                      scheduled call
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {rightactiveTab === "Activity" && (
            <div>
              <div className="ml-[12px]">
                <div className="flex justify-end items-center mt-3">
                  <div class="">
                    <div className="relative border-r border-[#F1F5F9] pr-3 mr-3">
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
                        className="block pl-10 pr-3 py-2 dark:border-gray-600 rounded-[26px] bg-[#F8FAFC] dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent dark:text-white"
                        placeholder="Search by activity"
                      />
                    </div>
                  </div>
                  <div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-[#F8FAFC] rounded-[60px] border-[#F1F5F9] px-3 py-2 text-sm font-semibold text-[#62748E] shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                          All Activities
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#62748E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </MenuButton>
                      </div>

                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <div className="py-1">
                          <MenuItem>
                            <div className="mx-4">Activities</div>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-[#F8FAFC]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M4 8H12M2 4H14M6 12H10"
                          stroke="#62748E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-[#F8FAFC]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M7.52242 2.30205C7.67608 1.99076 7.7529 1.83511 7.8572 1.78538C7.94795 1.74211 8.05338 1.74211 8.14412 1.78538C8.24842 1.83511 8.32525 1.99076 8.47891 2.30205L9.93669 5.25536C9.98205 5.34726 10.0047 5.39321 10.0379 5.42889C10.0672 5.46048 10.1024 5.48607 10.1415 5.50425C10.1857 5.52479 10.2364 5.5322 10.3378 5.54702L13.5986 6.02364C13.942 6.07383 14.1137 6.09893 14.1932 6.1828C14.2623 6.25577 14.2948 6.35603 14.2817 6.45569C14.2665 6.57022 14.1422 6.69129 13.8936 6.93342L11.5349 9.23078C11.4614 9.3024 11.4247 9.33821 11.4009 9.38081C11.3799 9.41854 11.3665 9.45998 11.3613 9.50284C11.3554 9.55125 11.3641 9.60183 11.3814 9.703L11.938 12.9479C11.9967 13.2902 12.026 13.4613 11.9708 13.5628C11.9229 13.6512 11.8376 13.7132 11.7387 13.7315C11.6251 13.7525 11.4714 13.6717 11.1641 13.5101L8.2489 11.9771C8.15807 11.9293 8.11266 11.9054 8.06481 11.896C8.02245 11.8877 7.97888 11.8877 7.93651 11.896C7.88867 11.9054 7.84325 11.9293 7.75242 11.9771L4.83727 13.5101C4.52993 13.6717 4.37626 13.7525 4.26263 13.7315C4.16377 13.7132 4.07847 13.6512 4.03048 13.5628C3.97532 13.4613 4.00467 13.2902 4.06337 12.9479L4.61991 9.703C4.63726 9.60183 4.64593 9.55125 4.64006 9.50284C4.63487 9.45998 4.62139 9.41854 4.60039 9.38081C4.57667 9.33821 4.5399 9.3024 4.46637 9.23078L2.10769 6.93342C1.85909 6.69129 1.73479 6.57022 1.71967 6.45569C1.70651 6.35603 1.73902 6.25577 1.80815 6.1828C1.88761 6.09893 2.0593 6.07383 2.40268 6.02364L5.66353 5.54702C5.76493 5.5322 5.81564 5.52479 5.8598 5.50425C5.89889 5.48607 5.93409 5.46048 5.96344 5.42889C5.99659 5.39321 6.01927 5.34726 6.06463 5.25536L7.52242 2.30205Z"
                          stroke="#62748E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-[#F8FAFC]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M8.00065 3.33301V12.6663M3.33398 7.99967H12.6673"
                          stroke="#62748E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 bg-[#F8FAFC] ml-[12px] p-3 rounded-md">
                <div className={`${emailTemplate ? 'block' : 'hidden'} pb-[23px] group grid grid-cols-[50px_1fr] items-start relative min-h-[75px] after:content-[''] after:w-[2px] after:h-[100%] after:bg-[#e2e8f0] after:ml-[19px] after:absolute after:bottom-0 after:translate-y-[4%]`}>
                  <div className="z-[1]">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#FEF9C2" /> <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#FFDF20" /> <path d="M10 15L18.1649 20.7154C18.8261 21.1783 19.1567 21.4097 19.5163 21.4993C19.8339 21.5785 20.1661 21.5785 20.4837 21.4993C20.8433 21.4097 21.1739 21.1783 21.8351 20.7154L30 15M14.8 28H25.2C26.8802 28 27.7202 28 28.362 27.673C28.9265 27.3854 29.3854 26.9265 29.673 26.362C30 25.7202 30 24.8802 30 23.2V16.8C30 15.1198 30 14.2798 29.673 13.638C29.3854 13.0735 28.9265 12.6146 28.362 12.327C27.7202 12 26.8802 12 25.2 12H14.8C13.1198 12 12.2798 12 11.638 12.327C11.0735 12.6146 10.6146 13.0735 10.327 13.638C10 14.2798 10 15.1198 10 16.8V23.2C10 24.8802 10 25.7202 10.327 26.362C10.6146 26.9265 11.0735 27.3854 11.638 27.673C12.2798 28 13.1198 28 14.8 28Z" stroke="#F0B100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                  </div>
                  <div className="bg-[#fff] rounded-[6px] border-2 border-[#F1F5F9]">
                    <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-3 p-2">
                      <div>
                        <p className=" text-[14px] text-[#314158] font-[500] ">
                          <span className="font-[700] mr-2">(no subject)</span>
                        </p>

                      </div>
                      <div className="flex items-center gap-3">
                        <Tooltip text="More" position="top">
                          <div className="hover:bg-[#e2e6ea] rounded-[50%] flex items-center justify-center w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                            <Menu
                              as="span"
                              className="relative inline-block text-left h-[21px]"
                            >
                              <div>
                                <MenuButton className="">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    {" "}
                                    <path
                                      d="M11.9993 12.6663C12.3675 12.6663 12.666 12.3679 12.666 11.9997C12.666 11.6315 12.3675 11.333 11.9993 11.333C11.6312 11.333 11.3327 11.6315 11.3327 11.9997C11.3327 12.3679 11.6312 12.6663 11.9993 12.6663Z"
                                      stroke="#90A1B9"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M16.666 12.6663C17.0342 12.6663 17.3327 12.3679 17.3327 11.9997C17.3327 11.6315 17.0342 11.333 16.666 11.333C16.2978 11.333 15.9993 11.6315 15.9993 11.9997C15.9993 12.3679 16.2978 12.6663 16.666 12.6663Z"
                                      stroke="#90A1B9"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M7.33268 12.6663C7.70087 12.6663 7.99935 12.3679 7.99935 11.9997C7.99935 11.6315 7.70087 11.333 7.33268 11.333C6.96449 11.333 6.66602 11.6315 6.66602 11.9997C6.66602 12.3679 6.96449 12.6663 7.33268 12.6663Z"
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
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                              >
                                <MenuItem className="hover:bg-[#eeeeee]">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Delete
                                  </a>
                                </MenuItem>
                              </MenuItems>
                            </Menu>
                          </div>
                        </Tooltip>
                        <div className="border-l border-[#dcdcdc] pl-3">
                          <Tooltip text="UserName" position="top">
                            <div className="w-[28px] h-[28px] bg-cover bg-position-[center] bg-[url(/images/avatarsetting.png)] rounded-[50%]"></div>
                          </Tooltip>
                        </div>
                        {/* <div>
                          <span>4d ago</span>
                        </div> */}
                      </div>
                    </div>
                    <div className="sender px-2">
                      <span>From: </span>
                      <Link href='' className="text-[#314158] text-[14px] font-500 hover:underline hover:underline-offset-1">Mike Millers mikemiller@gmail.com</Link>
                    </div>
                    <div className='receiver px-2 mt-2'>
                      <span>To: </span>
                      <Link href='' className="text-[#314158] text-[14px] font-500 hover:underline hover:underline-offset-1">hamdan@gmail.com</Link>
                    </div>
                    <div className="emailSelect flex items-center px-2 gap-2 mt-2">
                      <div>To</div>
                      <CreatableSelect
                        isMulti
                        name="productTir"
                        placeholder="Type and press Enter..."
                        options={sendingData}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          control: (base) => ({ ...base, zIndex: 10 }),
                        }}
                        onChange={(newValue) => {
                          console.log('Selected:', newValue);
                        }}
                      />
                      <div className='flex items-center gap-2'><span className="cursor-pointer" onClick={() => setccVal(!ccVal)}>Cc</span><span className="cursor-pointer" onClick={() => setBccVal(!bccVal)}>Bcc</span></div>
                    </div>
                    <div className='mt-2 overflow-hidden'>
                      <input type="text" className='h-[44px] w-full px-3 bg-[transparent] border-[#F1F5F9] border-b border-t text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[transparent]' placeholder="Subject" />
                    </div>
                    <div className={`overflow-hidden ${ccVal ? 'block' : 'hidden'}`}>
                      <input type="text" className='h-[44px] w-full px-3 bg-[transparent] border-[#F1F5F9] border-b border-t text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[transparent]' placeholder="Cc" />
                    </div>
                    <div className={`overflow-hidden ${bccVal ? 'block' : 'hidden'}`}>
                      <input type="text" className='h-[44px] w-full px-3 bg-[transparent] border-[#F1F5F9] border-b border-t text-[#90A1B9] text-[16px] font-500 focus-visible:outline-[transparent]' placeholder="Bcc" />
                    </div>
                    <div className='my-2 overflow-hidden'>
                      <textarea name="" placeholder="Type Here" id="" className='px-2 w-full h-[110px] bg-[#fff] p-2 resize-none focus-visible:outline-[transparent]'></textarea>
                    </div>
                    <div className='flex justify-end gap-2 mb-2'>
                      <button onClick={() => setEmailTemplate(false)} className='flex items-center justify-center text-center h-[38px] gap-2 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[60px] text-[#62748E] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#e5e5e5] '>Cancenl</button>
                      <button className='flex items-center justify-center text-center h-[38px] gap-2 bg-[#2B7FFF] border border-[#8EC5FF] rounded-[60px] text-[#fff] text-[12px] font-[700] leading-5 px-4 py-3 cursor-pointer select-none hover:bg-[#2873e6] '>Send</button>
                    </div>

                  </div>
                </div>

                <div className="grid grid-cols-[50px_1fr] items-start relative min-h-[75px] after:content-[''] after:w-[2px] after:h-[100%] after:bg-[#e2e8f0] after:ml-[19px] after:absolute after:bottom-0 after:translate-y-[4%] ">
                  <div className="z-[1]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="white"
                      />{" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#F1F5F9"
                      />{" "}
                      <path
                        d="M22 15H27.6404C28.0877 15 28.3113 15 28.4421 15.094C28.5562 15.1761 28.6306 15.3024 28.6469 15.442C28.6656 15.602 28.5569 15.7975 28.3397 16.1885L26.9936 18.6115C26.9148 18.7533 26.8755 18.8242 26.86 18.8993C26.8463 18.9657 26.8463 19.0343 26.86 19.1007C26.8755 19.1758 26.9148 19.2467 26.9936 19.3885L28.3397 21.8115C28.5569 22.2025 28.6656 22.398 28.6469 22.558C28.6306 22.6976 28.5562 22.8239 28.4421 22.906C28.3113 23 28.0877 23 27.6404 23H20.6C20.0399 23 19.7599 23 19.546 22.891C19.3578 22.7951 19.2049 22.6422 19.109 22.454C19 22.2401 19 21.9601 19 21.4V19M12 29L12 12M12 19H20.4C20.9601 19 21.2401 19 21.454 18.891C21.6422 18.7951 21.7951 18.6422 21.891 18.454C22 18.2401 22 17.9601 22 17.4V12.6C22 12.0399 22 11.7599 21.891 11.546C21.7951 11.3578 21.6422 11.2049 21.454 11.109C21.2401 11 20.9601 11 20.4 11H13.6C13.0399 11 12.7599 11 12.546 11.109C12.3578 11.2049 12.2049 11.3578 12.109 11.546C12 11.7599 12 12.0399 12 12.6V19Z"
                        stroke="#62748E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>
                  <p className=" text-[14px] text-[#314158] font-[500] mt-2">
                    Lead shared with{" "}
                    <span className="font-[700] mx-2"> 10 Funders</span> via
                    email{" "}
                  </p>
                </div>
                <div className="grid grid-cols-[50px_1fr] items-start relative min-h-[75px] after:content-[''] after:w-[2px] after:h-[100%] after:bg-[#e2e8f0] after:ml-[19px] after:absolute after:bottom-0 after:translate-y-[4%] ">
                  <div className="z-[1]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="white"
                      />{" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#F1F5F9"
                      />{" "}
                      <path
                        d="M22 15H27.6404C28.0877 15 28.3113 15 28.4421 15.094C28.5562 15.1761 28.6306 15.3024 28.6469 15.442C28.6656 15.602 28.5569 15.7975 28.3397 16.1885L26.9936 18.6115C26.9148 18.7533 26.8755 18.8242 26.86 18.8993C26.8463 18.9657 26.8463 19.0343 26.86 19.1007C26.8755 19.1758 26.9148 19.2467 26.9936 19.3885L28.3397 21.8115C28.5569 22.2025 28.6656 22.398 28.6469 22.558C28.6306 22.6976 28.5562 22.8239 28.4421 22.906C28.3113 23 28.0877 23 27.6404 23H20.6C20.0399 23 19.7599 23 19.546 22.891C19.3578 22.7951 19.2049 22.6422 19.109 22.454C19 22.2401 19 21.9601 19 21.4V19M12 29L12 12M12 19H20.4C20.9601 19 21.2401 19 21.454 18.891C21.6422 18.7951 21.7951 18.6422 21.891 18.454C22 18.2401 22 17.9601 22 17.4V12.6C22 12.0399 22 11.7599 21.891 11.546C21.7951 11.3578 21.6422 11.2049 21.454 11.109C21.2401 11 20.9601 11 20.4 11H13.6C13.0399 11 12.7599 11 12.546 11.109C12.3578 11.2049 12.2049 11.3578 12.109 11.546C12 11.7599 12 12.0399 12 12.6V19Z"
                        stroke="#62748E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>
                  <p className=" text-[14px] text-[#314158] font-[500] mt-2">
                    Lead updated by
                    <span className="font-[700] mx-2"> Fariz Elahi</span>
                  </p>
                </div>
                <div className="pb-[23px] group grid grid-cols-[50px_1fr] items-start relative min-h-[75px] after:content-[''] after:w-[2px] after:h-[100%] after:bg-[#e2e8f0] after:ml-[19px] after:absolute after:bottom-0 after:translate-y-[4%] ">
                  <div className="z-[1]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="#DCFCE7"
                      />{" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#7BF1A8"
                      />{" "}
                      <path
                        d="M22.0497 14C23.0264 14.1906 23.924 14.6683 24.6277 15.3719C25.3314 16.0756 25.8091 16.9733 25.9997 17.95M22.0497 10C24.0789 10.2254 25.9713 11.1342 27.4159 12.577C28.8606 14.0198 29.7717 15.911 29.9997 17.94M18.2266 21.8631C17.0251 20.6615 16.0763 19.3028 15.3803 17.8532C15.3204 17.7285 15.2905 17.6662 15.2675 17.5873C15.1858 17.3069 15.2445 16.9627 15.4145 16.7253C15.4623 16.6584 15.5195 16.6013 15.6338 16.487C15.9834 16.1374 16.1582 15.9626 16.2725 15.7868C16.7035 15.1239 16.7035 14.2693 16.2725 13.6064C16.1582 13.4307 15.9834 13.2559 15.6338 12.9062L15.4389 12.7114C14.9075 12.1799 14.6417 11.9142 14.3564 11.7699C13.7888 11.4828 13.1185 11.4828 12.551 11.7699C12.2656 11.9142 11.9999 12.1799 11.4684 12.7114L11.3108 12.869C10.7812 13.3986 10.5164 13.6634 10.3141 14.0235C10.0897 14.423 9.92833 15.0435 9.9297 15.5017C9.93092 15.9146 10.011 16.1969 10.1712 16.7613C11.0322 19.7947 12.6567 22.6571 15.0447 25.045C17.4326 27.433 20.295 29.0575 23.3284 29.9185C23.8928 30.0787 24.1751 30.1588 24.588 30.16C25.0462 30.1614 25.6667 30 26.0662 29.7756C26.4263 29.5733 26.6911 29.3085 27.2207 28.7789L27.3783 28.6213C27.9098 28.0898 28.1755 27.8241 28.3198 27.5387C28.6069 26.9712 28.6069 26.3009 28.3198 25.7333C28.1755 25.448 27.9098 25.1822 27.3783 24.6508L27.1835 24.4559C26.8339 24.1063 26.6591 23.9315 26.4833 23.8172C25.8204 23.3862 24.9658 23.3862 24.3029 23.8172C24.1271 23.9315 23.9523 24.1063 23.6027 24.4559C23.4884 24.5702 23.4313 24.6274 23.3644 24.6752C23.127 24.8453 22.7828 24.904 22.5024 24.8222C22.4235 24.7992 22.3612 24.7693 22.2365 24.7094C20.7869 24.0134 19.4282 23.0646 18.2266 21.8631Z"
                        stroke="#00C950"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>
                  <div className="bg-[#fff] rounded-[6px] p-2 border-2 border-[#F1F5F9]">
                    <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-3">
                      <div>
                        <p className=" text-[14px] text-[#314158] font-[500] ">
                          <span className="font-[700] mr-2">Fariz Elahi</span>
                          called
                          <span className="font-[700] mx-2">Merchant Name</span>
                        </p>
                        <p className="text-[#90A1B9] text-[10px] font-[400]">
                          01/12/25 (10:00 am)
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Tooltip text="Phone Call" position="top">
                          <div className="hover:bg-[#e2e6ea] rounded-[50%] flex items-center justify-center w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                            <span
                              className=""
                              onClick={() => setCallOpen(true)}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                {" "}
                                <g clip-path="url(#clip0_680_11727)">
                                  {" "}
                                  <path
                                    d="M9.36709 4.00016C10.0182 4.12721 10.6167 4.44567 11.0858 4.91479C11.5549 5.38391 11.8734 5.98234 12.0004 6.6335M9.36709 1.3335C10.7199 1.48379 11.9815 2.08961 12.9446 3.0515C13.9077 4.01339 14.5151 5.27417 14.6671 6.62683M6.81841 9.24221C6.01736 8.44116 5.38483 7.5354 4.92084 6.56898C4.88092 6.48586 4.86097 6.44429 4.84564 6.3917C4.79115 6.2048 4.83029 5.97529 4.94363 5.817C4.97552 5.77246 5.01363 5.73436 5.08984 5.65815C5.32291 5.42508 5.43944 5.30854 5.51563 5.19136C5.80296 4.74943 5.80296 4.17971 5.51563 3.73778C5.43944 3.6206 5.32291 3.50406 5.08984 3.27099L4.95992 3.14108C4.60563 2.78678 4.42848 2.60964 4.23823 2.51341C3.85985 2.32203 3.41301 2.32203 3.03464 2.51341C2.84438 2.60964 2.66723 2.78678 2.31294 3.14108L2.20785 3.24617C1.85477 3.59925 1.67823 3.77579 1.54339 4.01581C1.39378 4.28215 1.28621 4.69581 1.28712 5.00129C1.28793 5.27659 1.34134 5.46474 1.44814 5.84104C2.02212 7.8633 3.1051 9.77154 4.69709 11.3635C6.28908 12.9555 8.19732 14.0385 10.2196 14.6125C10.5959 14.7193 10.784 14.7727 11.0593 14.7735C11.3648 14.7744 11.7785 14.6668 12.0448 14.5172C12.2848 14.3824 12.4614 14.2059 12.8145 13.8528L12.9195 13.7477C13.2738 13.3934 13.451 13.2162 13.5472 13.026C13.7386 12.6476 13.7386 12.2008 13.5472 11.8224C13.451 11.6321 13.2738 11.455 12.9195 11.1007L12.7896 10.9708C12.5566 10.7377 12.44 10.6212 12.3228 10.545C11.8809 10.2577 11.3112 10.2577 10.8693 10.545C10.7521 10.6212 10.6355 10.7377 10.4025 10.9708C10.3263 11.047 10.2882 11.0851 10.2436 11.117C10.0853 11.2303 9.85582 11.2695 9.66892 11.215C9.61633 11.1997 9.57476 11.1797 9.49164 11.1398C8.52523 10.6758 7.61946 10.0433 6.81841 9.24221Z"
                                    stroke="#62748E"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </g>{" "}
                                <defs>
                                  {" "}
                                  <clipPath id="clip0_680_11727">
                                    {" "}
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                    />{" "}
                                  </clipPath>{" "}
                                </defs>{" "}
                              </svg>
                            </span>
                          </div>
                        </Tooltip>
                        <Tooltip text="View Comments" position="top">
                          <div className="hover:bg-[#e2e6ea] rounded-[50%] flex items-center justify-center w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M9.33333 10.3333H12M9.33333 12.6667H14M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7981 6.15582 13.5598 6.43871 14.2563C6.49285 14.3897 6.51992 14.4563 6.532 14.5102C6.54381 14.5629 6.54813 14.6019 6.54814 14.6559C6.54814 14.7111 6.53812 14.7713 6.51807 14.8916L6.12275 17.2635C6.08135 17.5119 6.06065 17.6361 6.09917 17.7259C6.13289 17.8045 6.19552 17.8671 6.27412 17.9008C6.36393 17.9393 6.48812 17.9186 6.73651 17.8772L9.10843 17.4819C9.22872 17.4619 9.28887 17.4519 9.34409 17.4519C9.3981 17.4519 9.43711 17.4562 9.48981 17.468C9.54369 17.4801 9.61035 17.5072 9.74366 17.5613C10.4402 17.8442 11.2019 18 12 18Z"
                                stroke="#90A1B9"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                            </svg>
                          </div>
                        </Tooltip>
                        <Tooltip text="More" position="top">
                          <div className="hover:bg-[#e2e6ea] rounded-[50%] flex items-center justify-center w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                            <Menu
                              as="span"
                              className="relative inline-block text-left h-[21px]"
                            >
                              <div>
                                <MenuButton className="">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    {" "}
                                    <path
                                      d="M11.9993 12.6663C12.3675 12.6663 12.666 12.3679 12.666 11.9997C12.666 11.6315 12.3675 11.333 11.9993 11.333C11.6312 11.333 11.3327 11.6315 11.3327 11.9997C11.3327 12.3679 11.6312 12.6663 11.9993 12.6663Z"
                                      stroke="#90A1B9"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M16.666 12.6663C17.0342 12.6663 17.3327 12.3679 17.3327 11.9997C17.3327 11.6315 17.0342 11.333 16.666 11.333C16.2978 11.333 15.9993 11.6315 15.9993 11.9997C15.9993 12.3679 16.2978 12.6663 16.666 12.6663Z"
                                      stroke="#90A1B9"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M7.33268 12.6663C7.70087 12.6663 7.99935 12.3679 7.99935 11.9997C7.99935 11.6315 7.70087 11.333 7.33268 11.333C6.96449 11.333 6.66602 11.6315 6.66602 11.9997C6.66602 12.3679 6.96449 12.6663 7.33268 12.6663Z"
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
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                              >
                                <MenuItem className="hover:bg-[#eeeeee]">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Report an issue
                                  </a>
                                </MenuItem>
                                <MenuItem className="hover:bg-[#eeeeee]">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Copy link
                                  </a>
                                </MenuItem>
                                <MenuItem className="hover:bg-[#eeeeee]">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Delete call
                                  </a>
                                </MenuItem>
                              </MenuItems>
                            </Menu>
                          </div>
                        </Tooltip>
                        <div className="border-l border-[#dcdcdc] pl-3">
                          <Tooltip text="UserName" position="top">
                            <div className="w-[28px] h-[28px] bg-cover bg-position-[center] bg-[url(/images/avatarsetting.png)] rounded-[50%]"></div>
                          </Tooltip>
                        </div>
                        {/* <div>
                          <span>4d ago</span>
                        </div> */}
                      </div>
                    </div>
                    <p className="text-[#45556C] text-[14px] font-[400]">
                      Really good call overall. Doug really appreciated our case
                      study and is interested in further conversations.
                    </p>
                    <p className="mt-3">
                      There are a few minor things we need to adjust in the
                      proposal:
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[50px_1fr] items-start relative min-h-[75px] after:content-[''] after:w-[2px] after:h-[100%] after:bg-[#e2e8f0] after:ml-[19px] after:absolute after:bottom-0 after:translate-y-[4%] ">
                  <div className="z-[1]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="white"
                      />{" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#F1F5F9"
                      />{" "}
                      <path
                        d="M22 15H27.6404C28.0877 15 28.3113 15 28.4421 15.094C28.5562 15.1761 28.6306 15.3024 28.6469 15.442C28.6656 15.602 28.5569 15.7975 28.3397 16.1885L26.9936 18.6115C26.9148 18.7533 26.8755 18.8242 26.86 18.8993C26.8463 18.9657 26.8463 19.0343 26.86 19.1007C26.8755 19.1758 26.9148 19.2467 26.9936 19.3885L28.3397 21.8115C28.5569 22.2025 28.6656 22.398 28.6469 22.558C28.6306 22.6976 28.5562 22.8239 28.4421 22.906C28.3113 23 28.0877 23 27.6404 23H20.6C20.0399 23 19.7599 23 19.546 22.891C19.3578 22.7951 19.2049 22.6422 19.109 22.454C19 22.2401 19 21.9601 19 21.4V19M12 29L12 12M12 19H20.4C20.9601 19 21.2401 19 21.454 18.891C21.6422 18.7951 21.7951 18.6422 21.891 18.454C22 18.2401 22 17.9601 22 17.4V12.6C22 12.0399 22 11.7599 21.891 11.546C21.7951 11.3578 21.6422 11.2049 21.454 11.109C21.2401 11 20.9601 11 20.4 11H13.6C13.0399 11 12.7599 11 12.546 11.109C12.3578 11.2049 12.2049 11.3578 12.109 11.546C12 11.7599 12 12.0399 12 12.6V19Z"
                        stroke="#62748E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>
                  <p className=" text-[14px] text-[#314158] font-[500] mt-2">
                    Deal 01 paybacks 40% completed, lead name is eligible for
                    renewals
                  </p>
                </div>
                <div className="pb-[23px] group grid grid-cols-[50px_1fr] items-start relative min-h-[75px] after:content-[''] after:w-[2px] after:h-[100%] after:bg-[#e2e8f0] after:ml-[19px] after:absolute after:bottom-0 after:translate-y-[4%] ">
                  <div className="z-[1]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        fill="#DCFCE7"
                      />{" "}
                      <rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="19.5"
                        stroke="#7BF1A8"
                      />{" "}
                      <path
                        d="M22.0497 14C23.0264 14.1906 23.924 14.6683 24.6277 15.3719C25.3314 16.0756 25.8091 16.9733 25.9997 17.95M22.0497 10C24.0789 10.2254 25.9713 11.1342 27.4159 12.577C28.8606 14.0198 29.7717 15.911 29.9997 17.94M18.2266 21.8631C17.0251 20.6615 16.0763 19.3028 15.3803 17.8532C15.3204 17.7285 15.2905 17.6662 15.2675 17.5873C15.1858 17.3069 15.2445 16.9627 15.4145 16.7253C15.4623 16.6584 15.5195 16.6013 15.6338 16.487C15.9834 16.1374 16.1582 15.9626 16.2725 15.7868C16.7035 15.1239 16.7035 14.2693 16.2725 13.6064C16.1582 13.4307 15.9834 13.2559 15.6338 12.9062L15.4389 12.7114C14.9075 12.1799 14.6417 11.9142 14.3564 11.7699C13.7888 11.4828 13.1185 11.4828 12.551 11.7699C12.2656 11.9142 11.9999 12.1799 11.4684 12.7114L11.3108 12.869C10.7812 13.3986 10.5164 13.6634 10.3141 14.0235C10.0897 14.423 9.92833 15.0435 9.9297 15.5017C9.93092 15.9146 10.011 16.1969 10.1712 16.7613C11.0322 19.7947 12.6567 22.6571 15.0447 25.045C17.4326 27.433 20.295 29.0575 23.3284 29.9185C23.8928 30.0787 24.1751 30.1588 24.588 30.16C25.0462 30.1614 25.6667 30 26.0662 29.7756C26.4263 29.5733 26.6911 29.3085 27.2207 28.7789L27.3783 28.6213C27.9098 28.0898 28.1755 27.8241 28.3198 27.5387C28.6069 26.9712 28.6069 26.3009 28.3198 25.7333C28.1755 25.448 27.9098 25.1822 27.3783 24.6508L27.1835 24.4559C26.8339 24.1063 26.6591 23.9315 26.4833 23.8172C25.8204 23.3862 24.9658 23.3862 24.3029 23.8172C24.1271 23.9315 23.9523 24.1063 23.6027 24.4559C23.4884 24.5702 23.4313 24.6274 23.3644 24.6752C23.127 24.8453 22.7828 24.904 22.5024 24.8222C22.4235 24.7992 22.3612 24.7693 22.2365 24.7094C20.7869 24.0134 19.4282 23.0646 18.2266 21.8631Z"
                        stroke="#00C950"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{" "}
                    </svg>
                  </div>
                  <div className="bg-[#fff] rounded-[6px] p-2 border-2 border-[#F1F5F9]">
                    <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-3">
                      <div>
                        <p className=" text-[14px] text-[#314158] font-[500] ">
                          <span className="font-[700] mr-2">Fariz Elahi</span>
                          called
                          <span className="font-[700] mx-2">Merchant Name</span>
                        </p>
                        <p className="text-[#90A1B9] text-[10px] font-[400]">
                          01/12/25 (10:00 am)
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Tooltip text="Phone Call" position="top">
                          <div className="hover:bg-[#e2e6ea] rounded-[50%] flex items-center justify-center w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                            <span
                              className=""
                              onClick={() => setCallOpen(true)}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                {" "}
                                <g clip-path="url(#clip0_680_11727)">
                                  {" "}
                                  <path
                                    d="M9.36709 4.00016C10.0182 4.12721 10.6167 4.44567 11.0858 4.91479C11.5549 5.38391 11.8734 5.98234 12.0004 6.6335M9.36709 1.3335C10.7199 1.48379 11.9815 2.08961 12.9446 3.0515C13.9077 4.01339 14.5151 5.27417 14.6671 6.62683M6.81841 9.24221C6.01736 8.44116 5.38483 7.5354 4.92084 6.56898C4.88092 6.48586 4.86097 6.44429 4.84564 6.3917C4.79115 6.2048 4.83029 5.97529 4.94363 5.817C4.97552 5.77246 5.01363 5.73436 5.08984 5.65815C5.32291 5.42508 5.43944 5.30854 5.51563 5.19136C5.80296 4.74943 5.80296 4.17971 5.51563 3.73778C5.43944 3.6206 5.32291 3.50406 5.08984 3.27099L4.95992 3.14108C4.60563 2.78678 4.42848 2.60964 4.23823 2.51341C3.85985 2.32203 3.41301 2.32203 3.03464 2.51341C2.84438 2.60964 2.66723 2.78678 2.31294 3.14108L2.20785 3.24617C1.85477 3.59925 1.67823 3.77579 1.54339 4.01581C1.39378 4.28215 1.28621 4.69581 1.28712 5.00129C1.28793 5.27659 1.34134 5.46474 1.44814 5.84104C2.02212 7.8633 3.1051 9.77154 4.69709 11.3635C6.28908 12.9555 8.19732 14.0385 10.2196 14.6125C10.5959 14.7193 10.784 14.7727 11.0593 14.7735C11.3648 14.7744 11.7785 14.6668 12.0448 14.5172C12.2848 14.3824 12.4614 14.2059 12.8145 13.8528L12.9195 13.7477C13.2738 13.3934 13.451 13.2162 13.5472 13.026C13.7386 12.6476 13.7386 12.2008 13.5472 11.8224C13.451 11.6321 13.2738 11.455 12.9195 11.1007L12.7896 10.9708C12.5566 10.7377 12.44 10.6212 12.3228 10.545C11.8809 10.2577 11.3112 10.2577 10.8693 10.545C10.7521 10.6212 10.6355 10.7377 10.4025 10.9708C10.3263 11.047 10.2882 11.0851 10.2436 11.117C10.0853 11.2303 9.85582 11.2695 9.66892 11.215C9.61633 11.1997 9.57476 11.1797 9.49164 11.1398C8.52523 10.6758 7.61946 10.0433 6.81841 9.24221Z"
                                    stroke="#62748E"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </g>{" "}
                                <defs>
                                  {" "}
                                  <clipPath id="clip0_680_11727">
                                    {" "}
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                    />{" "}
                                  </clipPath>{" "}
                                </defs>{" "}
                              </svg>
                            </span>
                          </div>
                        </Tooltip>
                        <Tooltip text="View Comments" position="top">
                          <div className="hover:bg-[#e2e6ea] rounded-[50%] flex items-center justify-center w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <path
                                d="M9.33333 10.3333H12M9.33333 12.6667H14M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7981 6.15582 13.5598 6.43871 14.2563C6.49285 14.3897 6.51992 14.4563 6.532 14.5102C6.54381 14.5629 6.54813 14.6019 6.54814 14.6559C6.54814 14.7111 6.53812 14.7713 6.51807 14.8916L6.12275 17.2635C6.08135 17.5119 6.06065 17.6361 6.09917 17.7259C6.13289 17.8045 6.19552 17.8671 6.27412 17.9008C6.36393 17.9393 6.48812 17.9186 6.73651 17.8772L9.10843 17.4819C9.22872 17.4619 9.28887 17.4519 9.34409 17.4519C9.3981 17.4519 9.43711 17.4562 9.48981 17.468C9.54369 17.4801 9.61035 17.5072 9.74366 17.5613C10.4402 17.8442 11.2019 18 12 18Z"
                                stroke="#90A1B9"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />{" "}
                            </svg>
                          </div>
                        </Tooltip>
                        <Tooltip text="More" position="top">
                          <div className="hover:bg-[#e2e6ea] rounded-[50%] flex items-center justify-center w-[28px] h-[28px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
                            <Menu
                              as="span"
                              className="relative inline-block text-left h-[21px]"
                            >
                              <div>
                                <MenuButton className="">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    {" "}
                                    <path
                                      d="M11.9993 12.6663C12.3675 12.6663 12.666 12.3679 12.666 11.9997C12.666 11.6315 12.3675 11.333 11.9993 11.333C11.6312 11.333 11.3327 11.6315 11.3327 11.9997C11.3327 12.3679 11.6312 12.6663 11.9993 12.6663Z"
                                      stroke="#90A1B9"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M16.666 12.6663C17.0342 12.6663 17.3327 12.3679 17.3327 11.9997C17.3327 11.6315 17.0342 11.333 16.666 11.333C16.2978 11.333 15.9993 11.6315 15.9993 11.9997C15.9993 12.3679 16.2978 12.6663 16.666 12.6663Z"
                                      stroke="#90A1B9"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                    <path
                                      d="M7.33268 12.6663C7.70087 12.6663 7.99935 12.3679 7.99935 11.9997C7.99935 11.6315 7.70087 11.333 7.33268 11.333C6.96449 11.333 6.66602 11.6315 6.66602 11.9997C6.66602 12.3679 6.96449 12.6663 7.33268 12.6663Z"
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
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                              >
                                <MenuItem className="hover:bg-[#eeeeee]">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Report an issue
                                  </a>
                                </MenuItem>
                                <MenuItem className="hover:bg-[#eeeeee]">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Copy link
                                  </a>
                                </MenuItem>
                                <MenuItem className="hover:bg-[#eeeeee]">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                  >
                                    Delete call
                                  </a>
                                </MenuItem>
                              </MenuItems>
                            </Menu>
                          </div>
                        </Tooltip>
                        <div className="border-l border-[#dcdcdc] pl-3">
                          <Tooltip text="UserName" position="top">
                            <div className="w-[28px] h-[28px] bg-cover bg-position-[center] bg-[url(/images/avatarsetting.png)] rounded-[50%]"></div>
                          </Tooltip>
                        </div>
                        {/* <div>
                          <span>4d ago</span>
                        </div> */}
                      </div>
                    </div>
                    <p className="text-[#45556C] text-[14px] font-[400]">
                      Really good call overall. Doug really appreciated our case
                      study and is interested in further conversations.
                    </p>
                    <p className="mt-3">
                      There are a few minor things we need to adjust in the
                      proposal:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {rightactiveTab === "Details" && (
            <div>
              <div className="ml-[12px]">
                <div className="flex justify-end items-center mt-3">
                  <div class="">
                    <div className="relative border-r border-[#F1F5F9] pr-3 mr-3">
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
                        className="block pl-10 pr-3 py-2 dark:border-gray-600 rounded-[26px] bg-[#F8FAFC] dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent dark:text-white"
                        placeholder="Search by activity"
                      />
                    </div>
                  </div>
                  <div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-[#F8FAFC] rounded-[60px] border-[#F1F5F9] px-3 py-2 text-sm font-semibold text-[#62748E] shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                          All Activities
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#62748E"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </MenuButton>
                      </div>

                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <div className="py-1">
                          <MenuItem>
                            <div className="mx-4">Activities</div>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-[#F8FAFC]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M4 8H12M2 4H14M6 12H10"
                          stroke="#62748E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-[#F8FAFC]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M7.52242 2.30205C7.67608 1.99076 7.7529 1.83511 7.8572 1.78538C7.94795 1.74211 8.05338 1.74211 8.14412 1.78538C8.24842 1.83511 8.32525 1.99076 8.47891 2.30205L9.93669 5.25536C9.98205 5.34726 10.0047 5.39321 10.0379 5.42889C10.0672 5.46048 10.1024 5.48607 10.1415 5.50425C10.1857 5.52479 10.2364 5.5322 10.3378 5.54702L13.5986 6.02364C13.942 6.07383 14.1137 6.09893 14.1932 6.1828C14.2623 6.25577 14.2948 6.35603 14.2817 6.45569C14.2665 6.57022 14.1422 6.69129 13.8936 6.93342L11.5349 9.23078C11.4614 9.3024 11.4247 9.33821 11.4009 9.38081C11.3799 9.41854 11.3665 9.45998 11.3613 9.50284C11.3554 9.55125 11.3641 9.60183 11.3814 9.703L11.938 12.9479C11.9967 13.2902 12.026 13.4613 11.9708 13.5628C11.9229 13.6512 11.8376 13.7132 11.7387 13.7315C11.6251 13.7525 11.4714 13.6717 11.1641 13.5101L8.2489 11.9771C8.15807 11.9293 8.11266 11.9054 8.06481 11.896C8.02245 11.8877 7.97888 11.8877 7.93651 11.896C7.88867 11.9054 7.84325 11.9293 7.75242 11.9771L4.83727 13.5101C4.52993 13.6717 4.37626 13.7525 4.26263 13.7315C4.16377 13.7132 4.07847 13.6512 4.03048 13.5628C3.97532 13.4613 4.00467 13.2902 4.06337 12.9479L4.61991 9.703C4.63726 9.60183 4.64593 9.55125 4.64006 9.50284C4.63487 9.45998 4.62139 9.41854 4.60039 9.38081C4.57667 9.33821 4.5399 9.3024 4.46637 9.23078L2.10769 6.93342C1.85909 6.69129 1.73479 6.57022 1.71967 6.45569C1.70651 6.35603 1.73902 6.25577 1.80815 6.1828C1.88761 6.09893 2.0593 6.07383 2.40268 6.02364L5.66353 5.54702C5.76493 5.5322 5.81564 5.52479 5.8598 5.50425C5.89889 5.48607 5.93409 5.46048 5.96344 5.42889C5.99659 5.39321 6.01927 5.34726 6.06463 5.25536L7.52242 2.30205Z"
                          stroke="#62748E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-[#F8FAFC]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M8.00065 3.33301V12.6663M3.33398 7.99967H12.6673"
                          stroke="#62748E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 bg-[#F8FAFC] p-3">
                <div className=" m-2 p-3 rounded-[12px]">
                  {detailsAccordionData.map((item, index) => (
                    <div
                      key={index}
                      className="border border-[#F1F5F9] mt-5 rounded-[6px] "
                    >
                      <button
                        onClick={() => secToggle(index)}
                        className="w-full rounded-[6px] rounded-b-[0]  flex items-center bg-[#fff] justify-between py-3 px-4 text-left text-[#020618] text-[14px] font-medium hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <div className="grid grid-cols-[1fr_1fr]">
                            <div>
                              <div className="flex items-center gap-3">
                                <h1 className="text-[#0F172B] text-[30px] font-[700]">
                                  $45,000{" "}
                                  <span className="font-[400] text-[24px] text-[#90A1B9] ">
                                    /$129,000
                                  </span>
                                </h1>
                                <span className="bg-[#B9F8CF] rounded-[4px] h-[26px] p-2 flex items-center justify-center">
                                  Funds Approved
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span>Deal # 5432210</span>
                                <span className="bg-[#F2F4F7] w-[6px] h-[6px] rounded-[50%] block"></span>
                                <span>01/12/25 (10:00 am)</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center space-x-2 w-full">
                                <div className="w-full h-2.5 bg-gray-200 rounded-full">
                                  <div
                                    className="h-2.5 bg-blue-600 rounded-full transition-all duration-300"
                                    style={{ width: "72%" }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-700">
                                  72
                                </span>
                              </div>
                              <div className="flex items-center">
                                <div>
                                  <Menu
                                    as="span"
                                    className="relative inline-block text-left h-[21px]"
                                  >
                                    <div>
                                      <MenuButton
                                        className=""
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          {" "}
                                          <path
                                            d="M11.9993 12.6663C12.3675 12.6663 12.666 12.3679 12.666 11.9997C12.666 11.6315 12.3675 11.333 11.9993 11.333C11.6312 11.333 11.3327 11.6315 11.3327 11.9997C11.3327 12.3679 11.6312 12.6663 11.9993 12.6663Z"
                                            stroke="#90A1B9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />{" "}
                                          <path
                                            d="M16.666 12.6663C17.0342 12.6663 17.3327 12.3679 17.3327 11.9997C17.3327 11.6315 17.0342 11.333 16.666 11.333C16.2978 11.333 15.9993 11.6315 15.9993 11.9997C15.9993 12.3679 16.2978 12.6663 16.666 12.6663Z"
                                            stroke="#90A1B9"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />{" "}
                                          <path
                                            d="M7.33268 12.6663C7.70087 12.6663 7.99935 12.3679 7.99935 11.9997C7.99935 11.6315 7.70087 11.333 7.33268 11.333C6.96449 11.333 6.66602 11.6315 6.66602 11.9997C6.66602 12.3679 6.96449 12.6663 7.33268 12.6663Z"
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
                                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                    >
                                      <MenuItem className="hover:bg-[#eeeeee]">
                                        <a
                                          href="#"
                                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                          Report an issue
                                        </a>
                                      </MenuItem>
                                      <MenuItem className="hover:bg-[#eeeeee]">
                                        <a
                                          href="#"
                                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                          Copy link
                                        </a>
                                      </MenuItem>
                                      <MenuItem className="hover:bg-[#eeeeee]">
                                        <a
                                          href="#"
                                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                        >
                                          Delete
                                        </a>
                                      </MenuItem>
                                    </MenuItems>
                                  </Menu>
                                </div>
                                <div>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    {" "}
                                    <path
                                      d="M9.33333 10.3333H12M9.33333 12.6667H14M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7981 6.15582 13.5598 6.43871 14.2563C6.49285 14.3897 6.51992 14.4563 6.532 14.5102C6.54381 14.5629 6.54813 14.6019 6.54814 14.6559C6.54814 14.7111 6.53812 14.7713 6.51807 14.8916L6.12275 17.2635C6.08135 17.5119 6.06065 17.6361 6.09917 17.7259C6.13289 17.8045 6.19552 17.8671 6.27412 17.9008C6.36393 17.9393 6.48812 17.9186 6.73651 17.8772L9.10843 17.4819C9.22872 17.4619 9.28887 17.4519 9.34409 17.4519C9.3981 17.4519 9.43711 17.4562 9.48981 17.468C9.54369 17.4801 9.61035 17.5072 9.74366 17.5613C10.4402 17.8442 11.2019 18 12 18Z"
                                      stroke="#90A1B9"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />{" "}
                                  </svg>
                                </div>
                                {/* <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      secOpenIndex === index ? "rotate-180" : ""
                    }`}
                  /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                      <div
                        className={`px-5 overflow-hidden border-t  bg-[#fff] transition-all duration-300 text-gray-600 ${secOpenIndex === index
                          ? "max-h-[500px] py-4 border-[#F1F5F9 ]"
                          : "max-h-0 py-0"
                          }`}
                      >
                        <div key={index}>
                          <h1>Description</h1>
                          <p className="text-[#45556C] text-[14px]/[20px] font-[400] mt-2">
                            Really good call overall. Doug really appreciated
                            our case study and is interested in further
                            conversations.
                          </p>
                          <p className="text-[#45556C] text-[14px]/[20px] font-[400] mt-2">
                            There are a few minor things we need to adjust in
                            the proposal:
                          </p>
                          <ul className="list-disc ml-4 mt-2">
                            {item.point.map((ele, index) => (
                              <li key={index} className="text-[#45556C] text-[14px]/[20px] font-[400]">
                                {ele.text}
                              </li>
                            ))}
                          </ul>
                          <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 mt-3">
                            <div className="border border-[#E2E8F0] rounded-[12px] min-h-[64px] p-2 flex gap-3">
                              <div className="w-[40px] h-[40px] border border-[#F1F5F9] rounded-[50%] flex justify-center items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    d="M16.6673 17.5C16.6673 16.337 16.6673 15.7555 16.5238 15.2824C16.2006 14.217 15.3669 13.3834 14.3016 13.0602C13.8284 12.9167 13.247 12.9167 12.084 12.9167H7.91732C6.75435 12.9167 6.17286 12.9167 5.6997 13.0602C4.63436 13.3834 3.80068 14.217 3.47752 15.2824C3.33398 15.7555 3.33398 16.337 3.33398 17.5M13.7507 6.25C13.7507 8.32107 12.0717 10 10.0007 10C7.92958 10 6.25065 8.32107 6.25065 6.25C6.25065 4.17893 7.92958 2.5 10.0007 2.5C12.0717 2.5 13.7507 4.17893 13.7507 6.25Z"
                                    stroke="#62748E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </svg>
                              </div>
                              <div>
                                <p className="text-[#1D293D] font-[500] text-[12px]">
                                  Broker
                                </p>
                                <p className="text-[14px] font-[700] text-[#0F172B] underline decoration-1">
                                  {item.broker}
                                </p>
                              </div>
                            </div>
                            <div className="border border-[#E2E8F0] rounded-[12px] min-h-[64px] p-2 flex gap-3">
                              <div className="w-[40px] h-[40px] border border-[#F1F5F9] rounded-[50%] flex justify-center items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    d="M16.6673 17.5C16.6673 16.337 16.6673 15.7555 16.5238 15.2824C16.2006 14.217 15.3669 13.3834 14.3016 13.0602C13.8284 12.9167 13.247 12.9167 12.084 12.9167H7.91732C6.75435 12.9167 6.17286 12.9167 5.6997 13.0602C4.63436 13.3834 3.80068 14.217 3.47752 15.2824C3.33398 15.7555 3.33398 16.337 3.33398 17.5M13.7507 6.25C13.7507 8.32107 12.0717 10 10.0007 10C7.92958 10 6.25065 8.32107 6.25065 6.25C6.25065 4.17893 7.92958 2.5 10.0007 2.5C12.0717 2.5 13.7507 4.17893 13.7507 6.25Z"
                                    stroke="#62748E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </svg>
                              </div>
                              <div>
                                <p className="text-[#1D293D] font-[500] text-[12px]">
                                  Funder
                                </p>
                                <p className="text-[14px] font-[700] text-[#0F172B] underline decoration-1">
                                  {item.funder}
                                </p>
                              </div>
                            </div>
                            <div className="border border-[#E2E8F0] rounded-[12px] min-h-[64px] p-2 flex gap-3">
                              <div className="w-[40px] h-[40px] border border-[#F1F5F9] rounded-[50%] flex justify-center items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    d="M16.6673 17.5C16.6673 16.337 16.6673 15.7555 16.5238 15.2824C16.2006 14.217 15.3669 13.3834 14.3016 13.0602C13.8284 12.9167 13.247 12.9167 12.084 12.9167H7.91732C6.75435 12.9167 6.17286 12.9167 5.6997 13.0602C4.63436 13.3834 3.80068 14.217 3.47752 15.2824C3.33398 15.7555 3.33398 16.337 3.33398 17.5M13.7507 6.25C13.7507 8.32107 12.0717 10 10.0007 10C7.92958 10 6.25065 8.32107 6.25065 6.25C6.25065 4.17893 7.92958 2.5 10.0007 2.5C12.0717 2.5 13.7507 4.17893 13.7507 6.25Z"
                                    stroke="#62748E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </svg>
                              </div>
                              <div>
                                <p className="text-[#1D293D] font-[500] text-[12px]">
                                  Merchant
                                </p>
                                <p className="text-[14px] font-[700] text-[#0F172B] underline decoration-1">
                                  {item.merchant}
                                </p>
                              </div>
                            </div>
                            <div className="border border-[#E2E8F0] rounded-[12px] min-h-[64px] p-2 flex gap-3">
                              <div className="w-[40px] h-[40px] border border-[#F1F5F9] rounded-[50%] flex justify-center items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    d="M16.6673 17.5C16.6673 16.337 16.6673 15.7555 16.5238 15.2824C16.2006 14.217 15.3669 13.3834 14.3016 13.0602C13.8284 12.9167 13.247 12.9167 12.084 12.9167H7.91732C6.75435 12.9167 6.17286 12.9167 5.6997 13.0602C4.63436 13.3834 3.80068 14.217 3.47752 15.2824C3.33398 15.7555 3.33398 16.337 3.33398 17.5M13.7507 6.25C13.7507 8.32107 12.0717 10 10.0007 10C7.92958 10 6.25065 8.32107 6.25065 6.25C6.25065 4.17893 7.92958 2.5 10.0007 2.5C12.0717 2.5 13.7507 4.17893 13.7507 6.25Z"
                                    stroke="#62748E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </svg>
                              </div>
                              <div>
                                <p className="text-[#1D293D] font-[500] text-[12px]">
                                  Position
                                </p>
                                <p className="text-[14px] font-[700] text-[#0F172B] underline decoration-1">
                                  {item.position}
                                </p>
                              </div>
                            </div>
                            <div className="border border-[#E2E8F0] rounded-[12px] min-h-[64px] p-2 flex gap-3">
                              <div className="w-[40px] h-[40px] border border-[#F1F5F9] rounded-[50%] flex justify-center items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    d="M16.6673 17.5C16.6673 16.337 16.6673 15.7555 16.5238 15.2824C16.2006 14.217 15.3669 13.3834 14.3016 13.0602C13.8284 12.9167 13.247 12.9167 12.084 12.9167H7.91732C6.75435 12.9167 6.17286 12.9167 5.6997 13.0602C4.63436 13.3834 3.80068 14.217 3.47752 15.2824C3.33398 15.7555 3.33398 16.337 3.33398 17.5M13.7507 6.25C13.7507 8.32107 12.0717 10 10.0007 10C7.92958 10 6.25065 8.32107 6.25065 6.25C6.25065 4.17893 7.92958 2.5 10.0007 2.5C12.0717 2.5 13.7507 4.17893 13.7507 6.25Z"
                                    stroke="#62748E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </svg>
                              </div>
                              <div>
                                <p className="text-[#1D293D] font-[500] text-[12px]">
                                  Type
                                </p>
                                <p className="text-[14px] font-[700] text-[#0F172B] underline decoration-1">
                                  {item.type}
                                </p>
                              </div>
                            </div>
                            <div className="border border-[#E2E8F0] rounded-[12px] min-h-[64px] p-2 flex gap-3">
                              <div className="w-[40px] h-[40px] border border-[#F1F5F9] rounded-[50%] flex justify-center items-center">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {" "}
                                  <path
                                    d="M16.6673 17.5C16.6673 16.337 16.6673 15.7555 16.5238 15.2824C16.2006 14.217 15.3669 13.3834 14.3016 13.0602C13.8284 12.9167 13.247 12.9167 12.084 12.9167H7.91732C6.75435 12.9167 6.17286 12.9167 5.6997 13.0602C4.63436 13.3834 3.80068 14.217 3.47752 15.2824C3.33398 15.7555 3.33398 16.337 3.33398 17.5M13.7507 6.25C13.7507 8.32107 12.0717 10 10.0007 10C7.92958 10 6.25065 8.32107 6.25065 6.25C6.25065 4.17893 7.92958 2.5 10.0007 2.5C12.0717 2.5 13.7507 4.17893 13.7507 6.25Z"
                                    stroke="#62748E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />{" "}
                                </svg>
                              </div>
                              <div>
                                <p className="text-[#1D293D] font-[500] text-[12px]">
                                  Terms
                                </p>
                                <p className="text-[14px] font-[700] text-[#0F172B] underline decoration-1">
                                  {item.terms}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ))} */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
