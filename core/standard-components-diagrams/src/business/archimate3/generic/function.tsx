import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=func;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function Function(props: DiagramNodeProps) {
  return (
    <Shape {...FUNCTION} {...props} _style={extendStyle(FUNCTION, props)} />
  )
}
