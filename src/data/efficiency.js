export const efficiencyCollection = {
	name: "효율성",
	areas: [
		{
			name: "Hash",
			skills: [
				{
					name: "Definition",
					description: {
						text: "Key-Value 쌍으로 데이터를 저장하는 자료구조",
						links: [
							["해시테이블 자료구조의 이해", "https://velog.io/@cyranocoding/Hash-Hashing-Hash-Table%ED%95%B4%EC%8B%9C-%ED%95%B4%EC%8B%B1-%ED%95%B4%EC%8B%9C%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%9D%98-%EC%9D%B4%ED%95%B4-6ijyonph6o"],
							["파이썬으로 구현하는 해시 테이블", "https://davinci-ai.tistory.com/19"],
						]
					},
				},
				{
					name: "Example",
					description: {
						text: "각 언어별 해시 예제코드",
						links: [
							["Python docs - hashlib", "https://docs.python.org/3/library/hashlib.html"],
							["C++ docs - std::hash", "https://devdocs.io/cpp/utility/hash"],
							]
					},
					skills: [
						{
							name: "C++",
							description: {
								text: "C/C++ 해시 예제코드",
								links: [
									["C/C++에서 해시테이블 구현", "https://twpower.github.io/139-hash-table-implementation-in-cpp"],
								]
							},
						},
						{
							name: "Python",
							description: {
								text: "Python에서 해시테이블 구현",
								links: [
									["파이썬으로 구현하는 자료구조 요약정리 - 해시테이블","https://davinci-ai.tistory.com/19"],
								]
							},
						},
						{
							name: "Java",
							description: {
								text: "JAVA에서 해시테이블 구현",
								links: [
									["JAVA 해시 기본 개념과 구조", "https://hyeonstorage.tistory.com/265"],
								]
							}
						}
					]
				},
				{
					name: "Quiz",
					description: {
						text: "난이도 별 해시테이블 문제",
						table: [
								[3,"해시 연습문제","https://programmers.co.kr/learn/courses/30/parts/12077"],
								[2,"해시 중급문제",""],
								[1,"해시 기본문제",""],
						]
					},
				},
			]
		},
		{
			name: "DP",
			skills: [
				{
					name: "Definition",
					description: {
						text: "동적 계획법(Dynamic Programming), 하위 문제를 나누어 풀어 결합한 뒤 최종 목적을 달성하는 방법",
						links: [
							["DP 설명 및 예제코드", "https://ko.wikipedia.org/wiki/%EB%8F%99%EC%A0%81_%EA%B3%84%ED%9A%8D%EB%B2%95"],
							["DP를 이용한 배낭 문제 풀이", "https://www.zerocho.com/category/Algorithm/post/584b979a580277001862f182"],
						]
					}
				},
				/*{
					name: "Overflow",
					description: {
						text: "Learn about what happens when there is too much content to be contained comfortably inside a box and how to manage it.",
						links: [
							["MDN - Overflowing content", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"],
							["W3Schools - CSS Layout: Overflow", "https://www.w3schools.com/css/css_overflow.asp"],
							["Overflow In CSS", "https://ishadeed.com/article/overflow-css/"]
						]
					},
				},*/
				{
					name: "Example",
					description: {
						text: "Learn how to make your website responsive so it works across different screen sizes.",
						links: [
							["MDN - Responsive design", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"],
							["Responsive Web Design Fundamentals by Google", "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"],
							["Google Dev - Responsive Design", "https://developers.google.com/web/fundamentals/design-and-ux/responsive"],
							["Google Dev - UX Patterns", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns"],
							["Google Dev - Responsive Content", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/content"],
							["Codelabs - Responsive Design", "https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0"],
						]
					},
					skills: [
						{
							name: "C++",
							description: {
								text: "Learn how use media queries to build responsive layout.",
								links: [
									["CSS Tricks - CSS Media Queries & Using Available Space", "https://css-tricks.com/css-media-queries/"],
									["MDN - Using media queries", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"],
									["MDN - Using Media Queries for Accessibility", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility"],
								]
							},
						},
						{
							name: "Python",
							description: {
								text: "Learn how to use relative units for properties such as font sizes and spacing.",
								links: [
									["MDN - Sizing items in CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS"],
									["MDN - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
									["The CSS Workshop - Relative Units", "https://thecssworkshop.com/lessons/relative-units"],
									["CSS Tricks - Fun with Viewport Units", "https://css-tricks.com/fun-viewport-units/"],
									["dev.to - 15 CSS Relative units", "https://dev.to/bytegasm/15-css-relative-units-how-many-do-you-know-em-rem-ex-cap-ch-ic-6m"],
								]
							},
						},
						{
							name: "Java",
							description: {
								text: "항상 화면 크기에 가장 적합한 버전을 표시하면서 반응형 이미지를 만드는 방법을 알아봅니다.",
								links: [
									["Google Devs - Responsive Images", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/images"],
									["MDN - Responsive Images", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"],
								]
							}
						}
					]
				},
				{
					name: "Quiz",
					description: {
						text: "난이도 별 해시테이블 문제",
						links: [
								["해시 연습문제","https://programmers.co.kr/learn/courses/30/parts/12077"],
								["해시 중급문제",""],
								["해시 기본문제",""],
						]
					},
				},
			]
		},
		{
			name: "Greedy",
			skills: [
				{
					name: "Definition",
					description: {
						text: "동적 계획법(Dynamic Programming), 하위 문제를 나누어 풀어 결합한 뒤 최종 목적을 달성하는 방법",
						links: [
							["DP 설명 및 예제코드", "https://ko.wikipedia.org/wiki/%EB%8F%99%EC%A0%81_%EA%B3%84%ED%9A%8D%EB%B2%95"],
							["DP를 이용한 배낭 문제 풀이", "https://www.zerocho.com/category/Algorithm/post/584b979a580277001862f182"],
						]
					}
				},
				/*{
					name: "Overflow",
					description: {
						text: "Learn about what happens when there is too much content to be contained comfortably inside a box and how to manage it.",
						links: [
							["MDN - Overflowing content", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"],
							["W3Schools - CSS Layout: Overflow", "https://www.w3schools.com/css/css_overflow.asp"],
							["Overflow In CSS", "https://ishadeed.com/article/overflow-css/"]
						]
					},
				},*/
				{
					name: "Example",
					description: {
						text: "Learn how to make your website responsive so it works across different screen sizes.",
						links: [
							["MDN - Responsive design", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"],
							["Responsive Web Design Fundamentals by Google", "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"],
							["Google Dev - Responsive Design", "https://developers.google.com/web/fundamentals/design-and-ux/responsive"],
							["Google Dev - UX Patterns", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns"],
							["Google Dev - Responsive Content", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/content"],
							["Codelabs - Responsive Design", "https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0"],
						]
					},
					skills: [
						{
							name: "C++",
							description: {
								text: "Learn how use media queries to build responsive layout.",
								links: [
									["CSS Tricks - CSS Media Queries & Using Available Space", "https://css-tricks.com/css-media-queries/"],
									["MDN - Using media queries", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"],
									["MDN - Using Media Queries for Accessibility", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility"],
								]
							},
						},
						{
							name: "Python",
							description: {
								text: "Learn how to use relative units for properties such as font sizes and spacing.",
								links: [
									["MDN - Sizing items in CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS"],
									["MDN - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
									["The CSS Workshop - Relative Units", "https://thecssworkshop.com/lessons/relative-units"],
									["CSS Tricks - Fun with Viewport Units", "https://css-tricks.com/fun-viewport-units/"],
									["dev.to - 15 CSS Relative units", "https://dev.to/bytegasm/15-css-relative-units-how-many-do-you-know-em-rem-ex-cap-ch-ic-6m"],
								]
							},
						},
						{
							name: "Java",
							description: {
								text: "항상 화면 크기에 가장 적합한 버전을 표시하면서 반응형 이미지를 만드는 방법을 알아봅니다.",
								links: [
									["Google Devs - Responsive Images", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/images"],
									["MDN - Responsive Images", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"],
								]
							}
						}
					]
				},
				{
					name: "Quiz",
					description: {
						text: "난이도 별 해시테이블 문제",
						table: [
								[3,"해시 연습문제","https://programmers.co.kr/learn/courses/30/parts/12077"],
								[2,"해시 중급문제",""],
								[1,"해시 기본문제",""],
						]
					},
				},
			]
		}
	]
}