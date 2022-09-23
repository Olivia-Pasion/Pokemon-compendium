import './Paging.css';

export default function Paging({ page, setPage, totalPages }) {
  return (
    <div>
      <button
        className="page-button"
        onClick={() => {
          setPage((prevState) => {
            if (prevState !== 1) return prevState - 1;
            else {
              return 1;
            }
          });
        }}
      >
        Prev Page
      </button>
      <span className="page-numbers">
        {page} / {totalPages}
      </span>
      <button
        className="page-button"
        onClick={() => {
          setPage((prevState) => {
            if (prevState < totalPages) return prevState + 1;
            else {
              return totalPages;
            }
          });
        }}
      >
        Next Page
      </button>
    </div>
  );
}
