import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DRIVER_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.driver;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function Driver2(props: DiagramNodeProps) {
  return (
    <Shape {...DRIVER_2} {...props} _style={extendStyle(DRIVER_2, props)} />
  )
}
