import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKERS_3 = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#BDBDBD;strokeWidth=1;shadow=0;gradientColor=none;',
  },
  _original_width: 0,
  _original_height: 70,
}

export function Markers3(props: DiagramNodeProps) {
  return (
    <Shape {...MARKERS_3} {...props} _style={extendStyle(MARKERS_3, props)} />
  )
}
