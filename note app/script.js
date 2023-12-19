var makebtn = document.querySelector("#makebtn");
var maketask = document.querySelector("#maketask");
var overlay = document.querySelector("#overlay");
var closebtn = document.querySelector("#closebtn");
var title = document.querySelector("#title");
var data = document.querySelector("#data");
var vacant = document.querySelector(".vacant");


if (localStorage.getItem("tasks") === null) {
  localStorage.setItem("tasks", JSON.stringify([]));
}

makebtn.addEventListener("click", function () {
  overlay.style.display = "initial";
});

closebtn.addEventListener("click", function () {
  overlay.style.display = "none";
});

maketask.addEventListener("click", function () {
  const valueoftitle = title.value;
  const valueofdata = data.value;

  const dataofInputs = {
    title: valueoftitle,
    data: valueofdata,
  };
  // pahle ke tasks nikalo
  const allPreviousTasks = localStorage.getItem("tasks");
  // unko parse kro
  const allPreviousTasksparsed = JSON.parse(allPreviousTasks);
  // usmein ek aur task jodo
  allPreviousTasksparsed.push(dataofInputs);
  // firse stringify karo
  const stringifiedtasks = JSON.stringify(allPreviousTasksparsed);
  // add krdo local storage me
  localStorage.setItem("tasks", stringifiedtasks);
  // overlayscreen ko htaw or inputs ko khali krdo
  title.value = "";
  data.value = "";
  overlay.style.display = "none";
  printer();
});
printer();
function printer() {
  const alltasks = localStorage.getItem("tasks");
  const parsedtasks = JSON.parse(alltasks);
  var clutter = "";
  parsedtasks.forEach(function (elem) {
    clutter += ` <div class="card w-40 p-4 bg-zinc-100">
        <h1 class="text-2xl break-words">${elem.title}</h1>
        <p class="text-sm tracking-tight mt-3 break-words">${elem.data}</p>
    </div>`;
  });
  document.querySelector(".cards").innerHTML = clutter;
  if(parsedtasks.length > 0){
    vacant.style.display = "none";
}
};

