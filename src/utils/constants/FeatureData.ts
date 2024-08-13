export interface Feature {
  name: string;
  id: number;
}

export interface Features {
  features: Feature[];
}

export const featureList: Features = {
  features: [
    {name: 'StopWatch Sample', id: 1},
    {name: 'AddSkill Sample', id: 2},
    {name: 'MultipleAPISample', id: 3},
    {name: 'Show Custom hooks', id: 4},
    {name: 'Map', id: 5},
    {name: 'New StopWatch', id: 6},
  ],
};
