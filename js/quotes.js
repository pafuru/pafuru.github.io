const quotes = [
    {
        quote: "자신감은 전염된다. 자신감의 부족도 마찬가지다. (Confidence is contagious. So is lack of confidence.)",
        author: "빈스 롬바르디 / Vince Lombardi",
    },
    {
        quote: "사람은 누구나 자기가 할 수 있다고 생각하는 것 이상의 것을 할 수 있습니다. (There isn’t a person anywhere that isn’t capable of doing more than he thinks he can.)",
        author: "Henry Ford / 헨리포드",
    },
    {
        quote: "길이 이끄는 대로 가지 마라. 대신 길이 없는 곳으로 가서 발자국을 남겨라. (Do not follow where the path may lead. Go instead where there is no path and leave a trail.)",
        author: "랄프 왈도 에머슨 / Ralph Waldo Emerson",
    },
    {
        quote: "네 자신의 무지를 절대 과소평가하지 마라. (Never underestimate your own ignorance.)",
        author: "알버트 아인슈타인 / Alblert Einstein",
    },
    {
        quote: "지난 일은 어쩔 수 없는 바 슬퍼한들 이미 엎질러진 물이다. (What’s gone and what’s past help, should be past grief.)",
        author: "윌리엄 셰익스피어 / William Shakespeare",
    },
    {
        quote: "행동하는 사람처럼 생각하고, 생각하는 사람처럼 행동하라. (Think like a man of action, act like a man of thought.)",
        author: "앙리 베르그송 / Henri Bergson",
    },
    {
        quote: "친구를 고르는 데는 천천히, 친구를 바꾸는 데는 더 천천히. (Be slow in choosing a friend, slower in changing.)",
        author: "벤자민 프랭클린 / Benjamin Franklin",
    },
    {
        quote: "현명한 자라면 찾아낸 기회보다 더 많은 기회를 만들 것이다. (A wise man will make more opportunities than he finds.)",
        author: "Sir Francis Bacon / 프랜시스 베이컨",
    },
    {
        quote: "끝까지 해보기 전까지는 늘 불가능해 보입니다. (It always seems impossible until it's done.)",
        author: "넬슨 만델라 / Nelson Mandela",
    },
    {
        quote: "늘 명심하라. 성공하겠다는 너 자신의 결심이 다른 어떤 것보다 중요하다는 것을. (Always bear in mind that your own resolution to succeed is more important than any one thing.)",
        author: "에이브라함 링컨 / Abraham Lincoln",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
