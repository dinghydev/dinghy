import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETSCALER_ITM = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_itm;',
  },
  _original_width: 50,
  _original_height: 40.35,
}

export function NetscalerItm(props: NodeProps) {
  return (
    <Shape
      {...NETSCALER_ITM}
      {...props}
      _style={extendStyle(NETSCALER_ITM, props)}
    />
  )
}
