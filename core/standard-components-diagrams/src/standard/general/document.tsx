import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCUMENT = {
  _style: {
    entity: 'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function Document(props: DiagramNodeProps) {
  return (
    <Shape {...DOCUMENT} {...props} _style={extendStyle(DOCUMENT, props)} />
  )
}
