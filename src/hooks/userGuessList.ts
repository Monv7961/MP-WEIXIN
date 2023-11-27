import type { GuessInstance } from '@/types/component'

/**
 * 猜你喜欢组合式函数
 */
export const userGuessList = () => {
  //获取猜你喜欢组件实例
  const guessRef = ref<GuessInstance>()

  //滑动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  //返回ref 和事件处理函数
  return {
    guessRef,
    onScrolltolower
  }
}
