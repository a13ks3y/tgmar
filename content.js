(function(){
    const SATAN = '0.666rem';
    const HAIL = '0.333rem';
    const ILOVE = '1.666rem';
    const attachTheButton = (dc) => {
        const btnEl = dc.createElement('button');
        const rootEl = dc;
        btnEl.onclick = (e) => {
            if(e && e.preventDefault) {
                e.preventDefault();
            }
            const chatBadges = Array.from(rootEl.querySelectorAll('.ChatBadge-transition'));
            const badges = Array.from(rootEl.querySelectorAll('.badge'));
            if (badges && badges.length) {
                badges.forEach(badge => badge.parentNode.removeChild(badge));
            }
            if (chatBadges && chatBadges.length) {
                // @todo: unit-test it!!!
                chatBadges.forEach(badge => badge.parentNode.removeChild(badge));
            }
            return false;
        };
        btnEl.textContent = '♻';
        btnEl.style.position = 'fixed';
        btnEl.style.right = '0';
        btnEl.style.top = '6.66vh';
        btnEl.style.zIndex = 100500;
        btnEl.style.fontFamily = 'monospace';
        btnEl.style.fontSize = '1.666rem';
        btnEl.style.margin = ILOVE + ' ' + SATAN;
        btnEl.style.padding = HAIL + ' ' + SATAN;
        btnEl.style.color = '#f90';
        btnEl.style.backgroundColor = '#000';
        btnEl.style.cursor = 'pointer';
        dc.body.appendChild(btnEl);

        return btnEl;
    };   
    attachTheButton(window.document);
    if (!window['module']) window['module'] = {};
    module.exports = { attachTheButton };
    // if you want to support this porject, send nudes to @a13ks3y
}());  