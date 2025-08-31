import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON30 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon30;',
  _width: 50,
  _height: 35,
}

export function Icon30(props: DiagramNodeProps) {
  return <Shape {...ICON30} {...props} _style={extendStyle(ICON30, props)} />
}
