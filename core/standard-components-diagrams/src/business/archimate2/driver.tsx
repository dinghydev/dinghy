import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRIVER = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=driver',
  },
  _width: 100,
  _height: 75,
}

export function Driver(props: DiagramNodeProps) {
  return <Shape {...DRIVER} {...props} _style={extendStyle(DRIVER, props)} />
}
