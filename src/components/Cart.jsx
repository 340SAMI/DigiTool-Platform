const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 font-sans">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Cart</h2>

      <div className="space-y-4 mb-6">
        {cartItems.length === 0 ? (
          <p className="text-slate-400 text-sm py-4">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-slate-50/70 rounded-2xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-slate-100">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-base">
                    {item.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-400 mt-0.5">
                    ${item.price}
                  </p>
                </div>
              </div>

              <button className="text-pink-500 hover:text-pink-600 font-semibold text-sm transition-colors cursor-pointer px-2 py-1">
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center py-4 border-t border-slate-100 mb-6">
        <span className="text-sm font-medium text-slate-400">Total:</span>
        <span className="text-2xl font-extrabold text-slate-900">
          ${totalAmount}
        </span>
      </div>

      <button
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-full text-center text-sm transition-all shadow-md active:scale-[0.99] cursor-pointer"
        onClick={() => console.log("Proceeding to checkout...")}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
