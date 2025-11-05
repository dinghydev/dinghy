import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.window;',
  },
  _width: 100,
  _height: 10,
}

export function Window(props: NodeProps) {
  return <Shape {...WINDOW} {...props} _style={extendStyle(WINDOW, props)} />
}
