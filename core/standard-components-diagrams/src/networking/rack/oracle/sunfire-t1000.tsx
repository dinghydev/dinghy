import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUNFIRE_T1000 = {
  _style:
    'shape=mxgraph.rack.oracle.sunfire_t1000;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 15,
}

export function SunfireT1000(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUNFIRE_T1000}
      {...props}
      _style={extendStyle(SUNFIRE_T1000, props)}
    />
  )
}
