import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON6 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon6;',
  _width: 28.999999999999996,
  _height: 50,
}

export function Icon6(props: DiagramNodeProps) {
  return <Shape {...ICON6} {...props} _style={extendStyle(ICON6, props)} />
}
