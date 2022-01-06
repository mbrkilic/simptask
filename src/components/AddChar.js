import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { Component, useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Box, Container } from "@mui/material/";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const AddChar = () => {
  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [about, setAbout] = useState();
  const [avatar, setAvatar] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const char = { name, job, about, avatar };

    fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(char),
    }).then(() => {
      console.log("new char added");
    });

    navigate("/");
  };

  return (
    <>
      <Button href="/">
        <ArrowBackIosIcon /> Simpsons
      </Button>

      <Container maxWidth="sm">
        <CardContent>
          <h1 className="text-center">
            <b> Yeni Karakter Ekle </b>
          </h1>
        </CardContent>

        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nameSection">Name Surname: </label>
            <input
              type="name"
              className="form-control form-control-lg mb-4"
              id="nameSection"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobSection">Job Title: </label>
            <input
              type="job"
              className="form-control"
              id="jobSection"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="aboutSection">About Him/Her: </label>
            <textarea
              type="about"
              className="form-control"
              id="aboutSection"
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageSection">Image Link: </label>
            <input
              type="avatar"
              className="form-control"
              id="imageSection"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Add Character
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default AddChar;
