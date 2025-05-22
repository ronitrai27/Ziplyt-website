import { Card } from "@/components/ui/card";

export default function AppDownload() {
  return (
    <Card className="px-4 py-3 max-w-md mx-auto bg-white  shadow-md relative overflow-hidden border border-slate-200 ">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] "></div>

      <div className="relative z-10">
        <div className="text-center">
          <h3 className="text-[16px] font-medium mb-1 font-inter">
            Download Our App
          </h3>
          <p className="text-sm text-slate-500 font-roboto">
            Get the best experience on your mobile device
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-2 py-1 rounded-xl bg-black hover:bg-black/90 text-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex-1"
          >
            <div className="flex-shrink-0">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M17.0764 13.3674C17.0764 16.3306 19.4883 17.3454 19.5699 17.3761C19.5494 17.4375 19.1235 18.8158 18.1087 20.2349C17.2373 21.4699 16.3249 22.7049 14.9058 22.7049C13.4867 22.7049 13.0608 21.8745 11.4371 21.8745C9.8134 21.8745 9.2441 22.7049 7.9068 22.7049C6.5695 22.7049 5.5957 21.3881 4.7243 20.1531C3.6685 18.6317 2.7971 16.2198 2.7971 13.9103C2.7971 10.2525 5.1885 8.3242 7.5594 8.3242C8.9377 8.3242 10.0959 9.2366 10.9673 9.2366C11.7977 9.2366 13.0813 8.2833 14.6845 8.2833C15.2128 8.2833 17.0764 8.3242 18.4138 10.0502C18.3319 10.0911 17.0764 10.8805 17.0764 13.3674ZM14.0177 6.6391C14.6845 5.8496 15.1514 4.7938 15.1514 3.738C15.1514 3.5952 15.1309 3.4524 15.0899 3.3506C14.1365 3.3915 12.9834 4.0992 12.2144 4.9706C11.6042 5.6783 11.0349 6.7341 11.0349 7.8104C11.0349 7.9737 11.0758 8.1369 11.0963 8.1778C11.1577 8.1983 11.2601 8.2188 11.3624 8.2188C12.2144 8.2188 13.3112 7.5316 14.0177 6.6391Z" />
              </svg>
            </div>
            <div className="flex flex-col items-start font-inter tracking-tight">
              <span className="text-xs font-normal">Download on</span>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-2 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex-1"
          >
            <div className="flex-shrink-0">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  d="M4.1,21.5l8.1-8.1L4.1,5.3C4,5.5,4,5.7,4,6v12C4,20.3,4,20.5,4.1,21.5z"
                  fill="#EA4335"
                />
                <path
                  d="M4.1,5.3l8.1,8.1l3.3-3.3C16.3,9.4,13.9,8,12,8c-3.1,0-5.6,1.9-6.7,4.5L4.1,5.3z"
                  fill="#FBBC04"
                />
                <path
                  d="M4.1,21.5L12,13.4l3.3,3.3c-1.1,2.6-3.6,4.5-6.7,4.5c-1.9,0-4.3-1.4-4.5-2.1L4.1,21.5z"
                  fill="#34A853"
                />
                <path
                  d="M20,12c0-0.7-0.1-1.3-0.2-1.9l-7.8,7.8l7.8,7.8c0.1-0.6,0.2-1.2,0.2-1.9V12z"
                  fill="#4285F4"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start font-inter tracking-tight">
              <span className="text-xs font-normal">GET IT ON</span>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
}
