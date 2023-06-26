import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    this.store.push({
      data: [
        {
          type: 'region',
          id: '34',
          attributes: {
            title: 'Northland',
          },
        },
      ],
    });
  }

  model() {
    return new Promise((resolve) => setTimeout(resolve, 200));
  }

  afterModel() {
    this.store.peekAll('region').filter((r) => r.title === 'Northland');
  }
}
