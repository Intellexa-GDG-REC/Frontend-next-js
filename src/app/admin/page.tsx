export default function Admin() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900">
        {/* Blue background layer */}
        <div className="absolute inset-0 z-10">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 30%,#4084ec, transparent), radial-gradient(circle at 70% 70%, #334155, transparent)',
            }}
          ></div>
        </div>
  
        {/* Main content layer */}
        <div className="w-full max-w-md bg-gray-800 shadow-md rounded-lg p-6 z-20">
          <h1 className="text-2xl font-bold text-center text-gray-100 mb-6">
            Admin Login
          </h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }
  