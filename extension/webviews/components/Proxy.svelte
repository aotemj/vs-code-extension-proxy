<script lang="ts">
    import {onMount} from 'svelte'
    let port = '',
        startListen: false;

    function handleStartListen() {
        console.log('startListen');
    }
    onMount (async ()=>{
        console.log(window);
    })
</script>
<div class="proxy-container">
    <div class="inner">
        <div class="top">
            <span class="label">Port</span>
            <input type="text" bind:value={port} placeholder="请输入服务端口"/>
            <button on:click={handleStartListen}> Start
            </button>
        </div>
        <!--  是否开启监听 -->
        {#if startListen}
            <div>
                <p>当前监听端口为：{port}</p>
            </div>
        {/if}
        <div class="tips">
            <p>Tips:</p>
            <p class="tip">请输入要代理的服务端口信息，点击Start 开启代理</p>
        </div>
    </div>
</div>

<style lang="scss">
  .proxy-container {
    > .inner {
      > .top {
        display: flex;
        align-items: center;
        min-width: 300px;

        input {
          flex: 1;
          margin-left: 10px;
        }

        button {
          margin-left: 10px;
          max-width: 100px;
        }
      }

      > .tips {
        margin-top: 30px;

        > .tip {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
</style>