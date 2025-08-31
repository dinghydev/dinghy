import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EQUIPMENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=equipment;archiType=square;',
  _width: 150,
  _height: 75,
}

export function Equipment(props: DiagramNodeProps) {
  return (
    <Shape {...EQUIPMENT} {...props} _style={extendStyle(EQUIPMENT, props)} />
  )
}
