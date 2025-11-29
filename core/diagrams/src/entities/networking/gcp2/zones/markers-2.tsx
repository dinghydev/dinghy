import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MARKERS_2 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontColor=#757575;align=left;html=1;fontStyle=0;fontSize=11;',
  },
  _width: 7,
  _height: 50,
}

export function Markers2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MARKERS_2)} />
}
