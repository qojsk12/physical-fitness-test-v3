import { useState } from "react";
import { PrescriptionImage } from "../types";

interface Page {
  id: string;
  images: PrescriptionImage[];
}

export const usePrescriptionPages = () => {
  const [pages, setPages] = useState<Page[]>([{ id: "page-1", images: [] }]);

  const addPage = () =>
    setPages((p) => [...p, { id: `page-${Date.now()}`, images: [] }]);

  const updatePage = (pageId: string, images: PrescriptionImage[]) => {
    setPages((p) => p.map((pg) => (pg.id === pageId ? { ...pg, images } : pg)));
  };

  return { pages, addPage, updatePage };
};
