import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON15 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon15;',
  _width: 50,
  _height: 44.5,
}

export function Icon15(props: DiagramNodeProps) {
  return <Shape {...ICON15} {...props} />
}
