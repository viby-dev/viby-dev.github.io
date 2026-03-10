export const personalInfo = {
  name: "Bhavish Rai B",
  tagline: "Robotics engineer designing system-level architectures for coordinated multi-robot autonomy - bridging language-driven reasoning, perception, and ROS2 execution into deployable real-world systems.",  email: "bhavishraib@gmail.com",
  footerTagline: "Building robots that reason, adapt, and act.",
  location: "IIT Gandhinagar, India",
  github: "https://github.com/braib",
  linkedin: "https://www.linkedin.com/in/bhavish-rai-b-761421231/",
  // scholar: "https://scholar.google.com/",
  resume: require("./assets/CV.pdf"),
  profileImage: require("./assets/bhavish.png")
};

export const about = {
bio: `I'm a robotics engineer building intelligent systems that bridge the gap between AI research and real-world deployment. My work focuses on multi-robot coordination - connecting LLM-based task planning, VLM perception, and ROS2 execution into systems that actually work on real hardware.

Currently a Program Assistant at IIT Gandhinagar, where I work with platforms like Unitree Go2, TurtleBot3, and SO-101 arms. My research on CoMuRoS - a hierarchical multi-robot architecture - has been published at IROS 2025 and ArXiv.

I care about robots that don't just simulate well, but deploy reliably.`,
  education: [
    {
      degree: "Bachelor of Engineering in Robotics and Automation ",
      institution: "Sahyadri College of Engineering and Management Adyar, Mangaluru",
      year: "2021-2025",
      marks: "CGPA: 8.5 / 10"
    },
    {
      degree: "Pre-University Education (PCMCs)",
      institution: "Sri Rama Pre-University College, Kalladka",
      year: "2019-2021",
      marks: "92%"
    }
  ],
  experience: [
    {
      role: "Program Assistant - I ",
      organization: "IIT Gandhinagar Robotics Lab",
      period: "2025 June -Present"
    },
    {
      role: "Robotics Research Intern",
      organization: "IIT Gandhinagar Robotics Lab",
      period: "January 2025 - May 2025"
    },
    {
      role: "Research Intern",
      organization: "Technical Career Education",
      period: "October 2023 - November 2023"
    }
  ]
};

