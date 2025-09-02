import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERTIFICATE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.certificate;pointerEvents=1;',
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
