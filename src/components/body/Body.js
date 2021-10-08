import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fetchP } from "../../helpers/fetch";
import {Header} from '../header/Header';
import { CardBody } from "../card/Card";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#F0FAFB",
  }
});

export const Body = () => {
  const [data, saveData] = useState([]);
  const classes = useStyles();


  useEffect(() => {
    traerData().then((res) => {
      // console.log(data);
    });
  }, []);

  const traerData = async () => {
    const resp = await fetchP();
    const body = await resp.json();
    saveData(body);
  };

  return (
    <div className={classes.container}>
      <Header />
      <div>
        {data.map((dat, key) => {
          // console.log(dat);
          return (
            <CardBody data={dat} key={key}/>
          );
        })}
      </div>
    </div>
  );
};
