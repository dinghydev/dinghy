import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON14 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon14;',
  _width: 50,
  _height: 50,
}

export function Icon14(props: DiagramNodeProps) {
  return <Shape {...ICON14} {...props} />
}
