/* =========================================================================
   config.js
   -------------------------------------------------------------------------
   Edit THIS file to point the experiment at your own stimuli.
   Nothing in experiment.js needs to change for a normal setup.
   ========================================================================= */

// ---------------------------------------------------------------------------
// 1) IMAGE LIST
// ---------------------------------------------------------------------------
// Put your face images inside the "img" folder (next to index.html) and list
// their filenames here. You need at least 140 filenames — one image is shown
// per trial with NO repeats, in fully randomized order.
//
// If you'd rather not hand-type the list, you can instead create a file at
// img/manifest.json containing a JSON array of filenames, e.g.:
//   ["face001.jpg","face002.jpg", ... ]
// If that file exists and loads successfully, it will be used automatically
// and the IMAGE_LIST array below will be ignored.
//
// EDIT THE ARRAY BELOW (placeholder names shown — replace with your real files):
const IMAGE_LIST = [
  // "face001.jpg", "face002.jpg", "face003.jpg", ... add all your filenames
];

// ---------------------------------------------------------------------------
// 2) TASK PARAMETERS
// ---------------------------------------------------------------------------
const N_TRIALS = 140;              // total number of face trials
const N_BLOCKS = 7;                // 140 / 20
const TRIALS_PER_BLOCK = 20;
const FACE_DURATION_MS = 5000;     // 5 seconds
const FEEDBACK_DURATION_MS = 1500; // how long "Correct!"/"Incorrect" is shown
const FIXATION_MIN_S = 1;
const FIXATION_MAX_S = 4;
const FIXATION_MEAN_S = 2;

// The six response options, shown in this fixed order.
const EMOTION_OPTIONS = [
  "Sadness", "Happiness", "Anger", "Fear", "Surprise", "Disgust"
];

// Text for the two slider questions asked after every 20-trial block.
// (Edit the wording to whatever your study needs.)
const SLIDER_QUESTIONS = [
  "How accurate do you think your responses have been so far?",
  "How confident are you in your ability to identify microexpressions?"
];
