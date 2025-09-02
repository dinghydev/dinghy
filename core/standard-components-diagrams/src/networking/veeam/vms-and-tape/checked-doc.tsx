import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKED_DOC = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.checked_doc;',
  },
  _original_width: 50.8,
  _original_height: 61.6,
}

export function CheckedDoc(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKED_DOC}
      {...props}
      _style={extendStyle(CHECKED_DOC, props)}
    />
  )
}
