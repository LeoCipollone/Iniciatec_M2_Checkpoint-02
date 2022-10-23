const upcomingEvents = [{
  title: "Title",
  description: "Description",
  url: "../assets/images/event-1.jpg",
  imgAlt: "event",
  price: 20
}, {
  title: "Title",
  description: "Description",
  url: "../assets/images/event-2.jpg",
  imgAlt: "event",
  price: 40
}, {
  title: "Title",
  description: "Description",
  url: "../assets/images/event-3.jpg",
  imgAlt: "event",
  price: 35
}, {
  title: "Title",
  description: "Description",
  url: "../assets/images/event-4.jpg",
  imgAlt: "event",
  price: 18
}];


upcomingEvents.forEach((result, index) => {
  // Select element container
  const upcomingEventsContainer = document.getElementById('upcoming-events');

  // Create card element
  const upcomingEventsCard = document.createElement('div');
  upcomingEventsCard.className = "card",

  // construct card content
  upcomingEventsCard.innerHTML = `
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
  upcomingEventsContainer.appendChild(upcomingEventsCard);
});