export const featuredProjects = [
  {
    id: 1,
    slug: "isaac-sim-manipulation",
    title: "Isaac Sim Robotic Manipulation",
    shortDesc: "Advanced robotic manipulation training using NVIDIA Isaac Sim with reinforcement learning for precise object handling and assembly tasks.",
    
    // Enhanced: Full description with markdown support
    fullDescription: `This project implements advanced robotic manipulation using NVIDIA Isaac Sim for training reinforcement learning agents. The system achieves state-of-the-art performance in pick-and-place tasks through sim-to-real transfer.

## Key Features
- End-to-end RL training pipeline using PPO
- Photorealistic simulation environment
- Domain randomization for robust sim-to-real transfer
- Real-time inference on physical robots

## Technical Approach
The training pipeline leverages Isaac Gym for parallel environment simulation, enabling 40% faster training compared to traditional methods. We implemented custom reward shaping and curriculum learning strategies to achieve a 94% success rate on complex manipulation tasks.`,

    category: ["AI/ML", "Vision"],
    tech: ["Python", "Isaac Sim", "PyTorch", "ROS 2", "USD"],
    
    // Enhanced: Multiple media items
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
        caption: "Isaac Sim training environment"
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual video
        caption: "Demo of robotic manipulation"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        caption: "Real robot deployment results"
      }
    ],
    
    metrics: {
      performance: "40% faster training",
      accuracy: "94% success rate",
      custom: [
        { label: "Training Episodes", value: "10M+" },
        { label: "Sim-to-Real Gap", value: "<5%" }
      ]
    },
    
    featured: true,
    
    // Enhanced: Flexible links with custom labels
    links: [
      { type: "github", url: "https://github.com/username/isaac-sim-manipulation", label: "Source Code" },
      { type: "demo", url: "https://demo.com", label: "Live Demo" },
      { type: "custom", url: "https://docs.com", label: "Documentation", icon: "FileText" }
    ],
    
    // Enhanced: Additional details
    details: {
      duration: "6 months",
      team: "Solo project",
      status: "Completed",
      tags: ["Reinforcement Learning", "Sim2Real", "Manipulation"]
    }
  },
  {
    id: 2,
    slug: "groot-finetuning",
    title: "GR00T Model Fine-tuning",
    shortDesc: "Fine-tuning NVIDIA's GR00T foundation model for humanoid robot control with custom task-specific behaviors and motion primitives.",
    
    fullDescription: `Fine-tuned NVIDIA's GR00T foundation model for humanoid robot control, achieving significant improvements in task adaptation speed and motion quality.

## Objectives
- Adapt GR00T for custom manipulation tasks
- Reduce training time for new behaviors
- Maintain generalization across task variations

## Results
Successfully reduced adaptation time by 2.5x while maintaining 91% task completion rate across diverse scenarios.`,

    category: ["AI/ML", "Control"],
    tech: ["Python", "GR00T", "Isaac Lab", "PyTorch", "ROS 2"],
    
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800",
        caption: "GR00T training interface"
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=example",
        caption: "Humanoid locomotion demo"
      }
    ],
    
    metrics: {
      performance: "2.5x faster adaptation",
      accuracy: "91% task completion",
      custom: [
        { label: "Model Size", value: "1.2B params" },
        { label: "Fine-tuning Time", value: "12 hours" }
      ]
    },
    
    featured: true,
    
    links: [
      { type: "github", url: "https://github.com/username/groot-finetuning", label: "Code" },
      { type: "custom", url: "https://wandb.ai/project", label: "Training Logs", icon: "LineChart" }
    ],
    
    details: {
      duration: "4 months",
      team: "2 researchers",
      status: "Ongoing",
      tags: ["Foundation Models", "Transfer Learning", "Humanoids"]
    }
  },
  {
    id: 3,
    slug: "multi-robot-mpc",
    title: "Multi-Robot MPC Controller",
    shortDesc: "Model Predictive Control system for coordinated multi-robot navigation with collision avoidance and dynamic obstacle handling.",
    
    fullDescription: `Developed a distributed Model Predictive Control (MPC) system for multi-robot coordination in dynamic environments.

## System Architecture
- Decentralized MPC controllers per robot
- Real-time trajectory optimization
- Dynamic obstacle avoidance
- Formation control capabilities

## Performance
Achieved zero collisions in 1000+ test runs with 98% path tracking accuracy.`,

    category: ["Multi-Robot", "Control"],
    tech: ["C++", "Python", "MPC", "ROS 2", "CasADi"],
    
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1563968743333-044cef800494?w=800",
        caption: "Multi-robot formation control"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
        caption: "Trajectory optimization visualization"
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=example2",
        caption: "Real-world deployment"
      }
    ],
    
    metrics: {
      performance: "Zero collisions",
      accuracy: "98% path accuracy",
      custom: [
        { label: "Control Frequency", value: "50 Hz" },
        { label: "Max Robots", value: "10" }
      ]
    },
    
    featured: true,
    
    links: [
      { type: "github", url: "https://github.com/username/multi-robot-mpc", label: "Repository" },
      { type: "demo", url: "https://demo.com", label: "Simulation" },
      { type: "paper", url: "https://arxiv.org/paper", label: "Paper" }
    ],
    
    details: {
      duration: "8 months",
      team: "3 researchers",
      status: "Published",
      tags: ["MPC", "Multi-Agent", "Path Planning"]
    }
  }
];

