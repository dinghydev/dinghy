import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MINI_VAX = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.mini_vax;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function MiniVax(props: DiagramNodeProps) {
  return (
    <Shape {...MINI_VAX} {...props} _style={extendStyle(MINI_VAX, props)} />
  )
}
