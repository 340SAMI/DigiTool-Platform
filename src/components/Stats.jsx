const stats = [
  {
    title: "Active Users",
    value: "50K+",
  },
  {
    title: "Premium Tools",
    value: "200+",
  },
  {
    title: "Rating",
    value: "4.9",
  },
];
const Stats = () => {
  return (
    <section>
      <div className="bg-linear-to-r from-primary to-secondary flex justify-around items-center  py-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-white">
            <p className="text-3xl md:text-6xl font-semibold">{stat.value}</p>
            <p className="text-lg">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
