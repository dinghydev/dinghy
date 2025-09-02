import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGITATOR_DISC = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(disc);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 135,
}

export function AgitatorDisc(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_DISC}
      {...props}
      _style={extendStyle(AGITATOR_DISC, props)}
    />
  )
}
