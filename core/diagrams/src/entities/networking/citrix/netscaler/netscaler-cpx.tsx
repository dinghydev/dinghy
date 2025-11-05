import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETSCALER_CPX = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_cpx;',
  },
  _original_width: 44.87,
  _original_height: 50,
}

export function NetscalerCpx(props: NodeProps) {
  return (
    <Shape
      {...NETSCALER_CPX}
      {...props}
      _style={extendStyle(NETSCALER_CPX, props)}
    />
  )
}
