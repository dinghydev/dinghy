import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAC = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.nac;',
  _width: 60,
  _height: 60,
}

export function Nac(props: DiagramNodeProps) {
  return <Shape {...NAC} {...props} _style={extendStyle(NAC, props)} />
}
