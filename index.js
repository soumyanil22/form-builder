const container = document.querySelector("#container");
const form = document.getElementById("form");
let draggedElement = null;

// function for drag and drop
function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.innerHTML);
    draggedElement = event.target;

    if (!event.target.classList.contains("sidebar-item")) {
        setTimeout(() => event.target.classList.add("hidden"), 0);
    }
}

function onDragEnd(event) {
    event.target.classList.remove("hidden");
    draggedElement = null;
}

function allowDrop(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();

    if (draggedElement && form.contains(draggedElement)) {
        return;
    }

    let val = 1;
    const draggedElementHTML = event.dataTransfer.getData("text/plain");

    if (draggedElementHTML.includes("Input")) {
        const labelDiv = document.createElement("div");

        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        img.src = "./delete.svg";
        img.setAttribute("height", "40px");
        img.setAttribute("width", "40px");
        img.setAttribute("alt", "delete-icon");

        img.addEventListener("click", () => {
            elementCont.remove();
        });

        imgContainer.append(img);
        labelDiv.append(imgContainer);

        const label = document.createElement("label");
        label.innerHTML = "Sample Label";
        label.setAttribute("for", `Input${val}`);

        label.addEventListener("click", function () {
            const input = document.createElement("input");
            input.type = "text";
            input.value = label.innerHTML;

            label.parentNode.replaceChild(input, label);

            input.focus();
            input.select();

            input.addEventListener("blur", function () {
                if (input.value === "") {
                    label.innerHTML = "Sample Label";
                } else {
                    label.innerHTML = input.value;
                }
                input.parentNode.replaceChild(label, input);
            });

            input.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    label.innerHTML = input.value;
                    input.parentNode.replaceChild(label, input);
                }
            });
        });

        labelDiv.append(label);
        labelDiv.append(imgContainer);

        console.log(labelDiv);

        const InputElement = document.createElement("input");
        InputElement.setAttribute("type", "text");
        InputElement.setAttribute("id", `Input${val++}`);
        InputElement.setAttribute("class", "form-element");
        InputElement.setAttribute("placeholder", "Sample Placeholder");

        const elementCont = document.createElement("div");
        elementCont.append(labelDiv);
        elementCont.append(InputElement);
        elementCont.setAttribute("draggable", "true");

        elementCont.setAttribute("draggable", "true");
        elementCont.addEventListener("dragstart", onDragStart);
        elementCont.addEventListener("dragend", onDragEnd);
        elementCont.addEventListener("dragover", allowDrop);
        elementCont.addEventListener("drop", onDropRearrange);

        form.append(elementCont);
    }

    if (draggedElementHTML.includes("Select")) {
        const elementCont = document.createElement("div");
        const labelDiv = document.createElement("div");
        const imgContainer = document.createElement("div");

        const img = document.createElement("img");
        img.src = "./delete.svg";
        img.setAttribute("height", "40px");
        img.setAttribute("width", "40px");
        img.setAttribute("alt", "delete-icon");

        img.addEventListener("click", () => {
            elementCont.remove();
        });

        const label = document.createElement("label");
        label.innerHTML = "Sample Label";
        label.setAttribute("for", `Select${val}`);

        label.addEventListener("click", function () {
            const input = document.createElement("input");
            input.type = "text";
            input.value = label.innerHTML;

            label.parentNode.replaceChild(input, label);

            input.focus();
            input.select();

            input.addEventListener("blur", function () {
                if (input.value === "") {
                    label.innerHTML = "Sample Label";
                } else {
                    label.innerHTML = input.value;
                }
                input.parentNode.replaceChild(label, input);
            });

            input.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    label.innerHTML = input.value;
                    input.parentNode.replaceChild(label, input);
                }
            });
        });

        imgContainer.append(img);
        labelDiv.append(label);
        labelDiv.append(imgContainer);

        elementCont.append(labelDiv);

        const selectElement = document.createElement("select");

        selectElement.setAttribute("id", `Select${val++}`);
        selectElement.setAttribute("class", "form-element");
        selectElement.options[0] = new Option(
            "Sample Option 1",
            "Sample Option 1"
        );
        selectElement.options[1] = new Option(
            "Sample Option 2",
            "Sample Option 2"
        );
        selectElement.options[2] = new Option(
            "Sample Option 3",
            "Sample Option 3"
        );

        const addOptionButton = document.createElement("button");
        addOptionButton.innerText = "Add Option";
        addOptionButton.addEventListener("click", () => {
            const newOptionValue = prompt("Enter new option value:");
            if (newOptionValue) {
                const newOption = new Option(newOptionValue, newOptionValue);
                selectElement.add(newOption);
            }
        });
        imgContainer.append(addOptionButton);

        const deleteOptionButton = document.createElement("button");
        deleteOptionButton.innerText = "Delete Selected Option";
        deleteOptionButton.addEventListener("click", () => {
            const selectedIndex = selectElement.selectedIndex;
            if (selectedIndex > -1) {
                selectElement.remove(selectedIndex);
            }
        });
        imgContainer.append(deleteOptionButton);

        elementCont.setAttribute("draggable", "true");
        elementCont.addEventListener("dragstart", onDragStart);
        elementCont.addEventListener("dragend", onDragEnd);
        elementCont.addEventListener("dragover", allowDrop);
        elementCont.addEventListener("drop", onDropRearrange);

        elementCont.append(selectElement);
        form.append(elementCont);
    }

    if (draggedElementHTML.includes("Textarea")) {
        const elementCont = document.createElement("div");
        const labelDiv = document.createElement("div");
        const imgContainer = document.createElement("div");

        const img = document.createElement("img");
        img.src = "./delete.svg";
        img.setAttribute("height", "40px");
        img.setAttribute("width", "40px");
        img.setAttribute("alt", "delete-icon");

        img.addEventListener("click", () => {
            elementCont.remove();
        });

        const label = document.createElement("label");
        label.innerHTML = "Sample Label";
        label.setAttribute("for", `Select${val}`);

        label.addEventListener("click", function () {
            const input = document.createElement("input");
            input.type = "text";
            input.value = label.innerHTML;

            label.parentNode.replaceChild(input, label);

            input.focus();
            input.select();

            input.addEventListener("blur", function () {
                if (input.value === "") {
                    label.innerHTML = "Sample Label";
                } else {
                    label.innerHTML = input.value;
                }
                input.parentNode.replaceChild(label, input);
            });

            input.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    label.innerHTML = input.value;
                    input.parentNode.replaceChild(label, input);
                }
            });
        });

        imgContainer.append(img);
        labelDiv.append(label);
        labelDiv.append(imgContainer);

        elementCont.append(labelDiv);

        const textarea = document.createElement("textarea");
        textarea.setAttribute("placeholder", "Sample Placeholder");
        textarea.setAttribute("id", `Select${val++}`);
        textarea.setAttribute("class", "form-element");

        elementCont.setAttribute("draggable", "true");
        elementCont.addEventListener("dragstart", onDragStart);
        elementCont.addEventListener("dragend", onDragEnd);
        elementCont.addEventListener("dragover", allowDrop);
        elementCont.addEventListener("drop", onDropRearrange);

        elementCont.append(textarea);
        form.append(elementCont);
    }
}

function onDropRearrange(event) {
    event.preventDefault();

    const targetContainer = event.currentTarget;

    if (draggedElement !== targetContainer) {
        const elements = [...form.children];
        const draggedIndex = elements.indexOf(draggedElement);
        const targetIndex = elements.indexOf(targetContainer);

        if (draggedIndex < targetIndex) {
            targetContainer.after(draggedElement);
        } else {
            targetContainer.before(draggedElement);
        }
    }
}

document.getElementById("save").addEventListener("click", () => {
    // Create an array to hold the form data
    const formData = [];

    // Get all form elements
    const formElements = document.querySelectorAll(".form-element");

    // Loop through each element and extract its data
    formElements.forEach((element) => {
        const type = element.tagName.toLowerCase();
        const label =
            element.previousElementSibling.querySelector("label").innerText;
        let data = { id: element.id, type, label };

        if (type === "input" || type === "textarea") {
            const placeholder = element.placeholder;
            data.placeholder = placeholder;
        }

        if (type === "select") {
            const options = Array.from(element.options).map(
                (option) => option.value
            );
            data.options = options; // Add options for select elements
        }

        formData.push(data);
    });

    // Log the form data in JSON format
    console.log(JSON.stringify(formData, null, 2));
});
