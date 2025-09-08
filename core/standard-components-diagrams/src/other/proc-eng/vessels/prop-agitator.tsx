import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROP_AGITATOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.prop_agitator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 20,
  _original_height: 88,
}

export function PropAgitator(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROP_AGITATOR}
      {...props}
      _style={extendStyle(PROP_AGITATOR, props)}
    />
  )
}
