import Chip from "@mui/material/Chip";
import "./typebadge.css";

const TypeBadge = ({ type }) => {
  return (
    <Chip
      className={`badge-${type}`}
      size="small"
      sx={{
        color: "white",
        fontFamily: "montserrat",
        fontWeight: "450",
      }}
      label={type}
    />
  );
};

export default TypeBadge;
