import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIEM = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.siem;',
  _width: 50,
  _height: 40.5,
}

export function Siem(props: DiagramNodeProps) {
  return <Shape {...SIEM} {...props} _style={extendStyle(SIEM, props)} />
}
