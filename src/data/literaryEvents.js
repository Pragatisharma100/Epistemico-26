const literaryEvents = [
  {
    id: 1,
    title: "KBC — The Big Quiz Show",
    shortTitle: "KBC Quiz",
    category: "Quiz",
    image: "https://images.unsplash.com/photo-1558981359-6fb3b7e0f60b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=aa1122bb3344cc55dd66ee77ff889900",
    overview:
      "The KBC Quiz Challenge is an interactive, team-based quiz inspired by popular knowledge formats, testing general knowledge, logical reasoning, and decision-making.",
    numberOfTeams: "10 Teams",
    teamSize: "3 Members per team",
    format: "Each team answers 10 questions based on general knowledge, current affairs, and logical reasoning.",
    hostRole: "One person will act as the anchor/moderator (Amitabh Bachchan style).",
    rules: [
      "Each team will be given 30 seconds to discuss and provide their final answer.",
      "Only one member (team leader) will announce the final answer.",
      "Each correct answer carries 1 mark.",
      "Use of mobile phones or electronic devices is strictly prohibited.",
      "Tie-breaker questions will be asked in case of a tie.",
      "Decision of the quiz master is final and binding.",
    ],
    evaluationCriteria: [
      { criteria: "Correct Answers", marks: 100 }
    ],
    perks: "Winners declared based on highest score; e-certificates and prizes.",
    resources: "Host microphone, projector, question bank, timers",
  },

  {
    id: 2,
    title: "BID THE BARD — The Literary Auction",
    shortTitle: "Bid The Bard",
    category: "Multi-round Literary",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=bb2233cc4455dd66ee77ff8899001122",
    overview:
      "A competitive literary event assessing debating skills, language proficiency, spontaneity, and creative expression through Debate, Spell Bee and Rapid Fire rounds.",
    numberOfTeams: "10 Teams",
    teamSize: "4 Members per team",
    rounds: [
      "Round 1: Debate Round — teams speak on a common topic",
      "Round 2: Spell Bee — shortlisted teams test vocabulary and spelling",
      "Round 3: Rapid Fire — quick literary and language questions",
    ],
    rules: [
      "All teams must report before the event begins; no changes allowed afterward.",
      "Use of mobile phones or electronic devices is prohibited.",
      "Teams judged on content, clarity, confidence, and teamwork.",
      "Decision of judges is final and binding.",
    ],
    evaluationCriteria: [
      { criteria: "Debate: Content & Clarity", marks: 40 },
      { criteria: "Spell Bee Accuracy", marks: 30 },
      { criteria: "Rapid Fire Performance", marks: 30 },
    ],
    perks: "Prizes, e-certificates and recognition across the fest.",
    resources: "Debate topics, spell lists, moderators, timers",
  },

  {
    id: 3,
    title: "THE LIE DETECTOR — Mafia Game",
    shortTitle: "The Lie Detector",
    category: "Interactive Game",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=cc3344dd5566ee77ff8899001122aa33",
    overview:
      "A strategic individual participation game testing observation, deduction and communication skills where participants identify an impostor (Mafia) among similar clue-bearers.",
    participation: "Individual entries",
    format: "Participants receive secret keywords; most get the same word, one gets a different one (Mafia). Teams discuss and vote to identify the Mafia.",
    rounds: "Each participant/group gets two rounds to play; correct identification wins the round.",
    rules: [
      "Participants must not directly reveal their keyword during discussion.",
      "Each participant will give clues without exposing the keyword.",
      "After discussion, participants vote to identify the Mafia.",
      "Fair play and moderator decisions are final.",
    ],
    perks: "Fun, interactive experience with certificates for winners.",
    resources: "Moderators, secret keyword slips, timers, voting mechanism",
  },

  {
    id: 4,
    title: "BLIND INK ODYSSEY — Literary Quiz & Creative Task",
    shortTitle: "Blind Ink Odyssey",
    category: "Quiz + Creative",
    image: "https://images.unsplash.com/photo-1512427691650-1bb0f5d0f1b5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=dd4455ee66778899aa0011223344bb55",
    overview:
      "Two-round event assessing English grammar, literary knowledge and creative performance with an MCQ quiz followed by a blindfolded creative task.",
    participation: "Individual entries",
    rounds: [
      "Round 1: MCQ-Based Quiz — grammar & literature",
      "Round 2: Blind Fold Challenge — identify objects using touch"
    ],
    rules: [
      "Only participants qualifying in Round 1 will proceed to Round 2.",
      "Use of mobile phones or unfair means is prohibited.",
      "Follow all safety instructions during the blindfold round.",
      "Decisions of judges and coordinators are final.",
    ],
    evaluationCriteria: [
      { criteria: "Quiz Accuracy", marks: 50 },
      { criteria: "Creative Task Performance", marks: 50 }
    ],
    perks: "Winners declared based on combined performance; e-certificates and prizes.",
    resources: "MCQ platform/printouts, blindfold materials, moderators",
  },
];

export default literaryEvents;