const unstarredProjects = [
  {
    id: 4,
    slug: "slam-quadruped",
    title: "SLAM on Unitree Go2 Quadruped",
    shortDesc: "Simultaneous Localization and Mapping pipeline deployed on the Unitree Go2 quadruped robot for autonomous indoor navigation.",
    fullDescription: `Implemented a full SLAM pipeline on the Unitree Go2 quadruped using LiDAR and IMU fusion for robust indoor mapping and navigation.

## Pipeline
- LiDAR-inertial odometry using FAST-LIO2
- Real-time 3D map building
- Autonomous waypoint navigation via Nav2
- Terrain-adaptive gait switching

## Outcome
Successfully navigated a 500m² lab environment with under 3cm localization error at runtime.`,
    category: ["Vision", "Control"],
    tech: ["ROS 2", "Python", "C++", "FAST-LIO2", "Nav2", "LiDAR"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800",
        caption: "Go2 quadruped navigating lab"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
        caption: "3D map output from SLAM pipeline"
      }
    ],
    metrics: {
      performance: "<3cm localization error",
      accuracy: "500m² coverage",
      custom: [
        { label: "Map Update Rate", value: "10 Hz" },
        { label: "Sensor Fusion", value: "LiDAR + IMU" }
      ]
    },
    featured: false,
    links: [
      { type: "github", url: "https://github.com/username/slam-go2", label: "Code" }
    ],
    details: {
      duration: "3 months",
      team: "Solo project",
      status: "Completed",
      tags: ["SLAM", "Quadruped", "LiDAR", "Navigation"]
    }
  },
  {
    id: 5,
    slug: "vlm-task-planning",
    title: "VLM-Based Task Planning for Manipulation",
    shortDesc: "Using Vision-Language Models to interpret natural language commands and plan robotic manipulation sequences on the SO-101 arm.",
    fullDescription: `Integrated a Vision-Language Model (VLM) frontend with the SO-101 robotic arm to enable natural language task specification and autonomous execution.

## Approach
- GPT-4V for scene understanding and task decomposition
- Geometric task planner for motion primitive sequencing
- Real-time visual feedback loop for error correction

## Results
Achieved 87% success rate on novel pick-and-place instructions from zero-shot natural language prompts.`,
    category: ["AI/ML", "Vision"],
    tech: ["Python", "GPT-4V", "ROS 2", "OpenCV", "MoveIt"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800",
        caption: "SO-101 arm executing VLM-planned task"
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=example3",
        caption: "Live demo of natural language commands"
      }
    ],
    metrics: {
      performance: "87% zero-shot success",
      accuracy: "Novel instruction generalization",
      custom: [
        { label: "Planning Latency", value: "~1.2s" },
        { label: "LLM Backend", value: "GPT-4V" }
      ]
    },
    featured: false,
    links: [
      { type: "github", url: "https://github.com/username/vlm-manipulation", label: "Code" },
      { type: "paper", url: "https://arxiv.org/example", label: "Paper" }
    ],
    details: {
      duration: "5 months",
      team: "2 researchers",
      status: "Ongoing",
      tags: ["VLM", "Task Planning", "Manipulation", "LLM"]
    }
  },
  {
    id: 6,
    slug: "stm32-motor-controller",
    title: "STM32 FOC Motor Controller",
    shortDesc: "Custom Field-Oriented Control motor driver on STM32 for high-torque brushless DC motors used in robotic joint actuation.",
    fullDescription: `Designed and implemented a Field-Oriented Control (FOC) motor driver from scratch on STM32F4 for BLDC motors used in robotic joints.

## Implementation
- 3-phase PWM generation at 20kHz
- Clarke and Park transforms in real-time
- PI current controllers tuned via Ziegler-Nichols
- CAN bus communication for multi-axis coordination

## Results
Achieved smooth torque control with <2% ripple at full load, suitable for compliant robotic joint control.`,
    category: ["Embedded", "Control"],
    tech: ["C", "STM32", "CAN Bus", "FOC", "MATLAB"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        caption: "Custom PCB for FOC controller"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
        caption: "Torque response waveforms"
      }
    ],
    metrics: {
      performance: "<2% torque ripple",
      accuracy: "20kHz switching freq",
      custom: [
        { label: "Control Loop", value: "10kHz" },
        { label: "Interface", value: "CAN Bus" }
      ]
    },
    featured: false,
    links: [
      { type: "github", url: "https://github.com/username/stm32-foc", label: "Firmware" }
    ],
    details: {
      duration: "2 months",
      team: "Solo project",
      status: "Completed",
      tags: ["FOC", "STM32", "Embedded", "Motor Control"]
    }
  },
  {
    id: 7,
    slug: "swarm-formation-control",
    title: "Swarm Formation Control with TurtleBot3",
    shortDesc: "Distributed swarm algorithm enabling a fleet of TurtleBot3 robots to maintain dynamic formations and respond to leader commands.",
    fullDescription: `Developed a decentralized swarm control system for a fleet of TurtleBot3 robots, enabling real-time formation switching and leader-follower coordination.

## Algorithm
- Consensus-based formation control
- Distributed leader election
- Formation switching via finite state machine
- Obstacle avoidance integrated via potential fields

## Outcome
Demonstrated 5-robot fleet maintaining formation at 0.5m/s with formation error under 5cm.`,
    category: ["Multi-Robot", "Control"],
    tech: ["Python", "ROS 2", "TurtleBot3", "Gazebo", "NumPy"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1563968743333-044cef800494?w=800",
        caption: "TurtleBot3 swarm in V-formation"
      },
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=example4",
        caption: "Formation switching demo"
      }
    ],
    metrics: {
      performance: "<5cm formation error",
      accuracy: "5-robot fleet at 0.5m/s",
      custom: [
        { label: "Robots", value: "5 TurtleBot3" },
        { label: "Formations", value: "4 patterns" }
      ]
    },
    featured: false,
    links: [
      { type: "github", url: "https://github.com/username/swarm-turtlebot", label: "Code" }
    ],
    details: {
      duration: "3 months",
      team: "2 researchers",
      status: "Completed",
      tags: ["Swarm", "Formation Control", "TurtleBot3", "Distributed"]
    }
  }
];

