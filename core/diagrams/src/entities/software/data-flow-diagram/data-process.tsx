import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_PROCESS = {
  _style: {
    entity:
      'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;perimeter=ellipsePerimeter;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function DataProcess(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_PROCESS)} />
}
