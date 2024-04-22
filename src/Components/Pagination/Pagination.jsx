import React from 'react'
import './Pagination.css'
import { GrPrevious, GrNext } from "react-icons/gr";

const Pagination = ({ itemsPerPage, currentPage, setCurrentPage, data }) => {

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || i === currentPage || i === currentPage - 1 || i === currentPage + 1) {
      pages.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages.push('...');
    }
  }

  const filteredPages = pages.filter((value, index, self) => {
    return value !== '...' || (value === '...' && self[index - 1] !== '...');
  });

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (

    <div className='pagination'>
      {currentPage > 1 &&
        <p onClick={() => previousPage()}>
          <GrPrevious />
        </p>
      }

      {filteredPages.map((page, index) => (
        <p
          key={index}
          onClick={() => typeof page === 'number' && setCurrentPage(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </p>
      ))}

      {currentPage < totalPages &&
        <p onClick={() => nextPage()}>
          <GrNext />
        </p>
      }

    </div>

  )
}

export default Pagination
