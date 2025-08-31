import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NBA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.nba;',
  },
  _width: 44.5,
  _height: 33.5,
}

export function Nba(props: DiagramNodeProps) {
  return <Shape {...NBA} {...props} _style={extendStyle(NBA, props)} />
}
