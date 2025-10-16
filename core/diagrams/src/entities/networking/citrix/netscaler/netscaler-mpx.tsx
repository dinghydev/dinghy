import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETSCALER_MPX = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_mpx;',
  },
  _original_width: 50,
  _original_height: 41.225,
}

export function NetscalerMpx(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETSCALER_MPX}
      {...props}
      _style={extendStyle(NETSCALER_MPX, props)}
    />
  )
}
