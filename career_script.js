document.addEventListener("DOMContentLoaded", function () {
  const jobs = [
    {
      title: "Software Engineer",
      location: "Mumbai, India",
      description: "Build scalable web applications.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description: "Design intuitive user experiences.",
    },
    {
      title: "Marketing Specialist",
      location: "London, UK",
      description: "Drive digital marketing strategies.",
    },
  ];

  const jobContainer = document.getElementById("jobs-container");

  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <button class="apply-btn">Apply Now</button>
        `;

    jobContainer.appendChild(jobCard);
  });
});
