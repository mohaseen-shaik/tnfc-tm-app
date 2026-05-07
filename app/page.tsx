export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-500">
          TNFC Team Manager
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Attendance and volunteer management system.
        </p>

        <div className="mt-10 grid gap-4">
          <button className="bg-green-600 hover:bg-green-700 p-4 rounded-xl text-left">
            Create Event
          </button>

          <button className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-left">
            Players
          </button>

          <button className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-left">
            Attendance
          </button>

          <button className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-left">
            Volunteers
          </button>
        </div>
      </div>
    </main>
  );
}