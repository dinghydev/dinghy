import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAMERA_1 = {
  _style:
    'shape=mxgraph.signs.tech.camera_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 84,
}

export function Camera1(props: DiagramNodeProps) {
  return <Shape {...CAMERA_1} {...props} />
}
