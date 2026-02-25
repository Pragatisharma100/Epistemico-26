const technicalEvents = [
  {
    id: 1,
    title: "Kōde Keishō — Coding Relay Challenge",
    shortTitle: "Kōde Keishō",
    category: "Relay Coding",
    image:
      "https://ibb.co/k2ZyQSv7",
    overview:
      "Team-based relay coding competition testing technical skills, adaptability, strategic thinking, and readable code. Members work sequentially on a single problem with no communication during execution.",
    eventDetails: {
      teamSize: "4 Members",
      duration: "1.5 Hours",
      venue: "Seminar Hall",
      targetTeams: "10-12 Teams",
      format: "Strategy Phase + Relay Coding Phase",
    },
    workflow: [
      "Strategy Phase (15 minutes): plan coding order",
      "Relay Coding Phase: one member codes at a time",
      "1 minute review between switches",
      "Implementation windows (10–15 minutes per coder)",
      "Submission and judge evaluation",
    ],
    timeBreakdown: [
      { range: "0–15 min", activity: "Strategy Phase" },
      { range: "15–105 min", activity: "Relay Coding Phase" },
      { range: "105–90 min", activity: "Buffer & Submission" },
    ],
    lifelines: [
      "AI assistance (2 prompts max)",
      "Judge consultation",
      "One-time team discussion",
    ],
    powerMoves: ["One-time 2-minute freeze on another team"],
    rules: [
      "Teams of 4 must follow the pre-decided coding order.",
      "No communication among team members during the relay phase.",
      "Only one coder at a time; others must stay away from the system.",
      "Lifelines can be used as specified; misuse may lead to penalties.",
      "Unfair practice leads to disqualification; judges’ decision is final.",
    ],
    evaluationCriteria: [
      { criteria: "Correctness", marks: 30 },
      { criteria: "Code Quality & Readability", marks: 25 },
      { criteria: "Integration & Handover", marks: 20 },
      { criteria: "Time Management", marks: 15 },
      { criteria: "Lifeline Usage", marks: 10 },
    ],
    perks:
      "Prizes for winners, e-certificates, and recognition. Encourages teamwork, planning, and coding discipline.",
    resources: "Seminar hall systems, IDEs, internet, judge consoles",
  },

  {
    id: 2,
    title: "TechTrek — The Ultimate Technical Treasure Hunt",
    shortTitle: "TechTrek",
    category: "Treasure Hunt",
    image:
      "https://ibb.co/qFYmcKJT",
    overview:
      "Campus-wide technical treasure hunt combining logical reasoning, programming concepts, and digital puzzles across physical locations and web-based clues.",
    eventDetails: {
      teamSize: "4–5 Members",
      duration: "2.5 Hours",
      venue: "Start – MPC Stage; End – Seminar Hall",
      targetTeams: "~10 Teams",
      mode: "Physical + Digital",
    },
    workflow: [
      "Initial digital clue via WhatsApp",
      "Volunteer verification for progression",
      "QR code challenges across campus",
      "Physical clue discovery and web-based hints",
      "Final integrated puzzle leads to Seminar Hall",
    ],
    rules: [
      "Teams must have 4–5 members and stay together throughout.",
      "Clue cards, hints and codes must not be tampered with or shared.",
      "Progression requires volunteer verification at each stage.",
      "Misconduct or unfair practice results in disqualification.",
      "Winners decided based on accuracy and time; judges’ decision is final.",
    ],
    winningCriteria: [
      "First team to finish with correct solutions wins.",
      "Ties decided by accuracy and completion time.",
    ],
    perks:
      "Engaging puzzles, campus exploration, prizes, and learning opportunities in applied problem solving.",
    resources: "Volunteers, QR printouts, web hints, WhatsApp broadcast, seminar hall for finish",
  },

  {
    id: 3,
    title: "BattleDomeX — Gaming Competition",
    shortTitle: "BattleDomeX",
    category: "eSports",
    image:
      "https://ibb.co/TDK0KyPW",
    overview:
      "Competitive eSports event featuring BGMI and Free Fire with knockout rounds, live commentary and leaderboards creating a pro gaming atmosphere.",
    eventDetails: {
      format: "Knockout Rounds",
      duration: "2 Hours",
      venue: "Computer Labs",
      totalParticipants: "15-20",
    },
    rules: [
      "Only registered participants may compete in knockout rounds.",
      "Use of hacks, cheats, or unfair gameplay leads to immediate disqualification.",
      "Players must report on time; late entries may not be accommodated.",
      "Organizers’ decisions on match continuation prevail in technical issues.",
      "Maintain discipline; abusive language is prohibited.",
    ],
    advancement: [
      "Winners progress round-wise; final winners decided by match results and fair-play rules.",
    ],
    perks:
      "Trophies, e-certificates, prizes, and public recognition during the closing ceremony.",
    resources: "Computer lab, stable internet, game licenses/accounts, referees, live streaming setup",
  },

  {
    id: 4,
    title: "AI Cineverse — AI Video Storytelling Challenge",
    shortTitle: "AI Cineverse",
    category: "Digital / AI",
    image:
      "https://ibb.co/q3njmsNs",
    overview:
      "Individual or duo competition to produce an original AI-generated short film (visuals + narration). Focus on creativity, ethical AI use, and storytelling.",
    eventDetails: {
      videoDuration: "2.5–3 Minutes",
      mode: "Online Submission",
      participation: "Individual or Team of 2",
      maxEntries: "25",
      themes: "History Reimagined, Fiction, Signs & Syntax, Multiverse",
    },
    rules: [
      "Content must be original, ethical, and plagiarism-free.",
      "All AI tools used must be declared in submission.",
      "Landscape format only; languages: English / Hindi / bilingual.",
      "No copyrighted material; late entries rejected.",
    ],
    evaluationCriteria: [
      { criteria: "Creativity & Story", marks: 30 },
      { criteria: "AI Usage & Originality", marks: 20 },
      { criteria: "Visual & Audio Quality", marks: 20 },
      { criteria: "Narration & Flow", marks: 15 },
      { criteria: "Overall Impact", marks: 15 },
    ],
    submission: [
      "MP4 upload or Drive link",
      "Short story description",
      "Tools used (AI tools declared)",
    ],
    winnerPresentation:
      "Top 3 winners’ AI videos will be displayed to judges and participants during the closing ceremony.",
    perks:
      "Showcase platform, prizes, e-certificates, and screening at the closing event.",
    resources: "Online submission portal, judges panel, screening setup",
  },
];

export default technicalEvents;
