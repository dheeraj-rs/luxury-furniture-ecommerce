"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth-context"
import { User, LogOut, Settings, Package } from "lucide-react"

export function UserMenu() {
  const { state, logout } = useAuth()

  if (!state.isAuthenticated || !state.user) {
    return (
      <Button variant="ghost" size="icon" asChild>
        <a href="/login">
          <User className="h-5 w-5" />
        </a>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5">
          <p className="text-sm font-medium">
            {state.user.firstName} {state.user.lastName}
          </p>
          <p className="text-xs text-muted-foreground">{state.user.email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Package className="mr-2 h-4 w-4" />
          My Orders
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Account Settings
        </DropdownMenuItem>
        {state.user.role === "admin" && (
          <DropdownMenuItem asChild>
            <a href="/admin">
              <Settings className="mr-2 h-4 w-4" />
              Admin Dashboard
            </a>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
