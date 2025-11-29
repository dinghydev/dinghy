import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_CALLOUT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.cloud_callout',
  },
  _width: 90,
  _height: 60,
}

export function CloudCallout(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUD_CALLOUT)} />
}
