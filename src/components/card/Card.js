import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Box, Grid } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: 20,
    marginLeft: 100,
    marginRight: 80,
    marginTop: 25,
    marginBottom: 25,
    flexGrow: 1,
    boxShadow: "3px 15px 15px 1px #D6EBED"
  },
  media: {
    height: "20%",
    width: "100%",
    marginTop: 0,
    backgroundColor: "#5EA4A6",
  },
  logo: {
    height: "150px",
    width: "150px",
    marginLeft: "20%",
    marginTop: "10%",
    marginBottom: "10%",
  },
  company: {
    color: "#5EA4A6",
    fontFamily: ["Spartan", " sans-serif"].join(","),
    fontSize: "15px",
    fontWeight: "bolder",
    marginLeft: "5px",
    marginRight: "10px",
  },
  position: {
    fontFamily: ["Spartan", "sans-serif"].join(","),
    fontSize: "20px",
    fontWeight: "bolder",
  },
  postedAt: {
    fontFamily: ["Spartan", "sans-serif"].join(","),
    fontSize: "15px",
    color: "#646464",
    margin: 8,
  },
  containerLanguage: {
    alignItems: "end",
  },
  language: {
    backgroundColor: "#D6EBED",
    fontFamily: ["Spartan", "sans-serif"].join(","),
    color: "#5EA4A6",
    fontWeight: "bolder",
    fontSize: "10px",
    margin: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4,
    marginTop: 50
  },
  new: {
    backgroundColor: "#5EA4A6",
    fontFamily: ["Spartan", "sans-serif"].join(","),
    color: "#FFFFFF",
    fontWeight: "bolder",
    fontSize: "10px",
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  feature: {
    backgroundColor: "#000000",
    fontFamily: ["Spartan", "sans-serif"].join(","),
    color: "#FFFFFF",
    fontWeight: "bolder",
    fontSize: "10px",
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
export const CardBody = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="elevation">
      <Grid container>
        <Grid xs={2}>
          <img className={classes.logo} alt="img" src={data.logo} />
        </Grid>

        <Grid xs={10}>
          <Box display="flex" flexDirection="row">
            <div>
              <Box display="flex" flexDirection="row">
                <p className={classes.company}>{data.company}</p>

                {data.new === true && (
                  <div>
                    <p className={classes.new}>NEW!</p>
                  </div>
                )}
                {data.featured === true && (
                  <div>
                    <p className={classes.feature}>FEATURED</p>
                  </div>
                )}
              </Box>
              <p className={classes.position}>{data.position}</p>

              <Box display="flex" flexDirection="row">
                <p className={classes.postedAt}>{data.postedAt}</p>
                <p className={classes.postedAt}>•</p>
                <p className={classes.postedAt}>{data.contract}</p>
                <p className={classes.postedAt}>•</p>
                <p className={classes.postedAt}>{data.location}</p>
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flex: 1,
                marginRight: 20,
              }}
            >
              <Box display="flex" flexDirection="row">
                {data.languages.map((dats, keyb) => {
                  return (
                    <div className={classes.language} key={keyb}>
                      <p>{dats}</p>
                    </div>
                  );
                })}
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};
