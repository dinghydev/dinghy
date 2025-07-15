import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON38 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon38;',
  _width: 50,
  _height: 50,
}

export function Icon38(props: DiagramNodeProps) {
  return <Shape {...ICON38} {...props} />
}