export const allProjects = [
  ...featuredProjects,
  ...unstarredProjects
  // Add more projects with same enhanced structure...
];

export const skills = {
  "ROBOTICS": [
    { name: "ROS 2", percent: 85 },
    { name: "MoveIt", percent: 70 },
    { name: "Nav2", percent: 70 },
    { name: "ros2_control", percent: 50 },
    { name: "URDF/XACRO", percent: 70 },
    { name: "RViz 2", percent: 60 },
  ],
  "PROGRAMMING": [
    { name: "Python", percent: 85 },
    { name: "C++", percent: 60 },
    { name: "C", percent: 60 },
  ],
  "TOOLS": [
    { name: "Git", percent: 80 },
    { name: "Docker", percent: 65 },
    { name: "Linux", percent: 85 },
    { name: "SSH", percent: 70 },
    { name: "VS Code", percent: 90 },
  ],
  "BOARDS": [
    { name: "ESP32", percent: 70 },
    { name: "ESP8266", percent: 70 },
    { name: "Arduino Uno", percent: 70 },
    { name: "Raspberry Pi", percent: 70 },
    { name: "NVIDIA Jetson", percent: 65 },
  ],
  "PLATFORMS": [
    { name: "TurtleBot3", percent: 90 },
    { name: "Unitree Go2", percent: 60 },
    { name: "Lerobot", percent: 70 },
  ],
  "SIMULATION": [
    { name: "Gazebo Classic", percent: 90 },
    { name: "Ignition Fortress", percent: 85 },
  ],
  "HARDWARE": [
    { name: "3D Printing", percent: 80 },
    { name: "Soldering", percent: 80 },
  ],
  "CONTROL": [
    { name: "PID", percent: 70 },
  ],
};
export const publications = [
  {
    id: 1,
    title: "CoMuRoS: LLM-Based Generalizable Hierarchical Task Planning and Execution for Heterogeneous Robot Teams with Event-Driven Replanning.",
    authors: "Suraj Borate, Bhavish Rai B, Vipul Pardeshi, Madhu Vadali",
    venue: "ArXiv, 2025",
    year: 2025,
    link: "https://arxiv.org/abs/2511.22354"
  },
  {
    id: 2,
    title: "CoMuRoS: A LLM-Driven Hierarchical Architecture for Adaptive Multi-Robot Collaboration",
    authors: "Suraj Borate, Bhavish Rai B, Vipul Pardeshi, Madhu Vadali",
    venue: "IROS 2025 LEAPRIDE Poster",
    year: 2025,
    link: "https://openreview.net/forum?id=a0GqX5jGDb"
  },
];

export const talks = [
  {
    id: 1,
    title: "CoMuRoS: A ROS2 Based Package for LLM Driven Adaptive Collaborative Multi-Robot Systems",
    event: "ROSCon India2025",
    date: "December 2025",
    // link: "https://your-talk-link.com"
  },
  // {
  //   id: 2,
  //   title: "Quadruped Robot Demo",
  //   event: "National Robotics Week",
  //   date: "April 2023"
  // }
];