import { selectBooks, fetchRandomBooks } from "../../slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import TileAuthorBooks from "../../../../common/TileAuthorBooks/index";
import { DataRow, VolumeInfo } from "../../../../common/interfaces";

interface Book {
  volumeInfo: VolumeInfo;
}

const Table = () => {
  const dispatch = useDispatch();
  const bookList: Book[] = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchRandomBooks());
  }, [dispatch]);

  const columns: TableColumn<Book>[] = [
    {
      name: "Author",
      selector: (row) => getColumnValue(row, "authors"),
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => getColumnValue(row, "title"),
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => getColumnValue(row, "publishedDate"),
      sortable: true,
      hide: "md",
    },
    {
      name: "Category",
      selector: (row) => getColumnValue(row, "categories"),
      sortable: true,
      hide: "md",
    },
    {
      name: "Publisher",
      selector: (row) => getColumnValue(row, "publisher"),
      sortable: true,
      hide: "md",
    },
  ];

  function getColumnValue(row: Book, property: keyof VolumeInfo) {
    if (row && row.volumeInfo && row.volumeInfo[property]) {
      if (property === "publishedDate") {
        const date = new Date(row.volumeInfo[property]);
        const fullYear = date.getFullYear();
        return fullYear.toString();
      } else {
        return String(row.volumeInfo[property]);
      }
    } else {
      return "no data";
    }
  }

  const ExpandedComponent: React.FC<{ data: Book }> = ({ data }) => (
    <TileAuthorBooks
      image={data.volumeInfo.imageLinks}
      title={data.volumeInfo.title}
      publishedDate={data.volumeInfo.publishedDate}
      authors={data.volumeInfo.authors}
    />
  );

  const handleSort = (
    column: TableColumn<Book>,
    sortDirection: "asc" | "desc"
  ) => console.log(column.selector, sortDirection);

  return (
    <div>
      <DataTable
        columns={columns}
        data={bookList}
        onSort={handleSort}
        dense
        expandOnRowClicked
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        fixedHeaderScrollHeight="300px"
        highlightOnHover
        pagination
        pointerOnHover
        responsive
        selectableRows
        selectableRowsHighlight
        subHeaderWrap
      />
    </div>
  );
};

export default Table;
