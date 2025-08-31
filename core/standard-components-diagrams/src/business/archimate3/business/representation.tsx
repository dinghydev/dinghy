import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPRESENTATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=representation;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Representation(props: DiagramNodeProps) {
  return (
    <Shape
      {...REPRESENTATION}
      {...props}
      _style={extendStyle(REPRESENTATION, props)}
    />
  )
}
