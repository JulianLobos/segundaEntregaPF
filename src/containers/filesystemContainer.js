import fs from 'fs';

class FileSystemContainer {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async getAll() {
        try {
            const res = await fs.promises.readFile(this.filePath, "utf-8");
            const items = JSON.parse(res);
            return items;
        } catch (error) {
            return [];
        }
    }
}

module.exports = FileSystemContainer;