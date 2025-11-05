import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERIC_GATEWAY = {
  _style: {
    entity:
      'shape=mxgraph.cisco.hubs_and_gateways.generic_gateway;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 66,
  _original_height: 74,
}

export function GenericGateway(props: NodeProps) {
  return (
    <Shape
      {...GENERIC_GATEWAY}
      {...props}
      _style={extendStyle(GENERIC_GATEWAY, props)}
    />
  )
}
