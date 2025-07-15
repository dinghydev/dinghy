import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON12 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon12;',
  _width: 42,
  _height: 50,
}

export function Icon12(props: DiagramNodeProps) {
  return <Shape {...ICON12} {...props} />
}
