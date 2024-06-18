// Data array with added 'Finanzausgaben' field
const transactions = [
  {
    Datum: "07.10.2022",
    Betrag: 200.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 91.34chf",
  },
  {
    Datum: "13.10.2022",
    Betrag: 250.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 345.42chf",
  },
  {
    Datum: "17.10.2022",
    Betrag: 120.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 101.45chf",
  },
  {
    Datum: "21.12.2022",
    Betrag: 210.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 108.59 and 88.29chf",
  },
  {
    Datum: "16.01.2023",
    Betrag: 65.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 61.84chf",
  },
  {
    Datum: "08.02.2023",
    Betrag: 220.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben:
      "50chf donation to Earthquake in Turkey and Pegasus Airlines 165.36chf",
  },
  {
    Datum: "07.03.2023",
    Betrag: 80.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 70.56chf",
  },
  {
    Datum: "06.04.2023",
    Betrag: 200.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 144.08chf",
  },
  {
    Datum: "17.04.2023",
    Betrag: 100.0,
    Stellungnahme: "Tayyab Twint",
    Finanzausgaben:
      "I borrowed money from my friend to buy a ticket in Turkey: Pegasus Airlines 118.76chf",
  },
  {
    Datum: "15.04.2023",
    Betrag: 25.18,
    Stellungnahme: "Credit Postfinance Card",
    Finanzausgaben: "I sold the ticket",
  },
  {
    Datum: "08.05.2023",
    Betrag: 250.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "I bought a perfume and some groceries",
  },
  {
    Datum: "22.05.2023",
    Betrag: 150.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 149.39chf",
  },
  {
    Datum: "01.06.2023",
    Betrag: 85.0,
    Stellungnahme: "Credit Postfinance Card",
    Finanzausgaben: "",
  },
  {
    Datum: "01.06.2023",
    Betrag: 100.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 76.11 and 76.11chf",
  },
  {
    Datum: "03.06.2023",
    Betrag: 160.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 156.42chf",
  },
  {
    Datum: "08.06.2023",
    Betrag: 220.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 142.10chf",
  },
  {
    Datum: "20.06.2023",
    Betrag: 70.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 60.89chf",
  },
  {
    Datum: "07.07.2023",
    Betrag: 17.35,
    Stellungnahme: "Credit Postfinance Card",
    Finanzausgaben: "Sold a ticket in Pegasus Airlines",
  },
  {
    Datum: "11.08.2023",
    Betrag: 500.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben:
      "200chf sent to my family through a western union and 298.75chf Swiss Airlines",
  },
  {
    Datum: "14.08.2023",
    Betrag: 200.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Bought a Front-End kurs",
  },
  {
    Datum: "22.08.2023",
    Betrag: 100.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 40.59 and 65.98chf",
  },
  {
    Datum: "02.09.2023",
    Betrag: 150.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "04.09 withdrawal cash 150",
  },
  {
    Datum: "12.09.2023",
    Betrag: 500.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "400chf bought Front-End Pro kurs",
  },
  {
    Datum: "19.09.2023",
    Betrag: 32.0,
    Stellungnahme: "Credit Postfinance Card",
    Finanzausgaben: "Sold ticket in Pegasus Airlines",
  },
  {
    Datum: "29.09.2023",
    Betrag: 200.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "50chf Zara and Pegasus Airlines 111.67chf",
  },
  {
    Datum: "03.10.2023",
    Betrag: 320.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 228.34chf",
  },
  {
    Datum: "04.10.2023",
    Betrag: 100.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Groceries shop",
  },
  {
    Datum: "09.10.2023",
    Betrag: 220.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 216.18chf",
  },
  {
    Datum: "19.10.2023",
    Betrag: 300.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "-",
  },
  {
    Datum: "01.11.2023",
    Betrag: 80.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 64.86chf",
  },
  {
    Datum: "14.11.2023",
    Betrag: 300.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "260chf for Fathers Birthday",
  },
  {
    Datum: "06.12.2023",
    Betrag: 240.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 116 and 116chf",
  },
  {
    Datum: "07.12.2023",
    Betrag: 91.7,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 120.27",
  },
  {
    Datum: "07.12.2023",
    Betrag: 30.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 120.27",
  },
  {
    Datum: "13.12.2023",
    Betrag: 130.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Pegasus Airlines 112.68",
  },
  {
    Datum: "16.12.2023",
    Betrag: 300.0,
    Stellungnahme: "Tayyab Twint",
    Finanzausgaben:
      "Borrowed money from my friend and bought a ticket 257chf Pegasus Airlines",
  },
  {
    Datum: "19.12.2023",
    Betrag: 100.0,
    Stellungnahme: "Tayyab Twint",
    Finanzausgaben: "Borrowed money from my friend",
  },
  {
    Datum: "19.12.2023",
    Betrag: 79.2,
    Stellungnahme: "Credit Postfinance Card",
    Finanzausgaben: "Sold a ticket in Pegasus Airlines 79.20chf",
  },
  {
    Datum: "29.12.2023",
    Betrag: 500.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben:
      "My friend gave me 500chf to sent through wester union on his card",
  },
  {
    Datum: "09.01.2024",
    Betrag: 40.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Bought a book in Amazon 13chf",
  },
  {
    Datum: "01.02.2024",
    Betrag: 200.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Bought a JavaScript kurs",
  },
  {
    Datum: "03.02.2024",
    Betrag: 180.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Bought a monitor in Amazon",
  },
  {
    Datum: "28.02.2023",
    Betrag: 200.0,
    Stellungnahme: "Einzahlung",
    Finanzausgaben: "Bought a React kurs",
  },
];

function createTableRows(data) {
  const tbody = document.querySelector("#tableId tbody");

  data.forEach((item) => {
    const row = document.createElement("tr");

    Object.values(item).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

// Create table rows on document load
document.addEventListener("DOMContentLoaded", () => {
  createTableRows(transactions);
});
