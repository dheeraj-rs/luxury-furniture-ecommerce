"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut, Home } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { state, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!state.isAuthenticated || state.user?.role !== "admin") {
      router.push("/login")
    }
  }, [state.isAuthenticated, state.user?.role, router])

  if (!state.isAuthenticated || state.user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-4">You need admin privileges to access this page.</p>
          <Button asChild>
            <a href="/login">Sign In</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-muted/50 border-r min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-serif font-bold">Admin Dashboard</h2>
            <p className="text-sm text-muted-foreground">Welcome, {state.user.firstName}</p>
          </div>

          <nav className="px-4 space-y-2">
            <a
              href="/admin"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </a>
            <a
              href="/admin/products"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              <Package className="h-4 w-4" />
              Products
            </a>
            <a
              href="/admin/orders"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
            </a>
            <a
              href="/admin/users"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              <Users className="h-4 w-4" />
              Users
            </a>
            <a
              href="/admin/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors"
            >
              <Settings className="h-4 w-4" />
              Settings
            </a>
          </nav>

          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
              <a href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Store
              </a>
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
