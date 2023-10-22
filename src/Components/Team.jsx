/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-20 lg:mt-32">
        <h2 className="text-primary-color font-semibold">Team</h2>
        <div className="space-y-2 mt-5">
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
          <p className="text-[#737373] text-sm lg:w-1/2 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            veritatis obcaecati deserunt porro, repudiandae doloribus cum.
            Quibusdam excepturi pariatur eligendi!
          </p>
        </div>
        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          {teams?.map((team) => (
            <TeamCards key={team.id} team={team}></TeamCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

const TeamCards = ({ team }) => {
  const { img, title, name } = team;
  return (
    <div>
      <div className="card w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={title} className="rounded-lg h-[200px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="card-title text-2xl font-bold">{name}</h2>
          </div>
          <p className="text-[#737373] font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};
