import { AppBar } from "@mui/material";
import Link from "next/link";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Home
            </Button>
          </Link>

          <Link href="/cards" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Cards
            </Button>
          </Link>
          <Link href="/create" passHref>
            <Button component="a" sx={{ color: "white" }}>
              Create
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
