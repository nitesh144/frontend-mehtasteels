import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, SendHorizonal, Smile, Meh, Frown, ThumbsUp, MessageCircle } from 'lucide-react';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    designation: '',
    mobileNo: '',
    email: '',
    address: '',
    feedback: '',
    serviceQuality: 'Excellent',
    satisfied: 'YES'
  });

  const emotions = {
    1: { icon: Frown, color: 'text-red-500', message: "We're sorry to hear that" },
    2: { icon: Frown, color: 'text-orange-500', message: "We'll work on improving" },
    3: { icon: Meh, color: 'text-yellow-500', message: "Thank you for your feedback" },
    4: { icon: Smile, color: 'text-green-500', message: "We're glad you enjoyed!" },
    5: { icon: ThumbsUp, color: 'text-blue-500', message: "Fantastic! Thank you!" }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setRating(0);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const EmotionDisplay = () => {
    if (!rating) return null;
    const Emotion = emotions[rating].icon;
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`${emotions[rating].color} text-center mb-6`}
      >
        <Emotion className="w-16 h-16 mx-auto mb-2" />
        <p className="text-lg font-medium">{emotions[rating].message}</p>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">We Value Your Feedback</h2>
            <p className="text-blue-100">Help us serve you better with your valuable insights</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center"
            >
              <SendHorizonal className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your feedback has been submitted successfully.</p>
            </motion.div>
          ) : (
            <div className="p-8">
              {/* Rating Section */}
              <div className="mb-8 text-center">
                <p className="text-gray-600 mb-4">How would you rate your experience?</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setRating(star);
                        setStep(2);
                      }}
                      className={`p-2 rounded-full transition-colors duration-200 ${
                        (hoverRating || rating) >= star
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <Star className="w-8 h-8 fill-current" />
                    </motion.button>
                  ))}
                </div>
                <EmotionDisplay />
              </div>

              <AnimatePresence mode="wait">
                {step === 2 && (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter Name Here !"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter Company Name Here !"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                        <input
                          type="text"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter Designation Here !"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile No</label>
                        <input
                          type="tel"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter Here Mobile No."
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="name@example.com"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Quality</label>
                        <select
                          name="serviceQuality"
                          value={formData.serviceQuality}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="Excellent">Excellent</option>
                          <option value="Good">Good</option>
                          <option value="Average">Average</option>
                          <option value="Poor">Poor</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Enter your address..."
                      ></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Feedback</label>
                      <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your experience..."
                      ></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex items-center gap-6"
                    >
                      <label className="block text-sm font-medium text-gray-700">Satisfied?</label>
                      <select
                        name="satisfied"
                        value={formData.satisfied}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                      </select>
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit Feedback
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FeedbackPage;

// import React from 'react';
// import { MessageCircle } from 'lucide-react';

// const FeedbackPage = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-md w-full max-w-md p-8">
//         <div className="flex items-center mb-6">
//           <MessageCircle className="h-8 w-8 mr-2 text-primary-500" />
//           <h2 className="text-2xl font-bold">Give us your feedback</h2>
//         </div>
//         <form className="space-y-4">
//           {/* Form fields remain the same */}
//           <div>
//             <label htmlFor="name" className="block font-medium mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block font-medium mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="feedback" className="block font-medium mb-1">
//               Feedback
//             </label>
//             <textarea
//               id="feedback"
//               name="feedback"
//               rows={4}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Share your thoughts and suggestions"
//               required
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
//           >
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;
