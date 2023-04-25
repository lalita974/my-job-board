const Footer = (props) => {
  return (
    <footer>
      Made with&nbsp; <span className="bold">{props.library}</span>
      &nbsp;at&nbsp; <span className="bold">{props.compagny}</span>
      &nbsp;by&nbsp;
      <span className="bold">{props.firstName}</span>
    </footer>
  );
};
export default Footer;
