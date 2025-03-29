import "./ContactSign.css";

export const Contact = () => {
  return (
    <div className="form">
      <form>
        <h1> Get in touch </h1>
        <input placeholder="Name" name="user_name" required />
        <input placeholder="Email" name="user_email" required />
        <input placeholder="Subject" name="subject" required />
        <textarea placeholder="Message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;
