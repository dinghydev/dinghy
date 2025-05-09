import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUCKET_COLOR = '#7AA116'

export const BUCKET = {
  _shape: {
    entity: 'mxgraph.aws4.bucket',
    group: 'mxgraph.aws4.group',
  },
  _icon: { group: 'mxgraph.aws4.group_account' },
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
