import DB from "../DB.json";
export const CardComponent = (props) => {
    const { title1, text1} = props;
    return ( 
        <>
	 <div className="card text-center card-bg">
  <div className="card-body">
    <h4 className="card-title">{title1}</h4>
    <p className="card-text">{text1}</p>
  </div>
</div>
        </>
     );
}
 export const CardMultiply = () => {
	return (
		<div className="row m-0">
			{DB.solutions.map((solution) => {
				return (
					<div className="col-md-4 col-lg-4 col-sm-12">
						<CardComponent {...solution}></CardComponent>
					</div>
				);
			})}
		</div>
	);
};

export const CardBase = (props) => {
    const { title, text} = props;
    return ( 
        <>
	 <div className="card text-center card-bg">
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{text}</p>
  </div>
</div>    
        </>
     );
}
export const SingleCardBase = () => {
	return (
		<div className="row m-0">
			{DB.companygoals.map((DBgoal) => {
				return (
					<div className="col-md-4 col-lg-4 col-sm-12">
						<CardBase {...DBgoal}></CardBase>
					</div>
				);
			})}
		</div>
	);
};
export const SessionCard = (props) => {
	const { imgs,title1, text1} = props;
	return(
		<div class="card">
  <img src={imgs} class="card-img-top" alt="..."/>
  <div class="card-con card-body">
    <h5 class="card-title text-center">{title1}</h5>
    <p class="card-text">{text1}</p>
  </div>
</div>
	);
}
export const ServiceCard =() =>{
	return(
		<div className="row m-0">
			{DB.sessions.map((session) => {
				return (
					<div className="col-md-4 col-lg-4 col-sm-12">
						<SessionCard {...session}></SessionCard>
					</div>
				);
			})}
		</div>
	);
}

