import "./DashboardCard.scss";
const DashboardCard = ({ user }) => {
  return (
    <>
      <div className="dashboard-card">
        <h1 className="dashboard-card__heading">{user.name}'s profile</h1>
        <div className="dashboard-card__body">
          <img className="dashboard-card__img" src={user.picture}></img>
          <div className="dashboard-card__info">
            <h2>
              <span className="bold">{user.name}</span>, {user.breed}
            </h2>
            <h3>{user.age}</h3>
            <ul className="character">
              {user.character.map((x) => {
                return <li key={x}>{x}</li>;
              })}
            </ul>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;