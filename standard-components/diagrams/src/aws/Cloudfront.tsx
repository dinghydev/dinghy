import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDFRONT_COLOR = '#8C4FFF'

export const CLOUDFRONT = {
  _shape: { entity: 'mxgraph.aws4.cloudfront' },
  _style: {
    element: {
      strokeColor: CLOUDFRONT_COLOR,
      fontColor: CLOUDFRONT_COLOR,
    },
    entity: {
      fillColor: CLOUDFRONT_COLOR,
    },
  },
}

export default function Cloudfront(props: DiagramNodeProps) {
  return <Shape {...CLOUDFRONT} {...props} />
}
