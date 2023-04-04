import uploadFeature from '@adminjs/upload'
// import uploadFeature from '../../../../../src/index.js'
import { componentLoader } from '../../component-loader.js'
import { CreateResourceResult } from '../create-resource-result.type.js'
import { Post } from '../../../post/post.entity.js'

const createPostResource = (): CreateResourceResult<typeof Post> => ({
  resource: Post,
  options: {
    listProperties: ['id', 'bucketKey', 'bucket', 'path'],
  },
  features: [uploadFeature({
    componentLoader,
    provider: {
      gcp: {
        bucket: process.env.GCP_STORAGE_BUCKET!,
        expires: 0,
      },
    },
    properties: { file: 'file', key: 'bucketKey', bucket: 'bucket', mimeType: 'mime' },
  })],
})

export default createPostResource
