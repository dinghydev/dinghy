import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RIBBON_LIST_2 = {
  _style: {
    entity:
      'shape=manualInput;whiteSpace=wrap;html=1;shadow=1;strokeColor=none;fillColor=#dddddd;fontSize=15;fontColor=#444444;align=right;direction=south;flipH=1;shadow=1;spacing=10;fontStyle=1;',
  },
  _original_width: 1,
  _original_height: 590,
}

export function RibbonList2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_LIST_2}
      {...props}
      _style={extendStyle(RIBBON_LIST_2, props)}
    />
  )
}
