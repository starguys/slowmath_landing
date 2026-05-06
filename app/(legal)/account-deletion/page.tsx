import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "계정 및 데이터 삭제 안내 | 느린아이",
  description:
    "느린아이 앱·웹 서비스의 계정 및 사용자 데이터 삭제 절차 안내입니다. 삭제 요청 방법, 삭제되는 항목, 법령에 따라 보관되는 항목 및 보관 기간을 확인할 수 있습니다.",
  alternates: { canonical: "/account-deletion" },
  robots: { index: true, follow: true },
};

export default function AccountDeletionPage() {
  return (
    <>
      <h1>느린아이 계정 및 데이터 삭제 안내</h1>
      <p className="legal-meta"><strong>시행일</strong>: 2026-05-06</p>
      <p className="legal-meta"><strong>최종 개정일</strong>: 2026-05-06</p>
      <hr className="legal-hr" />

      <p className="legal-intro">
        본 페이지는 <strong>느린아이</strong>(개발사: <strong>주식회사 에브리데이썸머</strong>) 앱·웹 서비스를 이용하시는 회원이 계정 및 관련 데이터의 삭제를 요청하는 절차를 안내합니다. 회사는 「개인정보 보호법」 및 Google Play·Apple App Store 정책에 따라 회원의 삭제 요청을 신속하고 투명하게 처리합니다.
      </p>

      <h2>제1조 (대상 서비스)</h2>
      <ul>
        <li><strong>앱 이름</strong>: 느린아이 (Slow Kids)</li>
        <li><strong>개발사</strong>: 주식회사 에브리데이썸머</li>
        <li><strong>웹사이트</strong>: https://slowkids.net</li>
        <li><strong>지원 플랫폼</strong>: Google Play (Android), Apple App Store (iOS), 웹</li>
      </ul>

      <h2>제2조 (계정 삭제 요청 방법)</h2>
      <p>회원은 아래 두 가지 방법 중 하나를 선택하여 계정 삭제를 요청할 수 있습니다.</p>

      <h3>방법 1. 앱 내에서 직접 삭제 (권장)</h3>
      <ol>
        <li>느린아이 앱을 실행합니다.</li>
        <li>화면 우측 상단의 <strong>설정</strong> 아이콘을 누릅니다.</li>
        <li><strong>계정</strong> 메뉴로 이동합니다.</li>
        <li><strong>계정 삭제</strong> 버튼을 누릅니다.</li>
        <li>안내에 따라 본인 확인을 진행하면 즉시 삭제가 완료됩니다.</li>
      </ol>

      <h3>방법 2. 이메일로 삭제 요청</h3>
      <ol>
        <li>
          아래 주소로 이메일을 보내주세요.
          <ul>
            <li><strong>받는 사람</strong>: contact@everydaysummer.net</li>
            <li><strong>제목</strong>: [느린아이] 계정 삭제 요청</li>
            <li>
              <strong>본문에 포함할 내용</strong>:
              <ul>
                <li>가입 시 사용한 이메일 주소 (Google 또는 Kakao)</li>
                <li>로그인 방식 (Google 로그인 / Kakao 로그인)</li>
                <li>삭제 요청 사유 (선택)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>회사는 본인 확인 절차를 거친 후 <strong>영업일 기준 7일 이내</strong>에 처리 결과를 회신해 드립니다.</li>
      </ol>

      <h2>제3조 (삭제되는 데이터)</h2>
      <p>계정 삭제 요청이 접수되면 다음 항목이 <strong>지체 없이 영구 삭제</strong>됩니다.</p>
      <table>
        <thead>
          <tr><th>구분</th><th>삭제되는 항목</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>계정 정보</td>
            <td>이메일 주소, OAuth 로그인 식별자(Google ID, Kakao ID)</td>
          </tr>
          <tr>
            <td>학습 데이터</td>
            <td>연습 결과, 정답률, 학습 시간, 사용 통계</td>
          </tr>
          <tr>
            <td>기기 데이터</td>
            <td>앱 푸시 토큰, 디바이스 식별 정보</td>
          </tr>
          <tr>
            <td>로컬 데이터</td>
            <td>앱 설정값, localStorage에 저장된 학습 진도 (앱 삭제 또는 데이터 초기화 시)</td>
          </tr>
          <tr>
            <td>이용권·쿠폰</td>
            <td>보유 중인 모든 이용권(구독·기간제·일회성) 및 쿠폰(미사용 포함)</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>※ 이용권 및 쿠폰은 계정 삭제와 동시에 즉시 소멸되며, 잔여 기간·미사용 잔액에 대해 별도의 환불·이전·재발급이 이루어지지 않습니다.</strong> 보유 중인 이용권이나 쿠폰이 있다면 삭제 요청 전에 사용 여부를 신중히 검토해 주시기 바랍니다.
      </p>

      <h2>제4조 (관련 법령에 따라 일정 기간 보관되는 데이터)</h2>
      <p>아래 항목은 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령에 따라 회원이 삭제를 요청하시더라도 명시된 기간 동안 보관 후 자동 파기됩니다. 이 데이터는 회원 식별이 불가능한 형태로 분리·보관되며, 본래 목적 외로는 사용되지 않습니다.</p>
      <table>
        <thead>
          <tr><th>보관 항목</th><th>보관 기간</th><th>법적 근거</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>계약 또는 청약철회 등에 관한 기록</td>
            <td>5년</td>
            <td>전자상거래법 제6조</td>
          </tr>
          <tr>
            <td>대금결제 및 재화 등의 공급에 관한 기록</td>
            <td>5년</td>
            <td>전자상거래법 제6조</td>
          </tr>
          <tr>
            <td>소비자의 불만 또는 분쟁처리에 관한 기록</td>
            <td>3년</td>
            <td>전자상거래법 제6조</td>
          </tr>
          <tr>
            <td>접속 로그·IP</td>
            <td>3개월</td>
            <td>통신비밀보호법 제15조의2</td>
          </tr>
          <tr>
            <td>부정 이용 기록</td>
            <td>1년</td>
            <td>부정 이용 방지(정보주체 동의)</td>
          </tr>
        </tbody>
      </table>
      <p>위 보관 기간이 경과한 데이터는 복구가 불가능한 방식으로 영구 삭제됩니다.</p>

      <h2>제5조 (처리 기간)</h2>
      <ul>
        <li><strong>앱 내 삭제</strong>: 즉시 처리 (실시간)</li>
        <li><strong>이메일 요청</strong>: 본인 확인 완료 후 영업일 기준 7일 이내</li>
        <li><strong>법령에 따른 보관 데이터</strong>: 위 제4조 기간 경과 후 자동 파기</li>
      </ul>

      <h2>제6조 (결제·환불 및 이용권·쿠폰 관련 안내)</h2>
      <p>인앱결제는 <strong>Google Play 결제 시스템(Android)</strong> 또는 <strong>Apple App Store 결제 시스템(iOS)</strong>이 직접 처리하며, 회사는 결제 수단(카드 번호·계좌 정보 등)을 보유하지 않습니다. 환불은 각 스토어 정책에 따라 진행되며, 계정 삭제 후에도 다음과 같이 처리됩니다.</p>
      <ul>
        <li>이미 결제된 구독·유료 콘텐츠의 환불은 계정 삭제와 별개로 각 스토어 환불 정책에 따라 별도 처리됩니다.</li>
        <li><strong>회사가 직접 발급·관리하는 이용권 및 쿠폰은 계정 삭제 시 모두 소멸</strong>되며, 잔여 기간·미사용 분에 대해 환불·이전·재발급되지 않습니다.</li>
        <li>스토어 구독을 사용 중인 경우, 계정 삭제 전 각 스토어의 구독 관리 화면에서 별도로 구독 해지를 진행해 주시기 바랍니다. (계정 삭제만으로는 스토어 구독이 자동 해지되지 않습니다.)</li>
        <li>환불·결제 분쟁이 진행 중인 경우, 분쟁 해결 시까지 관련 기록은 제4조에 따라 보관될 수 있습니다.</li>
      </ul>

      <h2>제7조 (계정 삭제 후 재가입)</h2>
      <p>계정 삭제 후에도 동일한 이메일로 다시 가입하실 수 있으나, <strong>이전 학습 기록·결제 내역·이용권·쿠폰은 복구되지 않습니다.</strong> 따라서 삭제 요청 전 신중히 검토해 주시기 바랍니다.</p>

      <h2>제8조 (문의처)</h2>
      <p>계정·데이터 삭제와 관련하여 문의 사항이 있으시면 아래로 연락해 주시기 바랍니다.</p>
      <ul>
        <li><strong>개인정보 보호책임자</strong>: 오홍석</li>
        <li><strong>이메일</strong>: contact@everydaysummer.net</li>
        <li><strong>처리 시간</strong>: 영업일 기준 7일 이내 답변</li>
      </ul>

      <div className="legal-footer">
        <p><strong>운영자</strong>: 주식회사 에브리데이썸머 / 오홍석</p>
        <p><strong>이메일</strong>: contact@everydaysummer.net</p>
        <p><strong>사업자등록번호</strong>: 847-87-03993</p>
        <p><strong>주소</strong>: 서울특별시 관악구 남부순환로 1808, 15층 1505호</p>
      </div>
    </>
  );
}
