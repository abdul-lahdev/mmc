import React, { useState } from "react";
import Image from "next/image";
import avatar from "../img/avatarsetting.png";
import { useRouter } from "next/router";
import { FaTrash } from "react-icons/fa";
import  AddQuiz from "../components/AddQuiz";


export default function Settings() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("General");
  const [current, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
    const [AddQuizModalOpen, setAddQuizModalOpen] = useState(false);
    const [QuizModalAnimation, setQuizModalAnimation] = useState(false);
    

  const tabs = ["General", "Security", "Quizzes", "Training"];

  //   Quizzes table data
  const tableData = [
    {
      title: "Intro to Insurance",
      category: "Product Training",
      learningPath: "Life Insurance",
      placement: "Top",
      actions: "Edit/Delete",
    },
    {
      title: "Final Expense Quiz",
      category: "Compliance",
      learningPath: "Advanced Selling",
      placement: "Middle",
      actions: "Edit/Delete",
    },
    {
      title: "Annuity Basics",
      category: "Product Training",
      learningPath: "Retirement Planning",
      placement: "Bottom",
      actions: "Edit/Delete",
    },
  ];

  //   training section states:
  const [categories, setCategories] = useState([
    "Sales Basics",
    "Marketing Funnels",
    "CRM Usage",
  ]);

  const [learningPaths, setLearningPaths] = useState([
    "Level 1 - Beginner",
    "Level 2 - Intermediate",
    "Level 3 - Advanced",
  ]);

  const handleAddCategory = () => {
    setCategories([...categories, ""]);
  };

  const handleAddLearningPath = () => {
    setLearningPaths([...learningPaths, ""]);
  };

  const updateCategory = (index, value) => {
    const updated = [...categories];
    updated[index] = value;
    setCategories(updated);
  };

  const updateLearningPath = (index, value) => {
    const updated = [...learningPaths];
    updated[index] = value;
    setLearningPaths(updated);
  };

  return (
    <div>
{/* addquizform */}
{AddQuizModalOpen && (
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
            <div className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all  md:max-w-3xl lg:max-w-4xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full
              ${QuizModalAnimation ? 'scale-100 skew-y-0' : 'scale-0 skew-y-6'}
              duration-500 ease-out
            `}>
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4 border-b dark:border-gray-600 pb-4">
                      Quiz Creation
                    </h3>
                  <AddQuiz/>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800  py-3  sm:flex sm:flex-row-reverse border-t dark:border-gray-600  mt-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none   sm:ml-3 sm:w-auto sm:text-sm"
                   onClick={() => {
                      setAddQuizModalOpen(false);
                      setQuizModalAnimation(false);
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setAddQuizModalOpen(false);
                      setQuizModalAnimation(false);
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

      {/* Main Heading */}
      <div className="bg-white dark:bg-gray-800 rounded-xl banner-pattern p-6 mb-3">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Settings
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Agents Settings
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Image
              src={avatar}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Olivia Rhye</h2>
              <p className="text-sm text-gray-500">olivia@untitledui.com</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-md">
            Save
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-600 mb-6">
          <nav className="flex space-x-6 text-sm font-medium text-gray-500">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "text-red-600 border-b-2 border-red-600"
                    : "hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "Security" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900">Password</h3>
            <p className="text-sm text-gray-500 mb-6">
              Please enter your current password to change your password.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Current password
                </label>
                <input
                  type="password"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  New password
                </label>
                <input
                  type="password"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-1">
                  Your new password must be more than 8 characters.
                </p>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Confirm new password
                </label>
                <input
                  type="password"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                >
                  Save password
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "General" && (
          <div className="text-gray-700">
            <h3 className="text-lg font-medium mb-2 dark:text-white">
              General Information
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sponsor ID - full width */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Sponsor ID
                </label>
                <input
                  type="text"
                  placeholder="Enter Sponsor ID"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* First Name */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="123 456 789"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Agent@gmail.com"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Date of Birth
                </label>
                <input
                  type="text"
                  placeholder="12-6-1999"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Gender
                </label>
                <select className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 ">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Spain"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* Zip */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Zip
                </label>
                <input
                  type="text"
                  placeholder="90210"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* Address - full width */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 "
                />
              </div>

              {/* State (Dropdown) */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">
                  State
                </label>
                <select className="  text-gray-500 dark:text-gray-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 ">
                  <option>New Mexico</option>
                  <option>California</option>
                  <option>Texas</option>
                  <option>Florida</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Save Button */}
              <div className="col-span-full flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "Quizzes" && (
          <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-800 rounded-md">
            {/* Header Row */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium ">Quizzes</h3>

              <button className="relative overflow-hidden px-4 py-2 text-sm rounded-md text-red-600 border border-red-600 group transition-colors duration-200"
                 onClick={() =>{
                   setAddQuizModalOpen(true);
                  setTimeout(() => setQuizModalAnimation(true), 10);
                 }}
              >
                <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white flex items-center">
                  {" "}
                  <i className="fa-solid fa-plus"></i>
                  <span className="text-sm ml-2 hidden md:block">Add New</span>
                </span>
              </button>
            </div>

            {/* Total Quizzes Card */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Quizzes
              </span>
              <span className="text-xl font-medium text-gray-600 dark:text-gray-300">
                678
              </span>
            </div>
            {/* Quizzes table */}
            <div className="dark:bg-darkcard rounded-2xl shadow-sm overflow-hidden">
              {tableData.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      >
                        Learning Path
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      >
                        Placement
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
                    {tableData.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 "
                      >
                        <td
                          className="px-6 py-4 whitespace-nowrap text-sm"
                          onClick={() => router.push("/settings")}
                        >
                          {item.title}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-sm"
                          onClick={() => router.push("/settings")}
                        >
                          {item.category}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          onClick={() => router.push("/settings")}
                        >
                          {item.learningPath}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-sm"
                          onClick={() => router.push("/settings")}
                        >
                          {item.placement}
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
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "Training" && (
          <div className="text-gray-700 dark:text-gray-200">
            <h3 className="text-lg font-medium mb-4">Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Categories Section */}
              <div className="pr-6 md:border-r border-gray-300 dark:border-gray-600">
                <h4 className="text-md font-semibold mb-2">Categories</h4>
                {categories.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 dark:text-gray-400 w-5 text-right">
                      {idx + 1}.
                    </span>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => updateCategory(idx, e.target.value)}
                      placeholder={`Category ${idx + 1}`}
                      className="flex-1 px-3 py-2 text-gray-500 dark:text-gray-400 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none shadow-sm"
                    />
                    <button className="text-gray-400 dark:text-gray-400 hover:text-gray-700">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 hover:underline"
                >
                  + Add More Category
                </button>
              </div>

              {/* Learning Path Section */}
              <div className="">
                <h4 className="text-md font-semibold mb-2">Learning Path</h4>
                {learningPaths.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 dark:text-gray-400 w-5 text-right">
                      {idx + 1}.
                    </span>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => updateLearningPath(idx, e.target.value)}
                      placeholder={`Learning Path ${idx + 1}`}
                      className="flex-1 px-3 py-2 text-gray-500 dark:text-gray-400 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none shadow-sm"
                    />
                    <button className="text-gray-400 dark:text-gray-400 hover:text-gray-700">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddLearningPath}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 hover:underline"
                >
                  + Add More Learning Path
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
