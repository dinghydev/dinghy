import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON19 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon19;',
  _width: 50,
  _height: 50,
}

export function Icon19(props: DiagramNodeProps) {
  return <Shape {...ICON19} {...props} />
}
