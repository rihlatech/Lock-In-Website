
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Automatically discover screenshots inside src/assets.
const assetFiles = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const assets = Object.fromEntries(
  Object.entries(assetFiles).map(([path, url]) => {
    const filename = path.split("/").pop().replace(/\.[^.]+$/, "");
    return [filename, url];
  })
);

// Screenshot categories.
const galleryGroups = [
  {
    title: "Your planning space",
    description:
      "A central place to organize your plans and keep track of what matters.",
    images: [
      {
        name: "home_page",
        title: "Home dashboard",
        description: "Get an overview of your planning space.",
      },
      {
        name: "planner_stage",
        title: "Your planner",
        description: "Bring your plans and daily priorities together.",
      },
      {
        name: "daily_stage",
        title: "Daily planning",
        description: "Focus on the tasks in front of you.",
      },
    ],
  },
  {
    title: "Plan beyond today",
    description:
      "Connect your longer-term ambitions with manageable planning stages.",
    images: [
      {
        name: "goals_page",
        title: "Goals",
        description: "Keep your ambitions organized.",
      },
      {
        name: "monthly_stage",
        title: "Monthly planning",
        description: "Break bigger priorities into monthly goals.",
      },
      {
        name: "weekly_stage",
        title: "Weekly planning",
        description: "Shape your week around your priorities.",
      },
    ],
  },
  {
    title: "Build a rhythm that works",
    description:
      "Support your routines, stay aware of your schedule, and reflect on your progress.",
    images: [
      {
        name: "reminders_page",
        title: "Reminders",
        description: "Keep important tasks and activities visible.",
      },
      {
        name: "selfcare_page",
        title: "Self-care",
        description: "Make room for intentional self-care practices.",
      },
      {
        name: "review_page",
        title: "Reviews",
        description: "Reflect on your progress and what you can improve.",
      },
    ],
  },
  {
    title: "Make it your own",
    description:
      "Personalize your experience and explore AI assistance.",
    images: [
      {
        name: "themes_page",
        title: "Themes",
        description: "Choose a look that suits your preferences.",
      },
      {
        name: "settings_page",
        title: "Settings",
        description: "Adjust your planning preferences.",
      },
      {
        name: "more_page",
        title: "More tools",
        description: "Explore additional planner features.",
      },
      {
        name: "ai_popup_window",
        title: "AI assistant",
        description: "Explore AI-supported planning and reflection.",
      },
    ],
  },
];

