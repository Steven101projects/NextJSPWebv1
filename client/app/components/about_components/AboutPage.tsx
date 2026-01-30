import { AnimatedGridPattern } from "@/app/components/ui/animated-grid-pattern"


export default function AboutInfo() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[90vh] overflow-hidden bg-white">

      {/* Background pattern */}
      <AnimatedGridPattern
        numSquares={35}
        maxOpacity={0.12}
        duration={4}
        repeatDelay={1}
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-black">
        <p className="text-3xl font-semibold">About</p>
        <div>Content</div>
      </div>

    </div>
  )
}
