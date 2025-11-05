import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MARKERS_3 = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#BDBDBD;strokeWidth=1;shadow=0;gradientColor=none;',
  },
  _width: 0,
  _height: 70,
}

export function Markers3(props: NodeProps) {
  return (
    <Shape {...MARKERS_3} {...props} _style={extendStyle(MARKERS_3, props)} />
  )
}
