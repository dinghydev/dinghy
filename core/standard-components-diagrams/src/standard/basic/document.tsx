import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOCUMENT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.document',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Document(props: DiagramNodeProps) {
  return (
    <Shape {...DOCUMENT} {...props} _style={extendStyle(DOCUMENT, props)} />
  )
}
