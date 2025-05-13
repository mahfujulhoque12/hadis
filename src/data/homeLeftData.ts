import dua1 from '/public/home/icon1.png';
import dua2 from '/public/home/icon2.png';
import dua3 from '/public/home/icon3.png';

import dua5 from '/public/home/icon5.png';
import dua6 from '/public/home/icon6.png';

const duaList = [
  {
    id: 1,
    icon: dua1,
    title: "Dua's Importance",
    meta: "7 Subcat | 50 Duas",
    alwaysOpen: true,
    content: {
      lines: [
        "The servant is dependent on his Lord",
        "The most important thing to ask Allah for",
        "4. Allah's guidance #1",
        "5. Allah's guidance #2",
        "6. Allah's guidance #3",
        "7. Allah's guidance #4",
        "8. The servant is dependent on his Lord #1",
      ],
    },
    moto: "Ask for paradise & protection from fire",
  },
  {
    id: 2,
    icon: dua2,
    title: "Dua's for Protection",
    meta: "9 Subcat | 35 Duas",
    alwaysOpen: false,
    content: {
      lines: [
        "The servant is dependent on his Lord",
        "The most important thing to ask Allah for",
        "4. Allah's guidance #1",
        "5. Allah's guidance #2",
        "6. Allah's guidance #3",
      ],
    },
    moto: "Protection is essential in daily life",
  },
  {
    id: 3,
    icon: dua3,
    title: "Dua's for Forgiveness",
    meta: "6 Subcat | 20 Duas",
    alwaysOpen: false,
    content: {
      lines: [
        "Forgiveness is the key to mercy",
        "Sincerely repent to Allah",
        "1. Forgive me, O Allah",
        "2. Pardon me completely",
      ],
    },
    moto: "Allah is Most Forgiving, Most Merciful",
  },

  {
    id: 5,
    icon: dua5,
    title: "Dua's for Family",
    meta: "4 Subcat | 18 Duas",
    alwaysOpen: false,
    content: {
      lines: [
        "Family is a blessing",
        "Pray for their well-being",
        "1. Protect my parents",
        "2. Guide my children",
      ],
    },
    moto: "Strong family ties are part of faith",
  },
  {
    id: 6,
    icon: dua6,
    title: "Dua's for Rizq",
    meta: "5 Subcat | 22 Duas",
    alwaysOpen: false,
    content: {
      lines: [
        "Rizq is from Allah alone",
        "Seek barakah and halal earnings",
        "1. Increase my sustenance",
        "2. Open doors of provision",
      ],
    },
    moto: "Trust Allah for your sustenance",
  },
];

export default duaList;
