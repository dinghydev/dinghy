import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON28 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon28;',
  _width: 50,
  _height: 34.5,
}

export function Icon28(props: DiagramNodeProps) {
  return <Shape {...ICON28} {...props} _style={extendStyle(ICON28, props)} />
}
