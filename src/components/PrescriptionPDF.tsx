// src/PrescriptionPDF.tsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  pdf,
} from "@react-pdf/renderer";

// === 한글 폰트 등록 (Noto Sans KR) ===
Font.register({
  family: "Noto Sans KR",
  src: "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2107@1.1/Pretendard-Regular.woff",
  // 또는 로컬 폰트 사용 시:
  //   src: "/fonts/Pretendard-Regular.woff",
});

Font.register({
  family: "Noto Sans KR Bold",
  src: "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2107@1.1/Pretendard-Bold.woff",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Noto Sans KR",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
    fontFamily: "Noto Sans KR Bold",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  imageBox: {
    width: "48%",
    height: 220,
    border: "2px solid #797979",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  placeholder: {
    width: "48%",
    height: 220,
    border: "2px dashed #ccc",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: 16,
    marginBottom: 16,
  },
  explain: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    padding: 16,
    border: "2px solid #797979",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
});

interface PageData {
  id: string;
  images: string[];
}

export default function PrescriptionPDF({ pages }: { pages: PageData[] }) {
  return (
    <Document>
      {pages.map((page, idx) => {
        const imageCount = page.images.length;
        const displayCount = Math.max(4, imageCount); // 최소 4칸

        return (
          <Page key={page.id} size="A4" style={styles.page}>
            <Text style={styles.title}>운동 처방전 {idx + 1}페이지</Text>

            <View style={styles.grid}>
              {Array.from({ length: displayCount }).map((_, i) => {
                const hasImage = i < imageCount;

                return hasImage ? (
                  <View key={i} style={styles.imageBox}>
                    <Image src={page.images[i]} style={styles.image} />
                  </View>
                ) : i < 4 ? (
                  <View key={i} style={styles.placeholder}>
                    <Text>+ 이미지 추가</Text>
                  </View>
                ) : null;
              })}
            </View>

            <Text style={styles.explain}>
              {imageCount > 0
                ? `${imageCount}개 운동 • 드래그로 순서 변경 • X로 삭제`
                : "빈 슬롯을 클릭해 운동 이미지를 추가하세요"}
            </Text>
          </Page>
        );
      })}
    </Document>
  );
}
