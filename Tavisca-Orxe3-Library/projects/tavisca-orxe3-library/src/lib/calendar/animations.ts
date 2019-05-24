import { animate, style, transition, state, trigger } from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
    state('in', style({
      opacity: '1',
      transform : 'translateY(0)'
    })),
    transition( 'void => *', [
      style({
        opacity: '0',
        transform : 'translateY(20px)'
      }),
      animate(300)
    ])
  ]);
