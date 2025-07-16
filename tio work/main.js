const form = document.getElementById('redeemForm');
    const successContainer = document.getElementById('successContainer');
    const successUsername = document.getElementById('successUsername');
    const discordUsername = document.getElementById('discordUsername');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = discordUsername.value.trim();
      if (username) {
        successUsername.textContent = username;
        successContainer.style.display = 'block';
        discordUsername.value = ''; // Clear the input field
      }
    });

    function copyInfo() {
      const username = successUsername.textContent;
      const orderId = document.getElementById('orderId').textContent;
      const info = `Username: ${username}\nOrder ID: ${orderId}\nReward: VIP Role (500 Coins)`;
      navigator.clipboard.writeText(info).then(() => {
        alert("✅ Copied! Paste this in a support ticket (in the Discord server) for a FASTER delivery.");
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }