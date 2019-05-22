export class Recipe {
  public name: string;
  public description: string;
  public imagePAth: string;

  constructor(name: string, description: string, imagePAth: string) {
    this.name = name;
    this.description = description;
    this.imagePAth = imagePAth;
  }
}
