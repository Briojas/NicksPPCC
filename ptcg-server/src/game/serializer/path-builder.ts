
export class PathBuilder {

  public parents: { node: any, key: string }[] = [];

  public goTo(node: any, key: string): void {
    const parentIndex = this.parents.findIndex(p => p.node === node);
    if (parentIndex !== -1) {
      this.parents.length = parentIndex;
    }
    this.parents.push({ node, key });
  }

  public getPath(): string {
    let parts: string[] = this.parents
      .map(p => p.key)
      .filter(key => !!key);
    return parts.join('.');
  }

  public getValue(root: any, path: string): any {
    const parts = path.split('.');
    let value = root;
    try {
      for (const part of parts) {
        value = value[part];
      }
    } catch (error) {
      return;
    }
    return value;
  }

}
