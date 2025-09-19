"use client"

import type React from "react"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "customer" | "admin"
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; user: User }
  | { type: "LOGIN_ERROR" }
  | { type: "LOGOUT" }
  | { type: "LOAD_USER"; user: User }

const AuthContext = createContext<{
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<boolean>
  logout: () => void
} | null>(null)

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true }
    case "LOGIN_SUCCESS":
      return { user: action.user, isLoading: false, isAuthenticated: true }
    case "LOGIN_ERROR":
      return { user: null, isLoading: false, isAuthenticated: false }
    case "LOGOUT":
      return { user: null, isLoading: false, isAuthenticated: false }
    case "LOAD_USER":
      return { user: action.user, isLoading: false, isAuthenticated: true }
    default:
      return state
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoading: false,
    isAuthenticated: false,
  })

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("luxury-furniture-user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        dispatch({ type: "LOAD_USER", user })
      } catch (error) {
        console.error("Failed to load user from localStorage:", error)
      }
    }
  }, [])

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("luxury-furniture-user", JSON.stringify(state.user))
    } else {
      localStorage.removeItem("luxury-furniture-user")
    }
  }, [state.user])

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: "LOGIN_START" })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - in real app, this would call your API
    if (email && password.length >= 6) {
      const user: User = {
        id: "1",
        email,
        firstName: "John",
        lastName: "Doe",
        role: email.includes("admin") ? "admin" : "customer",
      }
      dispatch({ type: "LOGIN_SUCCESS", user })
      return true
    } else {
      dispatch({ type: "LOGIN_ERROR" })
      return false
    }
  }

  const signup = async (email: string, password: string, firstName: string, lastName: string): Promise<boolean> => {
    dispatch({ type: "LOGIN_START" })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock signup - in real app, this would call your API
    if (email && password.length >= 6 && firstName && lastName) {
      const user: User = {
        id: Date.now().toString(),
        email,
        firstName,
        lastName,
        role: "customer",
      }
      dispatch({ type: "LOGIN_SUCCESS", user })
      return true
    } else {
      dispatch({ type: "LOGIN_ERROR" })
      return false
    }
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" })
  }

  return <AuthContext.Provider value={{ state, dispatch, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
