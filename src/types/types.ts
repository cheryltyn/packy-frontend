
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
    data: PackageData;
    onDelete: (packageId: string) => void; 
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  name: string;
  email: string;
  password: string;
}