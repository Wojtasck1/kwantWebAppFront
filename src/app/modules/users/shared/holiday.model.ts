// export interface Holiday {
//     holidayId: number;
//     userId: number;
//     decision: string;
//     personMDecisionId: number;
//     holidayType: string;
//     createDate: string;
//     decisionDate: string;
//     beginDate: string;
//     endDate: string;
//   }export interface Holiday {
//     holidayId: number;
//     userId: number;
//     decision: string;
//     personMDecisionId: number;
//     holidayType: string;
//     createDate: string;
//     decisionDate: string;
//     beginDate: string;
//     endDate: string;
//   }

  export class Holiday {
    constructor(
      public holiday: number,
      public userId: number,
      public decision: string,
      public personMDecisionId: number,
      public holidayType: string,
      public createDate: string,
      public decisionDate: string,
      public beginDate: string,
      public endDate: string
    ){
    }
  }



// export class Holiday {
//   holidayId: number;
//   userId: number;
//   decision: string;
//   personMDecisionId: number;
//   holidayType: string;
//   createDate: string;
//   decisionDate: string;
//   beginDate: string;
//   endDate: string;

//   constructor(
//     //holidayId: number,
//     userId: number,
//     //decision: string,
//     //personMDecisionId: number,
//     holidayType: string,
//     createDate: string,
//     //decisionDate: string,
//     beginDate: string,
//     endDate: string,
//   ){
//    // this.holidayId = holidayId,
//     this.userId = userId,
//     //this.decision = decision,
//     //this.personMDecisionId = personMDecisionId,
//     this.holidayType = holidayType,
//     this.createDate = createDate,
//     //this.decisionDate = decisionDate,
//     this.beginDate = beginDate,
//     this.endDate = endDate
//   }
// }