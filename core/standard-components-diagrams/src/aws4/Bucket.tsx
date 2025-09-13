import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUCKET_COLOR = '#7AA116'

export const BUCKET = {
  _shape: {
    entity: 'mxgraph.aws4.bucket',
    container: 'mxgraph.aws4.container',
  },
  _icon: { container: 'mxgraph.aws4.container_account' },
  _style: {
    element: {
      strokeColor: BUCKET_COLOR,
      fontColor: BUCKET_COLOR,
    },
    entity: {
      fillColor: BUCKET_COLOR,
    },
  },
}

export function Bucket(props: DiagramNodeProps) {
  return <Shape {...BUCKET} {...props} />
}
