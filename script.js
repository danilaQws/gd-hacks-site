document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetSection = document.getElementById('installation-methods');
        
        if (targetSection) {
            // Сначала прокручиваем
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Затем добавляем подсветку с небольшой задержкой
            setTimeout(() => {
                targetSection.classList.add('highlight-section');
                
                setTimeout(() => {
                    targetSection.classList.remove('highlight-section');
                }, 2000);
            }, 300); // Задержка для синхронизации с прокруткой
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Функция для создания и скачивания файла
    function downloadFile(filename) {
        // Создаем временную ссылку
        const link = document.createElement('a');
        link.href = filename;
        link.download = filename;
        link.style.display = 'none';
        
        // Добавляем на страницу и эмулируем клик
        document.body.appendChild(link);
        link.click();
        
        // Удаляем ссылку после скачивания
        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
    }

    // Обработчики для кнопок
    document.getElementById('downloadDll').addEventListener('click', function() {
        downloadFile('gd-hack.dll.zip');
        // Можно добавить анимацию или уведомление
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 500);
    });

    document.getElementById('downloadSource').addEventListener('click', function() {
        downloadFile('gd-hack-source.zip');
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 500);
    });

    // Обработчик для верхней кнопки (прокрутка к секции)
    document.getElementById('downloadBtn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('installation-methods').scrollIntoView({
            behavior: 'smooth'
        });
    });
});