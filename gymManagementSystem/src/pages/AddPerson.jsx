import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

export default function AddPerson({ type}) {
  const {data,setData} = useContext(DataContext)

  const isMember = type === "member";

  const [form, setForm] = useState({
    name: "",
    membership: "",
    status: "Active",
    specialty: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.name) return alert("Name is required");

    if (isMember) {
      setData({
        ...data,
        members: [
          ...data.members,
          {
            id: Date.now(),
            name: form.name,
            membership: form.membership,
            status: form.status
          }
        ]
      });
    } else {
      setData({
        ...data,
        trainers: [
          ...data.trainers,
          {
            id: Date.now(),
            name: form.name,
            specialty: form.specialty
          }
        ]
      });
    }

    alert(`${isMember ? "Member" : "Trainer"} added successfully`);
    setForm({ name: "", membership: "", status: "Active", specialty: "" });
  };

  return (
    <div className="page">
      <h1>Add {isMember ? "Member" : "Trainer"}</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />

        {isMember ? (
          <>
            <label>Membership</label>
            <select
              name="membership"
              value={form.membership}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Basic</option>
              <option>Gold</option>
              <option>Premium</option>
            </select>

            <label>Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </>
        ) : (
          <>
            <label>Specialty</label>
            <input
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
            />
          </>
        )}

        <button className="btn w-full">Add</button>
      </form>
    </div>
  );
}
