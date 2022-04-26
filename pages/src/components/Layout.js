import Header from "./Header";
import { Container } from "@mui/material";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ marginTop: "6rem" }}>
        {children}
      </Container>
    </>
  );
}
