import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [fieldStatus, setFieldStatus] = useState({});

  const validateField = (name, value) => {
    let error = "";
    let suggestion = "";
    let valid = false;

    switch (name) {
      case "user_name":
        if (!value.trim()) {
          error = "Name is required";
          suggestion = "Please enter your name";
        } else if (!/^[a-zA-Z\s'-]{2,50}$/.test(value)) {
          error = "Invalid name format";
          suggestion =
            "Name should only contain letters, spaces, hyphens, and apostrophes";
        } else if (value.length < 2) {
          error = "Name is too short";
          suggestion = "Name should be at least 2 characters";
        } else {
          valid = true;
        }
        break;

      case "user_email":
        if (!value.trim()) {
          error = "Email is required";
          suggestion = "Please enter your email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
          suggestion = "Please enter a valid email (e.g., name@example.com)";
        } else {
          valid = true;
        }
        break;

      case "user_phone":
        if (value && !/^[0-9+()\s-]{7,20}$/.test(value)) {
          error = "Invalid phone format";
          suggestion =
            "Phone should contain only numbers, +, -, (), and spaces (7-20 characters)";
        } else {
          valid = true;
        }
        break;

      case "subject":
        if (!value.trim()) {
          error = "Subject is required";
          suggestion = "Please enter a subject";
        } else if (value.length < 5) {
          error = "Subject is too short";
          suggestion = "Subject should be at least 5 characters";
        } else if (value.length > 100) {
          error = "Subject is too long";
          suggestion = "Subject should be less than 100 characters";
        } else {
          valid = true;
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
          suggestion = "Please enter your message";
        } else if (value.length < 10) {
          error = "Message is too short";
          suggestion = "Message should be at least 10 characters";
        } else if (value.length > 1000) {
          error = "Message is too long";
          suggestion = "Message should be less than 1000 characters";
        } else {
          valid = true;
        }
        break;

      default:
        break;
    }

    return { error, suggestion, valid };
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const { error, suggestion, valid } = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFieldStatus((prev) => ({ ...prev, [name]: { suggestion, valid } }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (touched[name]) {
      const { error, suggestion, valid } = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
      setFieldStatus((prev) => ({ ...prev, [name]: { suggestion, valid } }));
    }
  };

  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    const newFieldStatus = {};
    let formIsValid = true;

    for (let [name, value] of formData.entries()) {
      const { error, suggestion, valid } = validateField(name, value);
      if (error) {
        newErrors[name] = error;
        newFieldStatus[name] = { suggestion, valid };
        formIsValid = false;
      }
    }

    setErrors(newErrors);
    setFieldStatus(newFieldStatus);
    setTouched({
      user_name: true,
      user_email: true,
      subject: true,
      message: true,
    });

    return formIsValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate email sending
    setTimeout(() => {
      console.log(
        "Form submitted:",
        Object.fromEntries(new FormData(form.current))
      );
      setSubmitStatus("success");
      form.current.reset();
      setIsSubmitting(false);
      setErrors({});
      setFieldStatus({});

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            className="absolute rounded-full opacity-5 blur-xl"
            style={{
              background: `linear-gradient(45deg, ${
                i % 2 === 0 ? "#0891b2" : "#0d9488"
              }, ${i % 2 === 0 ? "#06b6d4" : "#14b8a6"})`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px),
                            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg inline-flex items-center"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
              Let's Connect
            </motion.span>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold mt-6 mb-4"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-600"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-600 opacity-20"></div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-xl mr-4 text-white">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-cyan-600 dark:text-cyan-400">
                        Phone
                      </h4>
                      <a
                        href="tel:+917061084181"
                        className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        +91-7061084181
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-xl mr-4 text-white">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-cyan-600 dark:text-cyan-400">
                        Email
                      </h4>
                      <a
                        href="mailto:kumaripriyankasbg30@gmail.com"
                        className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
                      >
                        kumaripriyankasbg30@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-3 rounded-xl mr-4 text-white">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-cyan-600 dark:text-cyan-400">
                        Location
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        Jharkhand, India
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                  <a
                    href="#contact-form"
                    className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent hover:underline cursor-pointer transition-all"
                  >
                    Connect with me
                  </a>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-20"></div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://www.linkedin.com/in/priyanka-singh-0580bb241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="https://github.com/Kumaripriynka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-20"></div>
              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact-form"
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                noValidate
              >
                {/* Form fields remain the same as before */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-slate-700 dark:text-slate-300 font-medium mb-2"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className={`w-full px-4 py-3 pl-10 border ${
                        errors.user_name
                          ? "border-red-500"
                          : "border-slate-200 dark:border-slate-700"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white transition`}
                      placeholder="Enter your name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {fieldStatus.user_name?.valid ? (
                        <FaCheck className="text-green-500" />
                      ) : errors.user_name ? (
                        <FaExclamationTriangle className="text-red-500" />
                      ) : null}
                    </div>
                  </div>
                  {errors.user_name && (
                    <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-sm rounded-lg">
                      <div className="font-medium">{errors.user_name}</div>
                      <div>{fieldStatus.user_name?.suggestion}</div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-slate-700 dark:text-slate-300 font-medium mb-2"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className={`w-full px-4 py-3 pl-10 border ${
                        errors.user_email
                          ? "border-red-500"
                          : "border-slate-200 dark:border-slate-700"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white transition`}
                      placeholder="Enter your email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {fieldStatus.user_email?.valid ? (
                        <FaCheck className="text-green-500" />
                      ) : errors.user_email ? (
                        <FaExclamationTriangle className="text-red-500" />
                      ) : null}
                    </div>
                  </div>
                  {errors.user_email && (
                    <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-sm rounded-lg">
                      <div className="font-medium">{errors.user_email}</div>
                      <div>{fieldStatus.user_email?.suggestion}</div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-slate-700 dark:text-slate-300 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      type="tel"
                      id="phone"
                      name="user_phone"
                      className={`w-full px-4 py-3 pl-10 border ${
                        errors.user_phone
                          ? "border-red-500"
                          : "border-slate-200 dark:border-slate-700"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white transition`}
                      placeholder="Enter your phone (optional)"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {fieldStatus.user_phone?.valid ? (
                        <FaCheck className="text-green-500" />
                      ) : errors.user_phone ? (
                        <FaExclamationTriangle className="text-red-500" />
                      ) : null}
                    </div>
                  </div>
                  {errors.user_phone && (
                    <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-sm rounded-lg">
                      <div className="font-medium">{errors.user_phone}</div>
                      <div>{fieldStatus.user_phone?.suggestion}</div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-slate-700 dark:text-slate-300 font-medium mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className={`w-full px-4 py-3 pl-10 border ${
                        errors.subject
                          ? "border-red-500"
                          : "border-slate-200 dark:border-slate-700"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white transition`}
                      placeholder="Subject of your message"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {fieldStatus.subject?.valid ? (
                        <FaCheck className="text-green-500" />
                      ) : errors.subject ? (
                        <FaExclamationTriangle className="text-red-500" />
                      ) : null}
                    </div>
                  </div>
                  {errors.subject && (
                    <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-sm rounded-lg">
                      <div className="font-medium">{errors.subject}</div>
                      <div>{fieldStatus.subject?.suggestion}</div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-slate-700 dark:text-slate-300 font-medium mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <motion.textarea
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className={`w-full px-4 py-3 pl-10 border ${
                        errors.message
                          ? "border-red-500"
                          : "border-slate-200 dark:border-slate-700"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white transition`}
                      placeholder="Your message here..."
                      onBlur={handleBlur}
                      onChange={handleChange}
                    ></motion.textarea>
                    <div className="absolute top-3 left-3 pl-3">
                      {fieldStatus.message?.valid ? (
                        <FaCheck className="text-green-500" />
                      ) : errors.message ? (
                        <FaExclamationTriangle className="text-red-500" />
                      ) : null}
                    </div>
                  </div>
                  {errors.message && (
                    <div className="mt-2 p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 text-sm rounded-lg">
                      <div className="font-medium">{errors.message}</div>
                      <div>{fieldStatus.message?.suggestion}</div>
                    </div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-lg flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
