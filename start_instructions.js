/* Create timeline */
window.start_instructions = window.start_instructions || [];

/* Welcome page */
const welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "Welcome to this study on detecting microexpressions! Press any key to begin."
};
window.start_instructions.push(welcome);

/* Consent page */
const consent = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p><strong>Consent Form</strong></p>
    <p>Do you agree to participate in this study?</p>
  `,
  choices: ["I agree", "I do not agree"],
  data: {
    task: "consent"
  }
};
window.start_instructions.push(consent);

/* Instruction page */
const instruction = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <p>In this study, we are interested in how people perceive subtle emotional signals in human faces. 
    Research suggests that facial expressions often contain very brief and subtle changes in human mimic, also referred to as microexpressions. 
    These expressions can occur very quickly and may provide information about a person's emotional state, even when the expression is difficult to detect consciously.</p>

    <p>The ability to recognize subtle emotional expressions has been linked to aspects of emotional intelligence and social perception. 
    Nevertheless, there are large individual differences. Most people have little knowledge about how skilled they are at this ability before completing a task like the present one.
</p>

    <p>In the following task, you will be presented with a series of faces.
 Each face may contain a subtle microexpression indicating one of several emotions.
 Please look at each face carefully. After each face, you will see six possible emotions:</p>

    <ul>
      <li>Sadness</li>
      <li>Happiness</li>
      <li>Anger</li>
      <li>Fear</li>
      <li>Surprise</li>
      <li>Disgust</li>
    </ul>

    <p>Your task is to choose the emotion that you believe was expressed in the face.
 Some faces may be easier to judge than others. Please rely on your intuition and provide your best answer on every trial. You will not always be able to tell whether you are correct.
 After each response, you will receive feedback indicating whether your answer was correct or incorrect.</p>

    <p>Press any key to start the experiment!.</p>
  `
};

window.start_instructions.push(instruction);
