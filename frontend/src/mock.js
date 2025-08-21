// Mock data for the PCCS website
export const mockData = {
  company: {
    name: "Planning & Cost Control Solutions",
    abbreviation: "PCCS",
    tagline: "Powerful, Flexible Project Solutions",
    description: "Expert outsourced project management and cost control services for Oil & Gas, Mining, and Industrial sectors.",
    logo: "https://customer-assets.emergentagent.com/job_site-renewal-2/artifacts/16vqupfj_Generate%20a%20high-reso.png"
  },
  
  contact: {
    email: "info@pccsolution.com.au",
    phone: "+61 (0) 123 456 789",
    location: "Australia Wide",
    businessHours: {
      weekdays: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed"
    }
  },

  stats: [
    { label: "Expert Consultants", value: "50+" },
    { label: "Projects Completed", value: "200+" },
    { label: "Industry Experience", value: "15+ Years" },
    { label: "Cost Savings Achieved", value: "$50M+" }
  ],

  services: [
    {
      title: "Project Management Services",
      description: "Our certified experts deliver comprehensive project management through strategic upfront planning, real-time monitoring, and proactive risk mitigation.",
      features: [
        "Program Management",
        "Planning & Scheduling", 
        "Project Management Oversight (PMO)",
        "Risk Management"
      ]
    },
    {
      title: "Construction Management Services", 
      description: "Our specialized construction management teams bring deep industry expertise with Construction Superintendents, Estimators, Schedulers, and Inspectors.",
      features: [
        "Construction Superintendents",
        "Cost Estimators & Schedulers",
        "Quality Inspectors", 
        "Contract & Claims Avoidance"
      ]
    },
    {
      title: "Forensic Cost Control Services",
      description: "Advanced auditing and investigative capabilities protect your projects from cost overruns, inaccuracies, waste, and fraudulent activities.",
      features: [
        "Cost Auditing & Investigation",
        "Fraud Prevention & Detection",
        "Claims & Dispute Resolution",
        "Lender Advisory Services"
      ]
    }
  ],

  benefits: [
    "On-time, on-budget project delivery",
    "World-class project managers without payroll costs", 
    "Proven expertise in complex industrial projects"
  ],

  values: [
    {
      title: "Simplicity & Transparency",
      description: "We believe in straightforward business dealings and transparent project management that puts control back in your hands."
    },
    {
      title: "Proactive Management", 
      description: "Our advanced management tools identify programming concerns early enough to avoid impact on project cost and schedule."
    },
    {
      title: "Lean & Agile Approach",
      description: "Stay competitive with our cost and time-saving techniques while maintaining the highest quality standards."
    },
    {
      title: "Trust & Expertise",
      description: "We understand the trust required to outsource critical functions and work tirelessly to earn and maintain that trust."
    }
  ],

  projectTypes: [
    { value: "oil-gas", label: "Oil & Gas" },
    { value: "mining", label: "Mining" },
    { value: "industrial", label: "Industrial" },
    { value: "other", label: "Other" }
  ]
};

// Mock API functions (for frontend-only functionality)
export const mockAPI = {
  submitContactForm: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful response
    console.log('Mock API: Contact form submitted:', formData);
    return {
      success: true,
      message: 'Thank you for your inquiry. We will get back to you within 24 hours.',
      submissionId: `PCCS-${Date.now()}`
    };
  },

  requestQuote: async (quoteData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Mock API: Quote requested:', quoteData);
    return {
      success: true,
      message: 'Quote request received. Our team will prepare a customized proposal for you.',
      quoteId: `QUOTE-${Date.now()}`
    };
  }
};