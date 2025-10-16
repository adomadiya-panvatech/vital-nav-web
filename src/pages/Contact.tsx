import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "",
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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit US phone number";
    }

    if (!formData.company || formData.company.trim().length === 0) {
      newErrors.company = "Please enter your company or organization name";
    }

    if (
      !formData.serviceInterest ||
      formData.serviceInterest.trim().length < 5
    ) {
      newErrors.serviceInterest = "Please describe your service interest";
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
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", {
        source: "ForwardTriage",
        ...formData,
        status: "New",
      });

      toast({
        title: "Success!",
        description:
          "Thank you! Your inquiry has been received. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceInterest: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "There was an error submitting the form. Please try again or email us at support@panvatech.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name.trim().length >= 2 &&
    validateEmail(formData.email) &&
    validatePhone(formData.phone) &&
    formData.company.trim().length > 0 &&
    formData.serviceInterest.trim().length >= 5 &&
    formData.message.trim().length >= 10;

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Send Us a Message</h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card p-8 rounded-lg shadow-lg border space-y-6"
        >
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "border-destructive" : ""}
              aria-required="true"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-destructive" : ""}
              aria-required="true"
              aria-invalid={!!errors.email}
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
              aria-required="true"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">
              Company/Organization <span className="text-destructive">*</span>
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className={errors.company ? "border-destructive" : ""}
              aria-required="true"
              aria-invalid={!!errors.company}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company}</p>
            )}
          </div>

          {/* Service Interest */}
          <div className="space-y-2">
            <Label htmlFor="serviceInterest">
              Service Interest <span className="text-destructive">*</span>
            </Label>
            <Input
              id="serviceInterest"
              name="serviceInterest"
              type="text"
              placeholder="e.g., Healthcare IT Solutions, Telemedicine, etc."
              value={formData.serviceInterest}
              onChange={handleChange}
              className={errors.serviceInterest ? "border-destructive" : ""}
              aria-required="true"
              aria-invalid={!!errors.serviceInterest}
            />
            {errors.serviceInterest && (
              <p className="text-sm text-destructive">
                {errors.serviceInterest}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Message/Comments <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "border-destructive" : ""}
              rows={5}
              aria-required="true"
              aria-invalid={!!errors.message}
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
                Sending...
              </>
            ) : (
              "Send Inquiry"
            )}
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
