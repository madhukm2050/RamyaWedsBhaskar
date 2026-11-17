
import { motion } from 'framer-motion';

// Decorative twinkles
const TWINKLES = [
  { left: '10%', top: '18%', delay: '0.2s' },
  { left: '84%', top: '12%', delay: '1.1s' },
  { left: '18%', top: '70%', delay: '2.0s' },
  { left: '90%', top: '62%', delay: '0.6s' },
];

export default function Hero() {
  return (
    <section id="hero">
      {TWINKLES.map((t, i) => (
        <i
          key={i}
          className="twinkle"
          style={{
            left: t.left,
            top: t.top,
            animationDelay: t.delay,
          }}
        />
      ))}

      <div className="wrap">
        <motion.div
          className="arch-frame"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.1,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          {/* Monogram */}
          <motion.div
            className="hero-mono"
            initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.3, 1.4, 0.4, 1],
            }}
          >
            B&amp;R
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
          >
            Together with their families
          </motion.p>

          {/* Couple Names */}
          <h1 className="hero-names script">
            <motion.span
              style={{ display: 'block' }}
              initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.9,
                delay: 1.1,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              Bhaskar Reddy
            </motion.span>

            <motion.span
              className="hero-amp"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 1.7,
                ease: [0.3, 1.4, 0.4, 1],
              }}
              style={{ display: 'block' }}
            >
              &amp;
            </motion.span>

            <motion.span
              style={{ display: 'block' }}
              initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.9,
                delay: 1.9,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              Ramya Reddy
            </motion.span>
          </h1>

          {/* Invitation Message */}
          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.2 }}
          >
            Request the joy of your presence
            <br />
            as they begin their forever
          </motion.p>

          {/* Wedding Date */}
          <motion.div
            className="hero-date"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.6 }}
          >
            Thursday · 26 November · 2026
            <br />
            07:48 AM – 09:56 AM
            Sathyanarayana Swamy Pooja · 29th Sun
            <br />
            11am onwards. M Beerepalli, Hindupur
          </motion.div>

          {/* Family Details */}
          <motion.div
            className="hero-families"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.0 }}
          >
            <p>
              <b>Bhaskar Reddy</b>
              <span>Son of</span>
              <span>(Late) Sri. Pundreddy Srinivasulu Reddy</span>
              <span>&amp; Smt. Gangamma</span>
            </p>

            <p>
              <b>Ramya Reddy</b>
              <span>Daughter of</span>
              <span>(Late) Sri. Gunapati Sairam Reddy</span>
              <span>&amp; Smt. Manjula</span>
            </p>
          </motion.div>

          {/* Wedding Venue */}
          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.4 }}
          >
            PVR Kalyana Mandapam
            <br />
            Kovur Mandal, Nellore District
          </motion.p>

        </motion.div>
      </div>

      <div className="scroll-indicator">Scroll</div>
    </section>
  );
}
