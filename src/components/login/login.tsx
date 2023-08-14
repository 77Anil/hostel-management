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
import STRING from "../../utils/constants";
import RInput from "../input";

export default function Login(): React.ReactElement {
  const theme: Theme = useTheme();
  const mobileView: boolean = useMediaQuery(theme.breakpoints.down("md"));

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
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: mobileView ? "80%" : "50%",
          }}
        >
          <Box gap={1}>
            <Typography variant="h4" fontWeight="bold">
              {STRING.signIn}
            </Typography>
            <Stack direction="row" gap={0.5}>
              <Typography variant="body2">{STRING.doNotHaveAccount}</Typography>

              <Link to={"/"}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  sx={{ textDecoration: "underline" }}
                >
                  {STRING.signUp}
                </Typography>
              </Link>
            </Stack>
          </Box>
          <RInput label={STRING.email} required />
          <RInput label={STRING.password} required />
          <Button
            variant="contained"
            size="large"
            disableElevation
            style={{ borderRadius: "30px" }}
          >
            {STRING.signIn}
          </Button>
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
