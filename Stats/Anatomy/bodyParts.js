export const ARMOR_SLOTS = {
	Head: 'Head',
	Torso: 'Torso',
	Arms: 'Arms',
	Hands: 'Hands',
	Legs: 'Legs',
	Feet: 'Feet',
};

export const CRANIUM = 'Cranium',
	FACE = 'Face',
	NECK = 'Neck',
	LEFT_SHOULDER = 'Left Shoulder',
	LEFT_ARM = 'Left Arm',
	LEFT_HAND = 'Left Hand',
	CHEST = 'Chest',
	ABDOMEN = 'Abdomen',
	RIGHT_SHOULDER = 'Right Shoulder',
	RIGHT_ARM = 'Right Arm',
	RIGHT_HAND = 'Right Hand',
	LEFT_HIP = 'Left Hip',
	LEFT_LEG = 'Left Leg',
	LEFT_FOOT = 'Left Foot',
	RIGHT_HIP = 'Right Hip',
	RIGHT_LEG = 'Right Leg',
	RIGHT_FOOT = 'Right Foot';

export const BODY_PARTS = [
	{
		name: CRANIUM,
		isVital: true,
		chanceToHit: 2,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Head,
		row: 1,
		col: 1,
	},
	{
		name: FACE,
		isVital: true,
		chanceToHit: 1,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Head,
		row: 1,
		col: 1,
	},
	{
		name: NECK,
		isVital: true,
		chanceToHit: 1,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Head,
		row: 1,
		col: 1,
	},
	{
		name: LEFT_SHOULDER,
		isVital: false,
		chanceToHit: 8,
		dependents: [LEFT_ARM],
		armorSlot: ARMOR_SLOTS.Arms,
		row: 2,
		col: 1,
	},
	{
		name: LEFT_ARM,
		isVital: false,
		chanceToHit: 8,
		dependents: [LEFT_HAND],
		armorSlot: ARMOR_SLOTS.Arms,
		row: 2,
		col: 1,
	},
	{
		name: LEFT_HAND,
		isVital: false,
		chanceToHit: 5,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Arms,
		row: 2,
		col: 1,
	},
	{
		name: CHEST,
		isVital: true,
		chanceToHit: 4,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Torso,
		row: 2,
		col: 2,
	},
	{
		name: ABDOMEN,
		isVital: false,
		chanceToHit: 8,
		dependents: [LEFT_HIP, RIGHT_HIP],
		armorSlot: ARMOR_SLOTS.Torso,
		row: 2,
		col: 2,
	},
	{
		name: RIGHT_SHOULDER,
		isVital: false,
		chanceToHit: 8,
		dependents: [RIGHT_ARM],
		armorSlot: ARMOR_SLOTS.Arms,
		row: 2,
		col: 3,
	},
	{
		name: RIGHT_ARM,
		isVital: false,
		chanceToHit: 8,
		dependents: [RIGHT_HAND],
		armorSlot: ARMOR_SLOTS.Arms,
		row: 2,
		col: 3,
	},
	{
		name: RIGHT_HAND,
		isVital: false,
		chanceToHit: 5,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Arms,
		row: 2,
		col: 3,
	},
	{
		name: LEFT_HIP,
		isVital: false,
		chanceToHit: 8,
		dependents: [LEFT_LEG],
		armorSlot: ARMOR_SLOTS.Legs,
		row: 3,
		col: 1,
	},
	{
		name: LEFT_LEG,
		isVital: false,
		chanceToHit: 8,
		dependents: [LEFT_FOOT],
		armorSlot: ARMOR_SLOTS.Legs,
		row: 3,
		col: 1,
	},
	{
		name: LEFT_FOOT,
		isVital: false,
		chanceToHit: 5,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Feet,
		row: 3,
		col: 1,
	},
	{
		name: RIGHT_HIP,
		isVital: false,
		chanceToHit: 8,
		dependents: [RIGHT_LEG],
		armorSlot: ARMOR_SLOTS.Legs,
		row: 3,
		col: 2,
	},
	{
		name: RIGHT_LEG,
		isVital: false,
		chanceToHit: 8,
		dependents: [RIGHT_FOOT],
		armorSlot: ARMOR_SLOTS.Legs,
		row: 3,
		col: 2,
	},
	{
		name: RIGHT_FOOT,
		isVital: false,
		chanceToHit: 5,
		dependents: [],
		armorSlot: ARMOR_SLOTS.Feet,
		row: 3,
		col: 2,
	},
];
