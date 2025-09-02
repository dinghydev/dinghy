import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETSCALER_BLX = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_blx;',
  },
  _original_width: 50,
  _original_height: 44.265,
}

export function NetscalerBlx(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETSCALER_BLX}
      {...props}
      _style={extendStyle(NETSCALER_BLX, props)}
    />
  )
}
