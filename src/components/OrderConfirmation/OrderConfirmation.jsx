export default function OrderConfirmation() {
  return (
    <div className="container mx-auto p-4 mt-20 text-center">
      <h1 className="text-2xl font-bold mb-4">Order Confirmed</h1>
      <p className="text-lg">Thank you for your order! Your order has been successfully placed.</p>
      <p className="mt-2">You will receive an email confirmation shortly.</p>
      <p className="mt-4">
        <a href="/" className="text-indigo-600 hover:underline">Go back to homepage</a>
      </p>
    </div>
  );
}
