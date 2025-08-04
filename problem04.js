/** Problem 04 - (Delete / Store) */
var fileName = 'pdfData.jpg';
var ext = fileName.split('.').pop();

if (fileName[0] === '#' || ext === 'pdf' || ext === 'docx') {
  console.log('Store');
} else {
  console.log('Delete');
}
