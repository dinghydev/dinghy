import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGITATOR_STIRRER = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator,_stirrer;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 120,
}

export function AgitatorStirrer(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_STIRRER}
      {...props}
      _style={extendStyle(AGITATOR_STIRRER, props)}
    />
  )
}
