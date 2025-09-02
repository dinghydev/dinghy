import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iDir;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Direction(props: DiagramNodeProps) {
  return (
    <Shape {...DIRECTION} {...props} _style={extendStyle(DIRECTION, props)} />
  )
}
