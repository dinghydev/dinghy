import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HUB = {
  _style: {
    entity:
      'shape=mxgraph.cisco.hubs_and_gateways.hub;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 66,
  _height: 58,
}

export function Hub(props: DiagramNodeProps) {
  return <Shape {...HUB} {...props} _style={extendStyle(HUB, props)} />
}
