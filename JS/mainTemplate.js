const loadingScreen = document.querySelector('.loading-screen')
const mainNavigation = document.querySelector('.main-navigation')

// Function to add and remove the page transition screen
function pageTransitionIn() {
  
  return gsap
    
    .to(loadingScreen, { duration: .35, scaleY: 1, transformOrigin: 'bottom left'})
}
// Function to add and remove the page transition screen
function pageTransitionOut(container) {
  
  return gsap
    .timeline({ delay: 1 }) // More readable to put it here
    .add('start') // Use a label to sync screen and content animation
    .to(loadingScreen, {
      duration: 0.3,
      scaleY: 0,
      skewX: 0,
      transformOrigin: 'top left',
      ease: 'power1.out'
    }, 'start')
    .call(contentAnimation, [container], 'start')
}


function contentAnimation(container) {
  // Query from container
  $(container.querySelector('.green-heading-bg')).addClass('show')
  
  return gsap
    .timeline()
    .from(container.querySelector('.is-animated'), {
      duration: 0.5,
      translateY: 15,
      opacity: 0,
      stagger: 0.4
    })
    .from(mainNavigation, { duration: .3, translateY: -15, opacity: 0})
}

$(function() {
  barba.init({
    
    transitions: [{
      
      async leave(data) {
        

        await pageTransitionIn()
        
        data.current.container.remove()
      },

      async enter(data) {
        await pageTransitionOut(data.next.container)
      },
      

      async once(data) {
        await contentAnimation(data.next.container);
      }
    }]
  });

});