alert("Welcome to my Vishal's Portfolio");


let a = document.getElementById("btn1").addEventListener("click",my_function)

function my_function() {
    console.log("You clicked the button to download resume");
}
console.log(a)

function downloadPDF() {
      // Replace with the actual path or URL to your PDF
      const pdfUrl = 'example.pdf';

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'file:///C:/Users/rp662/OneDrive/Desktop/TARGET%20INTERNSHIP/RESUME.pdf'; // You can change the name here
      link.click();
    }