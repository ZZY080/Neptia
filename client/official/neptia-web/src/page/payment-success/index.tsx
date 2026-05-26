import { motion } from "framer-motion";
import { CircleCheckBig, ReceiptText, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const paymentSuccessData = t("paymentSuccess", { returnObjects: true }) as Record<
    string,
    any
  >;

  const params = new URLSearchParams(location.search);
  const item = params.get("item") || paymentSuccessData.fallback.item;
  const amount = params.get("amount") || paymentSuccessData.fallback.amount;
  const currency = params.get("currency") || "USD";
  const orderId = params.get("orderId") || paymentSuccessData.fallback.orderId;

  return (
    <div className="relative overflow-x-hidden bg-[var(--home-bg)] px-4 py-16 [font-family:var(--font-display)] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-[24rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_62%)]" />
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-[0_20px_45px_rgba(16,185,129,0.15)] sm:p-10"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CircleCheckBig className="h-8 w-8" />
          </div>

          <h1 className="mt-5 text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
            {paymentSuccessData.title}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            {paymentSuccessData.description}
          </p>

          <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="inline-flex items-center gap-2 text-slate-500">
                <ShoppingBag className="h-4 w-4 text-cyan-700" />
                {paymentSuccessData.labels.item}
              </span>
              <span className="text-right font-medium text-slate-900">{item}</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="text-slate-500">{paymentSuccessData.labels.amount}</span>
              <span className="font-medium text-slate-900">
                {currency} {amount}
              </span>
            </div>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="inline-flex items-center gap-2 text-slate-500">
                <ReceiptText className="h-4 w-4 text-cyan-700" />
                {paymentSuccessData.labels.orderId}
              </span>
              <span className="font-mono text-xs text-slate-700 sm:text-sm">{orderId}</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() => navigate("/home/product")}
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              {paymentSuccessData.actions.backToProduct}
            </button>
            <button
              onClick={() => navigate("/home/contact")}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700"
            >
              {paymentSuccessData.actions.contact}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
