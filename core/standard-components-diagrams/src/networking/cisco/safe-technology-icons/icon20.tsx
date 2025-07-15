import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON20 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon20;',
  _width: 50,
  _height: 42,
}

export function Icon20(props: DiagramNodeProps) {
  return <Shape {...ICON20} {...props} />
}
