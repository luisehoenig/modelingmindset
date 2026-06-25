/* Load and create JSPsych */
const jsPsych = initJsPsych();

const timeline = [];

/* Preload stimuli */
const faces = [
  "img/139_32.jpg",
  "img/138_7.jpg",
  "img/137_13.jpg",
  "img/136_9.jpg",
  "img/135_28.jpg",
  "img/134_21.jpg",
  "img/133_4.jpg",
  "img/132_29.jpg",
  "img/131_6.jpg",
  "img/129_29.jpg",
  "img/128_20.jpg",
  "img/127_2.jpg"
];

const preload = {
  type: jsPsychPreload,
  images: faces
};

/* create experiment timeline */

timeline.push(preload);
timeline.push(...start_instructions);
timeline.push(...face_trials);
timeline.push(...questionnaire_mindset);
timeline.push(...end_instructions);

jsPsych.run(timeline);
