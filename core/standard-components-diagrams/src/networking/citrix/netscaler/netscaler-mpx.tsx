import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETSCALER_MPX = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_mpx;',
  },
  _width: 50,
  _height: 41.225,
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
