/* Create timeline */
window.start_instructions = window.start_instructions || [];

/* Welcome page */
const welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "Welcome to this study on detecting microexpressions!",
  choices: ["Start"]
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

/* Condition 1 instruction */
const instruction_condition1 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>TEXT FÜR CONDITION 1</p>
    <p>Press the button to start the experiment.</p>
  `,
  choices: ["Start experiment"],
  data: {
    task: "instruction",
    condition_instruction: "condition1"
  }
};

/* Condition 2 instruction */
const instruction_condition2 = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <p>TEXT FÜR CONDITION 2</p>
    <p>Press the button to start the experiment.</p>
  `,
  choices: ["Start experiment"],
  data: {
    task: "instruction",
    condition_instruction: "condition2"
  }
};
