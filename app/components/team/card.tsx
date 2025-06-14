interface Team {
  id: string;
  name: string;
  photo?: string;
  role?: string;
}

const TeamCard = ({ id, name, photo, role }: Team) => {
  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 ease-in-out"
      key={id}
    >
      <img
        src={photo || "/images/default.jpg"}
        alt={`${name}'s photo`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role || "Team Member"}</p>
    </div>
  );
};

export default TeamCard;
