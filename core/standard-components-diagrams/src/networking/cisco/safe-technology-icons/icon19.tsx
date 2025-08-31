import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON19 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon19;',
  _width: 50,
  _height: 42,
}

export function Icon19(props: DiagramNodeProps) {
  return <Shape {...ICON19} {...props} _style={extendStyle(ICON19, props)} />
}
