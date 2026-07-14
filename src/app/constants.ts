export const CREAM = "#FFFFED";
export const ORANGE = "#FF4500";
export const BLACK = "#111111";
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const HERO_BLOB = "55% 45% 50% 50% / 50% 50% 55% 45%";
export const BOX_SHAPE = "42px 120px 60px 90px / 90px 60px 120px 42px";

// Short flat list used on the homepage
export const SERVICES_DATA = [
  {
    id: "foundations",
    tag: "Foundations",
    items: [
      "Google Business Profile setup",
      "Local SEO",
    ],
  },
  {
    id: "growth",
    tag: "Growth",
    items: [
      "Paid ads strategy",
      "Audience analysis",
      "Competitor landscapes",
      "Marketing campaigns",
      "Local Meta ad campaigns",
      "Ad creative direction",
      "Ad tracking and set up",
    ],
  },
  {
    id: "convert",
    tag: "Convert",
    items: [
      "Website copywriting",
      "High-converting landing pages",
      "Conversion audits",
    ],
  },
  {
    id: "results",
    tag: "Results",
    items: [
      "Ad tracking and reporting",
      "Monthly performance reports",
    ],
  },
];

// In-depth version used on the Services page accordion
// "groups" lets Growth split into Strategy / Execution sub-sections;
// other categories just use a single group with label: null
export const SERVICES_DETAIL_DATA = [
  {
    id: "foundations",
    title: "Foundations",
    intro: "Get the basics right first so you can get found.",
    groups: [
      {
        label: null,
        items: ["Google Business Profile setup", "Local SEO"],
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    intro:
      "Paid Social and ROI — we run targeted local ad campaigns designed to bring in real customers, not just clicks, and make sure every dollar spent is tracked so you know exactly what it's earning you back.",
    groups: [
      {
        label: "Strategy",
        items: ["Paid ads strategy", "Audience analysis", "Competitor landscapes"],
      },
      {
        label: "Execution",
        items: [
          "Marketing campaigns",
          "Local Meta ad campaigns",
          "Ad creative direction",
          "Ad tracking and set up",
        ],
      },
    ],
  },
  {
    id: "convert",
    title: "Convert",
    intro:
      "Conversion Rate Optimisation — once people land on your site, this is what makes sure they actually become customers instead of leaving.",
    groups: [
      {
        label: null,
        items: ["Website copywriting", "High-converting landing pages", "Conversion audits"],
      },
    ],
  },
  {
    id: "results",
    title: "Results",
    intro: null,
    groups: [
      {
        label: null,
        items: ["Ad tracking and reporting", "Monthly performance reports"],
      },
    ],
  },
];

export const TRUST_POINTS = [
  {
    title: "1:1 support",
    body: "You work directly with us — no account managers, no handoffs, no junior teams learning on your dime.",
  },
  {
    title: "24 hour turnaround time",
    body: "Questions, changes, updates — you're not waiting a week to hear back. We move at the pace your business actually needs.",
  },
  {
    title: "Service you can trust",
    body: "Clear reporting, honest timelines, and no jargon dressed up to sound complicated. You'll always know what's happening and why.",
  },
];