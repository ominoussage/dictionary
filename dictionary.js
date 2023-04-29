const button = document.getElementById('button');
const contentDetails = document.getElementById('details');
const mainWord = document.getElementById('word');
const mainPhonetic = document.getElementById('phonetic');
const meaningList = document.getElementById('meaningList');
const firstMeaningList = document.getElementById('meaningList1');
const firstMeaning = document.getElementById('meaning1');
const secondMeaningList = document.getElementById('meaningList2');
const secondMeaning = document.getElementById('meaning2');
const thirdMeaningList = document.getElementById('meaningList3');
const thirdMeaning = document.getElementById('meaning3');
const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';
const keyword = document.getElementById('keyword')

function fetchData() {
    const keywordValue = document.getElementById('keyword').value;
    if (keywordValue == "") {
        contentDetails.innerHTML = "<span>Please follow the instructions. Type <b id=clowntext>a word</b>.</span>";
    } else {
        keyword.style.color = 'black'
        document.getElementById('body').style.animation = 'animate 20s ease infinite';
        document.getElementById('html').style.animation = 'animate 20s ease infinite';
        document.getElementById('body').style.backgroundImage = 'linear-gradient(-45deg, #A18276, #B9D2B1, #DAC6B5, #F1D6B8, #FBACBE)';
        document.getElementById('html').style.backgroundImage = 'linear-gradient(-45deg, #A18276, #B9D2B1, #DAC6B5, #F1D6B8, #FBACBE)';
        fetch(`${apiUrl}/${keywordValue}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`The word <b>${keywordValue}</b> is not found.`);
            };
            return response.json();
        }).then((data) => {
            contentDetails.style.display = 'flex';
            contentDetails.style.justifyContent = 'center';
            contentDetails.style.alignItems = 'center';
            contentDetails.style.flexDirection = 'column';
            contentDetails.style.width = 'fit-content';
            contentDetails.style.padding = '20px';
            contentDetails.style.border = '5px solid black';
            contentDetails.style.borderRadius = '20px';
            contentDetails.style.boxShadow = '0px 0px 20px black';
            contentDetails.style.fontFamily = 'Arial, Helvetica, sans-serif';
            contentDetails.style.fontSize = 'x-large';
            contentDetails.style.backgroundColor = 'white';
            contentDetails.innerHTML = "";
            console.log(data[0]);
            const wordDetails = data[0];
            contentDetails.appendChild(mainWord);
            mainWord.style.fontSize = 'xx-large';
            mainWord.style.fontWeight = 'bolder';
            const showWord = wordDetails.word;
            mainWord.innerHTML = showWord;
            mainPhonetic.style.fontStyle = 'italic';
            contentDetails.appendChild(mainPhonetic);
            const showPhonetics = wordDetails.phonetic;
            mainPhonetic.innerHTML = showPhonetics;
            contentDetails.appendChild(meaningList);
            const showFirstMeaning = wordDetails.meanings[0].definitions[0].definition;
            firstMeaning.innerHTML = showFirstMeaning;
            firstMeaningList.appendChild(firstMeaning);
            meaningList.appendChild(firstMeaningList);
            const showSecondMeaning = wordDetails.meanings[0].definitions[1].definition;
            secondMeaning.innerHTML = showSecondMeaning;
            secondMeaningList.appendChild(secondMeaning);
            meaningList.appendChild(secondMeaningList);
            const showThirdMeaning = wordDetails.meanings[0].definitions[2].definition;
            thirdMeaning.innerHTML = showThirdMeaning;
            thirdMeaningList.appendChild(thirdMeaning);
            meaningList.appendChild(thirdMeaningList);
        }).catch((e) => {
            contentDetails.style.display = 'block';
            contentDetails.style.justifyContent = 'center';
            contentDetails.style.alignItems = 'center';
            contentDetails.style.flexDirection = 'column';
            contentDetails.style.width = 'fit-content';
            contentDetails.style.padding = '20px';
            contentDetails.style.border = '5px solid black';
            contentDetails.style.borderRadius = '20px';
            contentDetails.style.boxShadow = '0px 0px 20px black';
            contentDetails.style.fontFamily = 'Arial, Helvetica, sans-serif';
            contentDetails.style.fontSize = 'x-large';
            contentDetails.style.backgroundColor = 'white';
            contentDetails.innerHTML = e;
        });
    };
};

button.addEventListener('click', function displayDefinition(){
    fetchData();
});

document.addEventListener('keypress', function(e){
    if (e.key === "Enter") {
        fetchData();
    };
});