<main>
  <div class="container">
    <h1>Ask me anything 👇</h1>

    <form on:submit|preventDefault={handleSubmit}>
      <label for="message">Your question:</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        bind:value={message}
        placeholder="Type your question..."
        disabled={submitting}
      ></textarea>

      <button type="submit" disabled={submitting}>
        {#if submitting}
          <span class="loader"></span> Sending...
        {:else}
          Submit anonymously
        {/if}
      </button>
    </form>
  </div>
</main>

<script>
  let message = '';
  let submitting = false;
   let API_URL=import.meta.env.VITE_API_URL 
  async function handleSubmit() {
    if (!message.trim()) return;

    submitting = true;

    try {
      const response = await fetch('http://localhost:3000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        message = '';
      } else {
        alert(result.error || "Something went wrong.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      submitting = false;
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body, html, main {
    height: 100%;
    margin: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 400px;
  }

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #222;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #444;
    font-weight: bold;
  }

  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: none;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  textarea:focus {
    border-color: #3b82f6;
    outline: none;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #3b82f6;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  button:hover:not(:disabled) {
    background-color: #2563eb;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .loader {
    border: 2px solid white;
    border-top: 2px solid transparent;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
