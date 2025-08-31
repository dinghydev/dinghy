import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAMERA_2 = {
  _style:
    'shape=mxgraph.signs.tech.camera_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 72,
}

export function Camera2(props: DiagramNodeProps) {
  return (
    <Shape {...CAMERA_2} {...props} _style={extendStyle(CAMERA_2, props)} />
  )
}
