export default function formHandler(req, res) {
    // req.body has the form values
    console.log(req.body)
    // Here is where you would validate the form values and
    // do any other actions with it you need (e.g. save it somewhere or
    // trigger an action for the user).
    //
    // e.g.
    if (!req.body.name) {
      return res.status(422).json("Name field is required")
    }
    return res.json(`OK`)
  }