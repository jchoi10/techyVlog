async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const postText = document.querySelector('input[name="post-text"]').value;

    const res = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            postText
        }),
        headers: {
            'Content-Type': 'application.json'
        }
    });

    if (res.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(res.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);