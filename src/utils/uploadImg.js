import OSS from 'ali-oss'

let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAI5tALvdNoXMeFm1gDnYRP',
  accessKeySecret: '8qgDWsEjZvVrbBC3zXvG23oXNML9ge',
  bucket: '7years-img'
});
const upload = async (file) => {
  try {
    let res = await client.put(`${file.name}`, file);
    return res
  } catch (e) {
    return e
  }
}

export default upload