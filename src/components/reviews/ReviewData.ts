import { ReviewFormModel } from "@/types/reviewFormModel";

export type ReviewType = {
  name: string,
  rating: number,
  message?: string,
  title: string,
  workDone?: string[] | null;
}

const reviews: ReviewFormModel[] = [{
  gardening: true,
  generalMaintenance: false,
  message: `Can't thank you enough.`,
  name: 'Danny',
  other: false,
  pleaseSpecify: '',
  powerWashing: false,
  rating: 5,
  repointing: false,
  strimming: true,
  title: 'Looks great!'
}];

export { reviews };
