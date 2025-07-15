import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON8 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon8;',
  _width: 38.5,
  _height: 50,
}

export function Icon8(props: DiagramNodeProps) {
  return <Shape {...ICON8} {...props} />
}
