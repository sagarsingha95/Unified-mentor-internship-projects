export default function StatsCard({ title, value }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.value}>{value}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  title: {
    margin: 0,
    color: "#555"
  },
  value: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px"
  }
};
