import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Loader2, DollarSign, Megaphone, Headphones, Award } from "lucide-react";
import { CONFIG } from "@/config/constants";
import { getWebPageSchema, getOrganizationSchema, getServiceSchema } from "@/lib/schema";

const Partner = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    title: "",
    email: "",
    phone: "",
    organizationType: "",
    potentialUsers: "",
    message: "",
    preferredContactMethod: "",
    bestTimeToContact: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length <= 3) return phoneNumber;
    if (phoneNumber.length <= 6)
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, "");
    return digits.length === 10;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };


  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName || formData.companyName.trim().length < 2) {
      newErrors.companyName = "Please enter your company name";
    }

    if (!formData.contactName || formData.contactName.trim().length < 2) {
      newErrors.contactName = "Please enter your full name";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit US phone number";
    }

    if (!formData.title || formData.title.trim().length < 2) {
      newErrors.title = "Please enter your title/role";
    }

    if (!formData.organizationType) {
      newErrors.organizationType = "Please select your organization type";
    }

    if (!formData.potentialUsers) {
      newErrors.potentialUsers = "Please select potential users range";
    }


    if (!formData.message || formData.message.trim().length < 2) {
      newErrors.message = "Please enter a message (at least 2 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for n8n webhook
      const webhookData = {
        formType: "Partner",
        timestamp: new Date().toISOString(),
        source: CONFIG.COMPANY.NAME,
        data: {
          organization: formData.companyName,
          name: formData.contactName,
          title: formData.title,
          email: formData.email,
          phone: formData.phone,
          organizationType: formData.organizationType,
          potentialUsers: formData.potentialUsers,
          message: formData.message,
          preferredContactMethod: formData.preferredContactMethod || null,
          bestTimeToContact: formData.bestTimeToContact || null,
          source: "ForwardTriage Marketing Website",
        }
      };

      // Use global config webhook URL
      const webhookUrl = CONFIG.WEBHOOKS.PARTNER_FORM;

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Partner form submitted successfully to n8n:", webhookData);

      toast({
        title: "Success!",
        description:
          "Thank you for your partnership interest! Our team will contact you within 48 hours.",
      });

      setFormData({
        companyName: "",
        contactName: "",
        title: "",
        email: "",
        phone: "",
        organizationType: "",
        potentialUsers: "",
        message: "",
        preferredContactMethod: "",
        bestTimeToContact: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Partner form error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          `There was an error submitting the form. Please email us at ${CONFIG.EMAILS.SALES}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.companyName.trim().length >= 2 &&
    formData.contactName.trim().length >= 2 &&
    formData.title.trim().length >= 2 &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone) &&
    formData.organizationType &&
    formData.potentialUsers &&
    formData.message.trim().length >= 2;

  const schema = [
    getWebPageSchema(
      "Partner With ForwardTriage - Healthcare Triage Partnership Opportunities",
      "Join ForwardTriage's partner network. Become a reseller, integration partner, or referral partner for our AI-powered healthcare triage solutions. Earn competitive commissions and grow your healthcare business.",
      "https://forwardtriage.com/partner"
    ),
    getOrganizationSchema(),
    getServiceSchema()
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Partner With ForwardTriage - Healthcare Triage Partnership Opportunities"
        description="Join ForwardTriage's partner network. Become a reseller, integration partner, or referral partner for our AI-powered healthcare triage solutions. Earn competitive commissions and grow your healthcare business."
        keywords="healthcare partnership, triage software reseller, healthcare IT partner, integration partner, referral partner, healthcare business opportunity, medical software partnership"
        canonical="https://forwardtriage.com/partner"
        ogImage="https://forwardtriage.com/og-image.jpg"
        schema={schema}
      />
      <Navigation />

      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join the Forward Triage
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                Partner Network
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expand your healthcare solutions portfolio with our industry-leading
              AI-powered triage platform and unlock new revenue opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with Forward Triage and how we support your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Revenue Opportunities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Competitive revenue sharing and commission structures designed to maximize your earning potential
                </p>
              </div>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Megaphone className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Marketing Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Co-marketing materials, campaign support, and brand assets to accelerate your market presence
                </p>
              </div>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Technical Assistance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated technical integration support and API documentation for seamless implementation
                </p>
              </div>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Training & Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive partner training, certification programs, and ongoing educational resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Reseller Partners</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Sell Forward Triage solutions to your healthcare clients and earn competitive commissions while building long-term customer relationships
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Up to 30% commission</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Sales training & support</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Marketing materials</span>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Integration Partners</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Integrate our triage solutions with your platform to enhance your offering and provide seamless healthcare workflows
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>API access & documentation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Technical support</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Co-development opportunities</span>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3">Referral Partners</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center mb-6">
                Earn commissions by referring healthcare organizations to Forward Triage and help them discover innovative triage solutions
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>15% referral commission</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Lead tracking system</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Referral materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Partner?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network of healthcare innovators and help transform patient care with AI-powered triage solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Partner With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <DollarSign className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Revenue Growth</h4>
                      <p className="text-sm text-gray-600">Competitive commissions and revenue sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Megaphone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Marketing Support</h4>
                      <p className="text-sm text-gray-600">Co-marketing materials and campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Headphones className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Technical Support</h4>
                      <p className="text-sm text-gray-600">Dedicated integration assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Training & Certification</h4>
                      <p className="text-sm text-gray-600">Comprehensive partner training programs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-3">Quick Response</h3>
                <p className="text-sm opacity-90 mb-4">
                  Our partnership team typically responds within 24-48 hours to discuss your specific needs and opportunities.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 space-y-8"
              >
                {/* Form Header */}
                <div className="text-center border-b border-gray-100 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnership Inquiry</h3>
                  <p className="text-gray-600">Tell us about your organization and partnership interest</p>
                </div>

                {/* Organization Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Organization Information</h4>
                  </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Organization Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                    Organization Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="Your Organization"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`h-11 ${errors.companyName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                  />
                  {errors.companyName && (
                    <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>
                  )}
                </div>

                {/* Organization Type */}
                <div className="space-y-2">
                  <Label htmlFor="organizationType" className="text-sm font-medium text-gray-700">
                    Organization Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.organizationType}
                    onValueChange={(value) => {
                      setFormData((prev) => ({ ...prev, organizationType: value }));
                      if (errors.organizationType) {
                        setErrors((prev) => ({ ...prev, organizationType: "" }));
                      }
                    }}
                  >
                    <SelectTrigger
                      className={`h-11 ${errors.organizationType ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hospital">Hospital</SelectItem>
                      <SelectItem value="Clinic">Clinic</SelectItem>
                      <SelectItem value="Medical Group">Medical Group</SelectItem>
                      <SelectItem value="Health System">Health System</SelectItem>
                      <SelectItem value="Urgent Care">Urgent Care</SelectItem>
                      <SelectItem value="Telehealth Provider">Telehealth Provider</SelectItem>
                      <SelectItem value="Healthcare IT Company">Healthcare IT Company</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.organizationType && (
                    <p className="text-sm text-red-500 mt-1">{errors.organizationType}</p>
                  )}
                </div>
              </div>

              {/* Potential Users */}
              <div className="space-y-2">
                <Label htmlFor="potentialUsers" className="text-sm font-medium text-gray-700">
                  Potential Users <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.potentialUsers}
                  onValueChange={(value) => {
                    setFormData((prev) => ({ ...prev, potentialUsers: value }));
                    if (errors.potentialUsers) {
                      setErrors((prev) => ({ ...prev, potentialUsers: "" }));
                    }
                  }}
                >
                  <SelectTrigger
                    className={`h-11 ${errors.potentialUsers ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                  >
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="501-1000">501-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.potentialUsers && (
                  <p className="text-sm text-red-500 mt-1">{errors.potentialUsers}</p>
                )}
              </div>
            </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Contact Information</h4>
                  </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Name */}
                <div className="space-y-2">
                  <Label htmlFor="contactName" className="text-sm font-medium text-gray-700">
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    placeholder="Your Full Name"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`h-11 ${errors.contactName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                  />
                  {errors.contactName && (
                    <p className="text-sm text-red-500 mt-1">{errors.contactName}</p>
                  )}
                </div>

                {/* Title/Role */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                    Title/Role <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Chief Medical Officer"
                    value={formData.title}
                    onChange={handleChange}
                    className={`h-11 ${errors.title ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500 mt-1">{errors.title}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`h-11 ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`h-11 ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    required
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Preferred Contact Method & Best Time to Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Preferred Contact Method */}
                <div className="space-y-2">
                  <Label htmlFor="preferredContactMethod" className="text-sm font-medium text-gray-700">
                    Preferred Contact Method
                  </Label>
                  <Select
                    value={formData.preferredContactMethod}
                    onValueChange={(value) => {
                      setFormData((prev) => ({ ...prev, preferredContactMethod: value }));
                    }}
                  >
                    <SelectTrigger className="h-11 border-gray-300 focus:border-primary">
                      <SelectValue placeholder="Select preferred method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Email">Email</SelectItem>
                      <SelectItem value="Phone">Phone</SelectItem>
                      <SelectItem value="Teams">Microsoft Teams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Best Time to Contact */}
                <div className="space-y-2">
                  <Label htmlFor="bestTimeToContact" className="text-sm font-medium text-gray-700">
                    Best Time to Contact
                  </Label>
                  <Select
                    value={formData.bestTimeToContact}
                    onValueChange={(value) => {
                      setFormData((prev) => ({ ...prev, bestTimeToContact: value }));
                    }}
                  >
                    <SelectTrigger className="h-11 border-gray-300 focus:border-primary">
                      <SelectValue placeholder="Select best time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="Afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="Evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="Any Time">Any Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

                {/* Partnership Interest */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Partnership Details</h4>
                  </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Partnership Interest <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your partnership interests..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`min-h-[120px] resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                  rows={5}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                )}
              </div>
            </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-100">
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Submitting Partnership Inquiry...
                      </>
                    ) : (
                      <>
                        <Award className="mr-3 h-5 w-5" />
                        Submit Partnership Inquiry
                      </>
                    )}
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 mb-2">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-primary hover:underline font-medium">
                        Privacy Policy
                      </a>
                      {" "}and{" "}
                      <a href="/terms" className="text-primary hover:underline font-medium">
                        Terms of Service
                      </a>
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Secure & Encrypted</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>HIPAA Compliant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
