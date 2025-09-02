import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGITATOR_CROSS_BEAM = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(cross-beam);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 120,
}

export function AgitatorCrossBeam(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_CROSS_BEAM}
      {...props}
      _style={extendStyle(AGITATOR_CROSS_BEAM, props)}
    />
  )
}
