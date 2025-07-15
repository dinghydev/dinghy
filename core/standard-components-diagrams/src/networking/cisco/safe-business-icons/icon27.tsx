import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON27 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon27;',
  _width: 50,
  _height: 49.5,
}

export function Icon27(props: DiagramNodeProps) {
  return <Shape {...ICON27} {...props} />
}
