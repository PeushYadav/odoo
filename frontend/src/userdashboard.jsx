import React from "react";

const UserDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">ReWear</h1>
        
      </header>

      <h2 className="text-xl font-semibold mb-4">Welcome, Priya!</h2>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg p-6 shadow">
        {/* Profile Image Section */}
                  <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/200x200"
              alt="Uploaded Item"
              className="rounded-lg w-60 h-auto"
            />
        </div>

        {/* Uploaded Items Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Uploaded Items</h3>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <p className="font-bold">Priya</p>
            <p className="text-sm text-gray-600">Uploaded Items: 250 ptz</p>
            <p className="mt-2 font-medium">Striped Smisha</p>
            <p className="text-sm text-gray-500 mt-1">
              Casual white smit m*r'14s black horizontal atlitsie. Round necktime, short alexves,
              and a resuas*ith.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              Swap Request
            </button>
            <button className="border border-teal-600 text-teal-600 px-4 py-2 rounded hover:bg-teal-50">
              Redeem via Points
            </button>
          </div>

          <p className="mt-3 text-sm text-green-600 font-medium">Available</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;