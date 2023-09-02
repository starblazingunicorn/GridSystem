import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() text: string;

  render() {
    return (
      <div>
        {' '}
        {this.text}
        <main>
          <div class="grid">
            <header class="grid__header"></header>

            <div class="grid__side-a"></div>
            <div class="grid__side-b"></div>

            <article class="grid__article"></article>

            <div class="grid__main">
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
              <div class="grid__item"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
