import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Tenant = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return <Item>{props.tenantName}</Item>;
};

export default Tenant;
