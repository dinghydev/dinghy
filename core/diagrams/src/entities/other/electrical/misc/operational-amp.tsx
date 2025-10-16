import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPERATIONAL_AMP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.operational_amp_1;',
  },
  _original_width: 98,
  _original_height: 90,
}

export function OperationalAmp(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPERATIONAL_AMP}
      {...props}
      _style={extendStyle(OPERATIONAL_AMP, props)}
    />
  )
}
