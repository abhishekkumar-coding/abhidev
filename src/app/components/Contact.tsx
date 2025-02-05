import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
    return (
        <div className='w-full bg-[#050709] py-10'>
            <div className='max-w-6xl flex flex-col gap-14 md:gap-0 md:flex-row  items-center justify-evenly mx-auto px-2 md:px-0'>
                <form action="" className='bg-[#140C1C] rounded-md max-w-lg box-border p-8'>
                    <div className='w-full mb-4'>
                        <h1 className='text-3xl font-bold my-2 bg-gradient-to-r text-transparent bg-clip-text from-[#1E40AF] to-[#D1D5DB]'>Let&#39;s Connect</h1>
                        <p className='text-base text-[#D1D5DB]'>Have a project in mind or just want to say hello? Fill out the form below, and I&#39;ll get back to you as soon as possible!</p>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className='md:col-span-1 col-span-2 w-full'>
                            <input type="text" placeholder='First Name' className='py-2 pl-6 box-border w-full text-[#D1D5DB] rounded bg-[#050709]' />
                        </div>
                        <div className='md:col-span-1 col-span-2 w-full'>
                            <input type="text" placeholder='Last Name' className='py-2 pl-6 box-border w-full text-[#D1D5DB] rounded bg-[#050709]' />
                        </div>
                        <div className='md:col-span-1 col-span-2 w-full'>
                            <input type="text" placeholder='Email' className='py-2 col-span-2 pl-6 w-full text-[#D1D5DB] box-border rounded bg-[#050709]' />
                        </div>
                        <div className='md:col-span-1 col-span-2 w-full'>
                            <input type="text" placeholder='Phone' className='py-2 pl-6 box-border w-full text-[#D1D5DB] rounded bg-[#050709]' />
                        </div>
                        <div className='col-span-2 w-full'>
                            <select
                                id="reason"
                                name="reason" className='py-2 w-full text-white pl-6 col-span-2 box-border rounded bg-[#050709]'>
                                <option value="" disabled defaultValue="Select an option<">Select an option</option>
                                <option value="general">General Inquiry</option>
                                <option value="collaboration">Project Collaboration</option>
                                <option value="freelance">Freelance Opportunity</option>
                                <option value="job">Job Offer</option>
                                <option value="support">Technical Support</option>
                                <option value="feedback">Feedback/Suggestions</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='w-full col-span-2'>
                            <textarea name="Message" id="Message" placeholder='Message' className='p-2 text-white  col-span-2 w-full box-border rounded bg-[#050709]' rows={4}></textarea>
                        </div>
                    </div>
                    <button className='bg-[#1E40AF] py-2 px-6 my-4 rounded-md text-[#D1D5DB] text-xl hover:bg-[#1E3A8A] transition-all duration-200'>
                            Submit
                        </button>
                </form>
                <div className='w-full mb-10 sm:mb-0 md:w-1/3 flex flex-col items-start gap-6'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='text-4xl w-14 text-center h-14 flex items-center justify-center bg-[#1E40AF] rounded-full'><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} /></div>
                        <div>
                            <h1 className='text-2xl text-[#D1D5DB] font-semibold'>Phone</h1>
                            <h2 className='text-xl text-[#D1D5DB]'>+917668196232</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='text-4xl w-14 text-center h-14 flex items-center justify-center bg-[#1E40AF] rounded-full'><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /></div>
                        <div>
                            <h1 className='text-2xl text-[#D1D5DB] font-semibold'>Email Address</h1>
                            <h2 className='text-xl text-[#D1D5DB]'>abhiwebdev2.0@gmail.com</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='text-4xl w-14 text-center h-14 flex items-center justify-center bg-[#1E40AF] rounded-full'><FontAwesomeIcon icon={faMap} style={{color: "#ffffff",}} /></div>
                        <div>
                            <h1 className='text-2xl text-[#D1D5DB] font-semibold'>Address</h1>
                            <h2 className='text-xl text-[#D1D5DB]'>Noida, Utter Pradesh, India</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact