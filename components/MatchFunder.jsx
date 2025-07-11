import { useState } from 'react';

export default function MatchFunder() {
    const [step, setStep] = useState(1);
    const [selectedFunders, setSelectedFunders] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const funders = [
        { id: 1, name: 'Oscar Téllez Bagur', locations: 'Turkey, USA', amount: '$1.2M' },
        { id: 2, name: 'Oscar Téllez Bagur', locations: 'Turkey, USA', amount: '$1.2M' },
        { id: 3, name: 'Oscar Téllez Bagur', locations: 'Turkey, USA', amount: '$1.2M' },
    ];

    const templates = Array(4).fill({
        title: 'Template Title',
        body: `Hi [First Name],\n\nI hope you’re doing well! I wanted to introduce you to [Your Product/Service Name], a solution designed to help [briefly state the core benefit — e.g., streamline your project workflows / boost your sales productivity / simplify team collaboration]...`
    });

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Stepper */}
            <div className="flex items-center space-x-4 justify-center">
                <div className='flex flex-col  items-center gap-2'>
                    <div className={`w-[40px] h-[40px] ${step >= 1 ? 'bg-[#2B7FFF]' : 'bg-[#2B7FFF]'} rounded-[50%] flex items-center justify-center`}>
                        <div className='w-[35px] h-[35px] bg-[#fff] rounded-[50%] flex items-center justify-center'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.33333 7.08333H10.5M6.33333 10H13M6.33333 15V16.9463C6.33333 17.3903 6.33333 17.6123 6.42436 17.7263C6.50352 17.8255 6.62356 17.8832 6.75045 17.8831C6.89636 17.8829 7.06973 17.7442 7.41646 17.4668L9.40434 15.8765C9.81043 15.5517 10.0135 15.3892 10.2396 15.2737C10.4402 15.1712 10.6537 15.0963 10.8743 15.051C11.1231 15 11.3831 15 11.9031 15H14C15.4001 15 16.1002 15 16.635 14.7275C17.1054 14.4878 17.4878 14.1054 17.7275 13.635C18 13.1002 18 12.4001 18 11V6.5C18 5.09987 18 4.3998 17.7275 3.86502C17.4878 3.39462 17.1054 3.01217 16.635 2.77248C16.1002 2.5 15.4001 2.5 14 2.5H7C5.59987 2.5 4.8998 2.5 4.36502 2.77248C3.89462 3.01217 3.51217 3.39462 3.27248 3.86502C3 4.3998 3 5.09987 3 6.5V11.6667C3 12.4416 3 12.8291 3.08519 13.147C3.31635 14.0098 3.99022 14.6836 4.85295 14.9148C5.17087 15 5.55836 15 6.33333 15Z" stroke="#2B7FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        </div>
                    </div>
                    <p>Match Funders</p>
                </div>
                <div className="w-10 border-t-2 border-[#2B7FFF]"></div>
                <div className='flex flex-col  items-center gap-2'>
                    <div className={`w-[40px] h-[40px] ${step >= 2 ? 'bg-[#2B7FFF]' : 'bg-[#F2F4F7]'} rounded-[50%] flex items-center justify-center`}>
                        <div className='w-[35px] h-[35px] bg-[#fff] rounded-[50%] flex items-center justify-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.6654 9.16699H6.66536M8.33203 12.5003H6.66536M13.332 5.83366H6.66536M16.6654 8.75033V5.66699C16.6654 4.26686 16.6654 3.5668 16.3929 3.03202C16.1532 2.56161 15.7707 2.17916 15.3003 1.93948C14.7656 1.66699 14.0655 1.66699 12.6654 1.66699H7.33203C5.9319 1.66699 5.23183 1.66699 4.69706 1.93948C4.22665 2.17916 3.8442 2.56161 3.60451 3.03202C3.33203 3.5668 3.33203 4.26686 3.33203 5.66699V14.3337C3.33203 15.7338 3.33203 16.4339 3.60451 16.9686C3.8442 17.439 4.22665 17.8215 4.69706 18.0612C5.23183 18.3337 5.9319 18.3337 7.33203 18.3337H9.58203M18.332 18.3337L17.082 17.0837M17.9154 15.0003C17.9154 16.6112 16.6095 17.917 14.9987 17.917C13.3879 17.917 12.082 16.6112 12.082 15.0003C12.082 13.3895 13.3879 12.0837 14.9987 12.0837C16.6095 12.0837 17.9154 13.3895 17.9154 15.0003Z" stroke={`${step >= 2 ? '#2B7FFF' : '#90A1B9'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        </div>
                    </div>
                    <p>Select Template</p>
                </div>
                <div className={`w-10 border-t-2  ${step >= 2 ? 'border-[#2B7FFF]' : 'border-[#F2F4F7]'}`}></div>
                <div className='flex flex-col items-center gap-2'>
                    <div className={`w-[40px] h-[40px] ${step >= 3 ? 'bg-[#2B7FFF]' : 'bg-[#F2F4F7]'} rounded-[50%] flex items-center justify-center`}>
                        <div className='w-[35px] h-[35px] bg-[#fff] rounded-[50%] flex items-center justify-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.6654 10.417V5.66699C16.6654 4.26686 16.6654 3.5668 16.3929 3.03202C16.1532 2.56161 15.7707 2.17916 15.3003 1.93948C14.7656 1.66699 14.0655 1.66699 12.6654 1.66699H7.33203C5.9319 1.66699 5.23183 1.66699 4.69706 1.93948C4.22665 2.17916 3.8442 2.56161 3.60451 3.03202C3.33203 3.5668 3.33203 4.26686 3.33203 5.66699V14.3337C3.33203 15.7338 3.33203 16.4339 3.60451 16.9686C3.8442 17.439 4.22665 17.8215 4.69706 18.0612C5.23183 18.3337 5.9319 18.3337 7.33203 18.3337H9.9987M11.6654 9.16699H6.66536M8.33203 12.5003H6.66536M13.332 5.83366H6.66536M12.082 15.8337L13.7487 17.5003L17.4987 13.7503" stroke={`${step >= 2 ? '#2B7FFF' : '#90A1B9'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        </div>
                    </div>
                    <p>Send Offer</p>
                </div>
                {/* <div className={`w-10 border-t-2  ${step >= 3 ? 'border-[#2B7FFF]' : 'border-[#F2F4F7]'}`}></div> */}

                {/* hwy */}

            </div>

            {/* Step 1: Select Funders */}
            {step === 1 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Select relevant funders</h2>
                    <div className="space-y-2">
                        {funders.map(funder => (
                            <div key={funder.id} className="flex items-center justify-between border p-4 rounded">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedFunders.includes(funder.id)}
                                        onChange={() => {
                                            setSelectedFunders(prev =>
                                                prev.includes(funder.id)
                                                    ? prev.filter(id => id !== funder.id)
                                                    : [...prev, funder.id]
                                            );
                                        }}
                                    />
                                    <div>
                                        <p className="font-medium">{funder.name}</p>
                                        <p className="text-sm text-gray-500">{funder.locations}</p>
                                    </div>
                                </label>
                                <p className="font-semibold">{funder.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Select Template */}
            {step === 2 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Select Template</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {templates.map((template, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedTemplate(index)}
                                className={`p-4 border rounded cursor-pointer ${selectedTemplate === index ? 'border-blue-500' : 'border-gray-300'}`}
                            >
                                <p className="font-medium">{template.title}</p>
                                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{template.body.substring(0, 120)}...</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 3: Send Offer */}
            {step === 3 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Send Offer</h2>
                    <form className="space-y-4">
                        <input type="email" placeholder="To" className="w-full border p-2 rounded" />
                        <input type="text" placeholder="Cc" className="w-full border p-2 rounded" />
                        <input type="text" placeholder="Bcc" className="w-full border p-2 rounded" />
                        <input type="text" placeholder="Subject" className="w-full border p-2 rounded" />
                        <textarea placeholder="Description" className="w-full border p-2 rounded min-h-[120px]"></textarea>
                    </form>
                </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between pt-4">
                <button
                    className="px-4 py-2 bg-gray-200 rounded"
                    onClick={() => setStep(prev => Math.max(1, prev - 1))}
                >
                    Cancel
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => setStep(prev => Math.min(3, prev + 1))}
                >
                    Proceed
                </button>
            </div>
        </div>
    );
}
