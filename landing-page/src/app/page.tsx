import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
      <h3 className="text-xl text-maroon font-semibold">-WHY CHOOSE US</h3>
      <h1 className="font-bold text-5xl">We Different From Others</h1>
      <p className="text-slate-700 max-w-2xl text-center text-xl leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ex assumenda vero atque. Cupiditate sit autem quo, nobis fuga maiores magni.</p>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center py-24 px-12">
          <div className="relative rounded-full w-[550px] h-[550px] bg-maroon/90 flex flex-col items-center justify-center text-white p-24 z-[10]">
            <div className="absolute -top-[13%] right-[18%] rounded-full w-[140px] h-[140px] overflow-hidden opacity-80 rotate-[25deg]">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="pattern_kRBfO0" patternUnits="userSpaceOnUse" width="13" height="13" patternTransform="rotate(135)">
                    <line x1="0" y="0" x2="0" y2="13" stroke="#000000" strokeWidth="6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pattern_kRBfO0)" opacity="1" />
              </svg>
            </div>
            <h2 className="font-bold text-[1.75rem] w-full mb-3">
              Industry Experts
            </h2>
            <p className="text-xl w-full leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ducimus id officia ut quos non ipsam dicta
            </p>
            <div className="absolute bottom-[8%] right-[15%] rounded-full w-[40px] h-[40px] bg-black text-black" />
          </div>
          <div className="relative rounded-full w-[600px] h-[600px] -ml-20">
            <Image
              fill
              src={process.env.IMAGE_URL || ""}
              alt="Model Image"
              className="object-cover rounded-full"
            />
            <div className="absolute bottom-[1%] right-[3%] rounded-full w-[140px] h-[140px] overflow-hidden opacity-80 rotate-[25deg] text-maroon">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="pattern_pgwszO" patternUnits="userSpaceOnUse" width="13.5" height="13.5" patternTransform="rotate(135)">
                    <line x1="0" y="0" x2="0" y2="13.5" stroke="#C62153" strokeWidth="6" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pattern_pgwszO)" opacity="1" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 mx-12">
          {services.map((service, index) => (
            <Service 
              key={service}
              service={service}
              selected={index === 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

const services = [
  "Industry Experts",
  "Dedicated Team",
  "Outcome Focused",
  "High Quality Service",
  "Cyber Security Expert"
]

type ServiceProps = {
  service: string;
  selected: boolean;
}

const Service: React.FC<ServiceProps> = ({ service, selected }) => {
  return (
    <div className={`flex justify-between items-center py-4 px-6 rounded-l-full w-[380px] font-semibold ${selected ? "bg-maroon text-white" : "bg-neutral-200"}`}>
      <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none">
        <path d="M15 6L9 12L15 18" stroke={`${selected ? "#FFFFFF" : "#000000"}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="text-xl">
        {service}
      </div>
    </div>
  )
}
