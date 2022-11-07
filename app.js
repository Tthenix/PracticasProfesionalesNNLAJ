import React from "react";
import { hello } from "./conexion";
import { useEffect, useState } from "react";
import { application } from "express";

const express = require("express");

require("dotenv").config();
application.set("");

export const hello = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonresponse) => setInitialState(jsonresponse.hello));
  }, []);

  console.log(initialState);
  return (
    <div>
      {initialState.length > 0 &&
        initialState.map((e, i) => <li key={i}> {e} </li>)}
      ,
    </div>
  );
};
