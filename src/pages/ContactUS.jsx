// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Building2, Truck } from 'lucide-react';
// import toast from 'react-hot-toast';


// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const features = [
//     {
//       icon: <Building2 className="h-6 w-6 text-blue-600" />,
//       title: "50,000 sq. ft. Stockyard",
//       description: "Fully equipped facility for efficient inventory management"
//     },
//     {
//       icon: <Truck className="h-6 w-6 text-blue-600" />,
//       title: "Global Delivery",
//       description: "Worldwide shipping with reliable logistics partners"
//     }
//   ];

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     //EmailJS Parameters
//     const serviceId= 'service_2v93lhc'
//     const templateId= 'template_oswu58k'
//     const publicKey= 'xyN26aeOUPYEV-Apz'

//     try{
//       await emailjs.send(
//         serviceId, templateId, formData, publicKey);

//         setSubmitted(true);
//         setFormData({
//           name:'',
//           email:'',
//           phone:'',
//           company: '',
//           message:'',
//         });
//     }catch(error){
//       toast.error('failed to send email', error)
//     }finally{
//       setLoading(false);
//     }
//   };
//     // Simulate API call
//   //   await new Promise(resolve => setTimeout(resolve, 1000));
//   //   setSubmitted(true);
//   //   setLoading(false);
//   //   setFormData({
//   //     name: '',
//   //     email: '',
//   //     phone: '',
//   //     company: '',
//   //     productType: '',
//   //     quantity: '',
//   //     message: '',
//   //   });
//   // };

  

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Whether you're looking for product information, quotations, or support, 
//             our team is here to help you with all your steel requirements
//           </p>
//         </div>

//         {/* Features Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 hover:border-blue-500 transition-colors duration-300">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 bg-blue-100 rounded-full">
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact Information Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//           {/* Phone Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="p-4 bg-blue-100 rounded-full">
//                 <Phone className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2">Call Us</h3>
//                 <p className="text-gray-600">+91-7880105811</p>
//                 <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
//                   <Clock className="h-4 w-4 mr-2" />
//                   <span>Mon-Sat 9:30 AM - 7:00 PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Email Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="p-4 bg-blue-100 rounded-full">
//                 <Mail className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2">Email Us</h3>
//                 <p className="text-gray-600">mehta_steels@rediffmail.com</p>
//                 {/* <p className="text-gray-600"></p> */}
//               </div>
//             </div>
//           </div>

//           {/* Location Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="p-4 bg-blue-100 rounded-full">
//                 <MapPin className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
//                 <p className="text-gray-600">137-LIGHT INDUSTRIAL AREA Bhilai, CHHATTISGARH PIN:490026, INDIA</p>
//                 {/* <p className="text-gray-600">India</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
//           <h2 className="text-3xl font-semibold mb-8 text-center">Send us a Message</h2>

//           {submitted && (
//             <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4">
//               <p className="text-green-800">Thank you for reaching out! Our team will get back to you within 24 hours.</p>
//             </div>
//           )}

