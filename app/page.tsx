import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"
import { PromotionalContent } from "@/components/promotional-content"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50">
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Desktop Header */}
        <header className="hidden md:flex justify-between items-center mb-8">
          <Logo />
          <nav className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-violet-700 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-violet-700 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-600 hover:text-violet-700 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-violet-700 transition-colors">
              Contact
            </a>
          </nav>
        </header>

        {/* Mobile Header */}
        <div className="md:hidden mb-6">
          <MobileNav />
        </div>

        <main className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Promotional Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <PromotionalContent />
          </div>

          {/* Auth Forms */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="mt-0">
                  <LoginForm />
                </TabsContent>
                <TabsContent value="signup" className="mt-0">
                  <SignupForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
