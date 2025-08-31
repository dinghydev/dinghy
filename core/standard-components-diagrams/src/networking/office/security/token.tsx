import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOKEN = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.token;',
  _width: 41,
  _height: 52,
}

export function Token(props: DiagramNodeProps) {
  return <Shape {...TOKEN} {...props} _style={extendStyle(TOKEN, props)} />
}
