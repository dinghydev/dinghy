import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.window;',
  },
  _original_width: 100,
  _original_height: 10,
}

export function Window(props: DiagramNodeProps) {
  return <Shape {...WINDOW} {...props} _style={extendStyle(WINDOW, props)} />
}
