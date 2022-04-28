// 컴포넌트 코드 외부 분리

import { computed, reactive, toRefs } from "vue";
import { useStore } from "vuex";

const storeData = () => {
  const store = useStore();
  let state = reactive({
    count: computed(() => store.state.count.count),
    resultColor: computed(() => store.state.resultColor.resultColor),
    resultList: computed(() => store.state.count.result),
  });
  return toRefs(state);
};

export { storeData };
