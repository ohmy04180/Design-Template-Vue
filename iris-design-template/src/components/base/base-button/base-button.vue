<template>
  <div>
    <button
        class="button"
        :class="[buttonTypeClass, themeClass, subThemeClass, sizeClass]"
        :disabled="disabled"
        :type="type"
        @click="handleClick($event)"
        @mousedown="mouseDown($event)"
        :title="title"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    /**
     * 버튼 유형 (button, submit)
     */
    type: {
      type: String,
      default: "button"
    },
    /**
     * 버튼 UI 유형 (button, icon)
     */
    buttonType: {
      type: String
    },

    /**
     * 버튼 테마
     */
    theme: {
      type: String,
      default: "tertiary"
    },

    /**
     * 추가 버튼 테마
     */
    subTheme: {
      type: String,
      default: ""
    },

    /**
     * 버튼 사이즈
     */
    size: {
      type: String,
      default: "md"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    buttonTypeClass() {
      // type 값의 유무로 button인지 icon-button인지 판별
      return this.buttonType ? `button--${this.buttonType}` : "";
    },
    themeClass() {
      // theme가 있을 경우 값 셋팅
      return this.theme ? `button--${this.theme}` : "";
    },
    subThemeClass() {
      // theme가 있을 경우 값 셋팅
      return this.subTheme ? `button--${this.subTheme}` : "";
    },
    sizeClass() {
      // size 유무에 따라 클래스 분기
      return this.size ? `button--${this.size}` : "";
    }
  },
  methods: {
    handleClick($event) {
      this.$emit("click", $event);
    },
    mouseDown($event) {
      this.$emit("mousedown", $event);
    }
  }
};
</script>

<style scoped>
</style>

<docs>
버튼

## Examples
기본 텍스트 버튼:

```jsx
<base-button>text button</base-button>
```

아이콘 버튼:

```jsx
<base-button theme="link" >test</base-button>
```
</docs>