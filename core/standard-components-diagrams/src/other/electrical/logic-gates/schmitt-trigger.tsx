import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCHMITT_TRIGGER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.schmitt_trigger;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function SchmittTrigger(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCHMITT_TRIGGER}
      {...props}
      _style={extendStyle(SCHMITT_TRIGGER, props)}
    />
  )
}
