import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    media: {
      height: "20%",
      width: "100%",
      marginTop: 0,
      backgroundColor: "#5EA4A6",
    }
  });
export const Header = () => {
    const classes = useStyles();
    return (
        <img className={classes.media} src={"https://webappinode.herokuapp.com/images/bg-header-desktop.svg"} alt="Logo" />
    )
}
