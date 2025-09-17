"use client"

import { useEffect } from "react"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"

  useEffect(() => {
    signIn("microsoft-entra-id", { 
      callbackUrl,
    })
  }, [callbackUrl])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-6 w-6 border-2 border-border border-t-primary mx-auto mb-3"></div>
        <p className="text-muted-foreground text-sm">Redirecting...</p>
      </div>
    </div>
  )
}
