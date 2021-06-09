// https://cloud.tencent.com/document/product/436/11459
// 使用腾讯云的sdk，将文件上传至服务器。查看文件列表也是同理

import COS from 'cos-js-sdk-v5'
import { Bucket, Region, SecretId, SecretKey } from './constant'

const cos = new COS({
    SecretId,
    SecretKey
});

export function putObject(Key, fileObject, completeCb, progressCb,) { // 上传文件
    cos.putObject({
        Bucket, /* 必须 */
        Region,     /* 存储桶所在地域，必须字段 */
        Key,              /* 必须 */
        StorageClass: 'STANDARD',
        Body: fileObject, // 上传文件对象
        onProgress: function (progressData) {
            progressCb && progressCb(progressData)
        }
    }, function (err, data) {
        console.log(err || data);
        completeCb && completeCb(data)
    });
}

export function getBucketObj(Prefix) {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket,
            Region,
            Delimiter: '/'
        } // , Delimiter: '/'
        if (Prefix) params.Prefix = Prefix
        cos.getBucket(params, function (err, data) {
                console.log('getBucketObj', err || data.Contents);
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
        });
    })
}