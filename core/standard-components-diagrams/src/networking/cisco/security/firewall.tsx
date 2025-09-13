import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWALL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.firewall;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 29,
  _height: 67,
}

export function Firewall(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALL} {...props} _style={extendStyle(FIREWALL, props)} />
  )
}
