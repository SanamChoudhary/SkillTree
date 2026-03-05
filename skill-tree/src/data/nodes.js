/* ───────────────────────────────────────────────────────
   SKILL TREE DATA
   ─────────────────────────────────────────────────────── */
export const nodes = [
  // ── Root ──
  {
    id: "cs-basics",
    label: "CS Basics",
    track: "Foundations",
    prereqs: [],
    description:
      "Understand what computer science is, how computers process information, and core concepts like variables, loops, and logic.",
    resources: [
      { title: "Harvard CS50 – Intro", url: "https://cs50.harvard.edu/x/" },
      { title: "Khan Academy – Computing", url: "https://www.khanacademy.org/computing/computer-science" },
      { title: "Code.org Fundamentals", url: "https://code.org/educate/curriculum/express-course" },
    ],
  },

  // ── Web Dev branch ──
  {
    id: "internet",
    label: "How the Internet Works",
    track: "Web Dev",
    prereqs: ["cs-basics"],
    description:
      "Learn about HTTP, DNS, IP addresses, and how data travels across networks to load a webpage.",
    resources: [
      { title: "How the Internet Works (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" },
      { title: "Internet Explained (Vox)", url: "https://www.vox.com/2014/6/16/18076282/the-internet" },
      { title: "CS50 – Internet Primer", url: "https://cs50.harvard.edu/web/2020/notes/0/" },
    ],
  },
  {
    id: "html-css",
    label: "HTML & CSS",
    track: "Web Dev",
    prereqs: ["internet"],
    description:
      "Build the structure and style of web pages using HTML for content and CSS for layout & design.",
    resources: [
      { title: "MDN – HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
      { title: "freeCodeCamp – Responsive Web", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
      { title: "CSS Tricks – Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    ],
  },
  {
    id: "javascript",
    label: "JavaScript",
    track: "Web Dev",
    prereqs: ["html-css"],
    description:
      "Learn the programming language of the web — variables, functions, arrays, objects, and control flow.",
    resources: [
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
      { title: "freeCodeCamp – JS Basics", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
    ],
  },
  {
    id: "dom",
    label: "DOM Manipulation",
    track: "Web Dev",
    prereqs: ["javascript"],
    description:
      "Use JavaScript to read, change, and interact with HTML elements on a live page.",
    resources: [
      { title: "MDN – Intro to the DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" },
      { title: "JavaScript30 (Wes Bos)", url: "https://javascript30.com/" },
      { title: "The Odin Project – DOM", url: "https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events" },
    ],
  },
  {
    id: "fetch",
    label: "Fetch & APIs",
    track: "Web Dev",
    prereqs: ["dom"],
    description:
      "Send HTTP requests from the browser, work with JSON, and consume third-party APIs.",
    resources: [
      { title: "MDN – Using Fetch", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
      { title: "Public APIs List", url: "https://github.com/public-apis/public-apis" },
      { title: "freeCodeCamp – APIs & Microservices", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
    ],
  },
  {
    id: "react",
    label: "React",
    track: "Web Dev",
    prereqs: ["fetch"],
    description:
      "Build modern, component-based single-page applications using the React library.",
    resources: [
      { title: "React Official Tutorial", url: "https://react.dev/learn" },
      { title: "Full Modern React (Scrimba)", url: "https://scrimba.com/learn/learnreact" },
      { title: "The Odin Project – React", url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/react" },
    ],
  },

  // ── Python & Backend branch ──
  {
    id: "cli",
    label: "Command Line",
    track: "Python",
    prereqs: ["cs-basics"],
    description:
      "Navigate your file system, run programs, and manage tasks through the terminal / command prompt.",
    resources: [
      { title: "LinuxCommand.org", url: "https://linuxcommand.org/lc3_learning_the_shell.php" },
      { title: "Codecademy – Command Line", url: "https://www.codecademy.com/learn/learn-the-command-line" },
      { title: "The Odin Project – CLI", url: "https://www.theodinproject.com/lessons/foundations-command-line-basics" },
    ],
  },
  {
    id: "git",
    label: "Git & GitHub",
    track: "Python",
    prereqs: ["cli"],
    description:
      "Track changes in your code, create branches, and collaborate with others using Git and GitHub.",
    resources: [
      { title: "Git Handbook (GitHub)", url: "https://guides.github.com/introduction/git-handbook/" },
      { title: "Learn Git Branching", url: "https://learngitbranching.js.org/" },
      { title: "The Odin Project – Git", url: "https://www.theodinproject.com/lessons/foundations-introduction-to-git" },
    ],
  },
  {
    id: "python",
    label: "Python Basics",
    track: "Python",
    prereqs: ["git"],
    description:
      "Write your first programs in Python — syntax, data types, loops, and conditionals.",
    resources: [
      { title: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" },
      { title: "Python for Everybody", url: "https://www.py4e.com/" },
      { title: "Real Python – Getting Started", url: "https://realpython.com/python-first-steps/" },
    ],
  },
  {
    id: "py-functions",
    label: "Functions & Classes",
    track: "Python",
    prereqs: ["python"],
    description:
      "Master functions, classes, objects, inheritance, and encapsulation in Python.",
    resources: [
      { title: "Real Python – OOP", url: "https://realpython.com/python3-object-oriented-programming/" },
      { title: "Corey Schafer – OOP Playlist", url: "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc" },
      { title: "Python Docs – Classes", url: "https://docs.python.org/3/tutorial/classes.html" },
    ],
  },
  {
    id: "fileio",
    label: "File I/O & Libraries",
    track: "Python",
    prereqs: ["py-functions"],
    description:
      "Read/write files, use pip to install packages, and explore the Python standard library.",
    resources: [
      { title: "Real Python – File I/O", url: "https://realpython.com/read-write-files-python/" },
      { title: "Python Package Index (PyPI)", url: "https://pypi.org/" },
      { title: "Python Docs – File Handling", url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files" },
    ],
  },
  {
    id: "flask",
    label: "Flask or FastAPI",
    track: "Python",
    prereqs: ["fileio"],
    description:
      "Build a backend web server with routes, templates, and JSON APIs using Flask or FastAPI.",
    resources: [
      { title: "Flask Quickstart", url: "https://flask.palletsprojects.com/en/stable/quickstart/" },
      { title: "FastAPI Tutorial", url: "https://fastapi.tiangolo.com/tutorial/" },
      { title: "freeCodeCamp – Flask Course", url: "https://www.youtube.com/watch?v=Z1RJmh_OqeA" },
    ],
  },

  // ── Data Analysis branch (branches off Python) ──
  {
    id: "data-wrangling",
    label: "Data Wrangling",
    track: "Data Analysis",
    prereqs: ["python"],
    description:
      "Clean, transform, and explore datasets using Python's Pandas library — the foundation of data work.",
    resources: [
      { title: "Kaggle – Pandas Course", url: "https://www.kaggle.com/learn/pandas" },
      { title: "Real Python – Pandas", url: "https://realpython.com/pandas-python-explore-dataset/" },
      { title: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
    ],
  },
  {
    id: "data-viz",
    label: "Data Visualization",
    track: "Data Analysis",
    prereqs: ["data-wrangling"],
    description:
      "Create charts, plots, and dashboards to communicate insights using Matplotlib, Seaborn, or Plotly.",
    resources: [
      { title: "Kaggle – Data Visualization", url: "https://www.kaggle.com/learn/data-visualization" },
      { title: "Matplotlib Tutorial", url: "https://matplotlib.org/stable/tutorials/index.html" },
      { title: "Python Graph Gallery", url: "https://www.python-graph-gallery.com/" },
    ],
  },
  {
    id: "statistics",
    label: "Statistics & Probability",
    track: "Data Analysis",
    prereqs: ["data-viz"],
    description:
      "Understand distributions, hypothesis testing, correlation, and probability — essential for drawing valid conclusions from data.",
    resources: [
      { title: "Khan Academy – Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
      { title: "StatQuest (YouTube)", url: "https://www.youtube.com/c/joshstarmer" },
      { title: "Think Stats (free book)", url: "https://greenteapress.com/thinkstats2/html/index.html" },
    ],
  },
  {
    id: "ml-basics",
    label: "Intro to ML",
    track: "Data Analysis",
    prereqs: ["statistics"],
    description:
      "Learn the fundamentals of machine learning — regression, classification, training/testing, and scikit-learn.",
    resources: [
      { title: "Kaggle – Intro to ML", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
      { title: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
      { title: "fast.ai – Practical ML", url: "https://course.fast.ai/" },
    ],
  },

  // ── Algorithms branch ──
  {
    id: "ds",
    label: "Data Structures",
    track: "Algorithms",
    prereqs: ["cs-basics"],
    description:
      "Learn arrays, linked lists, stacks, queues, hash maps, and trees — the building blocks of efficient programs.",
    resources: [
      { title: "VisuAlgo", url: "https://visualgo.net/en" },
      { title: "CS50 – Data Structures", url: "https://cs50.harvard.edu/x/2024/weeks/5/" },
      { title: "freeCodeCamp – DS Course", url: "https://www.youtube.com/watch?v=RBSGKlAvoiM" },
    ],
  },
  {
    id: "sorting",
    label: "Sorting & Searching",
    track: "Algorithms",
    prereqs: ["ds"],
    description:
      "Understand classic sorting algorithms (bubble, merge, quick) and searching techniques (binary search).",
    resources: [
      { title: "Sorting Visualizer", url: "https://www.sortvisualizer.com/" },
      { title: "Khan Academy – Algorithms", url: "https://www.khanacademy.org/computing/computer-science/algorithms" },
      { title: "GeeksForGeeks – Sorting", url: "https://www.geeksforgeeks.org/sorting-algorithms/" },
    ],
  },
  {
    id: "bigo",
    label: "Big O Notation",
    track: "Algorithms",
    prereqs: ["sorting"],
    description:
      "Analyze algorithm efficiency with Big O — constant, linear, logarithmic, and quadratic time.",
    resources: [
      { title: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com/" },
      { title: "freeCodeCamp – Big O", url: "https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/" },
      { title: "CS Dojo – Big O", url: "https://www.youtube.com/watch?v=v4cd1O4zkGw" },
    ],
  },
  {
    id: "recursion",
    label: "Recursion",
    track: "Algorithms",
    prereqs: ["bigo"],
    description:
      "Solve problems by breaking them into smaller sub-problems — base cases, call stacks, and recursive thinking.",
    resources: [
      { title: "freeCodeCamp – Recursion", url: "https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/" },
      { title: "The Coding Train – Recursion", url: "https://www.youtube.com/watch?v=jPsZwrV9ld0" },
      { title: "Visualize Recursion", url: "https://recursion.vercel.app/" },
    ],
  },

  // ── OOP & Design branch ──
  {
    id: "oop-concepts",
    label: "OOP Concepts",
    track: "OOP & Design",
    prereqs: ["cs-basics"],
    description:
      "Understand the four pillars of object-oriented programming: encapsulation, abstraction, inheritance, and polymorphism.",
    resources: [
      { title: "freeCodeCamp – OOP Explained", url: "https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/" },
      { title: "Codecademy – OOP", url: "https://www.codecademy.com/learn/learn-java/modules/learn-java-object-oriented-java" },
      { title: "CS50 – OOP (YouTube)", url: "https://www.youtube.com/watch?v=e4fwY9ZsxPw" },
    ],
  },
  {
    id: "design-patterns",
    label: "Design Patterns",
    track: "OOP & Design",
    prereqs: ["oop-concepts"],
    description:
      "Learn reusable solutions to common software design problems — Singleton, Observer, Factory, Strategy, and more.",
    resources: [
      { title: "Refactoring Guru – Patterns", url: "https://refactoring.guru/design-patterns" },
      { title: "Head First Design Patterns", url: "https://www.oreilly.com/library/view/head-first-design/0596007124/" },
      { title: "Christopher Okhravi (YouTube)", url: "https://www.youtube.com/playlist?list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc" },
    ],
  },
  {
    id: "solid",
    label: "SOLID Principles",
    track: "OOP & Design",
    prereqs: ["design-patterns"],
    description:
      "Master the five SOLID principles for writing clean, maintainable, and scalable object-oriented code.",
    resources: [
      { title: "DigitalOcean – SOLID", url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" },
      { title: "Uncle Bob – SOLID (YouTube)", url: "https://www.youtube.com/watch?v=zHiWqnTWsn4" },
      { title: "Refactoring Guru – SOLID", url: "https://refactoring.guru/refactoring/what-is-refactoring" },
    ],
  },
  {
    id: "software-arch",
    label: "Software Architecture",
    track: "OOP & Design",
    prereqs: ["solid"],
    description:
      "Explore architectural patterns like MVC, microservices, layered architecture, and how to structure large codebases.",
    resources: [
      { title: "Martin Fowler – Architecture", url: "https://martinfowler.com/architecture/" },
      { title: "freeCodeCamp – Software Architecture", url: "https://www.freecodecamp.org/news/software-architecture-patterns/" },
      { title: "Fireship – 10 Architectures", url: "https://www.youtube.com/watch?v=f6zXyq4VPP8" },
    ],
  },

  // ── Systems branch ──
  {
    id: "binary",
    label: "Binary & Logic Gates",
    track: "Systems",
    prereqs: ["cs-basics"],
    description:
      "Explore how computers represent data in binary and perform operations with logic gates.",
    resources: [
      { title: "Nand2Tetris (Part 1)", url: "https://www.nand2tetris.org/" },
      { title: "Khan Academy – Binary", url: "https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information" },
      { title: "Ben Eater – Logic Gates", url: "https://www.youtube.com/watch?v=sTu3LwpF6XI" },
    ],
  },
  {
    id: "os",
    label: "Operating Systems",
    track: "Systems",
    prereqs: ["binary"],
    description:
      "Learn how OSes manage processes, memory, file systems, and provide an interface to hardware.",
    resources: [
      { title: "OSTEP (free textbook)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
      { title: "Crash Course – OS", url: "https://www.youtube.com/watch?v=26QPDBe-NB8" },
      { title: "MIT OCW – Operating Systems", url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/" },
    ],
  },
  {
    id: "networking",
    label: "Networking Basics",
    track: "Systems",
    prereqs: ["os"],
    description:
      "Understand TCP/IP, ports, sockets, packets, and how devices communicate over a network.",
    resources: [
      { title: "Computer Networking (Stanford)", url: "https://www.youtube.com/playlist?list=PLoCMsyE1cvdWKsLVyf6cPwCLDIZnOj0NS" },
      { title: "Networking Fundamentals (IBM)", url: "https://www.ibm.com/think/topics/networking" },
      { title: "Beej's Guide to Networking", url: "https://beej.us/guide/bgnet/" },
    ],
  },
  {
    id: "databases",
    label: "Databases & SQL",
    track: "Systems",
    prereqs: ["networking"],
    description:
      "Store and query structured data using SQL — tables, joins, indexes, and relational design.",
    resources: [
      { title: "SQLBolt", url: "https://sqlbolt.com/" },
      { title: "Khan Academy – SQL", url: "https://www.khanacademy.org/computing/computer-programming/sql" },
      { title: "CS50 – SQL", url: "https://cs50.harvard.edu/sql/2024/" },
    ],
  },

  // ── Cloud Computing branch (branches off Systems) ──
  {
    id: "cloud-fundamentals",
    label: "Cloud Fundamentals",
    track: "Cloud",
    prereqs: ["networking"],
    description:
      "Understand cloud computing models (IaaS, PaaS, SaaS), regions, availability zones, and core cloud concepts.",
    resources: [
      { title: "AWS Cloud Practitioner Essentials", url: "https://aws.amazon.com/training/learn-about/cloud-practitioner/" },
      { title: "Google Cloud Fundamentals", url: "https://www.cloudskillsboost.google/paths/36" },
      { title: "Microsoft Azure Fundamentals", url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/" },
    ],
  },
  {
    id: "cloud-services",
    label: "Cloud Services",
    track: "Cloud",
    prereqs: ["cloud-fundamentals"],
    description:
      "Explore compute, storage, and database services on major cloud platforms — EC2, S3, Lambda, Cloud Functions, and more.",
    resources: [
      { title: "AWS Free Tier Guide", url: "https://aws.amazon.com/free/" },
      { title: "freeCodeCamp – AWS Certified", url: "https://www.youtube.com/watch?v=3hLmDS179YE" },
      { title: "Google Cloud – Getting Started", url: "https://cloud.google.com/docs/get-started" },
    ],
  },
  {
    id: "containers",
    label: "Containers & Docker",
    track: "Cloud",
    prereqs: ["cloud-services"],
    description:
      "Package applications into containers using Docker — images, volumes, networking, and Docker Compose.",
    resources: [
      { title: "Docker Getting Started", url: "https://docs.docker.com/get-started/" },
      { title: "freeCodeCamp – Docker", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
      { title: "Play with Docker", url: "https://labs.play-with-docker.com/" },
    ],
  },
  {
    id: "devops",
    label: "CI/CD & DevOps",
    track: "Cloud",
    prereqs: ["containers"],
    description:
      "Automate testing, building, and deploying software with CI/CD pipelines, GitHub Actions, and infrastructure as code.",
    resources: [
      { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
      { title: "freeCodeCamp – DevOps", url: "https://www.youtube.com/watch?v=j5Zsa_eOXeY" },
      { title: "The DevOps Handbook", url: "https://itrevolution.com/product/the-devops-handbook-second-edition/" },
    ],
  },
];

export const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

/* ───────────────────────────────────────────────────────
   TRACK COLORS — each branch gets its own palette
   ─────────────────────────────────────────────────────── */
export const TRACK_COLORS = {
  Foundations:     { base: "#a78bfa", glow: "rgba(167,139,250,0.45)", bg: "rgba(167,139,250,0.08)" },
  "Web Dev":       { base: "#fb923c", glow: "rgba(251,146,60,0.45)",  bg: "rgba(251,146,60,0.08)" },
  Python:          { base: "#4ade80", glow: "rgba(74,222,128,0.45)",  bg: "rgba(74,222,128,0.08)" },
  "Data Analysis": { base: "#facc15", glow: "rgba(250,204,21,0.45)",  bg: "rgba(250,204,21,0.08)" },
  Algorithms:      { base: "#f87171", glow: "rgba(248,113,113,0.45)", bg: "rgba(248,113,113,0.08)" },
  "OOP & Design":  { base: "#c084fc", glow: "rgba(192,132,252,0.45)", bg: "rgba(192,132,252,0.08)" },
  Systems:         { base: "#38bdf8", glow: "rgba(56,189,248,0.45)",  bg: "rgba(56,189,248,0.08)" },
  Cloud:           { base: "#2dd4bf", glow: "rgba(45,212,191,0.45)",  bg: "rgba(45,212,191,0.08)" },
};
