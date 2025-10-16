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
import { Loader2, DollarSign, Megaphone, Headphones, Award } from "lucide-react";

const Partner = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    partnershipTypes: [] as string[],
    message: "",
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

  const handlePartnershipTypeChange = (type: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      partnershipTypes: checked
        ? [...prev.partnershipTypes, type]
        : prev.partnershipTypes.filter((t) => t !== type),
    }));

    if (errors.partnershipTypes) {
      setErrors((prev) => ({ ...prev, partnershipTypes: "" }));
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

    if (!formData.companySize) {
      newErrors.companySize = "Please select your company size";
    }

    if (formData.partnershipTypes.length === 0) {
      newErrors.partnershipTypes = "Please select at least one partnership type";
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters)";
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
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Partner form submitted:", {
        source: "ForwardTriage-Partner",
        ...formData,
        partnership_type: formData.partnershipTypes.join(", "),
        status: "New",
      });

      toast({
        title: "Success!",
        description:
          "Thank you for your partnership interest! Our team will contact you within 48 hours.",
      });

      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        companySize: "",
        partnershipTypes: [],
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Partner form error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "There was an error submitting the form. Please email us at sales@panvatech.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.companyName.trim().length >= 2 &&
    formData.contactName.trim().length >= 2 &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone) &&
    formData.companySize &&
    formData.partnershipTypes.length > 0 &&
    formData.message.trim().length >= 10;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Forward Triage Partner Network
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Expand your healthcare solutions portfolio with our industry-leading
            triage platform
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partnership Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Revenue Opportunities</h3>
              <p className="text-muted-foreground">
                Competitive revenue sharing and commission structures
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Megaphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Marketing Support</h3>
              <p className="text-muted-foreground">
                Co-marketing materials and campaign support
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Technical Assistance</h3>
              <p className="text-muted-foreground">
                Dedicated technical integration support
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Training & Resources</h3>
              <p className="text-muted-foreground">
                Comprehensive partner training and certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Partner Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Reseller Partners</h3>
              <p className="text-muted-foreground">
                Sell Forward Triage solutions to your healthcare clients and earn
                competitive commissions
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                Integration Partners
              </h3>
              <p className="text-muted-foreground">
                Integrate our triage solutions with your platform to enhance your
                offering
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2">Referral Partners</h3>
              <p className="text-muted-foreground">
                Earn commissions by referring healthcare organizations to Forward
                Triage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Partnership Inquiry</h2>
            <p className="text-muted-foreground">
              Tell us about your organization and partnership interest
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-lg shadow-lg border space-y-6"
          >
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="companyName">
                Company Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className={errors.companyName ? "border-destructive" : ""}
              />
              {errors.companyName && (
                <p className="text-sm text-destructive">{errors.companyName}</p>
              )}
            </div>

            {/* Contact Name */}
            <div className="space-y-2">
              <Label htmlFor="contactName">
                Contact Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contactName"
                name="contactName"
                placeholder="Your Full Name"
                value={formData.contactName}
                onChange={handleChange}
                className={errors.contactName ? "border-destructive" : ""}
              />
              {errors.contactName && (
                <p className="text-sm text-destructive">{errors.contactName}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            {/* Company Size */}
            <div className="space-y-2">
              <Label htmlFor="companySize">
                Company Size <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.companySize}
                onValueChange={(value) => {
                  setFormData((prev) => ({ ...prev, companySize: value }));
                  if (errors.companySize) {
                    setErrors((prev) => ({ ...prev, companySize: "" }));
                  }
                }}
              >
                <SelectTrigger
                  className={errors.companySize ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="500+">500+</SelectItem>
                </SelectContent>
              </Select>
              {errors.companySize && (
                <p className="text-sm text-destructive">{errors.companySize}</p>
              )}
            </div>

            {/* Partnership Types */}
            <div className="space-y-2">
              <Label>
                Partnership Type <span className="text-destructive">*</span>
              </Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="reseller"
                    checked={formData.partnershipTypes.includes("Reseller")}
                    onCheckedChange={(checked) =>
                      handlePartnershipTypeChange("Reseller", !!checked)
                    }
                  />
                  <label htmlFor="reseller" className="text-sm cursor-pointer">
                    Reseller
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="integration"
                    checked={formData.partnershipTypes.includes(
                      "Integration Partner"
                    )}
                    onCheckedChange={(checked) =>
                      handlePartnershipTypeChange(
                        "Integration Partner",
                        !!checked
                      )
                    }
                  />
                  <label
                    htmlFor="integration"
                    className="text-sm cursor-pointer"
                  >
                    Integration Partner
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="referral"
                    checked={formData.partnershipTypes.includes(
                      "Referral Partner"
                    )}
                    onCheckedChange={(checked) =>
                      handlePartnershipTypeChange("Referral Partner", !!checked)
                    }
                  />
                  <label htmlFor="referral" className="text-sm cursor-pointer">
                    Referral Partner
                  </label>
                </div>
              </div>
              {errors.partnershipTypes && (
                <p className="text-sm text-destructive">
                  {errors.partnershipTypes}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your partnership interest..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "border-destructive" : ""}
                rows={5}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Partnership Inquiry"
              )}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;
