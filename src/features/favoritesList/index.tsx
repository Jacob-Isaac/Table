import { fetchFavoritesBooks } from "../tableComponent/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import TileBook from "../../common/TileBook";
import { VolumeInfo } from "../../common/interfaces";
import { BookTable } from "./styled";
import { selectFavorites } from "../tableComponent/slice";

interface Book {
  volumeInfo: VolumeInfo;
}

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoritesBooks");
    if (storedFavorites) {
      dispatch(fetchFavoritesBooks(JSON.parse(storedFavorites)));
    }
  }, [dispatch]);
  const favoritesList: Book[] = useSelector(selectFavorites);
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
    <TileBook
      image={data.volumeInfo.imageLinks}
      title={data.volumeInfo.title}
      publishedDate={data.volumeInfo.publishedDate}
      authors={data.volumeInfo.authors}
      link={data.volumeInfo}
      poster={false}
    />
  );

  const handleSort = (
    column: TableColumn<Book>,
    sortDirection: "asc" | "desc"
  ) => console.log(column.selector, sortDirection);

  return (
    <BookTable>
      <DataTable
        columns={columns}
        data={favoritesList}
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
        subHeaderWrap
      />
    </BookTable>
  );
};

export default Favorites;
