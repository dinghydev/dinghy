import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON10 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon10;',
  _width: 50,
  _height: 44,
}

export function Icon10(props: DiagramNodeProps) {
  return <Shape {...ICON10} {...props} />
}
