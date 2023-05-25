import { Container, Typography } from "@mui/material";
import React from "react";

export default function AboutPage() {
  return (
    <Container sx={{ p: 3 }}>
      <Typography variant="h5" align="center" sx={{ mb: 5 }}>
        Національний технічний університет України «КПІ ім. Ігоря Сікорського»
        Факультет Інформатики та Обчислювальної Техніки Кафедра інформаційних
        систем та технологій
      </Typography>

      <Typography variant="h5" align="center" sx={{ mb: 5 }}>
        Завдання до виконання курсової роботи з дисципліни «Бази даних» на тему
        «Створення застосунку»
      </Typography>

      <Typography variant="h5" align="right" sx={{ mb: 5 }}>
        Виконав: студент гр. ІС-13 Щеглов В. Д. Перевірив викладач: Попенко В.
        Д.
      </Typography>
    </Container>
  );
}
