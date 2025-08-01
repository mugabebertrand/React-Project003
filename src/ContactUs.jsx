import { useState } from 'react';

function ContactUs() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" className="form-control" name="firstName" value={form.firstName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" name="lastName" value={form.lastName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Comments</label>
          <textarea className="form-control" name="comments" value={form.comments} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;