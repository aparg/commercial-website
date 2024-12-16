import React from "react";
import { CgGoogle } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";

const ClientExperience = () => {
  const reviews = [
    {
      name: "Ashdeep Kaur Sehmbi",
      date: "15 days ago",
      message:
        "I've been working as an Admin at Elixir Real Estate for almost a year...",
    },
    {
      name: "Amandeep Kaur",
      date: "22 days ago",
      message:
        "I'm really happy to be a part of the ELIXIR team. After completing my post...",
    },
    {
      name: "Pawandeep Kaur Thind",
      date: "1 month ago",
      message:
        "I had a privilege working with Mayank Ji from Elixir Real Estate. He is...",
    },
    {
      name: "Mandeep Singh",
      date: "2 months ago",
      message:
        "We were looking for a house to rent and talked to many brokers and we...",
    },
    {
      name: "Rishi Bali",
      date: "2 months ago",
      message:
        "We had an impeccable experience working with Mudit Mehta. We were...",
    },
  ];

  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-2">
        CLIENTS EXPERIENCES
      </h2>
      <p className="text-center text-gray-600 mb-8">What our customers say</p>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <img src="/google-full.webp" alt="Google Reviews" className="w-24" />
          <div className="text-center">
            <h3 className="text-4xl font-bold">5.0</h3>
            <div className="flex text-yellow-500">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>&#9733;</span> // Unicode star character
                ))}
            </div>
            <p className="text-gray-500">(153)</p>
          </div>
        </div>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Review us on Google
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex text-yellow-500 mb-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
            </div>
            <p className="text-gray-700 mb-4">{review.message}</p>
            <div className="flex items-center">
              {/* <img
                src={review.icon}
                alt="Google Verified"
                className="w-6 h-6 mr-2"
              /> */}
              <img src="/google-icon.png" className="w-5 h-5 mr-4" />
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientExperience;
