import {
  Box,
  Button,
  Grid,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { STRING } from "../../utils/constants";
import ROUTES from "../../utils/constants/routes";

import RInput from "../../components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { formValues } from "./signUp.types";

export default function SignUp(): React.ReactElement {
  const theme: Theme = useTheme();
  const mobileView: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();

  console.error(errors);
  const onSubmit: SubmitHandler<formValues> = (data) => {
    console.log(data);
  };

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Box
          sx={{
            width: mobileView ? "80%" : "50%",
          }}
        >
          <Box gap={1}>
            <Typography variant="h4" fontWeight="bold">
              {STRING.signUp}
            </Typography>
            <Stack direction="row" gap={0.3}>
              <Typography variant="body2" gutterBottom>
                {STRING.alreadyHaveAccount}
              </Typography>

              <Link to={ROUTES.login}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                  sx={{ textDecoration: "underline" }}
                >
                  {STRING.signIn}
                </Typography>
              </Link>
            </Stack>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              mt={2}
              mb={2}
            >
              <RInput
                label={STRING.name}
                {...register("name", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 4, message: "length should be 4" },
                })}
                error={{ isError: errors.name, message: errors.name?.message }}
              />
              <RInput
                label={STRING.email}
                {...register("Email", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                    message: "email should be valid",
                  },
                })}
                error={{
                  isError: errors.Email,
                  message: errors.Email?.message,
                }}
              />
              <RInput label={STRING.password} {...register("Password")} />
              <RInput
                label={STRING.confirmPassword}
                {...register("confirmPassword")}
              />
            </Box>

            <Button
              variant="contained"
              size="large"
              fullWidth
              disableElevation
              style={{ borderRadius: "30px" }}
              type="submit"
            >
              {STRING.createAccount}
            </Button>
          </form>
        </Box>
      </Grid>
      {mobileView ? null : (
        <Grid
          item
          md={7}
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{
            backgroundColor: "#243740",
          }}
        >
          <Box ml={10} mr={10}>
            <Typography variant="h3" color="white" fontWeight="bold">
              {STRING.welcomeToHM}
            </Typography>
            <Typography variant="body1" color="lightgray" mt={2}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              esse libero ea tempora illum provident quis id quod totam
              consequatur, officia saepe soluta voluptatum quisquam
              exercitationem necessitatibus inventore amet nam?
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
