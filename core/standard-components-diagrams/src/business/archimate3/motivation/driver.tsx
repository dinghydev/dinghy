import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DRIVER = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=driver;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Driver(props: DiagramNodeProps) {
  return <Shape {...DRIVER} {...props} _style={extendStyle(DRIVER, props)} />
}
