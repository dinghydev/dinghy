import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON1 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.people_places_things_icons.icon1;',
  _width: 46.5,
  _height: 50,
}

export function Icon1(props: DiagramNodeProps) {
  return <Shape {...ICON1} {...props} />
}
