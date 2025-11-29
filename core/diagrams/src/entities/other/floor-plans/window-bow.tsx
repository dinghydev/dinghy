import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOW_BOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowBow;strokeWidth=3;',
  },
  _width: 100,
  _height: 20,
}

export function WindowBow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WINDOW_BOW)} />
}
