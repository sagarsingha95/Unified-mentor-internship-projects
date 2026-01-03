import {Link} from 'react-router-dom'
export default function Trainers({ data }) {
  return (
    <div className="page">
      <div>

      <h1>Trainers</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {data.trainers.map(trainer => (
            <tr key={trainer.id}>
              <td>{trainer.name}</td>
              <td>{trainer.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Link to="/add-trainer" className="btn text-center">Add Trainer</Link>

    </div>
  );
}
