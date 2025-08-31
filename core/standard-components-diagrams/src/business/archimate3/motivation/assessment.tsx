import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSESSMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=assess;archiType=oct;',
  },
  _width: 150,
  _height: 75,
}

export function Assessment(props: DiagramNodeProps) {
  return (
    <Shape {...ASSESSMENT} {...props} _style={extendStyle(ASSESSMENT, props)} />
  )
}
