import type React from "react"
import { cn } from "@/lib/utils"

interface BreadcrumbProps {
  children: React.ReactNode
  className?: string
}

interface BreadcrumbItemProps {
  children: React.ReactNode
  href?: string
  className?: string
}

interface BreadcrumbSeparatorProps {
  className?: string
}

export function Breadcrumb({ children, className }: BreadcrumbProps) {
  return <nav className={cn("flex items-center space-x-2 text-sm", className)}>{children}</nav>
}

export function BreadcrumbItem({ children, href, className }: BreadcrumbItemProps) {
  if (href) {
    return (
      <a href={href} className={cn("text-muted-foreground hover:text-foreground transition-colors", className)}>
        {children}
      </a>
    )
  }
  return <span className={cn("text-foreground font-medium", className)}>{children}</span>
}

export function BreadcrumbSeparator({ className }: BreadcrumbSeparatorProps) {
  return <span className={cn("text-muted-foreground", className)}>/</span>
}
