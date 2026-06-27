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
  },
];
const Pricing = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center space-y-4">
        <h3 className="text-2xl md:text-5xl font-extrabold">
          Simple, Transparent pricing
        </h3>
        <p className="text-paragraph">
          Choose the plan that fits your needs. Upgrade or downgrade anytime
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pricing.map((plan, index) => (
          <div key={index} className="grid">
            <div>
              <h4>{plan.title}</h4>
              <p>{plan.description}</p>
            </div>
            <div>
              <p>${plan.price}/Month</p>
              <div>
                {plan.features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
            </div>
            <Button>
              {index == 0
                ? "Get Started"
                : index == 1
                  ? "Start Pro Trial"
                  : "Contact Sales"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
