import BigData from "./bigdata.json";

export const dataEightHours = [
  {
    name: "TargetAndTargetTransformation",
    data: [
      {
        x: "Load(t-168)",
        y: 24.03,
      },
      {
        x: "Load(t-72)",
        y: 4.34,
      },
    ],
  },
  {
    name: "Interaction",
    data: [
      {
        x: "Load(t-168) & PublicHolidays(t-5)",
        y: 14.3,
      },
      {
        x: "EMA_Load(t-48) & Load(t-25)",
        y: 5.53,
      },
      {
        x: "PublicHolidays & DoW(t-6) ≤ Fri",
        y: 5.47,
      },
      {
        x: "DoW(t-18) ≤ Sat & Load(t-30)",
        y: 4.38,
      },

      {
        x: "DoW(t-5) ≤ Fri & Load(t-25)",
        y: 3.84,
      },
      {
        x: "(-Temperature(t) + 10.80)⁺ & sin(2πt / 12.0 hours)",
        y: 3.7,
      },
      {
        x: "PublicHolidays(t-29) & sin(2πt / 168.0 hours)",
        y: 3.55,
      },
      {
        x: "DoW(t) ≤ Sat & DoW(t-6) ≤ Sat",
        y: 3.45,
      },
      {
        x: "Load(t-57) & Irradiation(t-119)",
        y: 3.42,
      },
      {
        x: "Load(t-72) & DoW(t) ≤ Fri",
        y: 3.24,
      },
      {
        x: "Load(t-144) & DoW(t-5) ≤ Sat",
        y: 3.18,
      },
      {
        x: "Load(t-161) & Load(t-81)",
        y: 2.97,
      },
      {
        x: "(-Temperature(t) + 10.80)⁺ & Load(t-38)",
        y: 2.54,
      },
      {
        x: "Irradiation(t-119) & Load(t-81)",
        y: 2.54,
      },
      {
        x: "Load(t-57) & sin(2πt / 12.0 hours)",
        y: 2.51,
      },
      {
        x: "(-Temperature(t) + 10.80)⁺ & Irradiation(t-166)",
        y: 2.38,
      },
      {
        x: "PublicHolidays(t-29) & sin(2πt / 24.0 hours)",
        y: 2.37,
      },
      {
        x: "cos(2πt / 24.0 hours) & Cloudiness(t-2)",
        y: 2.25,
      },
    ],
  },
];

export const dataEightHoursForFusion = [
  {
    data: [
      {
        label: "TargetAndTargetTransformation",
        value: "TargetAndTargetTransformation",
        data: [
          {
            label: "Load(t-168)",
            value: "24.03",
            svalue: "24.03",
          },
          {
            label: "Load(t-72)",
            value: "4.34",
            svalue: "4.34",
          },
        ],
      },
      {
        label: "Interaction",
        value: "TargetAndTargetTransformation",
        data: [
          {
            label: "Load(t-168) & PublicHolidays(t-5)",
            value: "14.3",
            svalue: "14.3",
          },
          {
            label: "EMA_Load(t-48) & Load(t-25)",
            value: "5.53",
            svalue: "5.53",
          },
          {
            label: "PublicHolidays & DoW(t-6) ≤ Fri",
            value: "5.47",
            svalue: "5.47",
          },
          {
            label: "DoW(t-18) ≤ Sat & Load(t-30)",
            value: "4.38",
            svalue: "4.38",
          },

          {
            label: "DoW(t-5) ≤ Fri & Load(t-25)",
            value: "3.84",
            svalue: "3.84",
          },
          {
            label: "(-Temperature(t) + 10.80)⁺ & sin(2πt / 12.0 hours)",
            value: "3.7",
            svalue: "3.7",
          },
          {
            label: "PublicHolidays(t-29) & sin(2πt / 168.0 hours)",
            value: "3.55",
            svalue: "3.55",
          },
          {
            label: "DoW(t) ≤ Sat & DoW(t-6) ≤ Sat",
            value: "3.45",
            svalue: "3.45",
          },
          {
            label: "Load(t-57) & Irradiation(t-119)",
            value: "3.42",
            svalue: "3.42",
          },
          {
            label: "Load(t-72) & DoW(t) ≤ Fri",
            value: "3.24",
            svalue: "3.24",
          },
          {
            label: "Load(t-144) & DoW(t-5) ≤ Sat",
            value: "3.18",
            svalue: "3.18",
          },
          {
            label: "Load(t-161) & Load(t-81)",
            value: "2.97",
            svalue: "2.97",
          },
          {
            label: "(-Temperature(t) + 10.80)⁺ & Load(t-38)",
            value: "2.54",
            svalue: "2.54",
          },
          {
            label: "Irradiation(t-119) & Load(t-81)",
            value: "2.54",
            svalue: "2.54",
          },
          {
            label: "Load(t-57) & sin(2πt / 12.0 hours)",
            value: "2.51",
            svalue: "2.51",
          },
          {
            label: "(-Temperature(t) + 10.80)⁺ & Irradiation(t-166)",
            value: "2.38",
            svalue: "2.38",
          },
          {
            label: "PublicHolidays(t-29) & sin(2πt / 24.0 hours)",
            value: "2.37",
            svalue: "2.37",
          },
          {
            label: "cos(2πt / 24.0 hours) & Cloudiness(t-2)",
            value: "2.25",
            svalue: "2.25",
          },
        ],
      },
    ],
  },
];

export const dataLineCart = BigData;
