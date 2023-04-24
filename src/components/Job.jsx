const Job = (props) => {
  return (
    <div className={props.classname}>
      <h2>{props.title}</h2>
      <h3>
        {props.contractType} - {props.country} - {props.city}
      </h3>
    </div>
  );
};
export default Job;
