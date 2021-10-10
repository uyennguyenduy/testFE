export function FooterComp() {
  return (
    <div>
    <div className="d-flex">
      <div className="col-4">
        <div className="heading-bold2">what happened</div>
        <div className="text-kr-body1 text-left">
        [공지] 개인 정보 처리 방침 변경 사전 안내<br/>
        [공지] 29CM 강남 스토어 영업 종료 <br/>
        [공지] 개인 정보 처리 방침 변경 사전 안내<br/>
        [공지] iOS 10 이하 버전 지원 중단 안내 <br/>
        [공지] 개인 정보 처리 방침 변경 사전 안내 
        </div>   
      </div>
      <div className="col-2"> 
        <div className="heading-bold2">about us</div>
        <div className="text-kr-body1 text-left">
          회사 소개<br/>
          인재 채용<br/>
          상시 할인 혜택
        </div>
      </div>
      <div className="col-2">
        <div className="heading-bold2">my order</div>
        <p className="text-kr-body1 text-left">
          내 주문<br/>
          주문 배송<br/>
          취소 / 교환 / 반품 내역<br/>
          상품 리뷰 내역<br/>
          증빙 서류 발급
        </p>
      </div>
      <div className="col-2">
        <div className="heading-bold2">my account</div>
        <p className="text-kr-body1 text-left">
            회원 정보 수정 <br/>
            회원 등급 <br/>
            마일리지 현황 <br/>
            쿠폰
        </p>
      </div>
      <div className="col-2">
        <div className="heading-bold2">help</div>
        <p className="text-kr-body1 text-left">
          1 : 1 상담 내역 <br/>
          상품 Q & A 내역 <br/>
          공지 사항 <br/>
          자주하는 질문 <br/>
          고객의 소리
        </p>
      </div>
    </div>
    <div className="d-flex pt-1">
      <div className="col-8 text-kr-body1 text-left">
      © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
      서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
      </div>
      <div className="col-4">
        <div className="d-flex" style={{flexWrap: 'nowrap'}}>
          <img src="assets/images/snsicon-01.png" alt="snsicon" width="20%"/>
          <img src="assets/images/snsicon-02.png" alt="snsicon" width="20%"/>
          <img src="assets/images/snsicon-03.png" alt="snsicon" width="20%"/>
        </div>
      </div>
    </div>
    </div>
  )
}