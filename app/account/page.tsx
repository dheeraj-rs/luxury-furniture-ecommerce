"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function AccountPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const handleSaveProfile = () => {
    // Save profile logic would go here
    setIsEditing(false)
    alert("Profile updated successfully!")
  }

  const mockOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 2499.99,
      items: [
        { name: "Modern Oak Dining Table", quantity: 1, price: 1899.99 },
        { name: "Dining Chair Set (4)", quantity: 1, price: 600.0 },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-28",
      status: "In Transit",
      total: 899.99,
      items: [{ name: "Luxury Velvet Sofa", quantity: 1, price: 899.99 }],
    },
  ]

  const mockWishlist = [
    { id: 1, name: "Walnut Coffee Table", price: 799.99, image: "walnut coffee table" },
    { id: 2, name: "Brass Floor Lamp", price: 299.99, image: "brass floor lamp" },
    { id: 3, name: "Rattan Storage Basket", price: 89.99, image: "rattan basket" },
  ]

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif">My Account</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}!</p>
            </div>
            <Button variant="outline" onClick={logout}>
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Profile Information</CardTitle>
                    <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, name: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, address: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={profileData.city}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, city: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={profileData.state}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, state: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        value={profileData.zipCode}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, zipCode: e.target.value }))}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <Button onClick={handleSaveProfile} className="w-full">
                      Save Changes
                    </Button>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Order History</h2>
                {mockOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">Order {order.id}</h3>
                          <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
                          <p className="text-lg font-semibold mt-1">${order.total}</p>
                        </div>
                      </div>
                      <Separator className="mb-4" />
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span>
                              {item.name} × {item.quantity}
                            </span>
                            <span>${item.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {order.status === "In Transit" && (
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wishlist">
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">My Wishlist</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockWishlist.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <img
                          src={`/abstract-geometric-shapes.png?height=200&width=300&query=${item.image}`}
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold mb-2">{item.name}</h3>
                        <p className="text-lg font-bold text-primary mb-4">${item.price}</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            Add to Cart
                          </Button>
                          <Button size="sm" variant="outline">
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addresses">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif">Saved Addresses</h2>
                  <Button>Add New Address</Button>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">Home</h3>
                        <Badge variant="outline">Default</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      <p>123 Main Street</p>
                      <p>Portland, OR 97201</p>
                      <p>United States</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
