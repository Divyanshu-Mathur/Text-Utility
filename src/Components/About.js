import React from 'react'

export default function About(props) {
  let myStyle = {
    backgroundColor: props.Mode === 'dark' ? '#212529' : 'white',
    color: props.Mode === 'dark' ? 'white' : '#212529'
  }

  return (
    <div className='container' >
      <h1 className='my-3'>About us</h1>
      Introducing TextToolKit, your ultimate destination for all your text-related needs. Whether you're composing an essay, drafting an email, or jotting down notes, our comprehensive toolset is here to simplify your text analysis and manipulation tasks. With an intuitive interface and a plethora of features, TextToolKit empowers you to effortlessly manage your text with precision and efficiency.

      As you input your text into our spacious text box, our tool instantly provides feedback on word count, character count, and estimated reading time. Want a quick preview of your text? Our preview box offers a sneak peek, ensuring everything appears as desired before proceeding.

      But that's just the tip of the iceberg. With TextToolKit, you can manipulate your text effortlessly. Convert text to uppercase or lowercase with a single click, clear the text box instantly, or copy your text to the clipboard for seamless sharing and collaboration. Plus, for those late-night study sessions or dimly lit environments, our dark mode toggle ensures optimal viewing comfort.

      But we don't stop there. With optional features like spell check, save/load functionality, and easy sharing options, TextToolKit caters to your diverse needs. And with our commitment to responsive design, you can access TextToolKit anytime, anywhere, on any device.

      At TextToolKit, we value your feedback. Whether you have suggestions for improvement, encounter any issues, or simply want to reach out, we're here to assist. So why hesitate? Join the multitude of users who rely on TextToolKit daily to enhance their text editing experience. Give it a try now and witness the difference firsthand.
      {/* <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Aim of this project
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}
