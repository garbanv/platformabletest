import * as React from "react"

export default function FormPage() {
  const [value, setValue] = React.useState({
      name:"maria",
      lastname:"murray"
  })
  const [serverResponse, setServerResponse] = React.useState(``)

  // Listen to form changes and save them.
/*   function handleChange(e) {
    value[e.target.id] = e.target.value
    setServerResponse(``)
    setValue({ ...value })
  } */

  // When the form is submitted, send the form values
  // to our function for processing.
  async function onSubmit(e) {
    e.preventDefault()
    const response = await window
      .fetch(`/api/form`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      })
      .then(res => res.json())

    setServerResponse(response)
  }

  return (
    <div>
      <div>Server response: {serverResponse}</div>
      <form onSubmit={onSubmit} method="POST" action="/api/form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={value[`name`] || ``}

        />
        <input type="submit" />
      </form>
    </div>
  )
}