import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.certificate',
  },
  _original_width: 50,
  _original_height: 40,
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
