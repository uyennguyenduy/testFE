import { ISSUES } from "../shared/issueList";

export function IssueComp() {
  return(
    <div className="bg-issue">
      <div className="d-flex">
        <div className="col-6 color-nddark text-center">
          <h1 className="heading-bold1">HAPPENED'S ISSUE</h1>
          <p className="text-kr-body pt-1">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <button>SEE MORE</button>
        </div>
      </div>
      <div className="d-flex" style={{flexWrap: 'nowrap'}}>
        <div className="bg-orange p-1" style={{width:' 15em'}}>
          <div className="color-nddark heading-bolder">WHPN ISSUE</div>
          <img src="/assets/images/news-img-01.png" alt="arrow icon" width="100"/>
        </div>
        {ISSUES.map(issue => {
          return (
            <div key={issue.id} className="bg-nddark color-white">
              <div className="heading-bolder2 text-center">
                {issue.title}
              </div>
              <img src={issue.image} alt={issue.title}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
