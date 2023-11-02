const container = document.getElementById('container')
const body = document.body
//Create Element tags
const hElement = document.createElement('h1')
const generateButton = document.createElement('button')
const divContainer = document.createElement('div')
//Create Text 
const hElementText = document.createTextNode("Random Meal Generator");
const newBtnText = document.createTextNode('Generate Meal')
//Add class to tag
hElement.setAttribute('class', 'heading-text')
generateButton.setAttribute('class', 'generate-meal-btn')
divContainer.setAttribute('class', 'div-container')

//Add text String to Element tags 
hElement.appendChild(hElementText);
generateButton.appendChild(newBtnText)
//Add child element tags to parents element tags
body.insertBefore(hElement, container)
container.append(generateButton)
container.append(divContainer)
//Impliment the logic in the functions
//get show all data from api
const getMealData = (meal) => {
  const ingredients = [];
  // Get all ingredients from the object. Up to 20
  for (let i = 1; i <= 20; i++) {
    let result = meal['strIngredient' + i]
    if (result) {
      ingredients.push(`${meal['strIngredient' + i]} 
 - ${meal[`strMeasure` + i]}`)
    }
    else {
      break;
    }
  }
  divContainer.innerHTML = `
 <div >
    <div class='imgpra'>
    <img class='generate-img' src='${meal.strMealThumb}' alt='Meal Image'/>
    </div>
 <div>
<p><b>Country:</b><span>${meal.strArea}</span></p>
<p><b>Category:</b><span>${meal.strCategory}</span></p>
${meal.strTags ? `<b>Tags:</b><span>${meal.strTags.split(',').join(', ')}</span>` : `<b>Tags:<b/><span>nothing</span>`} 
${meal.strYoutube ? `<h5>Video Recipe:</h5>
			<div class="videoWrapper">
				<iframe class='ifra' width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" >
				</iframe>
		`: `<h5>Video Recipe:</h5><span>Not found Any Video relate to this recipe.</span>`}
</div>
 </div>
 </div>
 <div class='tiletodes'> 
<h4 class='h4-text'>Meal Name :<span>${meal.strMeal}</span></h4>
<p><b>Description:</b><span class='light'>${meal.strInstructions}</span></p>
<h4 class='ingre'>InGredients:
				<ul>
					${ingredients.map(ingredient => `<li class = 'inde'>${ingredient}</li>`).join('')}
				</ul></h4>
 </div>
 `
}
const generateMeal = () => {
  //fetching data from api
  let url = 'https://www.themealdb.com/api/json/v1/1/random.php'
  fetch(url).then((res) => res.json()).then((data) => { console.log(data), getMealData(data.meals[0]) })
}

// Make events
generateButton.addEventListener('click', generateMeal)



