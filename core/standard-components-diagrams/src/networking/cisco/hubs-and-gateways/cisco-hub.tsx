import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_HUB = {
  _style:
    'shape=mxgraph.cisco.hubs_and_gateways.cisco_hub;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 66,
  _height: 58,
}

export function CiscoHub(props: DiagramNodeProps) {
  return (
    <Shape {...CISCO_HUB} {...props} _style={extendStyle(CISCO_HUB, props)} />
  )
}
