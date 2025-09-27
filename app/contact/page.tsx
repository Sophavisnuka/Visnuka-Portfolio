'use client';
import GradientBackground from "@/components/gradientBackground";
import { useState } from 'react';
import { Send, User, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { 
    SiGithub,
    SiLinkedin,
    SiTelegram
} from "react-icons/si";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
                    subject: `New contact from ${formData.name}`,
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                }),
            });
            const result = await res.json();
            if (result.success) {
                console.log("Form submitted successfully:", result);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Form submission error:", result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(''), 3000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "sophavisnukakhun@gmail.com",
            href: "mailto:sophavisnukakhun@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+855 16 260 218", // Replace with your phone
            href: "tel:+85516260218"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Phnom Penh, Cambodia", // Replace with your location
            href: "#"
        }
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: SiGithub,
            href: "https://github.com/Sophavisnuka",
            color: "hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800"
        },
        {
            name: "LinkedIn",
            icon: SiLinkedin,
            href: "https://www.linkedin.com/in/sophavisnukakhun190306/",
            color: "hover:text-blue-600 bg-blue-50 dark:bg-blue-900/20"
        },
        {
            name: "Telegram",
            icon: SiTelegram,
            href: "https://t.me/sophavisnuka1936",
            color: "hover:text-blue-500 bg-blue-50 dark:bg-blue-900/20"
        }
    ];

    return (
        <div className="relative min-h-screen dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14">
            {/* <div className="absolute inset-0 z-0">
                <GradientBackground />
            </div> */}
            <div className="max-w-7xl mx-auto z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I'd love to hear from you! Send me a message and I'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send Message</h2>
                            <p className="text-gray-600 dark:text-gray-400">Fill out the form below and I'll get back to you</p>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                <p className="text-green-800 dark:text-green-400 font-medium">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                <p className="text-red-800 dark:text-red-400 font-medium">
                                    ❌ Failed to send message. Please try again or contact me directly.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                                        placeholder="Write your message here..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-secondary disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="bg-primary/10 p-3 rounded-lg">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">{info.label}</h3>
                                                {info.href !== "#" ? (
                                                    <a 
                                                        href={info.href}
                                                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h2>
                            <div className="space-y-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-4 p-4 rounded-lg ${social.color} transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700`}
                                        >
                                            <Icon className="w-6 h-6" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">{social.name}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Connect with me on {social.name}
                                                </p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 border border-primary/20">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quick Response</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via Telegram.
                            </p>
                            <div className="flex items-center gap-2 text-primary font-semibold">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Available for new opportunities
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}