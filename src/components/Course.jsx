import React from 'react';
import Cards from '../components/Cards';
import list from '../../public/list.json'; // Ensure this path is correct
import { Link } from 'react-router-dom'; // Correct import

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className="text-2xl font-semibold md:text-4xl">
            Welcome to your literary haven – explore, <span className='text-pink-500'>read, and enjoy!</span> :)
          </h1>
          <p className='mt-12'>Looking for your next great read? Browse our wide selection of books and
            find the perfect one for you. With unbeatable prices and exclusive discounts, there’s never been
            a better time to shop. Whether you’re into fiction, 
            non-fiction, or anything in between, we have something for
            everyone. Start exploring and enjoy a seamless shopping experience!</p>

          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
