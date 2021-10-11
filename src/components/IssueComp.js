import { ISSUES } from "../shared/issueList";

export function IssueComp() {
  return(
    <div className="layout-issue">
      <div className="row  p-4">
        <div className="col-6 dark2 text-center">
          <h3 className="heading3">HAPPENED'S ISSUE</h3>
          <p className="body2-kr pt-1">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
          <button className="btn bg-warning2 mt-1">SEE MORE</button>
        </div>
      </div>
      <div className="layout-news">
        <div className="layout-news-banner">
          <div className="dark2 heading1-bolder">WHPN ISSUE</div>
          <img src="/assets/images/news-img-01.png" alt="arrow icon" width="100"/>
        </div>
        {ISSUES.map(issue => {
          if (issue.title == 'D BRAND') {
            return (
              <div key={issue.id} className="bg-danger2 white">
              <h4 className="heading4-bolder text-center">
                {issue.title}
              </h4>
              <img src={issue.image} alt={issue.title}/>
            </div>
            )
          }
          return (
            <div key={issue.id} className="bg-body white">
              <h4 className="heading4-bolder text-center">
                {issue.title}
              </h4>
              <img src={issue.image} alt={issue.title}/>
            </div>
          )
        })}
      </div>
      <Objects/>
    </div>
  )
}
function Objects() {
  return (
    <div className="layout-obj">
      <div className="obj1">
        <img src="assets/images/news-object-02.png" alt="news object" width="50%"/>
      </div>
      <div className="obj2">
        <img src="assets/images/news-object-03_2.png" alt="news object" width="50%"/>
      </div>
      <div className="obj3">
        <img src="assets/images/news-object-03.png" alt="news object" width="50%"/>
      </div>
      <div className="obj4">
        <img src="assets/images/news-object-04.png" alt="news object" width="50%"/>
      </div>
      <div className="obj5">
        <img src="assets/images/news-object-05.png" alt="news object" width="50%"/>
      </div>
    </div>
  )
}