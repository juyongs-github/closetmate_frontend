import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

interface OAuthButtonProps {
  title: string;
  src: string;
  style: React.CSSProperties;
}

function OAuthButton({ title, src, style }: OAuthButtonProps) {
  return (
    <Tooltip title={title}>
      <Button
        size="large"
        color="secondary"
        component={Link}
        to="/"
        sx={{
          width: {
            md: "5rem",
          },
          height: {
            md: "5rem",
          },
          padding: 0,
          overflow: "hidden",
          border: "1px solid #ddd",
          borderRadius: 50,
        }}
      >
        <img src={src} alt={title} style={{ ...style }} />
      </Button>
    </Tooltip>
  );
}

export default OAuthButton;
