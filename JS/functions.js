
function prepareDes(Des){
    let regex = /L10N House/gmi;
    return Des.replace(regex,` <span class="fw-bold"> <span class="firstColor">L10N</span> 
                <span class="secondColor"> House </span></span>`)
            
}

function showData(serviceindex){
   let service = services[serviceindex];
   $(`.popup[data-popup-name="service"] .body`).append(
      `
              <h3 class="mb-4 firstColor text-center">${service.title}</h3>
        <div class="row mb-4">
          <div class="col-lg-6">
            <div class="item">
              <p>${prepareDes(service.description.substr(0,610))}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="item">
              <img src="./Images/images/${service.img}" alt="" class="img-fluid rounded-4">
            </div>
          </div>
        </div>

        ${showServices(service.sections)}

      `
   )


   openpopup('service') ;
}

function showServices(sections){
   let sectionHtml = ` ` ;

   sections.forEach(section => {
      sectionHtml += `
              <div class="section my-3">
          <h3 class="firstColor">${section.title}</h3>
          <ol>
            ${showpoints(section.points)}
          </ol>
        </div>
      `;
   });
   return sectionHtml ;
}

function showpoints(points){
   let pointsHtml = `` ;
   
   points.forEach(function(point){
      pointsHtml += `
      <li>${point}</li>
      `
   });
   return pointsHtml ;
}


function showsectors(){
   let content = $(`.popup[data-popup-name='sectors'] .row`);
       sectors.forEach(function(sector,index){
            content.append(
                 `   <div class="col-lg-3 my-3 part mx-3">
              <div class="item text-center">
                 <img src="./Images/images/sec/${sector.icon}" alt="">
                 <p>${sector.name}</p>
              </div>
            </div>
                 `
         )
         
      
       })
}

function showLanguges(){
   console.log(languges)
   let content = $(`.popup[data-popup-name='languages'] .row`);
   languges.forEach(function(language,index){
      content.append(
         ` 
            <h4 class="mb-2">${language.continent}</h4>
             <ul class="list-unstyled">
              <li class="d-flex gap-2 mb-2">
                  <i class="fa-regular fa-circle-dot"></i>
                  <p>${language.languages}</p>
                </li>
             </ul>
         `
      )
      console.log(languges)
   })
}


function openpopup(popupName){
   let $popupEle = $(`.popup[data-popup-name='${popupName}']`);
   $popupEle.fadeIn(1000);

   $("body").css("overflow","hidden");

}

function closepopup(){
   $(".popup").fadeOut(1000);
   $("body").css("overflow","initial");

}

