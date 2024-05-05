import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  CameraAlt as CameraAltIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useState } from "react";
import { useFormik } from "formik";

import * as yup from "yup";
const Register = ({ setIsLogin }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg"];
    const maxSize = 1 * 1024 * 1024; // 1MB in bytes

    if (file) {
      if (file.size <= maxSize) {
        if (allowedTypes.includes(file.type)) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
            setError(null);
          };
          reader.readAsDataURL(file);
        } else {
          setError("Please select a valid image file (PNG or JPEG)");
        }
      } else {
        setError("File size exceeds the maximum limit of 1MB");
      }
    } else {
      setError(null); // Clear error if no file selected (e.g., user cancels file selection)
    }
  };
  // Yup validation schema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    fullName: yup.string().required("Full name is required"),
    username: yup
      .string()
      .required("Username is required")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscore"
      )
      .test("underscore", "Username cannot start with underscore", (value) => {
        return !/^_/.test(value);
      }),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle sign up logic here
    },
    validateOnChange: true, // Validation on each field typing
  });

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Gapsaap
        </Typography>
        <Stack
          position={"relative"}
          width={"5rem"}
          margin={"auto"}
          marginTop={"1rem"}
        >
          <Avatar
            sx={{
              width: "5rem",
              height: "5rem",
              objectFit: "contain",
            }}
            src={selectedImage}
          />

          <IconButton
            sx={{
              position: "absolute",
              bottom: "0",
              right: "0",
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              ":hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
            component="label"
            size="small"
          >
            <>
              <CameraAltIcon fontSize="small" />
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          </IconButton>
        </Stack>
        {error && (
          <Typography
            m={"1rem auto"}
            width={"fit-content"}
            display={"block"}
            color="error"
            variant="caption"
          >
            {error}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" onClick={() => setIsLogin(true)}>
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};
export default Register;
