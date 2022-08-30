import * as uuid from "uuid";
import * as path from "path";

// Work with saved file
class FileService {
    async saveFile(file) {
        try {
            const newFileName = uuid.v4() + ".jpg";                 // Generate unique name
            const filePath = path.resolve("static", newFileName);   // Define place to store file
            file.mv(filePath);                                      // Save file in disk - folder 'static'
            return newFileName;
        } catch(e) {
            console.log(e);
        }
    }
}
export default new FileService();
