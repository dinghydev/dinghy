import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REGISTRATION = {
  _style:
    'shape=mxgraph.signs.healthcare.registration;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 96,
  _height: 98,
}

export function Registration(props: DiagramNodeProps) {
  return (
    <Shape
      {...REGISTRATION}
      {...props}
      _style={extendStyle(REGISTRATION, props)}
    />
  )
}
