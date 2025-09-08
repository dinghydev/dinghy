import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCUMENTS = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.documents;',
  },
  _original_width: 22.5,
  _original_height: 30,
}

export function Documents(props: DiagramNodeProps) {
  return (
    <Shape {...DOCUMENTS} {...props} _style={extendStyle(DOCUMENTS, props)} />
  )
}
