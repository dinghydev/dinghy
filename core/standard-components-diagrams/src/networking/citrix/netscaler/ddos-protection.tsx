import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DDOS_PROTECTION = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.ddos_protection;',
  },
  _original_width: 50,
  _original_height: 45.885,
}

export function DdosProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...DDOS_PROTECTION}
      {...props}
      _style={extendStyle(DDOS_PROTECTION, props)}
    />
  )
}
