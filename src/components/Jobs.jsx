import Job from "./Job";

const Jobs = () => {
  return (
    <div className="alignement">
      <Job
        classname={"red"}
        title={"Full Time Sales Associate - Sydney Boutique"}
        contractType={"CDI"}
        country={"Australie"}
        city={"Sydney"}
      />
      <Job
        classname={"green"}
        title={"Agent de Sécurité - Pantin"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
      />
      <Job
        classname={"yellow"}
        title={"Responsable d'Atelier (H/F)"}
        contractType={"CDD"}
        country={"France"}
        city={"Paris"}
      />
      <Job
        classname={"blue"}
        title={"Chef de Projets"}
        contractType={"CDD"}
        country={"France"}
        city={"Paris"}
      />
      <Job
        classname={"pink"}
        title={"Développeur React.js"}
        contractType={"CDI"}
        country={"France"}
        city={"Paris"}
      />
      <Job
        classname={"red"}
        title={"Sales Associate Stockholm"}
        contractType={"CDI"}
        country={"Suède"}
        city={"Stockholm"}
      />
      <Job
        classname={"green"}
        title={"Vendeur/se - Crans Montana"}
        contractType={"CDI"}
        country={"Suisse"}
        city={"Crans-Montana"}
      />
      <Job
        classname={"yellow"}
        title={"CRM & Data Quality Analyst"}
        contractType={"CDI"}
        country={"USA"}
        city={"New-York"}
      />
      <Job
        classname={"blue"}
        title={"Infirmier (H/F)"}
        contractType={"CDI"}
        country={"France"}
        city={"Pantin"}
      />
    </div>
  );
};

export default Jobs;
