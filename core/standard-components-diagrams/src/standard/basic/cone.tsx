import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.cone',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Cone(props: DiagramNodeProps) {
  return <Shape {...CONE} {...props} _style={extendStyle(CONE, props)} />
}
