// import { AnimatedGridPattern } from "@/app/components/ui/animated-grid-pattern"
import { Phone, Mail, Inbox, Facebook, MessageCircle } from "lucide-react"
import { Particles } from "@/app/components/ui/particles"


function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div id="contacts" className=" flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        {icon}
      </div>
      <p className="text-lg font-semibold text-gray-900">
        {title}
      </p>
      <p className="mt-1 text-sm text-gray-600">
        {value}
      </p>
    </div>
  )
}

export default function ContactInfo() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-white">

      {/* Background pattern */}
      <Particles
        quantity={120}
        staticity={50}
        ease={60}
        size={0.6}
        color="black"
        className="absolute inset-0 bg-white"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-gray-900">
        <p className="mb-12 text-4xl font-semibold">Contact</p>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <ContactCard
            icon={<Phone className="h-6 w-6 text-green-600" />}
            title="Mobile"
            value="09688751273"
          />

          <ContactCard
            icon={<Mail className="h-6 w-6 text-blue-600" />}
            title="Sales Email"
            value="sales@net-bridge.ph"
          />

          <ContactCard
            icon={<Inbox className="h-6 w-6 text-purple-600" />}
            title="General Inquiries"
            value="inquiry@net-bridge.ph"
          />

          <ContactCard
            icon={<Facebook className="h-6 w-6 text-sky-600" />}
            title="Facebook"
            value="Follow us on Facebook"
          />

          <ContactCard
            icon={<MessageCircle className="h-6 w-6 text-teal-600" />}
            title="WhatsApp"
            value="Chat with us on WhatsApp"
          />
        </div>
      </div>

    </div>
  )
}
