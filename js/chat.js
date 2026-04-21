// State Machine / Decision Tree for the Chat
// Each node has a message key (for i18n) and an array of possible replies.

const chatNodes = {
    start: {
        msgKey: "node_start_msg",
        options: [
            { labelKey: "ans_eu", nextNode: "eu_student" },
            { labelKey: "ans_non_eu", nextNode: "non_eu_student" }
        ]
    },
    eu_student: {
        msgKey: "node_eu_msg",
        options: [
            { labelKey: "ans_eu_more", nextNode: "eu_health" },
            { labelKey: "ans_restart", nextNode: "start" }
        ]
    },
    eu_health: {
        msgKey: "node_eu_health_msg",
        options: [
            { labelKey: "ans_restart", nextNode: "start" }
        ]
    },
    non_eu_student: {
        msgKey: "node_noneu_msg",
        options: [
            { labelKey: "ans_short", nextNode: "short_stay" },
            { labelKey: "ans_long", nextNode: "long_stay" }
        ]
    },
    short_stay: {
        msgKey: "node_short_msg",
        options: [
            { labelKey: "ans_restart", nextNode: "start" }
        ]
    },
    long_stay: {
        msgKey: "node_long_msg",
        options: [
            { labelKey: "ans_campus_france", nextNode: "campus_france" },
            { labelKey: "ans_restart", nextNode: "start" }
        ]
    },
    campus_france: {
        msgKey: "node_campus_msg",
        options: [
            { labelKey: "ans_restart", nextNode: "start" }
        ]
    }
};

class ChatBot {
    constructor(lang) {
        this.lang = lang;
        this.historyContainer = document.getElementById('chat-history');
        this.optionsContainer = document.getElementById('chat-options');
        this.currentNode = 'start';
    }

    setLanguage(newLang) {
        this.lang = newLang;
        this.refreshChat();
    }

    clearChat() {
        this.historyContainer.innerHTML = '';
        this.optionsContainer.innerHTML = '';
    }

    addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg', sender);
        // Using innerHTML to allow simple markdown-like bolding if needed, but textContent is safer.
        // For educational purposes, we'll replace **text** with <strong>text</strong>
        const formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        msgDiv.innerHTML = formattedText;
        this.historyContainer.appendChild(msgDiv);
        this.historyContainer.scrollTop = this.historyContainer.scrollHeight;
    }

    renderOptions(nodeId) {
        this.optionsContainer.innerHTML = '';
        const node = chatNodes[nodeId];
        
        if (!node) return;

        node.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.classList.add('reply-btn');
            btn.textContent = getStr(this.lang, opt.labelKey);
            btn.onclick = () => this.handleUserReply(opt);
            this.optionsContainer.appendChild(btn);
        });
    }

    handleUserReply(option) {
        // 1. Add user message to history
        const userText = getStr(this.lang, option.labelKey);
        this.addMessage(userText, 'user');
        
        // 2. Clear current options
        this.optionsContainer.innerHTML = '';

        // 3. Move to next node with a slight delay for realism
        this.currentNode = option.nextNode;
        setTimeout(() => {
            this.showNode(this.currentNode);
        }, 500); // 500ms delay
    }

    showNode(nodeId) {
        const node = chatNodes[nodeId];
        if (node) {
            const botText = getStr(this.lang, node.msgKey);
            this.addMessage(botText, 'bot');
            this.renderOptions(nodeId);
        }
    }

    // Used when language changes
    refreshChat() {
        this.clearChat();
        this.currentNode = 'start';
        this.showNode(this.currentNode);
    }
}
