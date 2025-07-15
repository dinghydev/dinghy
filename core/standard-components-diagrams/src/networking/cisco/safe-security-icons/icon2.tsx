import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON2 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon2;',
  _width: 50,
  _height: 45.5,
}

export function Icon2(props: DiagramNodeProps) {
  return <Shape {...ICON2} {...props} />
}
