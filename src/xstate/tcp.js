// Import shorthands from xstate object
const { assign } = xstate;

// 定义名称守卫、动作、服务等

// 守卫
const cmdSent = context => context.cmdSent;
const respReceived = context => context.respReceived;

// 动作
const sendCmd = assign({ cmdSent: true });
const showResp = assign({ respReceived: true });

// 服务 
const waitResp = (ctx, ev) => (cb) => {
    setTimeout(() => {
        cb({ type: 'respReceived' });
    }, 3000);
}

// 状态机定义
return {
    machine: {
        context: {
            cmdSent: false,
            respReceived: false
        },
        initial: 'ready',
        states: {
            ready: {
                on: {
                    'sendCmd': {
                        target: 'waitingResp',
                        actions: sendCmd
                    }
                }
            },
            waitingResp: {
                invoke: { src: 'waitResp' },
                on: {
                    'respReceived': {
                        target: 'ready',
                        actions: showResp
                    },
                    'timeout': 'timeout'
                }
            },
            timeout: {
                on: {
                    'respReceived': {
                        target: 'ready',
                        actions: showResp
                    }
                }
            }
        }
    },
    config: {
        guards: {
            "cmdSent": cmdSent,
            "respReceived": respReceived
        },
        actions: { sendCmd, showResp },
        services: { waitResp }
    }
}