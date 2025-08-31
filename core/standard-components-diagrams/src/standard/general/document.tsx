import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOCUMENT = {
  _style: {
    entity: 'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;',
  },
  _width: 120,
  _height: 80,
}

export function Document(props: DiagramNodeProps) {
  return (
    <Shape {...DOCUMENT} {...props} _style={extendStyle(DOCUMENT, props)} />
  )
}
