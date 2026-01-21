// Projects data structure
export const projects = {
  cs: [
    {
      id: 'cs-1',
      title: 'TSH: A Tiny Shell with Job Control',
      problem: 'Implementing a fully functional UNIX shell in C that supports job control, signal handling, I/O redirection, and piping to demonstrate mastery of systems programming concepts.',
      role: 'Systems Programmer & Developer',
      tools: ['C', 'UNIX System Calls', 'GCC', 'Make', 'Signal Handling', 'Process Management'],
      whatIdid: 'Developed a complete command-line shell implementation in C, including process management with fork() and execve(), job control supporting foreground/background processes, comprehensive signal handling for SIGCHLD, SIGINT, and SIGTSTP, built-in commands (quit, jobs, fg, bg), I/O redirection for input and output, multi-stage piping with proper process chaining, and concurrent job management for up to 16 simultaneous jobs. Implemented process group management for proper signal isolation, handled race conditions through signal blocking, and ensured proper zombie process prevention.',
      outcome: 'Created a robust, fully functional shell that passes comprehensive trace-driven tests, demonstrating proficiency in low-level systems programming. The implementation correctly handles complex scenarios including signal forwarding, job state transitions, pipeline execution, and error recovery. Successfully showcases understanding of UNIX process model, asynchronous programming with signals, and proper resource management in systems-level code.',
      github: 'https://github.com/code-of-toad/CSC209H5-Winter-2024-Student-UNIX-Shell',
      image: '/projects/tsh_thumbnail.png'
    },
    {
      id: 'cs-2',
      title: 'Sokoban: RISC-V Assembly Edition',
      problem: 'Implementing a fully-featured Sokoban puzzle game entirely in RISC-V 32i Assembly Language with procedurally generated levels and solvability guarantees.',
      role: 'Systems Programmer & Assembly Developer',
      tools: ['RISC-V 32i Assembly', 'RISC-V ISA', 'System Calls', 'Stack-based Memory Management', 'LFSR RNG'],
      whatIdid: 'Developed a complete Sokoban game implementation from scratch in low-level RISC-V assembly (~2,900 lines), including a custom Linear Feedback Shift Register (LFSR) pseudo-random number generator, procedural level generation algorithm that creates solvable levels with dynamically sized grids (10-20 rows/cols), internal walls covering exactly 25% of empty space, variable box and target placement, sophisticated stack-based memory management using frame and stack pointers, game state machine with separate initial and current state storage for reset functionality, collision detection and box pushing mechanics, victory detection, and comprehensive game loop with WASD controls and interactive UI rendering.',
      outcome: 'Successfully created a fully functional, playable Sokoban game demonstrating mastery of low-level systems programming. The implementation features robust procedural level generation that guarantees solvability, efficient memory management entirely on the stack, and modular function design with comprehensive documentation. Showcases proficiency in assembly language programming, algorithm design in a low-level context, and systems programming principles including I/O operations and state management without any high-level language dependencies.',
      github: 'https://github.com/code-of-toad/CSC258H5-Fall-2024-Project-Sokoban',
      image: '/projects/proj_sokoban_thumbnail.png'
    }
  ],
  stats: [
    {
      id: 'stats-2',
      title: 'Insights into Student Well-Being: PSY100 Survey Analysis',
      problem: 'Exploring happiness and self-esteem trends in PSY100 students using survey data to understand distributions, group comparisons, and associations between psychological measures.',
      role: 'Data Analyst & Statistical Researcher (Team Member)',
      tools: ['R', 'tidyverse', 'ggplot2', 'mosaic', 'janitor', 'RColorBrewer'],
      whatIdid: 'Conducted comprehensive descriptive analysis on survey data from 657 PSY100 students, including data cleaning with missing value handling, creating frequency distributions and histograms, analyzing conditional distributions across gender groups, constructing contingency tables with row percentages, calculating Pearson correlation between happiness and self-esteem scores, and performing simulation-based analysis of sampling distributions for multiple sample sizes to demonstrate standard error concepts.',
      outcome: 'Identified key demographic patterns with 71.8% female students and 64.1% taking 3 courses per term. Found mean happiness score of 21.5 (SD 6.0) and mean self-esteem score of 17.2 (SD 5.3), with men showing slightly higher self-esteem (18.7 vs 16.7). Discovered moderate positive correlation (r = 0.556) between happiness and self-esteem, demonstrating meaningful association between psychological well-being measures. Simulation results showed decreasing standard error with increasing sample size, reinforcing statistical inference principles.',
      github: 'https://github.com/code-of-toad/psy100_data_analysis_infographic',
      image: '/projects/final_infographic_sta258.png'
    },
    {
      id: 'stats-1',
      title: 'Student Mental Health Analysis: Stress, Sleep, Emotion Regulation, and Support-Seeking',
      problem: 'Examining the mental health and wellbeing of Canadian undergraduate students during the COVID-19 pandemic, investigating relationships between academic programs, emotional regulation, social support seeking, sleep quality, and perceived stress levels.',
      role: 'Data Analyst & Statistical Researcher (Team Member)',
      tools: ['R', 'tidyverse', 'ggplot2', 'psych', 'effectsize', 'knitr', 'dplyr', 'tidyr'],
      whatIdid: 'Conducted comprehensive statistical analysis on survey data from 1,192 undergraduate students, including one-way ANOVA tests to compare emotional regulation and social support seeking across academic programs, paired t-tests to analyze COVID-19 stress impact, correlation analysis examining relationships between hobbies and emotional regulation, and effect size calculations (Cohen\'s d) to assess practical significance. Cleaned and preprocessed data, performed hypothesis testing with proper statistical inference, created visualizations including boxplots and scatter plots, and documented methodology and findings.',
      outcome: 'Found highly significant relationships between sleep quality and mental health outcomes, with well-rested students showing notably better depression, anxiety, and stress scores. Discovered statistically significant increase in perceived stress post-COVID-19 with medium effect size (Cohen\'s d ≈ 0.44), indicating meaningful practical impact. Results showed minimal differences across academic programs, suggesting individual wellbeing factors and external stressors may be stronger predictors of mental health than program of study alone.',
      github: 'https://github.com/code-of-toad/data_analysis_student_mental_health',
      image: '/projects/final_infographic_sta304.jpg'
    }
  ]
}
