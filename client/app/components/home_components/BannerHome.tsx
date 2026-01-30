import { BackgroundPaths } from "@/app/components/ui/background-paths"

export default function BannerHome() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[90vh] overflow-hidden">

      {/* Background */}
      <BackgroundPaths title="TITLE HERE" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-white">
        <p className="text-3xl">Lorem Ipsum Bai Mole</p>
        <div>Button to Visit something</div>
      </div>

    </div>
  )
}
