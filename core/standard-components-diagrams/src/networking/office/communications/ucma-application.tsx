import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UCMA_APPLICATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.ucma_application;',
  },
  _original_width: 53,
  _original_height: 40,
}

export function UcmaApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...UCMA_APPLICATION}
      {...props}
      _style={extendStyle(UCMA_APPLICATION, props)}
    />
  )
}
