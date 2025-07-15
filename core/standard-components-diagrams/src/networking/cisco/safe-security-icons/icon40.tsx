import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON40 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon40;',
  _width: 50,
  _height: 33,
}

export function Icon40(props: DiagramNodeProps) {
  return <Shape {...ICON40} {...props} />
}
