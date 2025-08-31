import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON2 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon2;',
  _width: 60,
  _height: 60,
}

export function Icon2(props: DiagramNodeProps) {
  return <Shape {...ICON2} {...props} _style={extendStyle(ICON2, props)} />
}
