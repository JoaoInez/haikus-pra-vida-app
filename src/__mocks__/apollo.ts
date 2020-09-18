import { HAIKU_QUERY } from "../components/Home";

const defaultMocks = [
  {
    request: {
      query: HAIKU_QUERY,
    },
    result: {
      data: {
        haiku: {
          topVerse: "Testa-me a sanidade",
          middleVerse: "Este lixo falha sempre",
          bottomVerse: "Quero desistir",
        },
      },
    },
  },
];

export { defaultMocks };
