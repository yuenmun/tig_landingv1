import Image from "next/image";
import HeroImage from "@/public/images/hero.jpg";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Welcome to TIG Technology Pte. Ltd.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Based in Singapore, TIG Technology is dedicated to advancing the future of digital finance and sustainable mobility. Through innovative platforms like xFLEX.sg and strategic partnerships across the Web3, CBDC, and electric vehicle sectors, we deliver solutions that drive efficiency, transparency, and global connectivity.
              </p>
              <p
                className="mb-8 text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Discover how our expertise and vision from Singapore are shaping the next generation of financial and transportation technologies.
              </p>
              {/* Buttons removed */}
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-up" data-aos-delay={700}>
            <Image
              className="rounded-lg shadow-xl"
              src={HeroImage}
              width={1104}
              height={576}
              alt="TIG Technology - Electric Vehicle Solutions"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
