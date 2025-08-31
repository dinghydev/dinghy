import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPPORT_LEG = {
  _style:
    'shape=mxgraph.pid.apparatus_elements.support_leg;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 25,
  _height: 100,
}

export function SupportLeg(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPPORT_LEG}
      {...props}
      _style={extendStyle(SUPPORT_LEG, props)}
    />
  )
}
