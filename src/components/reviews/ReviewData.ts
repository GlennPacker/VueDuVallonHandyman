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
    name: 'Simon T',
    other: false,
    pleaseSpecify: '',
    powerWashing: false,
    rating: 5,
    repointing: false,
    strimming: true,
    title: 'Looks great!',
    wouldYouUseThemAgain: null,
    valueForMoney: null,
  }, 
  {
    gardening:true,
    generalMaintenance:false,
    message:'Glen has been here 2 days so far and has made such a difference, strumming and cutting all the ivy and brambles back',
    name:'Sandra Curtis',
    other: false,
    pleaseSpecify:"",
    powerWashing:false,
    rating:5,
    repointing:false,
    strimming:true,
    title:"Amazing",
    wouldYouUseThemAgain: "Yes",
    valueForMoney: null,
  },
  {
    gardening:true,
    generalMaintenance:false,
    message:"Very hard working and tidy, my garden has been transformed.  Highly recommended.",
    name:"Rachel",
    other:false,
    pleaseSpecify:"",
    powerWashing:true,
    rating:5,
    repointing:true,
    strimming:true,
    title:"Fantastic Service",
    wouldYouUseThemAgain: "Yes",
    valueForMoney: null,
  }

];

export { reviews };
