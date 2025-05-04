"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Github, Mail } from "lucide-react"
import { useState } from "react"

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    //  we can replaced with actual API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Signup submitted")
    }, 1000)
  }

  return (
    <div className="animate-fadeIn">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-gray-500">Enter your information to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Thiwanka" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Sandaruwan" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input id="signup-email" placeholder="name@example.com" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input id="signup-password" type="password" required />
            <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the{" "}
              <a href="#" className="text-violet-600 hover:text-violet-800">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-violet-600 hover:text-violet-800">
                Privacy Policy
              </a>
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Button>
          <Button variant="outline" type="button" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Google</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
