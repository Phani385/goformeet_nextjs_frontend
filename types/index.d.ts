import { ObjectId } from 'mongodb';

declare interface MoreAboutMe {
  height?: number;
  communicationStyle?: string;
  dietaryPreferences?: "Vegan" | "Vegetarian" | "Non-Vegetarian" | "None";
  drinkingHabits?: "Frequently" | "Socially" | "Rarely" | "Never" | "Sober" | "None";
  smokingHabits?: "Frequently" | "Socially" | "Rarely" | "Never" | "Sober" | "None";
  personalityType?: "Introvert" | "Extrovert" | "Ambivert" | "None";
  lookingFor?: "Casual Meeting" | "Professional Meeting" | "None";
  educationLevel?: "High School" | "Vocational School" | "In College" | "Undergraduate Degree" | "In Grad School" | "Graduate Degree" | "None";
}

declare interface PersonalDetails {
  name?: string;
  profession?: string;
  profilePercentage?: number;
  mobileNumber: string;
  email?: string;
  userName?: string;
  profileImages?: string[];
  languages?: string[];
  gender?: "Male" | "Female" | "Other";
  interests?: string[];
  state?: string;
  aboutMe?: string;
  dateOfBirth?: string;
  isVerified?: boolean;
  city?: string;
  meetingFee?: number;
  moreAboutMe?: MoreAboutMe;
}

declare interface Bools {
  isBlocked?: boolean;
  isVisible?: boolean;
}

declare interface LoginLocation {
  type: "Point";
  coordinates: [number, number];
}

declare interface Notification {
  [key: string]: string[];
}

declare interface WishList {
  [key: string]: string[];
}

declare interface Transaction {
  transactionId: string;
  amount: number;
  date: Date;
}

declare interface Timing {
  day: string;
  startTime: string;
  endTime: string;
}

declare interface SelectedTime {
  date: Date;
  time: string;
}

declare interface HostDetails {
  myWallet: {
    balance: number;
    credit: Transaction[];
    debit: Transaction[];
    transactions: Transaction[];
  };
  myTimings: Timing[];
  mySchedule: { meetingId: string; meetingTime: SelectedTime }[];
}

declare interface IProfile {
  personalDetails: PersonalDetails;
  isHostActivated?: boolean;
  bools?: Bools;
  loginLocation?: LoginLocation;
  userId: string;
  notifications?: Notification[];
  wishList?: WishList[];
  referrerUid?: ObjectId | null;
  sortId?: number;
  hostDetails?: HostDetails;
}