const releaseFeatures = [
  {
    number: "01",
    title: "Connected goal planning",
    description:
      "Organize your ambitions and connect longer-term goals with monthly objectives, weekly plans, and daily action.",
    tags: ["Goals", "Monthly planning", "Weekly planning"],
  },
  {
    number: "02",
    title: "Daily tasks and reminders",
    description:
      "Give your day structure, organize your tasks, and keep important activities on your radar.",
    tags: ["Daily tasks", "Schedules", "Reminders"],
  },
  {
    number: "03",
    title: "AI planning companion",
    description:
      "Use AI chat and voice to explore next steps, reflect on progress, and get planning assistance within your available allowance.",
    tags: ["AI chat", "Voice", "Planning assistance"],
  },
  {
    number: "04",
    title: "Self-care and reflection",
    description:
      "Make space for self-care practices and review your journey as your priorities evolve.",
    tags: ["Self-care", "Reviews", "Progress"],
  },
  {
    number: "05",
    title: "Themes and personalization",
    description:
      "Personalize supported aspects of your planning experience and make the workspace feel like your own.",
    tags: ["Themes", "Preferences", "Settings"],
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const offsets = {
    up: { x: 0, y: 24 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ScreenshotCard({ screenshot, onOpen, index }) {
  return (
    <Reveal
      direction={index % 2 === 0 ? "up" : "right"}
      delay={(index % 3) * 0.05}
      className="w-[250px] shrink-0 sm:w-[280px] lg:w-[300px]"
    >
      <button
        type="button"
        onClick={() => onOpen(screenshot)}
        aria-label={`Open ${screenshot.title} screenshot`}
        className="group block w-full overflow-hidden border border-[#25231F]/10 bg-white/60 text-left transition-colors duration-300 hover:border-[#8B714A]/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B714A]"
      >
        <div className="relative flex h-[350px] items-start justify-center overflow-hidden bg-[#E9DFCE]/50 sm:h-[390px] lg:h-[420px]">
          <img
            src={screenshot.src}
            alt={screenshot.title}
            loading="lazy"
            className="block h-full w-full object-contain object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />

          <span
            aria-hidden="true"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-[#25231F]/10 bg-[#F8F4ED]/95 text-xl text-[#25231F] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            ↗
          </span>
        </div>

        <div className="flex min-h-[100px] items-start justify-between gap-3 p-4">
          <div>
            <h4 className="text-sm font-medium text-[#25231F]">
              {screenshot.title}
            </h4>
            <p className="mt-1 text-xs leading-5 text-[#625C53]">
              {screenshot.description}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="shrink-0 text-lg text-[#8B714A]"
          >
            +
          </span>
        </div>
      </button>
    </Reveal>
  );
}

function GalleryGroup({ group, groupIndex, onOpen }) {
  return (
    <section>
      <Reveal>
        <div className="mb-6 flex flex-col gap-2 border-b border-[#25231F]/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="font-display text-3xl font-light sm:text-4xl">
            {group.title}
          </h3>
          <p className="max-w-md text-sm leading-6 text-[#625C53]">
            {group.description}
          </p>
        </div>
      </Reveal>

      {/* One horizontal row. Scroll sideways to see more screenshots. */}
      <div className="flex flex-nowrap items-stretch gap-4 overflow-x-auto overscroll-x-contain pb-6 scroll-smooth sm:gap-5">
        {group.images.map((screenshot, index) => (
          <ScreenshotCard
            key={screenshot.name}
            screenshot={screenshot}
            index={index + groupIndex}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}

function ImageLightbox({
  image,
  index,
  total,
  onClose,
  onPrevious,
  onNext,
}) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="screenshot-lightbox"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171613]/95 p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label={`${image.title} screenshot viewer`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          aria-label="Close screenshot viewer"
          className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center border border-white/30 text-2xl text-white transition-colors hover:bg-white/10 sm:right-7 sm:top-7"
        >
          ×
        </button>

        {index > 0 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            aria-label="View previous screenshot"
            className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/25 text-3xl text-white transition-colors hover:bg-white/15 sm:left-6 sm:h-14 sm:w-14"
          >
            ‹
          </button>
        )}

        {index < total - 1 && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="View next screenshot"
            className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/25 text-3xl text-white transition-colors hover:bg-white/15 sm:right-6 sm:h-14 sm:w-14"
          >
            ›
          </button>
        )}

        <motion.div
          key={image.name}
          className="flex max-h-full max-w-full flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.985, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.title}
            className="block h-auto max-h-[78vh] w-auto max-w-[78vw] object-contain"
          />

          <div className="text-center">
            <p className="text-sm font-medium text-white">{image.title}</p>
            <p className="mt-1 text-xs text-white/65">
              {image.description}
            </p>
            <p className="mt-2 text-xs text-white/45">
              {index + 1} / {total}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Releases() {
  const [activeImage, setActiveImage] = useState(null);

  const groups = useMemo(
    () =>
      galleryGroups
        .map((group) => ({
          ...group,
          images: group.images
            .map((image) => ({
              ...image,
              src: assets[image.name],
            }))
            .filter((image) => image.src),
        }))
        .filter((group) => group.images.length > 0),
    []
  );

  const allScreenshots = useMemo(
    () => groups.flatMap((group) => group.images),
    [groups]
  );

  const activeIndex = activeImage
    ? allScreenshots.findIndex(
        (image) => image.name === activeImage.name
      )
    : -1;

  const showPrevious = () => {
    if (activeIndex > 0) {
      setActiveImage(allScreenshots[activeIndex - 1]);
    }
  };

  const showNext = () => {
    if (activeIndex >= 0 && activeIndex < allScreenshots.length - 1) {
      setActiveImage(allScreenshots[activeIndex + 1]);
    }
  };

  useEffect(() => {
    if (!activeImage) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      } else if (event.key === "ArrowLeft" && activeIndex > 0) {
        setActiveImage(allScreenshots[activeIndex - 1]);
      } else if (
        event.key === "ArrowRight" &&
        activeIndex >= 0 &&
        activeIndex < allScreenshots.length - 1
      ) {
        setActiveImage(allScreenshots[activeIndex + 1]);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, activeIndex, allScreenshots]);

  return (
    <main className="overflow-hidden bg-[#F8F4ED] text-[#25231F]">
      {/* Release introduction */}
      <section className="border-b border-[#25231F]/10">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-14 lg:pb-32 lg:pt-28">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
                Product release
              </span>
              <span className="h-px w-8 bg-[#8B714A]/50" />
              <span className="text-xs tracking-wide text-[#625C53]">
                Version 1.0.0
              </span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-16">
            <Reveal>
              <h1 className="font-display max-w-4xl text-6xl font-light leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                A more intentional
                <br />
                way to plan <span className="text-[#8B714A]">life.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
                Discover the planned first release of Lock-In: a personal
                planning experience designed to bring your goals, daily tasks,
                self-care, reflection, and AI-assisted planning together.
              </p>

              <a
                href="#whats-included"
                className="mt-8 inline-flex items-center gap-3 border border-[#25231F] bg-[#25231F] px-6 py-4 text-sm text-[#F8F4ED] transition-colors duration-300 hover:border-[#8B714A] hover:bg-[#8B714A]"
              >
                Explore V1.0.0 <span aria-hidden="true">↓</span>
              </a>
            </Reveal>

            <Reveal direction="right" delay={0.12}>
              <div className="border-l-2 border-[#8B714A] py-2 pl-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
                  Release date
                </p>
                <p className="mt-3 font-display text-4xl font-light">
                  Coming soon
                </p>
                <p className="mt-3 text-sm leading-6 text-[#625C53]">
                  We're preparing the first release. The public launch date
                  has not yet been announced.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Release summary */}
      <section className="bg-[#E9DFCE]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-14 lg:py-16">
          {[
            {
              title: "Plan",
              text: "Connect your goals with manageable daily actions.",
            },
            {
              title: "Personalize",
              text: "Shape your workspace around your preferences.",
            },
            {
              title: "Reflect",
              text: "Review your progress and plan your next steps.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="border-t border-[#8B714A]/40 pt-5">
                <p className="font-display text-4xl font-light">
                  {item.title}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#625C53]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Release features */}
      <section
        id="whats-included"
        className="mx-auto max-w-[1440px] scroll-mt-10 px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
      >
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            The first release
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
            Everything starts with intention.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
            V1.0.0 is planned around the parts of personal planning that work
            together: setting direction, organizing your time, maintaining
            routines, and learning from your progress.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-[#25231F]/15">
          {releaseFeatures.map((feature, index) => (
            <Reveal
              key={feature.number}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article className="grid gap-5 border-b border-[#25231F]/15 py-8 sm:py-10 md:grid-cols-[80px_0.9fr_1.1fr] md:gap-8">
                <p className="font-display text-3xl font-light text-[#8B714A]">
                  {feature.number}
                </p>

                <h3 className="font-display text-3xl font-light leading-tight sm:text-4xl">
                  {feature.title}
                </h3>

                <div>
                  <p className="text-sm leading-7 text-[#625C53]">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#25231F]/15 px-3 py-2 text-xs text-[#625C53]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Screenshot gallery */}
     
      {/* All screenshots in one continuous horizontal row */}
      <section className="border-y border-[#25231F]/10 bg-[#F1EADF]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
              A closer look
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="font-display text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
                Inside the Lock-In experience.
              </h2>
              <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end">
                Explore the planned V1.0.0 experience. Scroll sideways to
                discover every screenshot, then select an image to open the
                full-size gallery.
              </p>
            </div>
          </Reveal>

          {groups.length === 0 ? (
            <p className="mt-10 border border-[#25231F]/15 p-6 text-sm leading-6 text-[#625C53]">
              No screenshots were found. Check the images in your assets folder.
            </p>
          ) : (
            <>
              <div className="mt-10 flex flex-wrap gap-3 text-xs text-[#625C53]">
                {groups.map((group) => (
                  <span
                    key={group.title}
                    className="border border-[#25231F]/15 px-3 py-2"
                  >
                    {group.title}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-nowrap items-stretch gap-4 overflow-x-auto overscroll-x-contain pb-6 scroll-smooth sm:gap-5">
                {groups.flatMap((group, groupIndex) =>
                  group.images.map((screenshot, index) => (
                    <ScreenshotCard
                      key={screenshot.name}
                      screenshot={screenshot}
                      index={index + groupIndex}
                      onOpen={setActiveImage}
                    />
                  ))
                )}
              </div>

              <p className="mt-2 text-xs text-[#625C53]">
                Scroll horizontally to view all screenshots · Select any card
                to enlarge it.
              </p>
            </>
          )}
        </div>
      </section>


      {/* Proposed pricing */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            Plans and pricing
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
            Choose how you want to plan.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625C53]">
            The proposed plans distinguish the core planning experience from
            AI-assisted features. Final launch terms and usage allowances will
            be confirmed before subscriptions open.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal direction="left">
            <article className="h-full border border-[#25231F]/15 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
                Standard
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-2">
                <span className="font-display text-6xl font-light">
                  KSh 300
                </span>
                <span className="text-sm text-[#625C53]">/ month</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#625C53]">
                The core Lock-In planning experience without included AI usage.
              </p>

              <div className="mt-8 border-t border-[#25231F]/10 pt-6">
                <h3 className="text-sm font-medium">Plan includes</h3>
                <ul className="mt-4 space-y-3 text-sm text-[#625C53]">
                  {[
                    "Goals and planning stages",
                    "Daily tasks and organization",
                    "Self-care and progress reviews",
                    "Available themes and preferences",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#8B714A]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <article className="h-full border border-[#8B714A]/50 bg-[#E9DFCE] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#765C38]">
                Premium
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-2">
                <span className="font-display text-6xl font-light">
                  KSh 400
                </span>
                <span className="text-sm text-[#625C53]">/ month</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#625C53]">
                The core planner plus AI chat and voice within defined usage
                limits.
              </p>

              <div className="mt-8 border-t border-[#8B714A]/25 pt-6">
                <h3 className="text-sm font-medium">Plan includes</h3>
                <ul className="mt-4 space-y-3 text-sm text-[#625C53]">
                  {[
                    "Core Lock-In planning features",
                    "AI chat within the included allowance",
                    "AI voice within the included allowance",
                    "Usage and top-up terms to be confirmed",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#8B714A]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>

        {/* <p className="mt-5 text-xs leading-6 text-[#625C53]">
          Proposed launch pricing. Included features, billing terms, AI
          allowances, renewals, and top-up conditions must be confirmed before
          these plans become available for purchase.
        </p> */}
      </section>

      {/* Closing section */}
      <section className="bg-[#25231F] text-[#F8F4ED]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_auto] md:items-end lg:px-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-[#D6BB8B]">
              V1.0.0 · Coming soon
            </p>
            <h2 className="font-display mt-5 max-w-3xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
              Your next chapter starts with intention.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#C9C2B8]">
              We're preparing Lock-In for its first public release. Visit again
              for launch updates and confirmed availability.
            </p>
          </Reveal>

          <Reveal direction="right">
            <a
              href="/"
              className="inline-flex items-center gap-3 border border-[#D6BB8B]/60 px-6 py-4 text-sm transition-colors duration-300 hover:bg-[#F8F4ED] hover:text-[#25231F]"
            >
              Back to home <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Full-size screenshot viewer */}
      <ImageLightbox
        image={activeImage}
        index={activeIndex}
        total={allScreenshots.length}
        onClose={() => setActiveImage(null)}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </main>
  );
}
