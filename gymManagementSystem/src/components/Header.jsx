import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/members":
        return "Members";
      case "/trainers":
        return "Trainers";
      case "/classes":
        return "Classes";
      case "/payments":
        return "Payments";
      default:
        return "FitPro Gym";
    }
  };

  return (
    <header style={styles.header}>
      <h2>{getTitle()}</h2>
      <span style={styles.user}>Sagar</span>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "20px"
  },
  user: {
    fontWeight: "bold",
    fontSize:'20px'
  }
};
