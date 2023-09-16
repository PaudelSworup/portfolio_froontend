export interface similarProps {
  darkmode: boolean;
  toggleMode?: () => void;
}

export interface ApiResponse {
  success: boolean;
  portfolio: [];
}

export interface portfolioData {
  mydata: {
    _id: string;
    project_title: string;
    description: string;
    image_url: string;
    video_url: string;
    bg_image_url: string;
  };
}

export interface portfolio {
  _id: string;
  project_title: string;
  description: string;
  image_url: string;
  video_url: string;
  bg_image_url: string;
  live_url: string;
}

export interface videoDetails {
  _id: string;
  video_url: string;
}
