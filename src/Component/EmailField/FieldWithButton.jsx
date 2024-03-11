import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, IconButton, Typography } from "@mui/material";

export default function FieldWithButton() {
  return (
    <>
      <Box sx={{ p: 2, width: "100%" }}>
        <TextField
          placeholder="Drop your email"
          variant="outlined"
          autoComplete="off"
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            width: "100%",
            paddingBottom: 2,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F37C41",
            },
          }}
          InputProps={{
            sx: { paddingRight: 0, borderRadius: 4 },
            endAdornment: (
              <InputAdornment position="end" sx={{ paddingRight: 0 }}>
                <IconButton
                  sx={{
                    background: "#FF8701",
                    borderRadius: "15px",
                    color: "white",
                    padding: "20px",
                    "&:hover": {
                      background: "#FF8701",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "11px" }}>
                    Join Waitlist
                  </Typography>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
}
