import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAMERA_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.camera_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 72,
}

export function Camera2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CAMERA_2)} />
}
