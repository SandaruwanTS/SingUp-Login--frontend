import { CloudLightning } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <CloudLightning className="h-8 w-8 text-violet-600" />
      <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
        Velaris Cloud
      </span>
    </div>
  )
}
