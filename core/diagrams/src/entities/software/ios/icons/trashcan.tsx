import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRASHCAN = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.trashcan;',
  },
  _width: 24,
  _height: 30,
}

export function Trashcan(props: DiagramNodeProps) {
  return (
    <Shape {...TRASHCAN} {...props} _style={extendStyle(TRASHCAN, props)} />
  )
}
