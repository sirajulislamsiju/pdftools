document.addEventListener('DOMContentLoaded', () => {
    const pdfInput = document.getElementById('pdfInput');
    const convertBtn = document.getElementById('convertBtn');
    const downloadArea = document.getElementById('downloadArea');

    convertBtn.addEventListener('click', async () => {
        if (!pdfInput.files[0]) {
            alert('Please select a PDF file first!');
            return;
        }

        // Show loading state
        convertBtn.textContent = 'Converting...';
        convertBtn.disabled = true;

        try {
            // This would be replaced with actual conversion logic
            // For demo purposes, we'll simulate a delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Create dummy download link
            const dummyLink = document.createElement('a');
            dummyLink.href = '#';
            dummyLink.className = 'download-btn';
            dummyLink.textContent = 'Download Word Document';
            dummyLink.download = 'converted-document.docx';
            
            downloadArea.innerHTML = '';
            downloadArea.appendChild(dummyLink);
            
        } catch (error) {
            console.error('Conversion error:', error);
            alert('Conversion failed. Please try again.');
        } finally {
            convertBtn.textContent = 'Convert to Word';
            convertBtn.disabled = false;
        }
    });
});
