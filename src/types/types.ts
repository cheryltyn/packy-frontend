
export enum PackageType {
    Fitness = 'Fitness',
    Wellness = 'Wellness',
    Sports = 'Sports',
    // Add more types as needed
  }

export interface PackageData {
    _id: string;
    packageName: string;
    expiryDate: string;
    numberOfSessionsLeft: number;
    numberOfSessionsTotal: number;
    packageType: PackageType;
  }

export interface PackageComponentProps {
    key: React.Key;
    data: PackageData;
} 