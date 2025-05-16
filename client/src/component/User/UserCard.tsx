import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function UserCard({
  id,
  name,
  sex,
  birthday,
  email,
}: {
  id: string;
  name: string;
  sex: string;
  birthday: string;
  email: string;
}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {id}
            </Typography>
            <Typography variant="h5" component="div">
              {name}({sex})
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {birthday}
            </Typography>
            <Typography variant="body2">email : {email}</Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
