import Button from "./shared/Button";

const CTA = () => {
  return (
    <div className="bg-linear-to-r from-primary to-secondary text-white py-20  lg:py-36 text-center mx-auto space-y-10">
      <div className="space-y-4">
        <h3 className="font-extrabold text-3xl tracking-wide ">
          Ready to transform your workflow?
        </h3>
        <p className="max-w-[64ch] mx-auto">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
      </div>
      <div className="space-y-4">
        <div className="w-sm flex items-center justify-center mx-auto gap-4">
          <Button variant={"white"}>Start Free Trial</Button>
          <Button variant={"null"} className="border border-white">
            View Pricing
          </Button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default CTA;
