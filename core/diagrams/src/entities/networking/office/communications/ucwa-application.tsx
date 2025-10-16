import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const UCWA_APPLICATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.ucwa_application;',
  },
  _original_width: 53,
  _original_height: 40,
}

export function UcwaApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...UCWA_APPLICATION}
      {...props}
      _style={extendStyle(UCWA_APPLICATION, props)}
    />
  )
}
