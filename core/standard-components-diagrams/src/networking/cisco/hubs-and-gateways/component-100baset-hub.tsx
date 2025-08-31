import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_100BASET_HUB = {
  _style:
    'shape=mxgraph.cisco.hubs_and_gateways.100baset_hub;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 90,
  _height: 45,
}

export function Component100basetHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_100BASET_HUB}
      {...props}
      _style={extendStyle(COMPONENT_100BASET_HUB, props)}
    />
  )
}
