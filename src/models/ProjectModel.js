import { v4 as uuidv4 } from 'uuid';

class ProjectModel {
  constructor(img, category, selected) {
    this.id = uuidv4();
    this.img = img;
    this.category = category;
    this.selected = selected;
  }
}
export default ProjectModel;
