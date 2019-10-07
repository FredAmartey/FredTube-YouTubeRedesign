import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => setSearchTerm(event.target.value);

  const onKeyPress = event => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <Paper
      elevation={6}
      style={{
        paddingLeft: "20px",
        paddingBottom: "3px",
        borderRadius: "22px",
        width: "830px",
        height: "44px",
        opacity: "0.5",
        backgroundColor: "#ebebeb"
      }}
    >
      <TextField
        style={{ color: "#ffffff" }}
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};
