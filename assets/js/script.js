document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".copy-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let codeBlock = this.nextElementSibling.querySelector(".code-block");
            let textArea = document.createElement("textarea");
            textArea.value = codeBlock.innerText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            this.innerText = "Copied!";
            setTimeout(() => {
                this.innerText = "Copy";
            }, 2000);
        });
    });
});
