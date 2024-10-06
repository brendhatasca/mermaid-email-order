const FRESH_FISH = [
    { name: 'atlantic salmon' },
    { name: 'organic salmon' },
    { name: 'arctic char' },
    { name: 'rainbow trout' },
    { name: 'halibut' },
    { name: 'cod loins' },
    { name: 'chilean seabass' },
];

const OYSTERS = [
    { name: 'lucky limes oysters' },
    { name: 'chebooktook oysters' },
    { name: 'pristine bay oysters' },
    { name: 'raspberry point oysters' },
    { name: 'sweet island kiss oysters' },
];

const FROZEN_FISH = [
    { name: 'frozen haddock fillets (6-8oz pcs)'},
    { name: 'frozen cod loins (4oz pcs)'},
    { name: 'frozen tuna loins'}
];

const SHELLFISH = [
    { name: 'mussels' },
    { name: 'little neck clams' },
];

const LOBSTER = [
    {name: 'live lobsters (1.5lbs)'},
    {name: 'lobster meat grade A claw and knuckle'},
    {name: 'lobster meat grade B body and leg'},
]

export const SEAFOOD_LIST = FRESH_FISH.concat(OYSTERS, FROZEN_FISH, SHELLFISH, LOBSTER)