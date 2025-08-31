import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGITATOR_PROPELLER = {
  _style:
    'shape=mxgraph.pid.agitators.agitator_(propeller);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 92,
  _height: 132,
}

export function AgitatorPropeller(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_PROPELLER}
      {...props}
      _style={extendStyle(AGITATOR_PROPELLER, props)}
    />
  )
}
