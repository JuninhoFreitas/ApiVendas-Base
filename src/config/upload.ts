import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(request, file, callback) {
      //gerar hash pra não repetir nomes
      const fileHash = crypto.randomBytes(10).toString('hex');

      const filename = `${fileHash}-${file.originalname}`;
      //erro | retorno
      callback(null, filename);
    },
  }),
};
