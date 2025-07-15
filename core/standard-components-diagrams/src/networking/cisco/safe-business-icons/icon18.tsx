import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON18 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon18;',
  _width: 41,
  _height: 50,
}

export function Icon18(props: DiagramNodeProps) {
  return <Shape {...ICON18} {...props} />
}
