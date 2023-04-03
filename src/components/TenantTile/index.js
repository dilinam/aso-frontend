import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const TenantTile = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    cursor: 'pointer'
  }));

  const handleClick = () => {
    props.setSelectedTenant(props.id)
  }

  return <Item onClick={handleClick}>{props.tenantName}</Item>;
};

export default TenantTile;
