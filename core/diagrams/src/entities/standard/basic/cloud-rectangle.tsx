import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_RECTANGLE = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.cloud_rect',
  },
  _width: 120,
  _height: 90,
}

export function CloudRectangle(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_RECTANGLE}
      {...props}
      _style={extendStyle(CLOUD_RECTANGLE, props)}
    />
  )
}
