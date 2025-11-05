import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MSK_CONNECT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.msk_amazon_msk_connect;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function MskConnect(props: NodeProps) {
  return (
    <Shape
      {...MSK_CONNECT}
      {...props}
      _style={extendStyle(MSK_CONNECT, props)}
    />
  )
}
