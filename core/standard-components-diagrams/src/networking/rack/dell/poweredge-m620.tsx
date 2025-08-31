import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWEREDGE_M620 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_m620;',
  _width: 20,
  _height: 37,
}

export function PoweredgeM620(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_M620}
      {...props}
      _style={extendStyle(POWEREDGE_M620, props)}
    />
  )
}
