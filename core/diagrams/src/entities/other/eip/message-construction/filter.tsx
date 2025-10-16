import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILTER = {
  _style: {
    entity:
      'strokeWidth=2;dashed=0;align=center;fontSize=8;shape=rect;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;html=1;',
  },
  _width: 150,
  _height: 90,
}

export function Filter(props: DiagramNodeProps) {
  return <Shape {...FILTER} {...props} _style={extendStyle(FILTER, props)} />
}
