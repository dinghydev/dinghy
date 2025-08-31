import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON1 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon1;',
  _width: 50,
  _height: 32.5,
}

export function Icon1(props: DiagramNodeProps) {
  return <Shape {...ICON1} {...props} _style={extendStyle(ICON1, props)} />
}
