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

//스토어를 왜 이케 해야만 불러 올 수 있나? 그르게...

const storeCommit = () => {
  const store = useStore();

  return {
    countResult: (object) => store.commit("count/countResult", object),
    changeSelect: (e, type) => {
      store.commit("resultColor/updateResultColor", {
        type: type,
        value: e.target.value,
      });
    },
  };
};

export { storeData, storeCommit };
