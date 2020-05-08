const loadQuill = (callback: any) => {
  const existingScript = document.getElementById('quillEditor');
  
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://cdn.quilljs.com/1.3.6/quill.js';
    script.id = 'quillEditor';
    document.body.appendChild(script);
  
    script.onload = () => {
      if (callback) callback();
    };
  }
  
  if (existingScript && callback) callback();
};

export default loadQuill;