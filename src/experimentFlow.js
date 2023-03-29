import { Machine } from 'xstate';

const experimentFlow = Machine({
  id: 'experimentFlow',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'initializing'
      }
    },
    initializing: {
      on: {
        INITIALIZED: 'preprocessing',
        ERROR: 'idle'
      }
    },
    preprocessing: {
      on: {
        PREPROCESSED: 'firstPhase'
      },
      async onEntry(context) {
        // 执行预处理操作
        await performPreprocessing(context);
      }
    },
    firstPhase: {
      on: {
        FIRST_PHASE_COMPLETE: 'secondPhase'
      }
    },
    secondPhase: {
      on: {
        SECOND_PHASE_COMPLETE: 'experimentComplete'
      }
    },
    experimentComplete: {
      on: {
        SAVE_RESULTS: 'savingResults'
      }
    },
    savingResults: {
      on: {
        RESULTS_SAVED: 'resultAnalysis'
      }
    },
    resultAnalysis: {
      type: 'final'
    }
  }
});
