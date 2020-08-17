import React from 'react';

// Styles
import { Pagination } from 'react-bootstrap';

const SearchPagination = (props) => {
  const { currentPage, getPrevPage, getFirstPage, search, getNextPage } = props;

  return (
    <Pagination style={{ justifyContent: 'center' }}>
      {currentPage !== 1 && <Pagination.Prev onClick={getPrevPage} />}
      {currentPage !== 1 && (
        <Pagination.Item onClick={getFirstPage}>1</Pagination.Item>
      )}
      {currentPage > 2 && <Pagination.Ellipsis disabled />}
      {currentPage > 2 && (
        <Pagination.Item onClick={getPrevPage}>
          {currentPage - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {search.next && (
        <Pagination.Item onClick={getNextPage}>
          {currentPage + 1}
        </Pagination.Item>
      )}
      {search.next && <Pagination.Next onClick={getNextPage} />}
    </Pagination>
  );
};

export default SearchPagination;
