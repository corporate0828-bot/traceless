import { cn } from "@/lib/utils"

const cardContent = {
    title: "How TraceLess works",
  };
  const CardBody = ({ className = "p-4" }) => (
    <div className={cn("text-left", className)}>
      <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
        {cardContent.title}
      </h3>
      <ul className="list-disc list-inside">
      <li><strong>Privacy-first P2P</strong>: TraceLess uses peer-to-peer transfer so files move directly between users instead of passing through a central storage layer.</li>
      <li><strong>Secure by design</strong>: Direct connections help reduce exposure and keep transfers focused on the two peers involved.</li>
      <li><strong>Minimal workflow</strong>: TraceLess keeps setup simple so teams can share files quickly on shared or public systems.</li>
      <li><strong>WebRTC</strong>: Real-time connections power the file transfer channel between peers.</li>
      <li><strong>Socket.io</strong>: Signaling helps peers discover and connect to each other.</li>
    </ul>
    </div>
  )
  //======================================
  export const SimpleCard_V3 = () => {
    const Icon = ({ className, ...rest }: any) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1"
          stroke="currentColor"
          {...rest}
          className={cn("dark:text-white text-black size-6 absolute", className)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      )
    }
    return (
      <div>
        <div className="border border-dashed border-zinc-400 dark:border-zinc-700 relative">
          <Icon className="-top-3 -left-3" />
          <Icon className="-top-3 -right-3" />
          <Icon className="-bottom-3 -left-3" />
          <Icon className="-bottom-3 -right-3" />
          <CardBody className="p-6" />
        </div>
      </div>
    )
  }