import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_SWIMLANE = {
  _style: {
    entity: 'swimlane;startSize=20;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 320,
}

export function VerticalSwimlane(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_SWIMLANE)} />
}
