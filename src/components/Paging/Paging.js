export default function Paging({ page, setPage, totalPages }) {
  console.log(page);
  return (
    <div>
      <button onClick={() => {
        setPage((prevState) => {
          if (prevState !== 1) return prevState - 1;
          else {
            return 1;
          }
        });
      }}>Prev Page</button>
      <button onClick={() => {
        setPage((prevState) => {
          if (prevState < totalPages) return prevState + 1;
          else {
            return totalPages;
          }
        });
      }}>Next Page</button>
    </div>
  );
}