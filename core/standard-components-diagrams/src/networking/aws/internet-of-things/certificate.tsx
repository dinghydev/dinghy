import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.certificate_manager;',
  },
  _width: 59,
  _height: 78,
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
