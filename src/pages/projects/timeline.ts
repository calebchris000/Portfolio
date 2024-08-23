type ContentType = {
  title: string;
  description: string;
  image: string;
  liveLink: string;
};

export const createTimeline = (element: string, contents: ContentType[]) => {
  let heightAggregation = 0;
  const parent = document.querySelector(element);
  if (!parent) {
    console.log("no par");
    return;
  }

  const stalk = document.createElement("div");
  stalk.classList.add("stalk");
  parent.appendChild(stalk);

  for (let i = 0; i < contents.length; i += 1) {
    const content = contents[i];

    const node = document.createElement("div");
    node.classList.add("node_parent");
    const child = document.createElement("div");
    child.classList.add("node_child");
    if (i % 2 !== 0 && window.innerWidth >= 768) {
      child.classList.add("node_child_reverse");
    }
    node.appendChild(child);
    stalk.appendChild(node);

    const title = document.createElement("span");
    const description = document.createElement("span");

    const action = document.createElement("div");
    const live = document.createElement("button");
    const imageView = document.createElement("button");

    live.type = "button";
    imageView.type = "button";
    live.textContent = "See Live";
    imageView.textContent = "View Images";

    action.classList.add("node_action");
    live.classList.add("live");
    imageView.classList.add("image_view");
    title.classList.add("node_title");
    description.classList.add("node_description");
    title.textContent = content.title;
    description.textContent = content.description;

    live.onclick = () => {
      window.open(content.liveLink, "_blank");
    };

    child.appendChild(title);
    child.appendChild(description);
    showOnIntersection(child);
    showOnIntersection(node);

    action.appendChild(live);
    action.appendChild(imageView);
    child.appendChild(action);

    const bounding = child.getBoundingClientRect();
    heightAggregation += bounding.height + 100;

    if (i === 0) {
      node.style.top = `0px`;
    } else {
      node.style.top = `${heightAggregation - 600}px`;
    }
  }
  stalk.style.height = `${heightAggregation - 100}px`;
  console.log(heightAggregation);
};

const showOnIntersection = (element: HTMLElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add("show");
        } else {
          // element.classList.remove("show");
        }
      });
    },
    { rootMargin: "0px 0px -200px 0px" },
  );

  observer.observe(element);
};
