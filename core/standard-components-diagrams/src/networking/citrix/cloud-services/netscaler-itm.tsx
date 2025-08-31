import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETSCALER_ITM = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_itm;',
  _width: 50,
  _height: 40.35,
}

export function NetscalerItm(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETSCALER_ITM}
      {...props}
      _style={extendStyle(NETSCALER_ITM, props)}
    />
  )
}
