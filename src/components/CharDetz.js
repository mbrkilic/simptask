import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { Card, CardContent, Box } from "@mui/material";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const CharDetz = ({ results }) => {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(id);
    async function fetchMyAPI() {
      let result = await fetch(
        `https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`
      );
      result = await result.json();
      setData(result);
    }

    fetchMyAPI();
  }, [id]);

  return (
    <>
      <Button href="/">
        <ArrowBackIosIcon /> Simpsons
      </Button>

      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 800 }}>
          {[data].map((char) => (
            <tr className="text-center ">
              <div
                className="container d-flex justify-content-center mb-5"
                key={char.id}
              >
                <div className="text-center" key={char.id}>
                  <img
                    className="rounded mx-auto d-block"
                    style={{ width: "250px", height: "400px" }}
                    src={char.avatar}
                    alt=""
                  />
                  <CardContent>
                    <h1 className="text-center">
                      <b> {char.name} </b>
                    </h1>
                  </CardContent>

                  <div className="text-center">
                    <div className="">
                      <span className="fw-bold">Job: </span>
                      <h4> {char.job} </h4>
                    </div>

                    <div className="text-center">
                      <span className="fw-bold">About: </span>
                      <h4>{char.about} </h4>
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </Card>
      </Container>
    </>
  );
};
