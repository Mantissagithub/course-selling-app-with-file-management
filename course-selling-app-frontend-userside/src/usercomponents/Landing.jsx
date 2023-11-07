import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Make sure you have React Router installed
import { SignUpBar } from "./CustomAppBar";

function Landing() {
    return (
        <div style = {{height : "100vh", width : "100vw", backgroundColor : 'whitesmoke' }}>
            <SignUpBar />
            <Container maxWidth="sm">
            <Box textAlign="center" mt={4}>
                <Typography variant="h4">Welcome to the Course Selling Website!</Typography>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/register"
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/login"
                        variant="contained"
                        color="secondary"
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
        </div>
    );
}

export default Landing;
