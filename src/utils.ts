import { push } from "object-path-immutable";

export const fieldNames = {
  insurancePeriodStart: "TYPE_WCalendarInput_9e27a9be8ac048ccaed6045f33e7b391",
  insurancePeriodEnd: "TYPE_WCalendarInput_73ab13044b2642f19702e2d31cdb8b91",
  detailedActuarialDistinction:
    "TYPE_WSELECTIPUT_b5648f4facc847d391f35f6439b2cf33",
  paymentMethod: "TYPE_WSELECTIPUT_52c3279e92d841a5a1fd09a832a400d9",
  numberOfPayments: "TYPE_WSELECTIPUT_4822d8b5c0864277a4804c7626622554",
  paymentMethod2: "TYPE_WSELECTIPUT_2acebd980de444b09c40d11905def955",
  provisionalPremiumRate: "TYPE_WTEXTINPUT_f539423c50b044259e4d09d4034f3b48",

  // Basic Figures
  salesFacilityOperations: "TYPE_WTEXTINPUT_82efab32847447709b0588a28edd66f4",
  salesHomeVisit: "TYPE_WTEXTINPUT_4b23a0c0a08343478742a67c0533f912",
  salesHomeVisitNursing: "TYPE_WTEXTINPUT_3d7e2a733a0045148a081e66c635d5df",
  salesInHomeCare: "TYPE_WTEXTINPUT_1db355f4d01d4effbf244e94a87ca406",
  netSaleWelfareEquipment: "TYPE_WTEXTINPUT_8ac8cab99e43424886417b57587080d1",
  netSaleHomeRenovation: "TYPE_WTEXTINPUT_2fd5c1c81f9a47028d1c6f3371f0b12d",

  // Special Terms
  selectLawyerFeesCovenantClause:
    "TYPE_WSELECTIPUT_c9a9e9ee28684662b078c8404b4f66a8",
  selectServiceUserSearchClause:
    "TYPE_WSELECTIPUT_fc66f8b1d2c149b48f5de6e446ce30d6",
  selectInfectiousDiseaseClause:
    "TYPE_WSELECTIPUT_89e93fe499a54de6b8941412f808042f",
  selectVictimMedicalExpenseClause:
    "TYPE_WSELECTIPUT_65da73c147084302801dcce665e51afb",
  selectLitigationCostClause:
    "TYPE_WSELECTIPUT_6a697babcf4647e7901f21fe7af1837d",
  selectInitialSupportCaluse:
    "TYPE_WTEXTINPUT_9f3d11cd48da4bf8b2688c912c29986d",
  selectManagerSpecialAgreementClause:
    "TYPE_WSELECTIPUT_1c9810133b7d42ebbe462dea0225a893",

  basicContractPaymentLimit:
    "TYPE_WSELECTIPUT_76c8fe88a23446668b21d6e166290da6",
  basicContractDeductibleAmount:
    "TYPE_WSELECTIPUT_99546b2f2b8b4730a9d1be976f1c36f0",
  propertyCompensationPaymentLimit:
    "TYPE_WSELECTIPUT_24f757e6c8ec47beba6bb9efbbf15ff6",
  accidentsPaymentLimit: "TYPE_WSELECTIPUT_1f26a5fccfd34b87a5cb32d1901a4abb",

  policyNumber: "TYPE_WTEXTINPUT_5126da931ed547d29dd5809cd7b59a5d",
  contractorName: "TYPE_WTEXTINPUT_4a3c9595e50043f0a08fb050e59dac7a",
  remarksColumn: "TYPE_WTEXTINPUT_7e9b73fd5ceb438f9aa9e8a4c2270f37",
  agencyCode: "TYPE_WTEXTINPUT_b2a7e69305014d978e85fef5c6f0b5b1",
  agencyName: "TYPE_WTEXTINPUT_6a13a4495f9c4ce4bea21a593b5c0aad",
  agencyAddress: "TYPE_WJAPANESEADDRESS_74c32d10152a4310a85afd68463e485e",
  phoneNumber: "TYPE_WPhoneInput_97a621912d774fbb9309f9cd6bdace86",
  fax: "TYPE_WTEXTINPUT_6a4a3c40c3044280bccdd66662cba83b",
  communicationColumn: "TYPE_WTEXTINPUT_8d70dc5eb58e43b0be592af0fb13d241",
};

