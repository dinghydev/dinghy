import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EYE_WASH = {
  _style:
    'shape=mxgraph.signs.healthcare.eye_wash;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 93,
  _height: 99,
}

export function EyeWash(props: DiagramNodeProps) {
  return <Shape {...EYE_WASH} {...props} />
}
