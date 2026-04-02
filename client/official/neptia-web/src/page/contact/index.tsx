import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();

  const contactData = t("contact", { returnObjects: true }) as Record<
    string,
    any
  >;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
            {contactData.hero.title}
          </h1>
          <p className="text-xl text-slate-600">
            {contactData.hero.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
              <h2 className="text-2xl mb-8 text-slate-900">
                {contactData.info.title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">
                      {contactData.info.phone}
                    </h3>
                    <p className="text-slate-600">+86 19376811909</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">
                      {contactData.info.email}
                    </h3>
                    <p className="text-slate-600">contact@neptia.net</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">
                      {contactData.info.address}
                    </h3>
                    <p className="text-slate-600">
                      {contactData.info.address_detail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-200">
                <h3 className="text-slate-900 mb-4">
                  {contactData.info.hours}
                </h3>
                <p className="text-slate-600">
                  {contactData.info.p1}: 10:00 - 18:00
                  <br />
                  {contactData.info.p2}: {contactData.info.p3}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
              <h2 className="text-2xl mb-8 text-slate-900">
                {contactData.form.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 mb-2">
                    {contactData.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder={contactData.form.name_placeholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-700 mb-2">
                    {contactData.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-slate-700 mb-2">
                    {contactData.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="+60 123 456 789"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-700 mb-2"
                  >
                    {contactData.form.message} *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                    placeholder={contactData.form.message_placeholder}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
                >
                  <Send className="w-5 h-5" />
                  {contactData.form.send}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
