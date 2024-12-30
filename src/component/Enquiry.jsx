import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Mail, Phone, MapPin, Box, Building2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const FormInput = ({ icon: Icon,
  label,
  type,
  placeholder,
  options = [],
  name,
  value,
  onChange, }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <Icon size={18} />
        </div>
        {type === 'select' ? (
          <select 
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
            {options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
          name={name}
          value={value || ""}
          onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
          />
        )}
      </div>
    </div>
  );
};

const Enquiry = ({product, onClose}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    product: product ||"",
    quantity:"",
    companyName: "",
    pincode: "",
    email: "",
    mobile: "",
  });

  const products = [
    'Selecte Product',
    'MS plate',
    'HR Sheets & Coil',
    'MS Angle',
    'Crane Rail',
    'Rail',
    'MS Beam',
    'MS Channel',
    'MS Flat',
    'Chequered Plate',

  ];

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
      setFormData({...formData, [name]: value});
   }

   const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch("http://localhost:5000/send-email",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok){
        toast.success("Email sent successfully!")
      }else{
        toast.error("failed to send email.",);
      }
    }catch(error){
      //console.error("Error:");
      toast.error("Something went wrong!")
    }
   };

 
  return (
    <div className="fixed left-[50px] top-6 z-50 font-proxima">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Conditionally render the "Buy Now" button only when form is closed */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900
                     text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-500/30 
                     transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* <Package className="" size={20} /> */}
          <span className="font-semibold">Buy Now</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className="ml-1" />
          </motion.div>
        </motion.button>
      )}

      {/* Enquiry Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-10 w-96 max-h-[850px] overflow-y-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-white font-semibold text-lg">Product Enquiry</h3>
                  <p className="text-blue-100 text-sm">Fill in the details below</p>
                </div>
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-200">
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-5 bg-white/50 backdrop-blur-lg space-y-3">
                <form onSubmit={handleSubmit}>
                  <FormInput
                    icon={Box}
                    label="Select Product"
                    type="select"
                    name="product"
                    options={products}
                    value={formData.product}
                    onChange={handleInputChange}
                  />

                  <FormInput
                    icon={Package}
                    label="Quantity"
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity required"
                    value={formData.quantity}
                    onChange={handleInputChange}
                  />

                  <FormInput
                    icon={Building2}
                    label="Company Name"
                    type="text"
                    name="companyName"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />

                  <FormInput
                    icon={MapPin}
                    label="Pincode"
                    type="text"
                    name="pincode"
                    placeholder="Delivery pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                  />

                  <FormInput
                    icon={Mail}
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <div className="flex space-x-2">
                      <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
                        <option>+91</option>
                      </select>
                      <div className="relative flex-1 group">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                          <Phone size={18} />
                        </div>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Enter mobile number"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2.5 pb-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.button
                  type='submit'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold 
                           py-3 mt-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300"
                  >
                    Submit
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Enquiry;

