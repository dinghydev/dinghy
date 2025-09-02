import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DDOS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ddos;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Ddos(props: DiagramNodeProps) {
  return <Shape {...DDOS} {...props} _style={extendStyle(DDOS, props)} />
}
