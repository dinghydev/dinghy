import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRIVER_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.driver;',
  _width: 40,
  _height: 40,
}

export function Driver2(props: DiagramNodeProps) {
  return (
    <Shape {...DRIVER_2} {...props} _style={extendStyle(DRIVER_2, props)} />
  )
}
