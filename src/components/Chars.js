import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Chars = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const history = useNavigate();

  useEffect(() => {
    async function fetchMyAPI() {
      let result = await fetch(
        "https://5fc9346b2af77700165ae514.mockapi.io/simpsons/"
      );
      result = await result.json();
      console.log(result);
      setData(result);
    }

    fetchMyAPI();
  }, []);

  const deleteChar = (id) => {
    const updatedChars = data.filter((char) => {
      return id !== char.id;
    });

    setData(updatedChars);
  };

  return (
    <Container>
      <Table responsive className="table-centertable-borderless">
        {data.map((char) => (
          <tbody key={char.id}>
            <tr className="text-center">
              <img style={{ maxWidth: 350 }} src={char.avatar} alt="Simpsons" />

              <th>
                <Link
                  to={`/simpsons/${char.id}`}
                  className=".fs-3 text-lg-start text-left"
                  style={{ color: "#000000" }}
                >
                  {char.name}
                </Link>
              </th>

              <th>
                <button>
                  <i
                    onClick={() => deleteChar(char.id)}
                    className="fas fa-trash-alt"
                    title="delete item"
                    style={{ color: "#ffd90f" }}
                  >
                    {" "}
                  </i>
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Chars;
