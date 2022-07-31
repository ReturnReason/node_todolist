# node_todolist

node, ejs로 to do list 웹 사이트 만들기

[2022.07.11]

- main 페이지 디자인 및 레이아웃 구성
- 홈(/), 투두 리스트 작성 페이지(/writing)로 get요청시 ejs 파일 렌더

[2022.07.12]

- writing, to-do-list 페이지 디자인 및 레이아웃
- writing 페이지에서 form 작성 후 저장하기 버튼 누르면 데이터베이스로 내용 저장, 메인 페이지 파일 렌더
- list 페이지에서 저장한 할일 목록 db에서 불러온 후 화면에 저장했던 목록 보여주기

[2022.07.14]
- 추가한 할 일 데이터에 유니크 키 부여
- 삭제 버튼 클릭시 해당하는 할 일의 키 번호를 찾아서 DB에서 해당 데이터 삭제

[2022.07.31]
- 수정 버튼 클릭시 해당 할일의 수정 페이지로 이동

## preview ▼

![Honeycam 2022-07-12 01-41-57](https://user-images.githubusercontent.com/48672106/178314998-f89f01f2-d1b8-440a-9296-cae53dafffcd.gif)

![Honeycam 2022-07-14 21-33-41](https://user-images.githubusercontent.com/48672106/178984244-fd809fc5-7723-4a29-95cb-e1dd8cb955f8.gif)

![Honeycam 2022-07-31 19-47-15](https://user-images.githubusercontent.com/48672106/182022573-8532410b-c429-4a3a-a374-d7ed29fedfc9.gif)


[해야 하는 것]
- form 전송시 필수값(제목) 공백일 때 경고 모달 띄우기
- form 에서 작성한 날짜가 현재보다 이전인 경우 처리하기
- 삭제할 때 정말 삭제할 것인지 물어보기
- 전체적인 디자인 통일 및 애니메이션 추가
- 할일 추가 후 리다이렉션 List 페이지로 보내기
- 할일 페이지 디자인

[추가해볼까?]
- 체크 박스 형태로 구현하거나 드래그 앤 드롭 이벤트를 추가해도 괜찮을 듯
