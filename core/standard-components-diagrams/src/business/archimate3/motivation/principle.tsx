import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINCIPLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=principle;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Principle(props: DiagramNodeProps) {
  return (
    <Shape {...PRINCIPLE} {...props} _style={extendStyle(PRINCIPLE, props)} />
  )
}
