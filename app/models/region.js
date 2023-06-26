import Model, { attr } from '@ember-data/model';

export default class Region extends Model {
  @attr('string') title;
}
