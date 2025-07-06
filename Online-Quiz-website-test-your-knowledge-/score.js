// quiz_utils.js

async function sendQuizScore(email, score) {
    try {
        const response = await fetch('http://localhost:4001/user/saveQuizScore', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, score })
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Score submitted successfully:', data);
            alert('Score submitted successfully');
        } else {
            console.error('Error submitting score:', data);
            alert(data.message || 'Failed to submit score');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred');
    }
}
