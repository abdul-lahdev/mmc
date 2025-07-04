import React, { useState } from 'react';

export default function QuizForm() {
  const [questions, setQuestions] = useState([
    {
      question: '',
      answerType: 'Input',
      options: [''],
    },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;

    if (field === 'answerType' && value === 'Input') {
      updated[index].options = [];
    }

    if (field === 'answerType' && value !== 'Input' && updated[index].options.length === 0) {
      updated[index].options = [''];
    }

    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const addOption = (e, qIndex) => {
    e.preventDefault();
    const updated = [...questions];
    updated[qIndex].options.push('');
    setQuestions(updated);
  };

  const addQuestion = (e) => {
    e.preventDefault();
    setQuestions([
      ...questions,
      { question: '', answerType: 'Input', options: [] },
    ]);
  };

  return (
    <div className="p-3 max-w-full mx-auto bg-white dark:bg-gray-800 ">

      <form className="space-y-6">
        <div className="w-full  mb-4">
                        <label
                          className="block tracking-wide text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                          htmlFor="grid-address"
                        >
                          Quiz Title
                        </label>
                        <input
                          className="appearance-none  bg-gray-50  mb-3 block w-full border-gray-300 text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                          id="grid-address"
                          type="text"
                          placeholder="The Title Of Quiz"
                        />
                      </div>
        {questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
          >
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Question {qIndex + 1}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
                  value={q.question}
                  onChange={(e) =>
                    handleQuestionChange(qIndex, 'question', e.target.value)
                  }
                  placeholder="Enter your question..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Answer Type
                </label>
                <select
                  value={q.answerType}
                  onChange={(e) =>
                    handleQuestionChange(qIndex, 'answerType', e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
                >
                  <option value="Input">Input</option>
                  <option value="Radio">Radio</option>
                  <option value="Dropdown">Dropdown</option>
                </select>
              </div>
            </div>

            {(q.answerType === 'Radio' || q.answerType === 'Dropdown') && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Options
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {q.options.map((opt, optIndex) => (
                    <input
                      key={optIndex}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
                      value={opt}
                      onChange={(e) =>
                        handleOptionChange(qIndex, optIndex, e.target.value)
                      }
                      placeholder={`Option ${optIndex + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={(e) => addOption(e, qIndex)}
                  className="mt-2 text-sm text-red-600 dark:text-red-400 hover:underline"
                >
                  + Add Option
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-start">
          <button
            type="button"
            onClick={addQuestion}
            className=" text-lg text-red-600 hover:text-red-500 font-medium py-2 px-4 rounded-lg hover:underline"
          >
            + Add More Question
          </button>
        </div>
      </form>
    </div>
  );
}
