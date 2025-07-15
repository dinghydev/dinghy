import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON32 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon32;',
  _width: 50,
  _height: 34.5,
}

export function Icon32(props: DiagramNodeProps) {
  return <Shape {...ICON32} {...props} />
}
