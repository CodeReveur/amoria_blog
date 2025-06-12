import TeamCard from "../components/team/card";

const Team = () => {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Meet Our Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <TeamCard
          id="1"
          name="Moses GRANT"
          photo="/images/john.jpg"
          role="Chief Executive Officer"
        />
        <TeamCard
          id="2"
          name="Joseph MARANATHA"
          photo="/images/jane.jpg"
          role="Full-Stack Developer"
        />
        <TeamCard
          id="3"
          name="Jackson MUGWIZA"
          photo="/images/alice.jpg"
          role="Backend Developer"
        />
        <TeamCard
          id="4"
          name="Pacific MUBEN"
          photo="/images/bob.jpg"
          role="UI Specialist"
        />
      </div>
    </section>
  );
};

export default Team;
