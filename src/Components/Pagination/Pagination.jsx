import React from 'react'
import './Pagination.css'
import { GrPrevious, GrNext } from "react-icons/gr";

const Pagination = ({ itemsPerPage, currentPage, setCurrentPage, data }) => {

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const pages = []
  for (var i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

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

      {pages.map((page) => (
        <p
          key={page}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? 'active' : ''}
        >{page}</p>
      ))}

      {currentPage < Math.ceil(data.length / itemsPerPage) &&
        <p onClick={() => nextPage()}>
          <GrNext />
        </p>
      }

    </div>

  )
}

export default Pagination
