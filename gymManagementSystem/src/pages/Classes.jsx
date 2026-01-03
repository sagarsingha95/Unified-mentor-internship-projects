export default function Classes({ data }) {
  return (
    <div className="page">
      <h1>Classes</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Trainer</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.classes.map(cls => (
            <tr key={cls.id}>
              <td>{cls.name}</td>
              <td>{cls.trainer}</td>
              <td>{cls.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
