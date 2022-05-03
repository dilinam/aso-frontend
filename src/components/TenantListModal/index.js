import { Divider, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Tenant from "../Tenant";

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

function TenantListModal({open, setOpen, tenantList}){

  const handleClose = () => {
    setOpen(false);
  }

    return (
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
            Select a Tenant
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }} />

          <Box sx={{ width: "95%", margin: "auto" }}>
            <Stack spacing={2} justifyContent={"center"}>
              {tenantList.map((tenant) => {
                return <Tenant tenantName={tenant.tenantName} />;
              })}
            </Stack>
          </Box>
        </Box>
      </Modal>
    )

}

export default TenantListModal;