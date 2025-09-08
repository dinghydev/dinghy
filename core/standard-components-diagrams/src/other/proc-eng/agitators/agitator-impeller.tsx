import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AGITATOR_IMPELLER = {
  _style: {
    entity:
      'shape=mxgraph.pid.agitators.agitator_(impeller);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 80,
  _original_height: 130,
}

export function AgitatorImpeller(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGITATOR_IMPELLER}
      {...props}
      _style={extendStyle(AGITATOR_IMPELLER, props)}
    />
  )
}
