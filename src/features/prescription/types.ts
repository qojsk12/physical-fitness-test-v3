// src/features/prescription/types.ts

export interface PrescriptionImage {
  id: string;
  url: string;
}

export interface PrescriptionPage {
  id: string;
  images: PrescriptionImage[];
}
