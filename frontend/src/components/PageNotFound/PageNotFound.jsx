import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px 20px",
    height: "100vh",
  },

  image: {
    width: "400px",
    maxWidth: "100%",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
  text: {
    color: "#666",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3182ce",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "150px",
  },
};

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.container}>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 - Page Not Found"
        style={styles.image}
      />
      <h2 style={styles.title}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button style={styles.button} onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </section>
  );
};

export default PageNotFound;