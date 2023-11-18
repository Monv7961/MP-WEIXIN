import 'vue'
import wGuess from '@/components/Guess/Guess.vue'
import wSwiper from '@/components/wSwiper/wSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    wSwiper: typeof wSwiper
    Guess: typeof Guess
  }
}

// 组件实例类型
export type wGuessInstance = InstanceType<typeof Guess>