//           {/* Tabs */}
//           <div className="mb-8">
//             <div className="flex justify-center space-x-4 border-b">
//               <button
//                 onClick={() => setActiveTab('inquiry')}
//                 className={`pb-2 px-4 ${activeTab === 'inquiry' 
//                   ? 'border-b-2 border-blue-500 text-blue-600' 
//                   : 'text-gray-500'}`}
//               >
//                 General Inquiry
//               </button>
//               {/* <button
//                 onClick={() => setActiveTab('quote')}
//                 className={`pb-2 px-4 ${activeTab === 'quote' 
//                   ? 'border-b-2 border-blue-500 text-blue-600' 
//                   : 'text-gray-500'}`}
//               >
//                 Request Quote
//               </button> */}
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {activeTab === 'quote' && (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Product Type *
//                     </label>
//                     <select
//                       name="productType"
//                       required
//                       value={formData.productType}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                     >
//                       <option value="">Select Product Type</option>
//                       <option value="flat">Flat Steel Products</option>
//                       <option value="long">Long Steel Products</option>
//                       <option value="rail">Rail Products</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Quantity (MT) *
//                     </label>
//                     <input
//                       type="number"
//                       name="quantity"
//                       required
//                       value={formData.quantity}
//                       onChange={handleChange}
//                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                       placeholder="Enter quantity in metric tons"
//                     />
//                   </div>
//                 </>
//               )}

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="john@company.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="+91 XXXXX XXXXX"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="Your Company Ltd."
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Message *
//               </label>
//               <textarea
//                 name="message"
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                 placeholder="How can we help you?"
//               />
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="inline-flex items-center justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:opacity-50"
//               >
//                 {loading ? 'Sending...' : 'Send Message'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Clock } from 'lucide-react';
// import emailjs from 'emailjs-com';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // EmailJS parameters
//     const serviceId = 'service_2v93lhc';
//     const templateId = 'template_qmyu07b';
//     const publicKey = 'xyN26aeOUPYEV-Apz';

//     try {
//       await emailjs.send(
//         serviceId,
//         templateId,
//         formData,
//         publicKey
//       );

//       setSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('Failed to send email:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Whether you're looking for product information or support, our team is here to help you.
//           </p>
//         </div>

//         {/* Contact Information Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//           {/* Phone Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="p-4 bg-blue-100 rounded-full">
//                 <Phone className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2">Call Us</h3>
//                 <p className="text-gray-600">+91-7880105811</p>
//                 <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
//                   <Clock className="h-4 w-4 mr-2" />
//                   <span>Mon-Sat 9:30 AM - 7:00 PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Email Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="p-4 bg-blue-100 rounded-full">
//                 <Mail className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2">Email Us</h3>
//                 <p className="text-gray-600">mehta_steels@rediffmail.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Location Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="p-4 bg-blue-100 rounded-full">
//                 <MapPin className="h-8 w-8 text-blue-600" />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
//                 <p className="text-gray-600">137-LIGHT INDUSTRIAL AREA Bhilai, CHHATTISGARH PIN:490026, INDIA</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
//           <h2 className="text-3xl font-semibold mb-8 text-center">Send us a Message</h2>

//           {submitted && (
//             <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4">
//               <p className="text-green-800">Thank you for reaching out! Our team will get back to you within 24 hours.</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Full Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="john@company.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="+91 XXXXX XXXXX"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Company Name</label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                   placeholder="Your Company Ltd."
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Message *</label>
//               <textarea
//                 name="message"
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                 placeholder="How can we help you?"
//               />
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="inline-flex items-center justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:opacity-50"
//               >
//                 {loading ? 'Sending...' : 'Send Message'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS parameters
    const serviceId = 'service_2v93lhc';
    const templateId = 'template_qmyu07b';
    const publicKey = 'xyN26aeOUPYEV-Apz';

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 font-proxima">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700 mb-10">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Guided by the principles of service and dedication, we’re here to assist you with all your steel needs.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 ">
          {[
            {
              icon: <Phone className="h-8 w-8 text-blue-600" />,
              // title: "Call Us",
              content: "+91-7880105811",
              subContent: "Mon-Sat 9:30 AM - 7:00 PM",
              subIcon: <Clock className="h-4 w-4 mr-2 text-blue-800" />,
            },
            {
              icon: <Mail className="h-8 w-8 text-blue-600" />,
              // title: "Email Us",
              content: "mehta_steels@rediffmail.com",
            },
            {
              icon: <MapPin className="h-8 w-8 text-blue-600" />,
              content: "137-Light Industrial Area Bhilai, Chhattisgarh Pin:490026, INDIA",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 "
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-blue-100 rounded-full">{item.icon}</div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xl">{item.content}</p>
                  {item.subContent && (
                    <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                      {item.subIcon}
                      <span>{item.subContent}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-5xl text-blue-700 font-bold mb-8 text-center">Have Some Questions?</h2>

          {submitted && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-green-800">
                Thank you for reaching out! Our team will respond to your inquiry within 24 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name *", name: "name", type: "text", placeholder: "John Doe", required: true },
                { label: "Email *", name: "email", type: "email", placeholder: "john@company.com", required: true },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                { label: "Company Name", name: "company", type: "text", placeholder: "Your Company Ltd." },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-lg font-medium text-gray-700">{field.label}</label>
                  <input
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Message *</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                placeholder="How can we help you?"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center h-[35px] w-[70px] border border-transparent shadow-sm text-lg rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

