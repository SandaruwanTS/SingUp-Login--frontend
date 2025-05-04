import { CheckCircle, CloudLightning, Lock, Zap } from "lucide-react"

export function PromotionalContent() {
  const features = [
    {
      icon: <CloudLightning className="h-5 w-5 text-violet-600" />,
      title: "Lightning Fast Storage",
      description: "Upload and access your files at incredible speeds with our optimized cloud infrastructure.",
    },
    {
      icon: <Lock className="h-5 w-5 text-violet-600" />,
      title: "Bank-Level Security",
      description: "Your data is encrypted with military-grade encryption both in transit and at rest.",
    },
    {
      icon: <Zap className="h-5 w-5 text-violet-600" />,
      title: "Seamless Collaboration",
      description: "Share and collaborate on files with your team in real-time with powerful permissions.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
          Secure Cloud Storage for the Modern World
        </h1>
        <p className="text-gray-600 text-lg">
          Store, share, and collaborate on files with confidence. Velaris Cloud provides the security and speed you
          need.
        </p>
      </div>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="mt-1">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-gradient-to-r from-violet-100 to-indigo-100 p-4 rounded-lg border border-violet-200 animate-fadeIn"
        style={{ animationDelay: "300ms" }}
      >
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-violet-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900">Free 30-day trial</h3>
            <p className="text-gray-600 text-sm">
              Get started with 50GB of storage, no credit card required. Upgrade anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
