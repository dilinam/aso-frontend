import * as React from "react";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Tenant from "../../components/Tenant";
// import Divider from "@mui/material/Divider";

const tenantList = ["tenantOne", "tenantTwo", "tenantThree"];

const TenantLogin = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            textAlign={"center"}
          >
            Select a Tenant to Login
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }} />

          <Box sx={{ width: "95%", margin: "auto" }}>
            <Stack spacing={2} justifyContent={"center"}>
              {tenantList.map((tenant) => {
                return <Tenant tenantName={tenant} />;
              })}
            </Stack>
          </Box>
        </Box>
      </Modal> */}
    </div>
  );
};

export default TenantLogin;
