<template>
  <div class="todo">
    <h1>{{ title }}</h1>
    示例：<input type="text" placeholder="请输入文字...." class="form-control" v-model="newItem" @keyup.enter="addNewItem()"/>
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" @click="toggleFinish(item)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data () {
    return {
      title: 'This is a todoList example!',
      items: [],
      newItem: ''
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNewItem: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })

      this.newItem = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.todo input{
  padding:10px 0;
  width:200px;
}

.todo ul li{
  display:block;
  cursor:pointer;
  padding:10px 0;
}

.finished{
  text-decoration:line-through;
}
</style>
