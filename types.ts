// Shared types between server and client

export interface PersonalityVector {
  aggression: number;   // 0-255
  curiosity: number;    // 0-255
  sociability: number;  // 0-255
  loyalty: number;      // 0-255
  intelligence: number; // 0-255
}

export interface CreatureState {
  id: string;
  ownerId: string;
  name: string;

  // Position & Movement
  x: number;
  y: number;
  angle: number;       // radians
  speed: number;       // 0-1 normalized
  walkPhase: number;   // 0-1 walk cycle

  // State
  mood: number;        // 0=neutral,1=happy,2=sad,3=angry,4=scared,5=curious,6=sleepy
  currentAction: number; // 0=idle,1=walking,2=talking,3=fighting,4=sleeping

  // Appearance
  shapeId: string;     // which base shape to use
  bodyScale: number;   // 0.5-3.0
}

export const CREATURE_DEFAULTS = {
  speed: 0,
  walkPhase: 0,
  mood: 0,
  currentAction: 0,
  shapeId: 'shadow-blob',
  bodyScale: 1.0,
};

// Action types
export const Action = {
  IDLE: 0,
  WALKING: 1,
  TALKING: 2,
  FIGHTING: 3,
  SLEEPING: 4,
} as const;

// Mood types
export const Mood = {
  NEUTRAL: 0,
  HAPPY: 1,
  SAD: 2,
  ANGRY: 3,
  SCARED: 4,
  CURIOUS: 5,
  SLEEPY: 6,
} as const;

// World constants
export const WORLD = {
  WIDTH: 3000,
  HEIGHT: 2000,
  MAX_CREATURES_PER_USER: 5,
  CREATURE_SPEED: 60,        // world units per second
  INTERACTION_RANGE: 80,     // world units
  STOP_DISTANCE: 40,
};
