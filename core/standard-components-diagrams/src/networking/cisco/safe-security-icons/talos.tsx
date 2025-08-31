import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TALOS = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.talos;',
  _width: 93,
  _height: 21.5,
}

export function Talos(props: DiagramNodeProps) {
  return <Shape {...TALOS} {...props} _style={extendStyle(TALOS, props)} />
}
