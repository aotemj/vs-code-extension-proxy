<script lang="ts">
    import {onMount} from "svelte";
    import Proxy from './Proxy.svelte'
    import type {User} from "../types";

    // let accessToken = "";
    // let loading = true;
    // let user: User | null = null;
    // let page: "todos" | "contact" = tsvscode.getState()?.page || "todos";

    $: {
        // tsvscode.setState({page});
    }

    onMount(async () => {
        console.log('onMount')
        console.log(document)
        // window.addEventListener("message", async (event) => {
        //     const message = event.data;
        //     switch (message.type) {
        //         case "token":
        //             // accessToken = message.value;
        //             // const response = await fetch(`${apiBaseUrl}/me`, {
        //             //     headers: {
        //             //         authorization: `Bearer ${accessToken}`,
        //             //     },
        //             // });
        //             // const data = await response.json();
        //             // user = data.user;
        //             // loading = false;
        //     }
        // });

        // tsvscode.postMessage({type: "get-token", value: undefined});
    });
</script>
<div>
    <Proxy/>
</div>
