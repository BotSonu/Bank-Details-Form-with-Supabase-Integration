// components/BankDetailsForm.js
"use client"; // This is a client component
import React, { useState } from "react";
import { supabase } from "@/utils/supabaseclient";
import Image from "next/image";
import image from "../public/image.png";

function BankDetailsForm() {
  // State variables for bank details and error messages
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm(); // Check for validation errors
    setErrors(newErrors);

    const { data, error } = await supabase
      .from("Bank_Details")
      .insert([
        {
          card_number: cardNumber,
          card_holder_name: cardHolderName,
          branch_name: branchName,
          mobile_number: mobileNumber,
          email: email,
        },
      ])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      console.log(data);
      setIsSubmitted(true);
      return;
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit data if no errors
      const bankDetails = {
        cardNumber,
        cardHolderName,
        branchName,
        mobileNumber,
        email,
      };
      console.log("Bank details:", bankDetails);
      // Replace with your logic to send data to server or store it locally
      setCardNumber("");
      setCardHolderName("");
      setBranchName("");
      setMobileNumber("");
      setEmail("");
    }
  };

  // Function to validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!cardNumber) {
      newErrors.cardNumber = "Card number is required";
    }
    if (!cardHolderName) {
      newErrors.cardHolderName = "Card holder name is required";
    }
    if (!branchName) {
      newErrors.branchName = "Branch name is required";
    }
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number (10 digits)";
    }
    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    return newErrors;
  };

  return (

    <div className="container flex flex-wrap justify-center">
      
      <Image
        src={image}
        alt="Bank logo"
        width={630}
        height={100}
        className="mt-5"
      />

      <div
        className="bank-details-form container border p-5 md:w-[600px] h-full ml-4 mt-5 rounded-lg "
        data-theme="forest"
      >
        {isSubmitted ? (
          <div className="success-message text-green-500 text-center">
            <h2>Form submitted successfully!</h2>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg flex flex-col space-y-4 px-4"
          >
            <div
              className="form-group"
              class="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-wrap -mx-3"
            >
              <label htmlFor="cardNumber" class="font-bold">
                Card Number
              </label>
              <input
                type="text"
                class="bg-gray-200 my-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-grey-500"
                className="form-control"
                placeholder="****************"
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              {errors.cardNumber && (
                <div className="alert alert-danger" role="alert">
                  {errors.cardNumber}
                </div>
              )}
            </div>
            <div
              className="form-group"
              class="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-wrap -mx-3"
            >
              <label htmlFor="cardHolderName" class="font-bold">
                Card Holder Name
              </label>
              <input
                type="text"
                class="bg-gray-200 my-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-grey-500"
                className="form-control"
                id="cardHolderName"
                placeholder="John Doe"
                name="cardHolderName"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                required
              />
              {errors.cardHolderName && (
                <div className="alert alert-danger" role="alert">
                  {errors.cardHolderName}
                </div>
              )}
            </div>
            <div
              className="form-group"
              class="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-wrap -mx-3"
            >
              <label htmlFor="branchName" class="font-bold">
                Branch Name
              </label>
              <input
                type="text"
                class="bg-gray-200 my-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-grey-500"
                className="form-control"
                id="branchName"
                placeholder="SBI"
                name="branchName"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                required
              />
              {errors.branchName && (
                <div className="alert alert-danger" role="alert">
                  {errors.branchName}
                </div>
              )}
            </div>
            <div
              className="form-group"
              class="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-wrap -mx-3"
            >
              <label htmlFor="mobileNumber" class="font-bold">
                Mobile Number
              </label>
              <input
                type="tel" // Set input type to tel for phone number formatting
                class="bg-gray-200 my-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-grey-500"
                className="form-control"
                id="mobileNumber"
                placeholder="10-digits"
                name="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
              {errors.mobileNumber && (
                <div
                  className="alert alert-danger text-red-500 text-xs italic"
                  role="alert"
                >
                  {errors.mobileNumber}
                </div>
              )}
            </div>
            <div
              className="form-group"
              class="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-wrap -mx-3"
            >
              <label htmlFor="email" class="font-bold">
                Email
              </label>
              <input
                type="email"
                class="bg-gray-200 my-3 italic appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-grey-500"
                className="form-control"
                id="email"
                placeholder="johndoe@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <div className="alert alert-danger" role="alert">
                  {errors.email}
                </div>
              )}
            </div>
            <button type="submit" class="btn btn-info w-40 mx-40">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default BankDetailsForm;
