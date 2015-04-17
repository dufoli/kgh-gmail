function testSchemas() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('highlight_restaurant.html').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Test Email markup - ' + new Date(),
    htmlBody: htmlBody,
  });
}
