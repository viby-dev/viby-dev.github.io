export const personalInfo = {
  name: "Bhavish Rai B",
  tagline: "Bridging the gap between AI research and real-world robotics. Developing autonomous systems that perceive, reason, and act intelligently.",
  email: "alex@robotics.edu",
  location: "IIT Gandhinagar, India",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  scholar: "https://scholar.google.com/",
  resume: "/resume.pdf",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
};

export const about = {
  bio: `I'm a robotics researcher focused on building intelligent autonomous systems that bridge the gap between AI research and real-world deployment. My work spans multi-robot coordination, vision-language models, and control systems for complex robotic platforms.\n\nCurrently working with cutting-edge platforms including TurtleBot3, Unitree Go2 quadrupeds, and SO-101 robotic arms. My research has been presented at IROS and deployed in production environments at IITGN.\n\nI specialize in developing practical solutions for autonomous navigation, sensor fusion, and multi-agent systems using Python, C++, and ROS 2.`,
  education: [
    {
      degree: "M.Tech in Robotics",
      institution: "Indian Institute of Technology Gandhinagar",
      year: "2022-2024"
    },
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "Technical University",
      year: "2018-2022"
    }
  ],
  experience: [
    {
      role: "Research Assistant",
      organization: "IIT Gandhinagar Robotics Lab",
      period: "2023-Present"
    },
    {
      role: "Robotics Intern",
      organization: "Autonomous Systems Lab",
      period: "Summer 2022"
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

export const allProjects = [
  ...featuredProjects,
  // Add more projects with same enhanced structure...
];

export const skills = {
  "PROGRAMMING": ["Python", "C++", "C", "MATLAB", "JavaScript", "Rust"],
  "ROBOTICS": ["ROS 2", "Gazebo", "MoveIt", "Nav2", "Isaac Sim", "Webots"],
  "AI/ML": ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "Keras", "ONNX"],
  "PLATFORMS": ["TurtleBot3", "Unitree Go2", "SO-101", "STM32", "Raspberry Pi", "NVIDIA Jetson"],
  "SIMULATION": ["Isaac Sim", "Gazebo", "CoppeliaSim", "PyBullet", "MuJoCo"],
  "CONTROL": ["MPC", "PID", "LQR", "FOC", "State Estimation", "Kalman Filter"],
  "VISION": ["SLAM", "Object Detection", "Semantic Segmentation", "Point Cloud", "Depth Estimation"],
  "TOOLS": ["Git", "Docker", "Linux", "CMake", "CI/CD", "Jupyter"]
};

export const publications = [
  {
    id: 1,
    title: "CoMuRoS: Collaborative Multi-Robot System with Large Language Models",
    authors: "B. Rai et al.",
    venue: "IROS",
    year: 2023,
    link: "https://scholar.google.com"
  },
  {
    id: 2,
    title: "Vision-Language Models for Robotic Manipulation Tasks",
    authors: "B. Rai, A. Colleague",
    venue: "International Journal of Robotics Research",
    year: 2023,
    link: "https://scholar.google.com"
  }
];

export const talks = [
  {
    id: 1,
    title: "Multi-Robot Coordination with LLMs",
    event: "IITGN Robotics Symposium 2023",
    date: "December 2023"
  },
  {
    id: 2,
    title: "Quadruped Robot Demo",
    event: "National Robotics Week",
    date: "April 2023"
  }
];