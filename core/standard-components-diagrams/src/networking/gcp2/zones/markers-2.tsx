import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MARKERS_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontColor=#757575;align=left;html=1;fontStyle=0;fontSize=11;',
  },
  _original_width: 7,
  _original_height: 50,
}

export function Markers2(props: DiagramNodeProps) {
  return (
    <Shape {...MARKERS_2} {...props} _style={extendStyle(MARKERS_2, props)} />
  )
}
