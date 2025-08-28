import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const navigate = useNavigate();
  const cardNumberRef = useRef();
  const expiryRef = useRef();
  const cvvRef = useRef();
  const paypalRef = useRef();

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleConfirm = () => {
    if (selectedMethod === "Visa" || selectedMethod === "Mastercard") {
      const cardNumber = cardNumberRef.current.value.trim();
      const expiry = expiryRef.current.value.trim();
      const cvv = cvvRef.current.value.trim();

      if (!cardNumber || !expiry || !cvv) {
        Swal.fire("Error", "Please fill in all card details.", "error");
        return;
      }

      Swal.fire("Success", "Payment confirmed successfully!", "success").then(
        () => {
          navigate("/");
        }
      );
    } else if (selectedMethod === "PayPal") {
      const email = paypalRef.current.value.trim();

      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        Swal.fire("Error", "Please enter a valid PayPal email.", "error");
        return;
      }

      Swal.fire("Success", "Payment confirmed successfully!", "success").then(
        () => {
          navigate("/");
        }
      );
    } else {
      Swal.fire("Error", "Please choose a payment method.", "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 shadow rounded w-full">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
        Choose Payment Method
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["Visa", "Mastercard", "PayPal"].map((method) => (
          <button
            key={method}
            className={`px-5 py-2 rounded border transition text-sm sm:text-base ${
              selectedMethod === method
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => handleMethodChange(method)}
          >
            {method}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {selectedMethod === "Visa" || selectedMethod === "Mastercard" ? (
          <>
            <h3 className="text-lg font-medium text-gray-700 dark:text-white">
              Enter Card Details
            </h3>
            <input
              ref={cardNumberRef}
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
              required
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                ref={expiryRef}
                type="text"
                placeholder="MM/YY"
                className="w-full sm:w-1/2 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
                required
              />
              <input
                ref={cvvRef}
                type="text"
                placeholder="CVV"
                className="w-full sm:w-1/2 px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </>
        ) : selectedMethod === "PayPal" ? (
          <>
            <h3 className="text-lg font-medium text-gray-700 dark:text-white">
              PayPal Email
            </h3>
            <input
              ref={paypalRef}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
              required
            />
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Please choose a payment method.
          </p>
        )}
      </div>

      {selectedMethod && (
        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
        >
          Confirm Payment
        </button>
      )}
    </div>
  );
};

export default Checkout;