export const calculatedFieldName = {
  nusingPaymentLimitDuringPeriod:
    "UpperLimit_HomeNursing_Liability_PerIncident",
  nursingDeductibleAmountAccident:
    "Deductible_HomeNursing_Liability_PerIncident",
  managedPropertyDeductibleAmount: "PropertyAccident_Deductible_PerIncident",
  humanRightsViolationDeductibleAmount:
    "PropertyAccident_Deductible_PerIncident",
  totalSales: "total_sales",
};

export const raterFieldNames = {
  baseContractPremium: "output_base_premium",
  lawyerFeesCollateral: "output_attorney_rider_premium",
  serviceUserSearchPremium: "output_search_rider_premium",
  infectiousDiseasePremium: "output_infection_rider_premium",
  victimMedicalExpensesPremium: "output_medical_treatment_rider_premium",
  litigationCostPremium: "output_litigation_rider_premium",
  oneTimePremium: "output_OneTime_premium",
  totalPremiumPaid: "output_total_paid_premium",
  minmumPremiumPaid: "output_minimum_premium",
};

export const selectOptions = {
  detailedActuarialDistinction: [
    { label: "精算不要", value: "精算不要" },
    { label: "精算要", value: "精算要" },
  ],
  numberOfPayments: [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
  ],
  paymentMethod2: [
    { label: "あり", value: "あり" },
    { label: "なし", value: "なし" },
  ],
  basicContractPaymentLimit: [
    { label: "50,000", value: 50000 },
    { label: "60,000", value: 60000 },
    { label: "70,000", value: 70000 },
    { label: "90,000", value: 90000 },
    { label: "100,000", value: 100000 },
    { label: "200,000", value: 200000 },
    { label: "300,000", value: 300000 },
    { label: "400,000", value: 400000 },
  ],
  basicContractDeductibleAmount: [
    { label: "0", value: 0 },
    { label: "5", value: 5 },
    { label: "10", value: 10 },
    { label: "50", value: 50 },
    { label: "100", value: 100 },
  ],
  propertyCompensationPaymentLimit: [
    { label: "5,000", value: 5000 },
    { label: "10,000", value: 10000 },
    { label: "20,000", value: 20000 },
    { label: "30,000", value: 30000 },
    { label: "40,000", value: 40000 },
    { label: "50,000", value: 50000 },
    { label: "100,000", value: 100000 },
  ],
  specialTermsClauses: [{ label: "○", value: "○" }],

  accidentsPaymentLimit: [
    { label: "10,000", value: 10000 },
    { label: "100,000", value: 100000 },
  ],

  prefecture: [
    { label: "三重県", value: "三重県" },
    { label: "京都府", value: "京都府" },
    { label: "佐賀県", value: "佐賀県" },
    { label: "兵庫県", value: "兵庫県" },
    { label: "北海道", value: "北海道" },
    { label: "千葉県", value: "千葉県" },
    { label: "和歌山県", value: "和歌山県" },
    { label: "埼玉県", value: "埼玉県" },
    { label: "大分県", value: "大分県" },
    { label: "大阪府", value: "大阪府" },
    { label: "奈良県", value: "奈良県" },
    { label: "宮城県", value: "宮城県" },
    { label: "宮崎県", value: "宮崎県" },
    { label: "富山県", value: "富山県" },
    { label: "山口県", value: "山口県" },
    { label: "山形県", value: "山形県" },
    { label: "山梨県", value: "山梨県" },
    { label: "岐阜県", value: "岐阜県" },
    { label: "岡山県", value: "岡山県" },
    { label: "岩手県", value: "岩手県" },
    { label: "島根県", value: "島根県" },
    { label: "広島県", value: "広島県" },
    { label: "徳島県", value: "徳島県" },
    { label: "愛媛県", value: "愛媛県" },
    { label: "愛知県", value: "愛知県" },
    { label: "新潟県", value: "新潟県" },
    { label: "東京都", value: "東京都" },
    { label: "栃木県", value: "栃木県" },
    { label: "沖縄県", value: "沖縄県" },
    { label: "滋賀県", value: "滋賀県" },
    { label: "熊本県", value: "熊本県" },
    { label: "石川県", value: "石川県" },
    { label: "神奈川県", value: "神奈川県" },
    { label: "福井県", value: "福井県" },
    { label: "福岡県", value: "福岡県" },
    { label: "福島県", value: "福島県" },
    { label: "秋田県", value: "秋田県" },
    { label: "群馬県", value: "群馬県" },
    { label: "茨城県", value: "茨城県" },
    { label: "長崎県", value: "長崎県" },
    { label: "長野県", value: "長野県" },
    { label: "青森県", value: "青森県" },
    { label: "静岡県", value: "静岡県" },
    { label: "香川県", value: "香川県" },
    { label: "高知県", value: "高知県" },
    { label: "鳥取県", value: "鳥取県" },
    { label: "鹿児島県", value: "鹿児島県" },
  ],
};

