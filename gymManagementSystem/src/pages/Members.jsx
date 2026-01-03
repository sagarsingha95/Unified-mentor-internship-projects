import {Link} from 'react-router-dom'
export default function Members({ data }) {
  return (
    <div className="page">
      <div>

      <h1>Members</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Membership</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.members.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.membership}</td>
              <td>
                <span
                  className={`status ${
                    member.status === "Active" ? "active" : "inactive"
                  }`}
                >
                  {member.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <button className='btn'><Link to="/add-member" className="btn">Add Member</Link>
</button>
    </div>
  );
}
