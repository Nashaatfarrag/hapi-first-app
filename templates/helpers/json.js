module.exports = (context) => {
  
    return JSON.stringify(context).replace(/"/g, '&quot;');
}