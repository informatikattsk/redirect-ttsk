export default function redirectMiddleware(req, res) {
    // Define target URL
    const targetUrl = 'https://trnava-vuc.sk';
    
    // Preserve the original path if any
    const path = req.url === '/' ? '' : req.url;
    
    // Perform redirect
    return res.redirect(301, `${targetUrl}${path}`);
} 