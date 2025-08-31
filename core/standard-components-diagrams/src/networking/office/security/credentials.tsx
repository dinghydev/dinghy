import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CREDENTIALS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.credentials;',
  },
  _width: 56,
  _height: 58,
}

export function Credentials(props: DiagramNodeProps) {
  return (
    <Shape
      {...CREDENTIALS}
      {...props}
      _style={extendStyle(CREDENTIALS, props)}
    />
  )
}
