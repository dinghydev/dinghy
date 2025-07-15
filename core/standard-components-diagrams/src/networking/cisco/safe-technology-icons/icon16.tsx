import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON16 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon16;',
  _width: 50,
  _height: 50,
}

export function Icon16(props: DiagramNodeProps) {
  return <Shape {...ICON16} {...props} />
}
