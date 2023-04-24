const Footer = (props) => {
  return (
    <footer>
      Made with <span className="bold">{props.library}</span> at{" "}
      <span className="bold">{props.compagny}</span> by{" "}
      <span className="bold">{props.firstName}</span>
    </footer>
  );
};
export default Footer;
