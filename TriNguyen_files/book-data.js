/* Textbook manifest — parts, chapters, lecturers, source files */
window.BOOK = {
  title: "Deep Learning for Astrophysics",
  series: "NASA Cosmic Origins · AI/ML STIG",
  subtitle: "Textbook Edition",
  parts: [
    {
      name: "Part I", title: "Foundations",
      blurb: "The scientific case for AI, and the computational machinery that powers modern deep learning.",
      chapters: [
        { n: 1,  slug: "Chapter01", type: "md",    title: "The Future of AI and the Mathematical and Physical Sciences", lecturer: "Jesse Thaler", affil: "MIT / IAIFI" },
        { n: 2,  slug: "Chapter02", type: "ipynb", title: "PyTorch and Autodifferentiation", lecturer: "Phill Cargile", affil: "CfA | Harvard & Smithsonian" },
        { n: 3,  slug: "Chapter03", type: "ipynb", title: "JAX", lecturer: "Phill Cargile", affil: "CfA | Harvard & Smithsonian" },
        { n: 4,  slug: "Chapter04", type: "ipynb", title: "Inductive Biases", lecturer: "John F. Wu", affil: "STScI / Johns Hopkins" }
      ]
    },
    {
      name: "Part II", title: "Deep Learning Architectures",
      blurb: "A tour of the architectures that match a model's structure to the structure of physical data.",
      chapters: [
        { n: 5,  slug: "Chapter05", type: "ipynb", title: "Convolutional Neural Networks", lecturer: "John F. Wu", affil: "STScI" },
        { n: 6,  slug: "Chapter06", type: "ipynb", title: "Recurrent Neural Networks", lecturer: "Daniel Muthukrishna", affil: "MIT / CfA" },
        { n: 7,  slug: "Chapter07", type: "ipynb", title: "Transformers", lecturer: "Helen Qu", affil: "Flatiron Institute" },
        { n: 8,  slug: "Chapter08", type: "ipynb", title: "Graph Neural Networks", lecturer: "Tri Nguyen", affil: "Northwestern / CIERA" },
        { n: 9,  slug: "Chapter09", type: "md",    title: "Equivariant Neural Networks I", lecturer: "Anna Scaife", affil: "University of Manchester" },
        { n: 10, slug: "Chapter10", type: "ipynb", title: "Equivariant Neural Networks II", lecturer: "Anna Scaife", affil: "University of Manchester" }
      ]
    },
    {
      name: "Part III", title: "Generative Models & Inference",
      blurb: "Learning the distribution of the Universe — and inverting it to infer physical parameters.",
      chapters: [
        { n: 11, slug: "Chapter11", type: "ipynb", title: "Normalizing Flows", lecturer: "Gregory Green", affil: "Westlake University" },
        { n: 12, slug: "Chapter12", type: "ipynb", title: "Diffusion Models", lecturer: "Duo Xu", affil: "University of Toronto" },
        { n: 13, slug: "Chapter13", type: "ipynb", title: "Flow Matching", lecturer: "Tomasz Rozanski", affil: "Australian National University" },
        { n: 14, slug: "Chapter14", type: "ipynb", title: "Simulation-Based Inference", lecturer: "Tomasz Rozanski", affil: "Australian National University" }
      ]
    },
    {
      name: "Part IV", title: "Reinforcement Learning",
      blurb: "Teaching agents to make sequential decisions — from gridworlds to aligning large language models.",
      chapters: [
        { n: 15, slug: "Chapter15", type: "md",    title: "Reinforcement Learning I", lecturer: "Carol Cuesta-Lazaro", affil: "IAS / Flatiron Institute" },
        { n: 16, slug: "Chapter16", type: "ipynb", title: "Reinforcement Learning II", lecturer: "Carol Cuesta-Lazaro", affil: "IAS / Flatiron Institute" }
      ]
    },
    {
      name: "Part V", title: "Large Language Models & Agents",
      blurb: "Putting LLMs to work in the research loop — from raw API calls to autonomous agents.",
      chapters: [
        { n: 17, slug: "Chapter17", type: "ipynb", title: "LLM API Basics", lecturer: "Yuan-Sen Ting", affil: "The Ohio State University" },
        { n: 18, slug: "Chapter18", type: "ipynb", title: "RAG & Function Tools", lecturer: "Yuan-Sen Ting", affil: "The Ohio State University" },
        { n: 19, slug: "Chapter19", type: "ipynb", title: "Model Context Protocol", lecturer: "Yuan-Sen Ting", affil: "The Ohio State University" },
        { n: 20, slug: "Chapter20", type: "ipynb", title: "LLM as Agent", lecturer: "Francisco Villaescusa-Navarro", affil: "Flatiron Institute CCA" }
      ]
    },
    {
      name: "Part VI", title: "AI, Science & Society",
      blurb: "Building instruments with AI, the future of publishing, and what understanding means in AI-laden science.",
      chapters: [
        { n: 21, slug: "Chapter21", type: "md", title: "From Text to Spaceship", lecturer: "Ryan McClelland", affil: "NASA GSFC" },
        { n: 22, slug: "Chapter22", type: "md", title: "AI and Scientific Publishing", lecturer: "Licia Verde", affil: "ICREA / ICCUB Barcelona" },
        { n: 23, slug: "Chapter23", type: "md", title: "Understanding in AI-Laden Science", lecturer: "Siyu Yao & André Curtis-Trudel", affil: "SJTU / U. Cincinnati" }
      ]
    }
  ]
};

// Flat list for navigation
window.BOOK.flat = window.BOOK.parts.flatMap(p => p.chapters.map(c => ({ ...c, part: p })));
window.BOOK.byN = Object.fromEntries(window.BOOK.flat.map(c => [c.n, c]));
