import BookingForm from '@/components/BookingForm';

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Book a seat now!</h2>
        <BookingForm />
      </div>
    </div>
  );
}