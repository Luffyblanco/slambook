import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [favoriteFood, setFavoriteFood] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="contactNumber">Contact Number:</label>
              <input
                type="text"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="favoriteColor">Favorite Color:</label>
              <input
                type="text"
                id="favoriteColor"
                value={favoriteColor}
                onChange={(e) => setFavoriteColor(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="favoriteFood">Favorite Food:</label>
              <input
                type="text"
                id="favoriteFood"
                value={favoriteFood}
                onChange={(e) => setFavoriteFood(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        {submitted && (
          <div className="w-1/2 ml-4">
            <h2 className="text-2xl font-bold">Credentials:</h2>
            <p className="text-lg">Name: {name}</p>
            <p className="text-lg">Age: {age} Years Old</p>
            <p className="text-lg">Contact Number: {contactNumber}</p>
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Favorites:</h2>
              <p className="text-lg">Favorite Color: {favoriteColor}</p>
              <p className="text-lg">Favorite Food: {favoriteFood}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
