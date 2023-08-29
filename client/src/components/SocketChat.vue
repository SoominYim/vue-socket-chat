<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <div class="md-toolbar-row">
                    <span class="md-title">My Chat App</span>
                </div>
            </md-app-toolbar>
            <md-app-content>
                <md-field>
                    <label for="message">Message</label>
                    <md-textarea v-model="textarea" disabled v-auto-scroll-bottom></md-textarea>
                </md-field>
                <md-field>
                    <label for="your-message">Your Message</label>
                    <md-input v-model="message"></md-input>
                    <md-button class="md-primary md-raised" @click="sendMessage">Submit</md-button>
                </md-field>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    name: "SocketChat",
    setup() {
        const textarea = ref("");
        const message = ref("");

        const sendMessage = () => {
            this.$socket.emit("chat", {
                message: message.value,
            });

            textarea.value += message.value + "\n";
            message.value = "";
        };

        onMounted(() => {
            this.$socket.on("chat", (data) => {
                textarea.value += data.message + "\n";
            });
        });

        return {
            textarea,
            message,
            sendMessage,
        };
    },
};
</script>

<style>
.md-app {
    height: 800px;
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.md-textarea {
    height: 300px;
}
</style>