document.addEventListener('DOMContentLoaded' , function() {
    const menuOptions = document.querySelectorAll('.menu-option');
    const underline = document.querySelector('.underlineHighlight');
    underline.style.opacity = 1;

    let updateUnderline = (noTransition) => {
        noTransition == undefined ? noTransition = false : true;
        noTransition ? underline.style.transition = "transform 0s" : underline.style.transition = "transform 0.3s";
        const activeOption = document.querySelector('.menu-option.active');
        if (activeOption) {
            const optionRect = activeOption.getBoundingClientRect();
            activeOption.style.color = '#7406c8';
            underline.style.width = optionRect.width + 'px';
            underline.style.transform = `translateX(${optionRect.left}px)`;
        }
    }

    menuOptions.forEach(Option => {
        Option.addEventListener('click', function(event){
            event.preventDefault();
            menuOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            updateUnderline();
        });
    });

    updateUnderline()

    window.addEventListener('resize' , () => {updateUnderline(true)})
});