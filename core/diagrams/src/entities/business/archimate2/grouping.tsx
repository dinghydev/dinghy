import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GROUPING = {
  _style: {
    entity: 'swimlane;html=1;fillColor=#ffffff;whiteSpace=wrap',
  },
  _width: 100,
  _height: 75,
}

export function Grouping(props: NodeProps) {
  return (
    <Shape {...GROUPING} {...props} _style={extendStyle(GROUPING, props)} />
  )
}
