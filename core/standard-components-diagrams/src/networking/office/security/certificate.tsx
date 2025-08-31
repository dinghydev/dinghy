import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.certificate;',
  },
  _width: 58,
  _height: 50,
}

export function Certificate(props: DiagramNodeProps) {
  return (
    <Shape
      {...CERTIFICATE}
      {...props}
      _style={extendStyle(CERTIFICATE, props)}
    />
  )
}
