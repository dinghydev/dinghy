import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON17 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon17;',
  _width: 50,
  _height: 42.5,
}

export function Icon17(props: DiagramNodeProps) {
  return <Shape {...ICON17} {...props} />
}
