"use client"

import { Check } from "lucide-react"

interface PricingFeature {
  text: string
}

interface PricingPlan {
  icon: React.ReactNode
  name: string
  description: string
  price?: string
  priceLabel?: string
  contactText?: string
  buttonText: string
  buttonVariant: "outline" | "gradient"
  features: PricingFeature[]
  badge?: string
  highlighted?: boolean
}

const UserIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#E8EEFF" />
    <circle cx="24" cy="18" r="6" fill="#6366F1" />
    <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" fill="#6366F1" opacity="0.3" />
  </svg>
)

const RocketIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="34" r="6" fill="#E8EEFF" />
    <path d="M32 8c-8 0-14 6-18 14l6 6c8-4 14-10 14-18l-2-2z" fill="#6366F1" />
    <circle cx="28" cy="16" r="3" fill="white" />
    <path d="M14 28l-4 10 10-4" fill="#818CF8" />
  </svg>
)

const BuildingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="14" width="16" height="26" rx="2" fill="#6366F1" />
    <rect x="26" y="22" width="12" height="18" rx="2" fill="#818CF8" />
    <rect x="14" y="18" width="4" height="4" rx="1" fill="white" opacity="0.5" />
    <rect x="14" y="26" width="4" height="4" rx="1" fill="white" opacity="0.5" />
    <rect x="14" y="34" width="4" height="4" rx="1" fill="white" opacity="0.5" />
    <rect x="30" y="26" width="4" height="4" rx="1" fill="white" opacity="0.5" />
    <rect x="30" y="34" width="4" height="4" rx="1" fill="white" opacity="0.5" />
  </svg>
)

const pricingPlans: PricingPlan[] = [
  {
    icon: <UserIcon />,
    name: "Freelancer",
    description: "For solo designers launching standout portfolios.",
    price: "$4,200",
    priceLabel: "/month",
    buttonText: "Choose this plan",
    buttonVariant: "outline",
    features: [
      { text: "Fully responsive Webflow template" },
      { text: "Modular & scalable components" },
      { text: "Easy-to-edit CMS setup" },
    ],
  },
  {
    icon: <RocketIcon />,
    name: "Agency",
    description: "Ideal for growing agencies or collaborative design teams who need scalable templates.",
    price: "$10,000",
    priceLabel: "/month",
    buttonText: "Get started now",
    buttonVariant: "gradient",
    badge: "Most popular",
    highlighted: true,
    features: [
      { text: "Fully responsive Webflow template" },
      { text: "UX-optimized page layouts" },
      { text: "CMS + Figma file included" },
      { text: "SEO-ready structure" },
      { text: "Email support included" },
    ],
  },
  {
    icon: <BuildingIcon />,
    name: "Enterprise",
    description: "Custom solutions for large teams & organizations.",
    contactText: "Contact us",
    buttonText: "Send a message",
    buttonVariant: "outline",
    features: [
      { text: "All included in Agency" },
      { text: "Custom integrations & support" },
      { text: "Dedicated account manager" },
    ],
  },
]

export function PricingSection() {
  return (
    <section className="w-full min-h-screen bg-[#F8F9FC] py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl bg-white p-6 sm:p-8
                ${plan.highlighted 
                  ? "shadow-xl ring-1 ring-gray-100 lg:-mt-4 lg:mb-4" 
                  : "shadow-lg ring-1 ring-gray-100"
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="inline-flex items-center rounded-full bg-[#6366F1] px-3 py-1 text-xs font-medium text-white">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                {plan.icon}
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold text-gray-900 sm:text-[28px]">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-500 leading-relaxed sm:text-base">
                {plan.description}
              </p>

              {/* Price or Contact */}
              <div className="mt-6">
                {plan.price ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-base text-gray-400 sm:text-lg">
                      {plan.priceLabel}
                    </span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
                    {plan.contactText}
                  </div>
                )}
              </div>

              {/* Button */}
              <div className="mt-6">
                {plan.buttonVariant === "gradient" ? (
                  <button className="w-full rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] py-3.5 px-6 text-base font-medium text-white shadow-md hover:opacity-90 transition-opacity sm:py-4">
                    {plan.buttonText}
                  </button>
                ) : (
                  <button className="w-full rounded-xl border border-gray-200 bg-white py-3.5 px-6 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors sm:py-4">
                    {plan.buttonText}
                  </button>
                )}
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#6366F1]">
                        <Check className="h-3 w-3 text-[#6366F1]" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 sm:text-base">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
