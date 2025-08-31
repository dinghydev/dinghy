import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON39 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon39;',
  _width: 36,
  _height: 50,
}

export function Icon39(props: DiagramNodeProps) {
  return <Shape {...ICON39} {...props} _style={extendStyle(ICON39, props)} />
}
