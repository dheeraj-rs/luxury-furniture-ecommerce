import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - Artisan Furniture Co.",
  description: "Terms and conditions for using our website and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2024</p>
          </div>

          <Card>
            <CardContent className="p-8 prose prose-gray max-w-none">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>Products and Services</h2>
              <p>
                All products and services are subject to availability. We reserve the right to discontinue any product
                at any time. Prices are subject to change without notice.
              </p>

              <h2>Orders and Payment</h2>
              <ul>
                <li>All orders are subject to acceptance and availability</li>
                <li>Payment must be received before shipment</li>
                <li>We accept major credit cards and PayPal</li>
                <li>Prices do not include applicable taxes or shipping costs</li>
              </ul>

              <h2>Shipping and Delivery</h2>
              <p>
                Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping
                carriers or circumstances beyond our control.
              </p>

              <h2>Returns and Refunds</h2>
              <p>
                Items may be returned within 30 days of delivery in original condition. Custom-made items are not
                returnable unless defective. Return shipping costs are the responsibility of the customer unless the
                item is defective.
              </p>

              <h2>Warranty</h2>
              <p>
                All furniture comes with a 5-year warranty against manufacturing defects. This warranty does not cover
                normal wear and tear, misuse, or damage from accidents.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Artisan Furniture Co. be liable for any indirect, incidental, special, or
                consequential damages arising out of or in connection with your use of our products or services.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Artisan
                Furniture Co. and is protected by copyright and trademark laws.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the State of Oregon,
                without regard to its conflict of law provisions.
              </p>

              <h2>Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <ul>
                <li>Email: legal@artisanfurniture.com</li>
                <li>Phone: (503) 555-0123</li>
                <li>Address: 1234 Craftsman Lane, Portland, OR 97201</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
