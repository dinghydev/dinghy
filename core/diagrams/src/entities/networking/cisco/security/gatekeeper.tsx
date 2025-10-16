import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GATEKEEPER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.gatekeeper;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 85,
  _height: 59,
}

export function Gatekeeper(props: DiagramNodeProps) {
  return (
    <Shape {...GATEKEEPER} {...props} _style={extendStyle(GATEKEEPER, props)} />
  )
}
