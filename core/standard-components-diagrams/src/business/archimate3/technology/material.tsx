import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATERIAL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=material;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Material(props: DiagramNodeProps) {
  return (
    <Shape {...MATERIAL} {...props} _style={extendStyle(MATERIAL, props)} />
  )
}
