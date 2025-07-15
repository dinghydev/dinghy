import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON31 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon31;',
  _width: 50,
  _height: 43,
}

export function Icon31(props: DiagramNodeProps) {
  return <Shape {...ICON31} {...props} />
}
