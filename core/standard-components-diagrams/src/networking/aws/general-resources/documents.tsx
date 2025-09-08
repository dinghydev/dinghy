import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCUMENTS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.documents3;',
  },
  _original_width: 57,
  _original_height: 78,
}

export function Documents(props: DiagramNodeProps) {
  return (
    <Shape {...DOCUMENTS} {...props} _style={extendStyle(DOCUMENTS, props)} />
  )
}
