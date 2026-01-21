// Projects data structure
export const projects = {
  cs: [
    {
      id: 'cs-1',
      title: 'TSH: A Tiny Shell with Job Control',
      problem: 'Implementing a fully functional UNIX shell in C that supports job control, signal handling, I/O redirection, and piping to demonstrate mastery of systems programming concepts.',
      role: 'Systems Programmer & Developer',
      tools: ['C', 'UNIX System Calls', 'GCC', 'Make', 'Signal Handling', 'Process Management'],
      whatIdid: 'Developed a complete command-line shell implementation in C with comprehensive systems programming features. Implemented process management using fork() and execve() for command execution, and built a robust job control system supporting both foreground and background processes with proper state management.\n\nCreated a comprehensive signal handling system for SIGCHLD (process termination), SIGINT (interrupt), and SIGTSTP (suspend), enabling proper parent-child process communication. Developed built-in commands including quit, jobs, fg, and bg for job management.\n\nImplemented I/O redirection for both input and output streams, and designed a multi-stage piping system with proper process chaining and communication. Built concurrent job management supporting up to 16 simultaneous jobs with process group management for proper signal isolation.\n\nAddressed race conditions through strategic signal blocking and implemented proper zombie process prevention to ensure clean resource management.',
      outcome: 'Created a robust, fully functional shell that passes comprehensive trace-driven tests, demonstrating proficiency in low-level systems programming.\n\nThe implementation correctly handles complex scenarios including signal forwarding between processes, job state transitions (running, stopped, terminated), pipeline execution with multiple stages, and graceful error recovery.\n\nSuccessfully showcases deep understanding of the UNIX process model, asynchronous programming with signals, and proper resource management in systems-level code. The shell demonstrates production-quality error handling and edge case management.',
      github: 'https://github.com/code-of-toad/CSC209H5-Winter-2024-Student-UNIX-Shell',
      image: '/projects/tsh_thumbnail.png'
    },
    {
      id: 'cs-2',
      title: 'Sokoban: RISC-V Assembly Edition',
      problem: 'Implementing a fully-featured Sokoban puzzle game entirely in RISC-V 32i Assembly Language with procedurally generated levels and solvability guarantees.',
      role: 'Systems Programmer & Assembly Developer',
      tools: ['RISC-V 32i Assembly', 'RISC-V ISA', 'System Calls', 'Stack-based Memory Management', 'LFSR RNG'],
      whatIdid: 'Developed a complete Sokoban game implementation from scratch in low-level RISC-V assembly (~2,900 lines). Built a custom Linear Feedback Shift Register (LFSR) pseudo-random number generator for deterministic randomness.\n\nDesigned and implemented a procedural level generation algorithm that creates solvable levels with dynamically sized grids (10-20 rows/cols), internal walls covering exactly 25% of empty space, and variable box and target placement. The algorithm ensures all generated levels are guaranteed to be solvable.\n\nImplemented sophisticated stack-based memory management using frame and stack pointers, managing all game state entirely on the stack without heap allocation. Created a game state machine with separate initial and current state storage for reset functionality.\n\nDeveloped collision detection and box pushing mechanics, victory detection logic, and a comprehensive game loop with WASD controls and interactive UI rendering through system calls.',
      outcome: 'Successfully created a fully functional, playable Sokoban game demonstrating mastery of low-level systems programming.\n\nThe implementation features robust procedural level generation that guarantees solvability, ensuring players always receive playable puzzles. Memory management is handled entirely on the stack, demonstrating efficient resource usage without dynamic allocation.\n\nThe codebase features modular function design with comprehensive documentation, making the ~2,900 lines of assembly code maintainable and understandable. Showcases proficiency in assembly language programming, algorithm design in a low-level context, and systems programming principles including I/O operations and state management—all achieved without any high-level language dependencies.',
      github: 'https://github.com/code-of-toad/CSC258H5-Fall-2024-Project-Sokoban',
      image: '/projects/proj_sokoban_thumbnail.png'
    },
    {
      id: 'cs-5',
      title: 'E-Commerce Backend: CSSU Rewards System API',
      problem: 'Designing and implementing a robust RESTful backend API for a points-based loyalty program system, requiring secure authentication, role-based access control, transaction processing, and promotion management.',
      role: 'Backend Developer & API Architect',
      tools: ['Node.js', 'Express.js', 'Prisma ORM', 'JWT', 'bcrypt', 'SQLite', 'RESTful API Design', 'RBAC'],
      whatIdid: 'Developed a comprehensive backend API for an e-commerce rewards system using Node.js and Express.js.\n\n**API Design**: Implemented RESTful API design with resource-based URLs and proper HTTP methods/status codes. Created a four-tier role-based access control system (regular, cashier, manager, superuser) with granular permission checks at the controller level.\n\n**Authentication & Security**: Built JWT-based authentication with 24-hour token expiration. Implemented secure password hashing using bcrypt with 10 salt rounds. Created comprehensive input validation and sanitization helpers to prevent injection attacks.\n\n**User Management**: Developed a complete user management system including registration, profile updates, and password reset with secure UUID-based token generation and expiration.\n\n**Transaction System**: Built a transaction system supporting purchase transactions with automatic points calculation (4 points per dollar) and adjustment capabilities for managers.\n\n**Promotions**: Implemented a promotions system with automatic promotions (time-based, spending-based) and one-time use promotions with proper validation.\n\n**Database**: Designed database schema using Prisma with migrations, foreign keys, enums, and cascade deletes. Optimized queries using concurrent database operations with Promise.all() for parallel queries and efficient pagination.',
      outcome: 'Created a production-ready backend API demonstrating expertise in web development, database design, and security best practices.\n\nThe implementation successfully handles complex business logic including automatic points calculation, promotion application, and role-based data visibility. Robust security measures with password hashing, JWT authentication, and input validation protect against common vulnerabilities.\n\nDatabase design using Prisma ensures type safety, proper relationships, and maintainable schema evolution through migrations. The modular architecture with separation of concerns (controllers, services, routes, middleware) promotes code maintainability and scalability.\n\nSuccessfully showcases understanding of RESTful API principles, authentication/authorization patterns, database optimization techniques, and enterprise-level backend development practices.',
      github: 'https://github.com/code-of-toad/project_ecommerce_system_backend',
      image: '/projects/ecommerce_project.png'
    },
    {
      id: 'cs-3',
      title: 'Simon Game: RISC-V Assembly LED Matrix Implementation',
      problem: 'Implementing a complete Simon memory game on a 15x15 LED matrix using RISC-V assembly, featuring memory-mapped I/O, dynamic sequence generation, and interactive gameplay with a d-pad controller.',
      role: 'Systems Programmer & Assembly Developer',
      tools: ['RISC-V Assembly', 'Memory-Mapped I/O', 'LED Matrix Control', 'D-Pad Input Polling', 'Stack-based Memory'],
      whatIdid: 'Developed a fully functional Simon game in RISC-V assembly for memory-mapped I/O hardware. Implemented LED matrix control with custom drawing routines for pixel-level manipulation, enabling precise control over the 15x15 LED display.\n\nBuilt pseudo-random sequence generation using timer-based ecall system calls, and designed stack-based dynamic sequence storage allowing unbounded pattern growth without fixed memory limits.\n\nCreated an interactive input system with d-pad polling and debouncing to ensure reliable user input. Implemented a comprehensive state machine managing countdown, playback, input, and success/fail states.\n\nDeveloped custom LED animations and visual feedback including countdown sequences, a smile face for success, and a "bruh" face for failure. Used procedural decomposition with modular helper functions for row/column filling and color control.',
      outcome: 'Created a complete, playable Simon game demonstrating proficiency in low-level hardware interaction and assembly programming.\n\nThe implementation features dynamic sequence growth without fixed limits, allowing the game to continue indefinitely as players improve. Smooth visual feedback with custom LED animations enhances user experience.\n\nRobust state management ensures reliable gameplay transitions between states. Successfully showcases understanding of memory-mapped I/O for hardware communication, stack-based memory allocation for dynamic sequences, timer-driven pseudo-randomness, and state machine design—all in assembly language context.',
      github: 'https://github.com/code-of-toad/assembly_game_simon',
      image: '/projects/simon_game_thumbnail.png',
      detailImage: '/projects/simon_game.png'
    },
    {
      id: 'cs-4',
      title: 'Audio Manipulation with C: WAV File Processing',
      problem: 'Creating low-level audio processing utilities that manipulate WAV files at the binary level, demonstrating systems programming, binary file format handling, and signal processing algorithms without external libraries.',
      role: 'Systems Programmer & C Developer',
      tools: ['C', 'GCC', 'Make', 'WAV File Format', 'POSIX APIs', 'AddressSanitizer', 'Binary File I/O'],
      whatIdid: 'Developed two audio manipulation utilities working directly with WAV file binary format without external libraries.\n\n**addecho**: Built an echo effect generator using a circular buffer implementation for efficient delay line storage. Features configurable delay and volume scaling, proper WAV header manipulation (44-byte header structure), and edge case handling for files shorter or longer than the delay buffer.\n\n**remvocals**: Created a vocal removal tool using a channel subtraction algorithm that exploits the phase cancellation principle by calculating stereo channel differences. This technique effectively removes centered vocals while preserving background instrumentation.\n\nBoth programs demonstrate dynamic memory allocation with malloc/free, binary file reading/writing with fread/fwrite, pointer arithmetic for precise byte-level access, comprehensive error handling and input validation, command-line interface with getopt, and proper resource management with AddressSanitizer integration for memory safety.',
      outcome: 'Successfully created robust audio processing tools that manipulate WAV files at the byte level, demonstrating mastery of low-level systems programming.\n\nThe implementation showcases efficient algorithms with O(n) time complexity and O(d) space complexity for the echo effect. Memory management is handled properly without leaks, validating best practices for systems programming.\n\nBinary format parsing and manipulation demonstrates deep understanding of file format specifications. The circular buffer implementation for echo delay showcases efficient data structure usage, while the vocal removal algorithm shows understanding of audio processing principles.\n\nBoth tools handle edge cases gracefully and include comprehensive error handling, providing production-quality robustness and validating systems programming best practices.',
      github: 'https://github.com/code-of-toad/project_audio_manipulation_with_c',
      image: '/projects/audio_manipulation_with_c.png'
    }
  ],
  stats: [
    {
      id: 'stats-2',
      title: 'Insights into Student Well-Being: PSY100 Survey Analysis',
      problem: 'Exploring happiness and self-esteem trends in PSY100 students using survey data to understand distributions, group comparisons, and associations between psychological measures.',
      role: 'Data Analyst & Statistical Researcher (Team Member)',
      tools: ['R', 'tidyverse', 'ggplot2', 'mosaic', 'janitor', 'RColorBrewer'],
      whatIdid: 'Conducted comprehensive descriptive analysis on survey data from 657 PSY100 students.\n\nPerformed data cleaning with missing value handling and prepared the dataset for analysis. Created frequency distributions and histograms to visualize data patterns and distributions.\n\nAnalyzed conditional distributions across gender groups to identify demographic differences. Constructed contingency tables with row percentages to examine relationships between categorical variables.\n\nCalculated Pearson correlation between happiness and self-esteem scores to quantify the relationship between psychological well-being measures. Performed simulation-based analysis of sampling distributions for multiple sample sizes to demonstrate standard error concepts and reinforce statistical inference principles.',
      outcome: 'Identified key demographic patterns: 71.8% of students were female, and 64.1% were taking 3 courses per term.\n\nFound mean happiness score of 21.5 (SD 6.0) and mean self-esteem score of 17.2 (SD 5.3). Men showed slightly higher self-esteem (18.7) compared to women (16.7), though the difference was modest.\n\nDiscovered a moderate positive correlation (r = 0.556) between happiness and self-esteem, demonstrating a meaningful association between psychological well-being measures. This suggests that students with higher self-esteem tend to report higher levels of happiness.\n\nSimulation results showed decreasing standard error with increasing sample size, reinforcing fundamental statistical inference principles about the relationship between sample size and estimation precision.',
      github: 'https://github.com/code-of-toad/psy100_data_analysis_infographic',
      image: '/projects/final_infographic_sta258.png'
    },
    {
      id: 'stats-1',
      title: 'Student Mental Health Analysis: Stress, Sleep, Emotion Regulation, and Support-Seeking',
      problem: 'Examining the mental health and wellbeing of Canadian undergraduate students during the COVID-19 pandemic, investigating relationships between academic programs, emotional regulation, social support seeking, sleep quality, and perceived stress levels.',
      role: 'Data Analyst & Statistical Researcher (Team Member)',
      tools: ['R', 'tidyverse', 'ggplot2', 'psych', 'effectsize', 'knitr', 'dplyr', 'tidyr'],
      whatIdid: 'Conducted comprehensive statistical analysis on survey data from 1,192 undergraduate students during the COVID-19 pandemic.\n\nPerformed one-way ANOVA tests to compare emotional regulation and social support seeking across different academic programs. Conducted paired t-tests to analyze the impact of COVID-19 on stress levels by comparing pre- and post-pandemic measures.\n\nExecuted correlation analysis examining relationships between hobbies and emotional regulation to identify potential protective factors. Calculated effect sizes (Cohen\'s d) to assess practical significance beyond statistical significance.\n\nCleaned and preprocessed the data, performed hypothesis testing with proper statistical inference procedures, created comprehensive visualizations including boxplots and scatter plots, and thoroughly documented methodology and findings.',
      outcome: 'Found highly significant relationships between sleep quality and mental health outcomes. Well-rested students showed notably better depression, anxiety, and stress scores, highlighting the critical importance of sleep for mental health.\n\nDiscovered a statistically significant increase in perceived stress post-COVID-19 with a medium effect size (Cohen\'s d ≈ 0.44), indicating a meaningful practical impact of the pandemic on student wellbeing beyond just statistical significance.\n\nResults showed minimal differences across academic programs, suggesting that individual wellbeing factors and external stressors may be stronger predictors of mental health than program of study alone. This finding has important implications for university mental health support services.',
      github: 'https://github.com/code-of-toad/data_analysis_student_mental_health',
      image: '/projects/final_infographic_sta304.jpg'
    }
  ]
}
