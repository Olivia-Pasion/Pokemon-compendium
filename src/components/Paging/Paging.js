export default function Paging({ page, setPage, totalPages }) {
  return (
    <div>
      <button
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
      <span>
        {page}/{totalPages}
      </span>
      <button
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
