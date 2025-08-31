import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPERATIONAL_AMP = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.operational_amp_1;',
  _width: 98,
  _height: 90,
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
