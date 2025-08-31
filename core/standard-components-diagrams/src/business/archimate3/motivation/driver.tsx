import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRIVER = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=driver;archiType=oct;',
  },
  _width: 150,
  _height: 75,
}

export function Driver(props: DiagramNodeProps) {
  return <Shape {...DRIVER} {...props} _style={extendStyle(DRIVER, props)} />
}
