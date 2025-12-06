/** 
  Requirement: Populate the "Weekly Course Breakdown" list page.

  Instructions:
  1. Link this file to `list.html` using:
     <script src="list.js" defer></script>

  2. In `list.html`, add an `id="week-list-section"` to the
     <section> element that will contain the weekly articles.

  3. Implement the TODOs below.
*/

// --- Element Selections ---
// TODO: Select the section for the week list ('#week-list-section').

// --- Functions ---

/**
 * TODO: Implement the createWeekArticle function.
 * It takes one week object {id, title, startDate, description}.
 * It should return an <article> element matching the structure in `list.html`.
 * - The "View Details & Discussion" link's `href` MUST be set to `details.html?id=${id}`.
 * (This is how the detail page will know which week to load).
 */
function createWeekArticle(week) {
  // ... your implementation here ...

  const{id,title,startDate,description}=week;
  const article=document.createElement('article');
  article.className='week-article';
  const h3=document.createElement('h3');
  h3.textContent=title || '';
  article.appendChild(h3);

  if(startDate){
    
    const dateP=document.createElement('P');
    dateP.textContent=`Start Date: ${startDate}`;
    article.appendChild(dateP);
  }

    const descP=document.createElement('P');
    descP.textContent=description || '';
    article.appendChild(descP);

    const detailsLink = document.createElement('a');
    detailsLink.href = `details.html?id=${id}`;
    detailsLink.textContent = 'View Details & Discussion';
    detailsLink.className = 'details-link';
    article.appendChild(detailsLink);

    return article;
  }



/**
 * TODO: Implement the loadWeeks function.
 * This function needs to be 'async'.
 * It should:
 * 1. Use `fetch()` to get data from 'weeks.json'.
 * 2. Parse the JSON response into an array.
 * 3. Clear any existing content from `listSection`.
 * 4. Loop through the weeks array. For each week:
 * - Call `createWeekArticle()`.
 * - Append the returned <article> element to `listSection`.
 */
async function loadWeeks() {
  // ... your implementation here ...
  try{
     const response = await fetch('weeks.json');
        if (!response.ok) {
            throw new Error('Failed to load weeks.json');
        }
 const weeks = await response.json();

 const listSection = document.querySelector('#week-list-section');
 listSection.innerHTML='';

 weeks.forEach(week => {
  const article=createWeekArticle(week);
  listSection.appendChild(article);
 });

}catch(error){
  console.error('Error loading weeks:', error);
}
 
document.addEventListener('DOMContentLoaded', loadWeeks);
}
