"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Settings,
  Zap,
  Users,
  Filter,
  Link2,
} from "lucide-react";

const SERVICE_ITEMS = [
  {
    slug: "gohighlevel-setup",
    num: "01",
    title: "GoHighLevel Setup and Configuration",
    description:
      "Full GoHighLevel account setup. Pipelines, calendars, forms, triggers, and integrations built from day one to match your exact sales process.",
    features: [
      "Pipeline and stage configuration.",
      "Calendar and booking setup.",
      "Trigger and workflow automation.",
    ],
    iconKey: "setup",
    gradientFrom: "#3b82f6",
    gradientTo: "#1d4ed8",
  },
  {
    slug: "gohighlevel-automation",
    num: "02",
    title: "Marketing Automation",
    description:
      "Automated email, SMS, and voicemail sequences that nurture leads and convert on autopilot. Flows that keep working long after setup is done.",
    features: [
      "Email and SMS drip campaigns.",
      "Lead nurturing sequences.",
      "Abandoned lead recovery.",
    ],
    iconKey: "automation",
    gradientFrom: "#f59e0b",
    gradientTo: "#d97706",
  },
  {
    slug: "crm-setup",
    num: "03",
    title: "CRM Setup and Configuration",
    description:
      "Custom pipelines, contact fields, lead tracking, and opportunity management — configured around your real sales process, not default settings.",
    features: [
      "Custom pipeline stages.",
      "Contact field mapping.",
      "Lead source and status tracking.",
    ],
    iconKey: "crm",
    gradientFrom: "#10b981",
    gradientTo: "#059669",
  },
  {
    slug: "funnel-development",
    num: "04",
    title: "Funnel Development",
    description:
      "Landing pages, opt-in funnels, sales pages, and booking funnels built inside GHL and connected to your CRM and automation workflows.",
    features: [
      "Landing pages and opt-in funnels.",
      "Sales and booking pages.",
      "CRM-connected forms.",
    ],
    iconKey: "funnel",
    gradientFrom: "#8b5cf6",
    gradientTo: "#6d28d9",
  },
  {
    slug: "integrations",
    num: "05",
    title: "Integrations",
    description:
      "Native integrations, Zapier/Make connections, API and webhook configurations — so your full stack works as one connected system.",
    features: [
      "Native app integrations.",
      "Zapier and Make workflows.",
      "API and webhook configuration.",
    ],
    iconKey: "integrations",
    gradientFrom: "#ec4899",
    gradientTo: "#db2777",
  },
] as const;

const ICONS = {
  setup: Settings,
  automation: Zap,
  crm: Users,
  funnel: Filter,
  integrations: Link2,
};

type ServiceItem = (typeof SERVICE_ITEMS)[number];
type IconKey = keyof typeof ICONS;

function ServiceIcon({
  iconKey,
  from,
  to,
}: {
  iconKey: IconKey;
  from: string;
  to: string;
}) {
  const Icon = ICONS[iconKey];

  return (
    <div
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
    </div>
  );
}

