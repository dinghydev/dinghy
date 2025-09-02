import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGITATOR_HELICAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(helical);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 130,
}

export function AgitatorHelical(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_HELICAL}
      {...props}
      _style={extendStyle(AGITATOR_HELICAL, props)}
    />
  )
}
