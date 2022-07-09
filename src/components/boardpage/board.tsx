import React, { useState, useEffect } from "react";
import axios from "axios";

// import Pagination from "./Pagination";
import Boardpage from "./boardpage";
import Pagination from "./Pagination";

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

// interface Response {
//   totalPassengers: number;
//   totalPages: number;
//   data: Array<Passenger>;
// }

function App() {
  const [idx, setIdx] = useState<number>(0);

  const [totalPages, setTotalPages] = useState<number>(0);
  const [items, setItems] = useState<Array<Passenger>>([]);

  const handlePageChange = (currentPage: number): void => {
    setIdx(currentPage);
  };

  useEffect(() => {
    const fetch = async () => {
      const token = sessionStorage.getItem("accessToken");
      const params = { idx, size: 10 };
      // const {
      //   // data: { totalPages, data },
      // } =
      await axios({
        method: "GET",
        baseURL: "http://118.67.130.149:8080/api/v1/question/list",
        params: params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(totalPages);
      // console.log(data);
      // setTotalPages(totalPages);
      // setItems(data);
    };

    fetch();
  }, [idx]);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        count={totalPages}
        page={idx}
        onPageChange={handlePageChange}
      />
      <Boardpage />
    </>
  );
}

export default App;
