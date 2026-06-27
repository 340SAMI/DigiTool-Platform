import rocketIcon from "../assets/rocket.png";
import userIcon from "../assets/user.png";
import productIcon from "../assets/package.png";
const steps = [
  {
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: productIcon,
  },
  {
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];
const Steps = () => {
  return (
    <div className="bg-[#F9FAFC]  py-20">
      <div className="space-y-8 container mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-3xl md:text-5xl font-extrabold">
            Get Started In 3 Steps
          </h3>
          <p className="text-paragraph">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative border border-gray-200 rounded-lg px-6 py-12 bg-white max-w-xl"
            >
              <span className="bg-linear-to-r from-primary to-secondary rounded-full size-8 flex items-center justify-center text-white absolute top-4 right-4">
                0{index + 1}
              </span>
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src={step.icon}
                  alt="step icon"
                  className="bg-secondary/10 rounded-full p-8"
                />
                <h4 className="text-heading font-bold text-2xl">
                  {step.title}
                </h4>
                <p className="text-paragraph max-w-[30ch] mx-auto text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
