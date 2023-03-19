export default interface bookmarkType {
    id: number,
    title : string,
    institution : string,
    tag: string, // 정기접수중 , 추가접수중, 접수마감 , 접수예정, 기간미입력
    leftDay: number, // 없는 경우 -1 (즉, 기간미입력, 접수마감은 무족너 -1임)
    isDetail: boolean,
    isSelf: boolean, //직접추가 활성화
};

export default interface searchListType {
    id: number,
    title : string,
    tag: string,
    leftDay: number,
    isStar: boolean,
};
