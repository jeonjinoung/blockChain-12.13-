블록체인 첫번째 수업 21.12.13

0. 간단한 개념
- 모든 대상 데이터 = 블록
- 이런 블럭들을 체인형태를 이룬것
- 누구나 변경의 여부를 확인 할 수 있도록
- 데이터를 분산데이터 환경에 저장


1. 현재 시스템의 문제점
기존의 시스템들은 어떤 위험이 있냐면 데이터 조작의 위험과 어려운 관리 시스템
= 중고차 시장 -> 차를 사로 갔다 -> 중고차딜러가 중고차매매사이트에서 거래
구매차량 여부확인 -> 차 존재확인 -> 매장 방문 -> 중고차 팔았다던가 샀던사람?
->허위매물 or 주행거리조작 허위 -> 중간수수료 -> 중알못이면 좀더 비싼가격
->학위위조 -> 학위확인요청 -> 개인정보보호 -> 문서관리의 불편함 -> 문서파기의 위험



2. 블록체인의 필요성
- 문서관리의 불편함
- 어려운 시스템 관리
- 허위 정보
- 중간센터의 정보의 관리


3. 블록체인이 어떤 방식으로 이루어져 있는지?

- 모든 대상 데이터 = 블록
- 이런 블럭들을 체인형태를 이룬것
- 분산데이터 환경에 저장 => 누구라도 임의로 수정할 수 없다.
- 누구나 변경의 결과를 확인 할 수 있다.
- 거래 당사자들끼리 거래를하는것을 p2p방식이라고 한다. = 블록하나하나 체인으로 연결되어있는것
- 연결이 되어있는 블록을 끝에서부터 하나하나 끊어내야된다.
   그리고 그 블록을 수정후 나머지 블록을 새로가져온다음 전체적인 블록을 또 다시 수정해야한다.

1) 데이터 위조의 가능성
2) 높은 수수료
3) 누구나 쉽게 정보 확인 가능
4) 문서 관리의 불편함

================================================================
2교시 


https://webdir.tistory.com/541 교수님이 추천해주신 사이트
이것을 보고 다운로드를 해보자

================================================================
3교시

리눅스 파일 시스템 구조
역트리 구조
FSSTND(LINUX File System Standard)


/루트
/bin 바니너리
/boot
/dev
/etc
/etc/mail
/...뭐가 많이 있다.
리눅스의 모든 디렉터리의 시작점
모든 디렉토리의 절대경로와 상대경로

상대경로 : 내 디렉토리
절대경로 : root디렉토리

DB 에는 device파일이 들어가있고

시스템용 설정파일 사용자설정파일 etc안에 들어가있다.
etc안에 상세내용들이 쪼개지고
/home디렉토리를 보면 사용자의 홈 디렉토리
터널모듈파일이랑 터널라이브러리 파일
미디어 디렉터리에는 탈부착이 가능한 장치들이 이쪽이랑 연결이된다.?
/mnt 미디어 디렉터리랑 비슷한데 일시적으로 사용되는 디렉터리
우리가 윈도우폴더들을 리눅스에서 확인할 수 있는데 이런것들이 mnt에 연결되서 확인할수 있다.

가사파일시스템
메모리상에 존재하는 파일들 = 가상파일 = 가상파일 시스템
하드디스크 사용되는 파일들 

현재 실행중인 터널 옵션값을 확인할때 쓰는....

/root 디렉터리 시스템 최고관리자

/sbin 시스템 관리자들이 사용하는 시스템 관리자용 명령어

/tmp 템프 -> 공용디렉터리 =시스템을 사용모든사용자들이 공동으로 사용하는
	      mysql 소켓파일
	     해킹할때 여기서 부터 탈탈 턴

/usr 시스템이 아니라 일반 사용자들이 대체적으로 사용 / c++ c언어가 이디렉터리 안에 위치하고있다.


/var 시스템 운영중에 삭제되는 데이터 / 일시적으로 사용되는 디렉터리

조사를 해야되는 내용들을 조사해서 정리하는것까지
/루트 /bin /boot / dev /etc
/home /lib /media /mnt
/sibn /tmp /root / proc
/var /lost +found





























 






