function ServiceCard({
  item,
  isActive,
  overlayOpacity = 0,
  onClick,
}: {
  item: ServiceItem;
  isActive: boolean;
  overlayOpacity?: number;
  onClick?: () => void;
}) {
  const CardContent = (
      <article
        className="
          relative flex min-h-[340px] flex-col gap-5
          rounded-2xl bg-white
          p-7
          transition-[box-shadow,border-color]
          duration-300 ease-out
          overflow-hidden
        "
        style={{
          border: `1px solid ${
            isActive ? "#d1d5db" : "#e5e7eb"
          }`,
          boxShadow: isActive
            ? "0 18px 45px -12px rgba(0,0,0,0.18)"
            : "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        {/* Overlay for inactive state */}
        {overlayOpacity > 0 && (
          <div 
            className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300" 
            style={{ backgroundColor: `rgba(245, 244, 240, ${overlayOpacity})` }} 
          />
        )}
        {/* Decorative corner dots */}
        {(["tl", "tr", "bl", "br"] as const).map((position) => (
          <span
            key={position}
            aria-hidden="true"
            className="absolute h-[6px] w-[6px] rounded-full"
            style={{
              backgroundColor: isActive
                ? "#d1d5db"
                : "#e5e7eb",
              top: position.startsWith("t")
                ? 10
                : undefined,
              bottom: position.startsWith("b")
                ? 10
                : undefined,
              left: position.endsWith("l")
                ? 10
                : undefined,
              right: position.endsWith("r")
                ? 10
                : undefined,
            }}
          />
        ))}

        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className="text-[11px] font-bold text-gray-300">
            {item.num}
          </span>

          <ServiceIcon
            iconKey={item.iconKey}
            from={item.gradientFrom}
            to={item.gradientTo}
          />
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="m-0 text-[18px] font-bold leading-[1.35] text-[#0a0a0a]">
            {item.title}
          </h3>

          <p className="m-0 text-[14px] leading-[1.6] text-gray-500">
            {item.description}
          </p>
        </div>

        {/* Features */}
        <ul
          className="
            m-0 flex flex-col gap-2
            border-t border-gray-100
            pt-4
          "
          style={{
            paddingLeft: 0,
            listStyle: "none",
          }}
        >
          {item.features.map((feature) => (
            <li
              key={feature}
              className="
                flex items-start gap-2.5
                text-[13px]
                leading-[1.45]
                text-gray-700
              "
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 10 8"
                fill="none"
                className="mt-[3px] h-3 w-3 shrink-0"
                style={{
                  color: item.gradientFrom,
                }}
              >
                <path
                  d="M1 4l3 3 5-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </article>
  );

  if (isActive) {
    return (
      <Link
        href={`/services/${item.slug}`}
        aria-label={`${item.title} — learn more`}
        draggable={false}
        className="
          group block w-full outline-none
          focus-visible:ring-2
          focus-visible:ring-[#1b6ef3]
          focus-visible:ring-offset-2
          md:w-[340px]
        "
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="
        group block w-full outline-none
        cursor-pointer
        md:w-[340px]
      "
    >
      {CardContent}
    </div>
  );
}

function getSignedDistance(
  index: number,
  activeIndex: number,
  count: number
) {
  let distance = index - activeIndex;

  if (distance > count / 2) {
    distance -= count;
  }

  if (distance < -count / 2) {
    distance += count;
  }

  return distance;
}

export function ServicesSection() {
  const count = SERVICE_ITEMS.length;

  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  /* --------------------------------------------
     Reduced motion
  -------------------------------------------- */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleChange = () => {
      setReducedMotion(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  /* --------------------------------------------
     Desktop controls
  -------------------------------------------- */

  const goTo = useCallback(
    (index: number) => {
      setActiveIdx((index + count) % count);
    },
    [count]
  );

  const next = useCallback(() => {
    setActiveIdx((current) => (current + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setActiveIdx(
      (current) => (current - 1 + count) % count
    );
  }, [count]);

  /* --------------------------------------------
     Desktop autoplay
  -------------------------------------------- */

  useEffect(() => {
    if (paused || reducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIdx((current) => (current + 1) % count);
    }, 4000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIdx, paused, reducedMotion, count]);

  /* --------------------------------------------
     Pause when tab is hidden
  -------------------------------------------- */

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPaused(document.hidden);
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  /* --------------------------------------------
     Mobile scroll tracking
  -------------------------------------------- */

  const handleMobileScroll = useCallback(() => {
    const track = mobileTrackRef.current;

    if (!track) {
      return;
    }

    const slideWidth = track.clientWidth;

    if (!slideWidth) {
      return;
    }

    const index = Math.round(
      track.scrollLeft / slideWidth
    );

    setMobileIdx(
      Math.min(
        Math.max(index, 0),
        count - 1
      )
    );
  }, [count]);

  /* --------------------------------------------
     Mobile dot navigation
  -------------------------------------------- */

  const goToMobile = useCallback(
    (index: number) => {
      const track = mobileTrackRef.current;

      if (!track) {
        return;
      }

      const targetLeft = index * track.clientWidth;

      track.scrollTo({
        left: targetLeft,
        behavior: reducedMotion ? "auto" : "smooth",
      });

      setMobileIdx(index);
    },
    [reducedMotion]
  );

  /* --------------------------------------------
     Desktop keyboard support
  -------------------------------------------- */

  const handleCarouselKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          prev();
          break;

        case "ArrowRight":
          event.preventDefault();
          next();
          break;

        case "Home":
          event.preventDefault();
          goTo(0);
          break;

        case "End":
          event.preventDefault();
          goTo(count - 1);
          break;

        default:
          break;
      }
    },
    [count, goTo, next, prev]
  );

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[#f5f4f0] py-14 md:py-16"
    >
      {/* --------------------------------------------
          Header
      -------------------------------------------- */}

      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-9 grid items-end gap-8 md:grid-cols-2">
          <div>
            <span className="mb-3 block text-[13px] font-semibold text-[#1b6ef3]">
              Our Services
            </span>

            <h2
              id="services-heading"
              className="
                m-0
                max-w-[680px]
                text-[clamp(1.75rem,3.2vw,2.5rem)]
                font-extrabold
                leading-[1.1]
                tracking-[-0.03em]
                text-[#0a0a0a]
              "
            >
              Everything you need to grow with GoHighLevel.
            </h2>
          </div>

          <p className="m-0 max-w-[480px] text-[16px] leading-[1.6] text-gray-500">
            One team across the whole stack — CRM,
            automations, funnels, and integrations — so
            nothing lands in the gap between two freelancers.
            Every workflow is tested against your real sales
            process.
          </p>
        </div>
      </div>

      {/* --------------------------------------------
          Mobile Slider
      -------------------------------------------- */}

      <div className="md:hidden">
        <div
          ref={mobileTrackRef}
          onScroll={handleMobileScroll}
          className="
            services-mobile-track
            flex
            w-full
            snap-x
            snap-mandatory
            overflow-x-auto
            overscroll-x-contain
            pb-8
            pt-4
            [&::-webkit-scrollbar]:hidden
            motion-reduce:scroll-auto
          "
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {SERVICE_ITEMS.map((item) => (
            <div
              key={item.slug}
              className="
                w-full
                shrink-0
                snap-center
                snap-always
                px-6
              "
            >
              <div className="mx-auto w-full max-w-[340px]">
                <ServiceCard
                  item={item}
                  isActive
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile indicators */}
        <div
          className="flex justify-center gap-2 pt-1"
          aria-label="Service slides"
        >
          {SERVICE_ITEMS.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => goToMobile(index)}
              aria-label={`Go to service ${index + 1}`}
              aria-current={
                mobileIdx === index
                  ? "true"
                  : undefined
              }
              className="
                h-[6px]
                rounded-full
                border-0
                p-0
                transition-[width,background-color]
                duration-200
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#1b6ef3]
                focus-visible:ring-offset-2
              "
              style={{
                width: mobileIdx === index ? 20 : 6,
                backgroundColor:
                  mobileIdx === index
                    ? "#1b6ef3"
                    : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>

      {/* --------------------------------------------
          Desktop Carousel
      -------------------------------------------- */}

      <div
        className="relative hidden md:block"
        style={{
          height: 460,
          perspective: 1400,
        }}
        tabIndex={0}
        role="group"
        aria-label="Services carousel"
        onKeyDown={handleCarouselKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          const nextTarget = event.relatedTarget;

          if (
            !nextTarget ||
            !event.currentTarget.contains(
              nextTarget as Node
            )
          ) {
            setPaused(false);
          }
        }}
      >
        <div
          className="
            absolute inset-0
            flex items-center justify-center
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {SERVICE_ITEMS.map((item, index) => {
            const distance = getSignedDistance(
              index,
              activeIdx,
              count
            );

            const absoluteDistance = Math.abs(distance);
            const isActive = distance === 0;

            const translateX = distance * 220;

            const scale =
              absoluteDistance === 0
                ? 1
                : absoluteDistance === 1
                ? 0.9
                : 0.78;

            const rotateY =
              reducedMotion || absoluteDistance > 1
                ? 0
                : distance * -12;

            const wrapperOpacity = absoluteDistance > 2 ? 0 : 1;
            
            const overlayOpacity =
              absoluteDistance === 0
                ? 0
                : absoluteDistance === 1
                ? 0.4
                : 0.7;

            const zIndex = 100 - absoluteDistance;

            return (
              <div
                key={item.slug}
                className="absolute"
                style={{
                  transform: `translate3d(${translateX}px, 0, 0) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity: wrapperOpacity,
                  zIndex,
                  pointerEvents:
                    absoluteDistance > 2
                      ? "none"
                      : "auto",
                  willChange: "transform, opacity",
                  transition: reducedMotion
                    ? "none"
                    : "transform 450ms cubic-bezier(0.22,1,0.36,1), opacity 350ms ease",
                }}
              >
                <ServiceCard
                  item={item}
                  isActive={isActive}
                  overlayOpacity={overlayOpacity}
                  onClick={() => goTo(index)}
                />
              </div>
            );
          })}
        </div>

        {/* Previous button */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous service"
          className="
            absolute left-4 top-1/2 z-[200]
            flex h-10 w-10
            -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-gray-200
            bg-white
            shadow-sm
            transition-shadow duration-200
            hover:shadow-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#1b6ef3]
            focus-visible:ring-offset-2
          "
        >
          <ArrowLeft
            className="h-4 w-4 text-gray-700"
            aria-hidden="true"
          />
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={next}
          aria-label="Next service"
          className="
            absolute right-4 top-1/2 z-[200]
            flex h-10 w-10
            -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-gray-200
            bg-white
            shadow-sm
            transition-shadow duration-200
            hover:shadow-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#1b6ef3]
            focus-visible:ring-offset-2
          "
        >
          <ArrowRight
            className="h-4 w-4 text-gray-700"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* --------------------------------------------
          Desktop Indicators
      -------------------------------------------- */}

      <div
        className="hidden justify-center gap-2 pt-2 md:flex"
        aria-label="Service slides"
      >
        {SERVICE_ITEMS.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to service ${index + 1}`}
            aria-current={
              activeIdx === index
                ? "true"
                : undefined
            }
            className="
              h-[6px]
              rounded-full
              border-0
              p-0
              transition-[width,background-color]
              duration-200
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#1b6ef3]
              focus-visible:ring-offset-2
            "
            style={{
              width: activeIdx === index ? 20 : 6,
              backgroundColor:
                activeIdx === index
                  ? "#1b6ef3"
                  : "#d1d5db",
            }}
          />
        ))}
      </div>


    </section>
  );
}