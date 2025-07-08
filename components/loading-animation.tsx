"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-stone-50 via-amber-50 to-green-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="mb-8 relative"
        >
          <Image
            src="/images/italea-logo-clean.png"
            alt="Italea - Guilt-Free Indulgence"
            width={200}
            height={100}
            className="h-20 w-auto mx-auto"
            style={{
              filter: `
                contrast(1.2) 
                brightness(0.95) 
                saturate(1.1)
                drop-shadow(0 4px 8px rgba(211, 175, 55, 0.3))
              `,
              clipPath: "polygon(8% 8%, 92% 8%, 92% 92%, 8% 92%)",
            }}
            priority
          />

          {/* Golden shimmer effect */}
          <motion.div
            animate={{ x: [-100, 200] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold-300/30 to-transparent"
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-brand-gold-700 text-lg font-medium mb-8"
        >
          Preparing your guilt-free journey...
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-stone-200 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-brand-gold-400 to-green-500 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
