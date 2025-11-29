import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOW_GARDEN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.windowGarden;dx=0.25;',
  },
  _width: 100,
  _height: 20,
}

export function WindowGarden(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WINDOW_GARDEN)} />
}
