<script>
// @ts-nocheck
import { onMount } from "svelte";
let messages = [];
let loading = true;
let error = null;
// Track read status for each message (by index)
let readStatus = [];
onMount(async () => {
try {
const res = await fetch("http://localhost:3000/messages");
if (!res.ok) throw new Error("Failed to fetch messages");
messages = await res.json();
// Initialize all as unread (false)
readStatus = messages.map(() => false);
 } catch (err) {
error = err.message;
 } finally {
loading = false;
 }
 });
function markAsRead(index) {
readStatus[index] = true;
 }
</script>
<style>
/* Global responsive setup */
* {
  box-sizing: border-box;
}

.container {
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 100%;
padding: 0.5rem;
 }

.message-box {
background: #e0f7fa;
border: 1px solid #00acc1;
border-radius: 8px;
padding: 1rem;
width: 100%;
position: relative;
box-shadow: 0 2px 6px rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 120px;
 }

.message-box.read {
background: #c8e6c9;
border-color: #388e3c;
color: #2e7d32;
 }

.message-text {
white-space: pre-wrap;
margin-bottom: 1rem;
word-break: break-word;
overflow-wrap: break-word;
font-size: 1rem;
line-height: 1.4;
 }

button {
align-self: flex-end;
padding: 0.5rem 1rem;
background-color: #00acc1;
border: none;
border-radius: 4px;
color: white;
cursor: pointer;
font-weight: 600;
transition: background-color 0.3s ease;
font-size: 0.9rem;
min-height: 44px; /* Touch-friendly minimum */
 }

button:hover {
background-color: #00838f;
 }

button:disabled {
background-color: #8e8e8e;
cursor: not-allowed;
 }

/* Mobile-specific styles */
@media (max-width: 768px) {
  .container {
    gap: 0.75rem;
    padding: 0.25rem;
  }
  
  .message-box {
    padding: 0.75rem;
    min-height: 100px;
  }
  
  .message-text {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  button {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    min-height: 48px; /* Larger touch target on mobile */
  }
}

/* Very small screens */
@media (max-width: 480px) {
  .container {
    gap: 0.5rem;
    padding: 0.125rem;
  }
  
  .message-box {
    padding: 0.5rem;
    border-radius: 6px;
  }
  
  .message-text {
    font-size: 0.85rem;
    line-height: 1.3;
  }
  
  button {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
  }
}
</style>
{#if loading}
<p>Loading messages...</p>
{:else if error}
<p style="color:red">Error: {error}</p>
{:else if messages.length === 0}
<p>No messages found.</p>
{:else}
<div class="container">
 {#each messages as message, i}
<div class="message-box {readStatus[i] ? 'read' : ''}">
<div class="message-text">{message}</div>
<button
on:click={() => markAsRead(i)}
disabled={readStatus[i]}>
{readStatus[i] ? "Read" : "Mark as Read"}
</button>
</div>
 {/each}
</div>
{/if}