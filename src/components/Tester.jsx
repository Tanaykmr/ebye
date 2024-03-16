import React, { useState } from 'react';
const Tester = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [score, setScore] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-secondary mx-[60px]">Tester</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="uniqueId">
            Unique ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="uniqueId"
            type="text"
            placeholder="Unique ID"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="score">
            Score of Product
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="score"
            type="text"
            placeholder="Score of Product"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price of Product
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Price of Product"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="condition">
            Condition
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="">Select Condition</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="mint">Mint</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-secondary hover:bg-pink text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tester;
