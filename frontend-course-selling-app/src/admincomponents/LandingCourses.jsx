
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom"; 
import { LoginAppBar} from "./CustomAppBar";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function LandingCourses() {
    return (
        <center>
            <LoginAppBar />
            <Container maxWidth="sm">
            <Box textAlign="center" mt={4}>
                <Typography variant="h4">WELCOME TO THE COURSES OPTION PAGES</Typography>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/courses"
                        variant="contained"
                        color="primary"
                    >
                        SHOW COURSES
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/create"
                        variant="contained"
                        color="secondary"
                    >
                        CREATE A COURSE
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button
                        component={Link}
                        to="/modifycourse"
                        variant="contained"
                        color="secondary"
                    >
                        MODIFY COURSE
                    </Button>
                </Box>
            </Box>
        </Container>
        </center>
    );
    }

export default LandingCourses;
