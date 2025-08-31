import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON8 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.people_places_things_icons.icon8;',
  _width: 19.5,
  _height: 50,
}

export function Icon8(props: DiagramNodeProps) {
  return <Shape {...ICON8} {...props} _style={extendStyle(ICON8, props)} />
}
