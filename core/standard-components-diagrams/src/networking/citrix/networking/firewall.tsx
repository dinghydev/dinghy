import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWALL = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.firewall;',
  },
  _original_width: 50,
  _original_height: 49.915,
}

export function Firewall(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALL} {...props} _style={extendStyle(FIREWALL, props)} />
  )
}
