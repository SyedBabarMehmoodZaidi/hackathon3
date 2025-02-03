"use client"
import { useState } from 'react';

interface CustomerData {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const OrderForm = () => {
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    address: '',
    phone: '',
    email: '',
  });
  const [showModal, setShowModal] = useState<boolean>(false); // State for modal visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order Submitted:', customerData);
    setShowModal(true); // Show the modal after order submission
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Order Form</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={customerData.name}
            onChange={handleChange}
            id="name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg text-gray-700 mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={customerData.address}
            onChange={handleChange}
            id="address"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg text-gray-700 mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={customerData.phone}
            onChange={handleChange}
            id="phone"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={customerData.email}
            onChange={handleChange}
            id="email"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Submit Order
        </button>
      </form>

      {/* Modal (Pop-up) */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Confirmed!</h3>
            <p className="text-gray-600">Thank you for your order, {customerData.name}! We have received your details and will process your order shortly. A confirmation email has been sent to {customerData.email}.</p>
            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
