import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLATEAU = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.application;appType=plateau;',
  },
  _width: 150,
  _height: 75,
}

export function Plateau(props: DiagramNodeProps) {
  return <Shape {...PLATEAU} {...props} _style={extendStyle(PLATEAU, props)} />
}
