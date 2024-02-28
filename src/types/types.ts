
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
  email: string;
  password: string;
}

export interface userData {
  name: string;
  email: string;
  password: string;
}

export interface createdData {
  packageName: string;
  expiryDate: string;
  numberOfSessionsLeft: string;
  numberOfSessionsTotal: string;
  packageType: string;
};


export interface getUserData {
  _id: string;
  name: string;
  email: string;
  password: string;
  packages: any[]; 
}