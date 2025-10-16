import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAMMOGRAM = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.mammogram;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Mammogram(props: DiagramNodeProps) {
  return (
    <Shape {...MAMMOGRAM} {...props} _style={extendStyle(MAMMOGRAM, props)} />
  )
}
