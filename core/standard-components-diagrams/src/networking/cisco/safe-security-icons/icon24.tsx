import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON24 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon24;',
  _width: 44.5,
  _height: 50,
}

export function Icon24(props: DiagramNodeProps) {
  return <Shape {...ICON24} {...props} />
}
