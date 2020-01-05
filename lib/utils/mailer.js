const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function mail() {
  // create reusable transporter object using the default SMTP transport
  let transport = {
    name: 'transport',
    version: '0.1.0',
    send: (mail, callback) => {
      let input = mail.message.createReadStream();
      input.pipe(process.stdout);
      input.on('end', function() {
        callback(null, true);
      });
    }
  };
  let transporter = nodemailer.createTransport(transport);
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Death"', // sender address
    to: '', // list of receivers
  });
  console.log(info);
}
mail();
module.exports = { mail };
