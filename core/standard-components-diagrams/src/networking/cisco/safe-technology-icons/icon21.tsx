import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON21 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon21;',
  _width: 43,
  _height: 50,
}

export function Icon21(props: DiagramNodeProps) {
  return <Shape {...ICON21} {...props} />
}
