window.jsPDF = window.jspdf.jsPDF;

var doc = new jsPDF();

$('#editorjs').click(function () {
  doc.fromHTML($('#editorjs').html(),15,15);
  doc.save('sample-file.pdf');
})