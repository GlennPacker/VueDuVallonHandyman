export type ReviewFormModel = {
  message: string;
  name: string;
  rating: number | null;
  title: string;
  gardening: boolean;
  strimming: boolean;
  repointing: boolean;
  powerWashing: boolean;
  generalMaintenance: boolean;
  other: boolean;
  pleaseSpecify: string | null;
}
