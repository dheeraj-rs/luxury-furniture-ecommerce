import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - Artisan Furniture Co.",
  description: "Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2024</p>
          </div>

          <Card>
            <CardContent className="p-8 prose prose-gray max-w-none">
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                or contact us for support. This may include your name, email address, phone number, shipping address,
                and payment information.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your purchases</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information with:
              </p>
              <ul>
                <li>Service providers who help us operate our business</li>
                <li>Shipping companies to deliver your orders</li>
                <li>Payment processors to handle transactions</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
                personalize content. You can control cookie settings through your browser preferences.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul>
                <li>Email: privacy@artisanfurniture.com</li>
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
