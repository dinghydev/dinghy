import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.cooler;',
  },
  _original_width: 85,
  _original_height: 90,
}

export function Cooler(props: DiagramNodeProps) {
  return <Shape {...COOLER} {...props} _style={extendStyle(COOLER, props)} />
}
