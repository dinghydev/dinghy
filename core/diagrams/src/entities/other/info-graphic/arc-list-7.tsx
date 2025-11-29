import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_LIST_7 = {
  _style: {
    entity: 'ellipse;fillColor=none;strokeColor=#444444;',
  },
  _width: 0,
  _height: 200,
}

export function ArcList7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARC_LIST_7)} />
}
