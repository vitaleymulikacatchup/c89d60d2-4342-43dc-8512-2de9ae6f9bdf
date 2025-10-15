"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id":"heroImage","url":"https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern office workspace - Photo by Jakub Zerdzicki"},
  {"id":"featureImage1","url":"https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A modern computer screen displaying web design work, showcasing creative visuals in a workspace."},
  {"id":"featureImage2","url":"https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A female engineer works on code in a contemporary office setting, showcasing software development."},
  {"id":"contactImage","url":"https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Business professionals discussing data charts and graphs in a modern office setting."}
];

const resolveImage = (id) => {
  const asset = assetMap.find(a => a.id === id);
  return asset ? asset.url : "/public/images/placeholder.webp";
};

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaaSApp"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Revolutionize Your Workflow"
            description="Experience seamless integration and enhanced performance with our cutting-edge SaaS platform."
            imageSrc={resolveImage("heroImage")}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "features" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            bulletPoints={[
              { title: "Innovative Design", description: "Our platform is designed to scale with your needs.", icon: "Lightbulb" },
              { title: "Reliable Support", description: "24/7 customer support to ensure your success.", icon: "Shield" }
            ]}
            imageSrc={resolveImage("featureImage1")}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <FeatureCardTwo
            features={[
              { title: "Data Analytics", description: "Gain insights with advanced analytics tools.", icon: "TrendingUp" },
              { title: "Customization", description: "Personalize the platform to match your brand.", icon: "Paintbrush" }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <PricingCardThree
            plans={[
              { id: "basic", price: "$19/mo", name: "Basic Plan", buttons: [{ text: "Get started", href: "https://example.com" }, { text: "Contact us", href: "contact" }], features: ["1 User", "10 Projects", "Email Support"] },
              { id: "pro", badge: "Most popular plan", badgeIcon: "Sparkles", price: "$49/mo", name: "Pro Plan", buttons: [{ text: "Get started", href: "https://example.com" }, { text: "Contact us", href: "contact" }], features: ["Unlimited Users", "Unlimited Projects", "Priority Support"] }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="Newsletter"
            title="Stay in the Loop"
            description="Subscribe to our newsletter for updates and news."
            imageSrc={resolveImage("contactImage")}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2023 SaaSApp"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}