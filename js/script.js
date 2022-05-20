var jsTriggers = document.querySelectorAll('.trigger'),
    jsContents = document.querySelectorAll('.content');

jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      var id = this.getAttribute('data-tab'),
          content = document.querySelector('.content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.trigger.active'),
          activeContent = document.querySelector('.content.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});