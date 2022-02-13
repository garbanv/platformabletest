const axios = require('axios')

export default function formHandlerOS(req, res) {

    const form = {
      email:req.body.email
    }

  const play = axios({
    method: 'post',
    url: `https://api.mailerlite.com/api/v2/groups/110042657/subscribers`,
    data: form,
    headers: {
        'Content-type':'application/json',
        'X-MailerLite-ApiKey': `${process.env.GATSBY_MAILERLITE_API_KEY}`
    }
  })
  .then(function (response) {
   console.log(response)
   if(response.statusText==='OK')
    res.json('OK')
  })
  .catch(error => {  
    // Handle error.
    console.log('An error occurred:', error);
    res.send(error)
 
  })

/*   if (!req.body.name) {
    return res.status(422).json("missing data")
  } */

 
/* return res.json(`OK`) */
  
}

