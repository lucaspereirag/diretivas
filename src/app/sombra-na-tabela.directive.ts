import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]',
  exportAs: 'sombraComponente'
})
export class SombraNaTabelaDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}


  @HostBinding('style.boxShadow') sombra: string;

  @Input('appSombraNaTabela') entrada: string;

   @HostListener('mouseover')quandoMousePassar(){
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow', '2px 2px'
    )*/
    this.sombra = this.entrada;
   }

   @HostListener('mouseout')quandoMouseSair(){
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow', '0px 0px'
    )*/
    this.sombra = '';
   }

}
