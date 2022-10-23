const pastEvents = [{
  title: "Title",
  description: "Description",
  url: "../assets/images/event-5.jpg",
  imgAlt: "event",
  price: 35
}, {
  title: "Title",
  description: "Description",
  url: "../assets/images/event-6.jpg",
  imgAlt: "event",
  price: 18
}, {
  title: "Title",
  description: "Description",
  url: "../assets/images/event-7.jpg",
  imgAlt: "event",
  price: 39
}, {
  title: "Title",
  description: "Description",
  url: "../assets/images/event-8.jpg",
  imgAlt: "event",
  price: 25
}];


pastEvents.forEach((result, index) => {
  // Select element container
  const pastEventsContainer = document.getElementById('past-events');

  // Create card element
  const pastEventsCard = document.createElement('div');
  pastEventsCard.className = "card",

  // construct card content
  pastEventsCard.innerHTML = `
    <img src="${result.url}" class="card-img-top" alt="${result.imgAlt}" />
    <div class="card-body">
      <h5 class="card-title">${result.title}</h5>
      <p class="card-text">
        ${result.description}
      </p>
      <div class="price d-flex flex-row mb-2 justify-content-around align-items-center">
        <p>Price: <span>$${result.price}</span></p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
          More info
        </button>
      </div>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="modal-img">
                <img src="${result.url}" class="card-img-top" alt="${result.imgAlt}" />
              </div>
              <div class="modal-description">
                <h5 class="card-title">${result.title}</h5>
                <p class="card-text">
                  ${result.description}
                </p>
                <p class="card-text">
                  ${result.description}
                </p>
                <p class="card-text">
                  Price: <span>$${result.price}</span>
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Buy tickets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

  // Append newyly created card element to the container
  pastEventsContainer.appendChild(pastEventsCard);
});