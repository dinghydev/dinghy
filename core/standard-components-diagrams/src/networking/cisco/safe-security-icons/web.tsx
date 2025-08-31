import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.web;',
  _width: 60,
  _height: 60,
}

export function Web(props: DiagramNodeProps) {
  return <Shape {...WEB} {...props} _style={extendStyle(WEB, props)} />
}
