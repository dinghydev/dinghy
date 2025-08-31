import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOMAIN = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.domain;',
  _width: 53,
  _height: 46,
}

export function Domain(props: DiagramNodeProps) {
  return <Shape {...DOMAIN} {...props} _style={extendStyle(DOMAIN, props)} />
}
