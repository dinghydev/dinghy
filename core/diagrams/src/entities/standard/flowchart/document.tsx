import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.document2;whiteSpace=wrap;size=0.25;',
  },
  _width: 100,
  _height: 60,
}

export function Document(props: NodeProps) {
  return (
    <Shape {...DOCUMENT} {...props} _style={extendStyle(DOCUMENT, props)} />
  )
}
