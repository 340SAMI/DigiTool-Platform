import Button from "./shared/Button";

const pricing = [
  {
    title: "Starter",
    description: "Perfect for getting started",
    price: "0",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
  },
  {
    title: "Pro",
    description: "Best for professionals",
    price: "29",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
  },
  {
    title: "Enterprise",
    description: "For teams and businesses",
    price: "99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header section */}
      <div className="text-center space-y-4 mb-12">
        <h3 className="text-3xl md:text-5xl font-extrabold text-heading">
          Simple, Transparent pricing
        </h3>
        <p className="text-paragraph">
          Choose the plan that fits your needs. Upgrade or downgrade anytime
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {pricing.map((plan, index) => {
          const isPro = index === 1;
          return (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-200 ${
                isPro
                  ? "bg-linear-to-r from-primary to-secondary text-white shadow-xl shadow-purple-200 scale-105 z-10"
                  : "bg-[#F9FAFC] border-slate-200 text-heading"
              }`}
            >
              {isPro && (
                <div className="bg-light-yellow text-red w-fit rounded-full px-2 py-1 absolute -top-3 left-1/2 -translate-x-1/2">
                  <p>Most Popular</p>
                </div>
              )}
              <div>
                <h4 className="text-2xl font-bold mb-1">{plan.title}</h4>
                <p
                  className={`text-sm mb-6 ${isPro ? "text-purple-200" : "text-slate-400"}`}
                >
                  {plan.description}
                </p>

                <div className="flex items-baseline mb-8">
                  <span
                    className={`text-4xl font-extrabold ${isPro ? "text-white" : "text-heading"}`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium ml-1 ${isPro ? "text-white" : "text-paragraph"}`}
                  >
                    /Month
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-3 text-sm font-medium"
                    >
                      <svg
                        className={`w-5 h-5 shrink-0 ${isPro ? "text-white" : "text-emerald-500"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={isPro ? "white" : "default"}
                className="w-full mt-auto"
              >
                {plan.buttonText}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
