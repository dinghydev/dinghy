import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON11 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.people_places_things_icons.icon11;',
  _width: 47.5,
  _height: 50,
}

export function Icon11(props: DiagramNodeProps) {
  return <Shape {...ICON11} {...props} />
}
