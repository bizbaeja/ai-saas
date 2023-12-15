"use client";

import { ArrowRight, Code2Icon, CodeIcon, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import{ Card }from "@/components/ui/card";
import { cn }from "@/lib/utils";
import { useRouter } from "next/navigation";
const tools = [
  {
    labels:"Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  }
  ,
  {
    labels:"Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  // {
  //   labels:"Image Generation",
  //   icon: ImageIcon,
  //   color: "text-pink-700",
  //   bgColor: "bg-pink-700/10",
  //   href: "/image",
  // },
  {
    labels:"Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    labels:"Code Generation",
    icon: CodeIcon,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/video",
  }
]

const DashboardPage =()=> {
const router = useRouter();
  return (
  
<div className="mb-8 space-y-4">
    <h2 className="text-2xl md:text-4xl font-bold text-center">
      AI 를 경험해 보세요!
    </h2>
    <p className="text-muted-foreground font-light text-sm md:text-lg text-center">가장 똑똑한 AI 와 대화해 보세요 - AI의 힘을 경험해 보세요!</p>
    <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool)=>( 
        <Card 
        onClick={()=>router.push(tool.href)}
        key={tool.href}
        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
        >
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)} />
            </div>
            <div
            className="font-semibold"
            >
                {tool.labels}
            </div>
          </div>
          <ArrowRight className="w-5 h-5"/>
        </Card>
       ))}
    </div>
</div>
 
  )
}
export default DashboardPage;