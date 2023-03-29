import { Machine } from 'xstate';
import experimentFlow from './experimentFlow';

// 创建状态机实例
const machine = Machine(experimentFlow);

// 获取状态机的当前状态
const currentState = machine.initialState;

// 向状态机发送事件
const nextState = machine.transition(currentState, 'START');
