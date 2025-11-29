import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_100BASET_HUB = {
  _style: {
    entity:
      'shape=mxgraph.cisco.hubs_and_gateways.100baset_hub;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 45,
}

export function Component100basetHub(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_100BASET_HUB)} />
  )
}
