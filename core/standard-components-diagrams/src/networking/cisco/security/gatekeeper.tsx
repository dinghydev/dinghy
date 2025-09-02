import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GATEKEEPER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.security.gatekeeper;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 85,
  _original_height: 59,
}

export function Gatekeeper(props: DiagramNodeProps) {
  return (
    <Shape {...GATEKEEPER} {...props} _style={extendStyle(GATEKEEPER, props)} />
  )
}
