import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRINCIPLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=principle;archiType=oct;',
  },
  _width: 150,
  _height: 75,
}

export function Principle(props: DiagramNodeProps) {
  return (
    <Shape {...PRINCIPLE} {...props} _style={extendStyle(PRINCIPLE, props)} />
  )
}
