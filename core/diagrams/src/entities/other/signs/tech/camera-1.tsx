import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAMERA_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.camera_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 84,
}

export function Camera1(props: DiagramNodeProps) {
  return (
    <Shape {...CAMERA_1} {...props} _style={extendStyle(CAMERA_1, props)} />
  )
}
