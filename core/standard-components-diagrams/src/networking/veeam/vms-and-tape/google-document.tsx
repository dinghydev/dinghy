import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GOOGLE_DOCUMENT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.google_document;',
  },
  _original_width: 36.8,
  _original_height: 50.8,
}

export function GoogleDocument(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOOGLE_DOCUMENT}
      {...props}
      _style={extendStyle(GOOGLE_DOCUMENT, props)}
    />
  )
}
