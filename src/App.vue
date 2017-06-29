<template>
  <div id="app">
    <mq-header></mq-header>
    <sider-bar></sider-bar>
    <div class="content">
       <ol class="list-inline">
        <li>
          <router-view></router-view>
        </li>
        <li>
          <chat-room></chat-room>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import mqHeader from './components/Header'
import SiderBar from './components/Sidebar'
import ChatRoom from '@/components/chatroom'
export default {
  name: 'sidebar',
  components: { mqHeader,SiderBar,ChatRoom }
}
</script>
