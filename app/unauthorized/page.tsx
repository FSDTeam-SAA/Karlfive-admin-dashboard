import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Unauthorized</h1>
        <p className="text-muted-foreground">You don't have permission to access this page.</p>
        <Button asChild>
          <Link href="/auth/login">Go to Login</Link>
        </Button>
      </div>
    </div>
  )
}
