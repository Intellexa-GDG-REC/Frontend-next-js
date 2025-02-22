import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-7 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
        <div className="text-white p-6 rounded-2xl shadow-lg max-w-md w-full lg:w-auto">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-gray-900 pb-2">Contact Us</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-400 w-5 h-5" />
              <span>Somesh: <a href="tel:+919962467601" className="hover:underline">+91 99624 67601</a></span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-400 w-5 h-5" />
              <span>Nandhini: <a href="tel:+917305832372" className="hover:underline">+91 73058 32372</a></span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-400 w-5 h-5" />
              <a href="mailto:gdg@rajalakshmi.edu.in" className="hover:underline">gdg@rajalakshmi.edu.in</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-400 w-5 h-5" />
              <a href="mailto:intellexa@rajalakshmi.edu.in" className="hover:underline">intellexa@rajalakshmi.edu.in</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start space-y-3 w-full lg:w-auto px-6">
          <p className="text-xl font-bold">Social</p>
          <div className="flex justify-center items-center space-x-2 cursor-pointer hover:underline hover:underline-offset-4">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48" stroke="white" fill="white">
                <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 33 C 4 39.063407 8.9365932 44 15 44 L 33 44 C 39.063407 44 44 39.063407 44 33 L 44 15 C 44 8.9365932 39.063407 4 33 4 L 15 4 z M 15 6 L 33 6 C 37.982593 6 42 10.017407 42 15 L 42 33 C 42 37.982593 37.982593 42 33 42 L 15 42 C 10.017407 42 6 37.982593 6 33 L 6 15 C 6 10.017407 10.017407 6 15 6 z M 35 11 C 33.895 11 33 11.895 33 13 C 33 14.105 33.895 15 35 15 C 36.105 15 37 14.105 37 13 C 37 11.895 36.105 11 35 11 z M 24 14 C 18.488666 14 14 18.488666 14 24 C 14 29.511334 18.488666 34 24 34 C 29.511334 34 34 29.511334 34 24 C 34 18.488666 29.511334 14 24 14 z M 24 16 C 28.430666 16 32 19.569334 32 24 C 32 28.430666 28.430666 32 24 32 C 19.569334 32 16 28.430666 16 24 C 16 19.569334 19.569334 16 24 16 z"></path>
              </svg>
            </span>
            <p className="text-lg sm:text-xl">Instagram</p>
          </div>
          <div className="flex justify-center items-center space-x-2 cursor-pointer hover:underline hover:underline-offset-4">
            <span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
            </span>
            <p className="text-lg sm:text-xl">WhatsApp</p>
          </div>
          <div className="flex justify-center items-center space-x-2 cursor-pointer hover:underline hover:underline-offset-4">
            <span>
              <svg fill="#ffffff" width="25" height="25" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>discord</title>
                <path d="M20.992 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.050 0.005 0.109 0.005 0.168 0 1.523-1.191 2.768-2.693 2.854l-0.008 0zM11.026 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.048 0.005 0.104 0.005 0.161 0 1.525-1.19 2.771-2.692 2.862l-0.008 0zM26.393 6.465c-1.763-0.832-3.811-1.49-5.955-1.871l-0.149-0.022c-0.005-0.001-0.011-0.002-0.017-0.002-0.035 0-0.065 0.019-0.081 0.047l-0 0c-0.234 0.411-0.488 0.924-0.717 1.45l-0.043 0.111c-1.030-0.165-2.218-0.259-3.428-0.259s-2.398 0.094-3.557 0.275l0.129-0.017c-0.27-0.63-0.528-1.142-0.813-1.638l0.041 0.077c-0.017-0.029-0.048-0.047-0.083-0.047-0.005 0-0.011 0-0.016 0.001l0.001-0c-2.293 0.403-4.342 1.060-6.256 1.957l0.151-0.064c-0.017 0.007-0.031 0.019-0.040 0.034l-0 0c-2.854 4.041-4.562 9.069-4.562 14.496 0 0.907 0.048 1.802 0.141 2.684l-0.009-0.11c0.003 0.029 0.018 0.053 0.039 0.070l0 0c2.14 1.601 4.628 2.891 7.313 3.738l0.176 0.048c0.008 0.003 0.018 0.004 0.028 0.004 0.032 0 0.060-0.015 0.077-0.038l0-0c0.535-0.72 1.044-1.536 1.485-2.392l0.047-0.1c0.006-0.012 0.010-0.027 0.010-0.043 0-0.041-0.026-0.075-0.062-0.089l-0.001-0c-0.912-0.352-1.683-0.727-2.417-1.157l0.077 0.042c-0.029-0.017-0.048-0.048-0.048-0.083 0-0.031 0.015-0.059 0.038-0.076l0-0c0.157-0.118 0.315-0.24 0.465-0.364 0.016-0.013 0.037-0.021 0.059-0.021 0.014 0 0.027 0.003 0.038 0.008l-0.001-0c2.208 1.061 4.8 1.681 7.536 1.681s5.329-0.62 7.643-1.727l-0.107 0.046c0.012-0.006 0.025-0.009 0.040-0.009 0.022 0 0.043 0.008 0.059 0.021l-0-0c0.15 0.124 0.307 0.248 0.466 0.365 0.023 0.018 0.038 0.046 0.038 0.077 0 0.035-0.019 0.065-0.046 0.082l-0 0c-0.661 0.395-1.432 0.769-2.235 1.078l-0.105 0.036c-0.036 0.014-0.062 0.049-0.062 0.089 0 0.016 0.004 0.031 0.011 0.044l-0-0.001c0.501 0.96 1.009 1.775 1.571 2.548l-0.040-0.057c0.017 0.024 0.046 0.040 0.077 0.040 0.010 0 0.020-0.002 0.029-0.004l-0.001 0c2.865-0.892 5.358-2.182 7.566-3.832l-0.065 0.047c0.022-0.016 0.036-0.041 0.039-0.069l0-0c0.087-0.784 0.136-1.694 0.136-2.615 0-5.415-1.712-10.43-4.623-14.534l0.052 0.078c-0.008-0.016-0.022-0.029-0.038-0.036l-0-0z"></path>
              </svg>
            </span>
            <p className="text-lg sm:text-xl">Discord</p>
          </div>
        </div>
      </div>
    </footer>
  );
};