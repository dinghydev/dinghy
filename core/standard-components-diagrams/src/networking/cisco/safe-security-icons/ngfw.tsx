import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NGFW = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ngfw;',
  _width: 52.5,
  _height: 46,
}

export function Ngfw(props: DiagramNodeProps) {
  return <Shape {...NGFW} {...props} _style={extendStyle(NGFW, props)} />
}
