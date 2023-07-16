import { useEffect, useState } from "react";
import React from "react";

export const Pagination = ({ totalPage, searchTerm, handleSearch }) => {
    const pageCount = totalPage;
    const [currentPage, setCurrentPage] = useState(1);

    const handleOnClick = (num) => {
        setCurrentPage(num);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getPageNumbers = () => {
        const pageNumber = [];
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(pageCount, start + 4);
        for (let i = start; i <= end; i++) {
            pageNumber.push(i);
        }
        return pageNumber;
    };

    useEffect(() => {
        if (searchTerm) {
            handleSearch(searchTerm, currentPage)
        }
    }, [currentPage]);

    return (
        <nav className="absolute right-14">
            <ul className="flex">
                <li>
                    <a
                        className="cursor-pointer mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        onClick={handlePrevPage}
                        aria-label="Previous"
                    >
                        <span className="material-icons text-sm">Perv</span>
                    </a>
                </li>
                {getPageNumbers().map((pageNum) => (
                    <li key={pageNum}>
                        <a
                            className={`${pageNum === currentPage
                                    ? "cursor-pointer mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                                    : "cursor-pointer mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                                }`}
                            onClick={() => handleOnClick(pageNum)}
                        >
                            {pageNum}
                        </a>
                    </li>
                ))}

                <li>
                    <a
                        className="cursor-pointer mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        onClick={handleNextPage}
                        disabled={currentPage === pageCount}
                        aria-label="Next"
                    >
                        <span className="material-icons text-sm">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