const getDateFromString = (stringDate: string) => {
  const parts = stringDate.split("/");
  return new Date(
    parseInt(parts[2]),
    parseInt(parts[0]) - 1,
    parseInt(parts[1])
  );
};

function monthDiff(d1: Date, d2: Date) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

export const getSelectOptions = {
  paymentMethod: (inputData: any) => {
    const startDateString = inputData[fieldNames.insurancePeriodStart];
    const endDateString = inputData[fieldNames.insurancePeriodEnd];

    if (!startDateString || !endDateString) {
      return [];
    }

    const startDate = getDateFromString(startDateString);
    const endDate = getDateFromString(endDateString);
    const monthsDifference = monthDiff(startDate, endDate);

    if (monthsDifference >= 12) {
      return [
        { label: "口座振替・一時払", value: "口座振替・一時払" },
        { label: "口座振替・月払", value: "口座振替・月払" },
        { label: "請求書・一時払", value: "請求書・一時払" },
        { label: "直接集金・一時払", value: "口座振替・一時払" },
        { label: "直接集金・月払", value: "直接集金・月払" },
        {
          label: "直接集金・均等払・2か月毎",
          value: "直接集金・均等払・2か月毎",
        },
        {
          label: "直接集金・均等払・3か月毎",
          value: "直接集金・均等払・3か月毎",
        },
        {
          label: "直接集金・均等払・4か月毎",
          value: "直接集金・均等払・4か月毎",
        },
        {
          label: "直接集金・均等払・6か月毎",
          value: "直接集金・均等払・6か月毎",
        },
      ];
    }

    if (monthsDifference >= 3) {
      return [
        { label: "直接集金・一時払", value: "直接集金・一時払" },
        { label: "直接集金・月払", value: "直接集金・月払" },
      ];
    }
    return [
      { label: "口座振替・一時払", value: "口座振替・一時払" },
      { label: "口座振替・月払", value: "口座振替・月払" },
      { label: "請求書・一時払", value: "請求書・一時払" },
      { label: "直接集金・一時払", value: "直接集金・一時払" },
      { label: "直接集金・月払", value: "直接集金・月払" },
    ];
  },
};

export const shouldDisplayNumberOfPaymentsField = (
  inputData: Record<string, any>
) => {
  return [
    "直接集金・均等払・2か月毎",
    "直接集金・均等払・3か月毎",
    "直接集金・均等払・4か月毎",
    "直接集金・均等払・6か月毎",
    "口座振替・月払",
  ].includes(inputData[fieldNames.paymentMethod]);
};

export const shouldDisplayPaymentMethod2Field = (
  inputData: Record<string, any>
) => {
  const paymentMethodValues = [
    "口座振替・一時払",
    "請求書・一時払",
    "直接集金・一時払",
  ];
  return !paymentMethodValues.includes(inputData[fieldNames.paymentMethod]);
};

export const shouldDisplayProvisionalPremiumRateField = (
  inputData: Record<string, any>
) => {
  return inputData[fieldNames.detailedActuarialDistinction] === "精算要";
};

// Type this in a better way
export const convertErrorsArrayToDict = (errors: any[]): Record<any, any> => {
  const quoteErrors = errors
    .filter((error) => error.path)
    .reduce((result, error) => push(result, error.path, error), {});

  // Errors without path
  // We display them under the inputs near the Calculate/Submit buttons
  const nonFieldErrors = errors.filter((error) => !error.path);
  if (nonFieldErrors.length) {
    return {
      ...quoteErrors,
      formErrors: nonFieldErrors,
    };
  }
  return quoteErrors;
};
