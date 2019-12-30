//made the first item an empty object.. for later use on randomizing.
const triviaQuestions = [
    {},
    {
        question: "(+1 pt) Basketball was invented in...",
        answer: "1891",
        options: ["1901","1891","1819","1918", "1910"]
    },
    {
        question: "(+1 pt) Who is the tallest player to play in the NBA?",
        answer: "Gheorghe Muresan",
        options: ["Manute Bol", "Shawn Bradley", "Wilt Chamberlain", "Gheorghe Muresan", "Yao Ming"]
    },
    {
        question: "(+1 pt) Who has the record for most points in an NBA game?",
        answer: "Wilt Chamberlain",
        options: ["Kobe Bryant", "Elgin Baylor", "Magic Johnson", "Wilt Chamberlain", "Michael Jordan"]
    },
    {
        question: "(+1 pt) Which team has the most championships as of 2019?",
        answer: "Boston Celtics",
        options: ["LA Lakers", "New York Knicks", "Golden State Warriors", "Philadelphia 76ers", "Boston Celtics"]
    },
    {
        question: "(+2 pts) Who's silhouette was the NBA logo based on?",
        answer: "Jerry West",
        options: ["Pete Maravich", "Jerry West", "George Mikan", "Bob Cousy", "Rick Barry"]
    },
    {
        question: "(+1 pt) Kareem Abdul-Jabbar's birth name is...",
        answer: "Lew Alcindor",
        options: ["Ferdinand Roberts", "Lew Alcindor", "Simon Lewis", "Michael Robinson", "Rogers Nelson"]
    },
    {
        question: "(+1 pt) Who is Steph Curry's father and which team did he play for (the longest)?",
        answer: "Dell Curry/Charlotte Hornets",
        options: ["Dell Curry/Toronto Raptors", "Simon Curry/Golden State Warriors", "Simon Curry/Portland Blazers", "Dell Curry/Charlotte Hornets", "Raymond Curry/Washington Bullets"]
    },
    {
        question: "(+1 pt) Per NBA rules, how many timeouts does each team have in overtime?",
        answer: "2",
        options: ["1", "3", "none", "2", "4"]
    },
    {
        question: "(+1 pt) How many NBA championships does Michael Jordan have?",
        answer: "6",
        options: ["3", "7", "10", "4", "6"]
    },
    {
        question: "(+2 pts) Who was the first African-American player to play in the NBA?",
        answer: "Earl Lloyd",
        options: ["Earl Lloyd", "Wilt Chamberlain", "Don Barksdale", "Maurice Cheeks", "Bill Russell"]
    },
    {
        question: "(+1 pt) How long is a regulation sized NBA basketball court?",
        answer: "94 ft.",
        options: ["100 ft.","50 yards","88 yards","94 ft.", "86 ft."]
    },
    {
        question: "(+1 pt) Who holds the record for being the shortest player in the NBA?",
        answer: "Muggsy Bogues",
        options: ["Muggsy Bogues", "Earl Boykins", "Spud Webb", "Isaiah Thomas", "Nate Robinson"]
    },
    {
        question: "(+1 pt) What does 'NBA' stand for?",
        answer: "National Basketball Association",
        options: ["National Basketball of America", "National Basketball Association", "New Basketball Age", "Nationwide Basketball Association", "National Basketball Athletics"]
    },
    {
        question: "(+1 pt) When did the Utah Jazz last win an NBA championship?",
        answer: "They haven't won yet.",
        options: ["They haven't won yet.", "1997", "1998", "1972", "1975"]
    },
    {
        question: "(+2 pts) Which NBA coach has the most championship wins?",
        answer: "Phil Jackson",
        options: ["Steve Kerr", "Phil Jackson", "Pat Riley", "Red Auerbach", "Gregg Popovich"]
    },
    {
        question: "(+1 pt) When was the first NBA MVP awarded?",
        answer: "1956",
        options: ["1956", "1961", "1957", "1973", "1984"]
    },
    {
        question: "(+1 pt) What were the LA Lakers originally called?",
        answer: "Minneapolis Lakers",
        options: ["LA Suns", "Detroit Lakers", "Minneapolis Lakers", "LA Stars", "Detroit Gems"]
    },
    {
        question: "(+1 pt) Which of these teams has LeBron James not played for?",
        answer: "New Jersey Nets",
        options: ["LA Lakers", "Miami Heat", "New Jersey Nets", "Cleveland Cavs", "USA Olympic Team"]
    },
    {
        question: "(+1 pt) Who was the last Boston Celtics coach to lead the team to two straight NBA titles?",
        answer: "Bill Russell",
        options: ["Bill Russell", "Fred Hoiberg", "Doc Rivers", "Red Auerbach", "Pat Riley"]
    },
    {
        question: "(+2 pts) What is the record for most overtimes in an NBA game?",
        answer: "6",
        options: ["4", "6", "10", "12", "8"]
    },
    {
        question: "(+1 pt) Which team won the very first NBA game?",
        answer: "New York Knicks",
        options: ["Boston Celtics","Minneapolis Lakers","New York Knicks","Philadelphia 76ers", "Toronto Huskies"]
    },
    {
        question: "(+1 pt) Who is the current oldest NBA player?",
        answer: "Vince Carter",
        options: ["Carmelo Anthony", "Vince Carter", "LeBron James", "Dwayne Wade", "Udonis Haslem"]
    },
    {
        question: "(+1 pt) Who won the NBA Championship in 2011?",
        answer: "Dallas Mavericks",
        options: ["Golden State Warriors", "Miami Heat", "LA Lakers", "Dallas Mavericks", "San Antonio Spurs"]
    },
    {
        question: "(+1 pt) What is the name of the trophy awarded to the NBA champions?",
        answer: "Larry O'Brien",
        options: ["Jerry West", "Larry O'Brien", "NBA Cup", "Vince Lombardi", "NBA/ABA/PBA Golden Cup"]
    },
    {
        question: "(+2 pts) Who has the most NBA Slam Dunk Contest wins?",
        answer: "Nate Robinson",
        options: ["Dominique Wilkins", "Michael Jordan", "Vince Carter", "Nate Robinson", "Zach LaVine"]
    }

]