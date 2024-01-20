import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";

const Profile = () => {
  const user = useSelector((store) => store.user); // Replace with your actual slice name

  // Mock user data (replace this with actual user data from Redux store)
  const mockUser = {
    firstName: "John",
    lastName: "Doe",
    middleName: "M",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Cityville, State, 12345",
    creditCard: "**** **** **** 1234", // Only show the last 4 digits for security reasons
  };

  const [userData, setUserData] = useState(mockUser);

  useEffect(() => {
    // Fetch user data from the Redux store or an API and update the state
    // Example: setUserData(user);
  }, []);

  return (
    <Box className="px-10">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" className="font-bold mb-4">
            User Profile
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" className="font-semibold mb-2">
            First Name
          </Typography>
          <Typography>{userData.firstName}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" className="font-semibold mb-2">
            Middle Name
          </Typography>
          <Typography>{userData.middleName}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" className="font-semibold mb-2">
            Last Name
          </Typography>
          <Typography>{userData.lastName}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" className="font-semibold mb-2">
            Email
          </Typography>
          <Typography>{userData.email}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" className="font-semibold mb-2">
            Phone Number
          </Typography>
          <Typography>{userData.phoneNumber}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" className="font-semibold mb-2">
            Address
          </Typography>
          <Typography>{userData.address}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h6" className="font-semibold mb-2">
            Credit Card
          </Typography>
          <Typography>{userData.creditCard}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
