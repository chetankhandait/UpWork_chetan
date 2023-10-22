$(document).ready(function() {
    $('#generate-pdf-button').click(function() {
        const content = $('.wrapper');

        html2canvas(content[0]).then(function(canvas) {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

            position = imgHeight;

            while (position < canvas.height) {
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
                position += imgHeight;
            }

            pdf.save('document.pdf');
        });
    });
});