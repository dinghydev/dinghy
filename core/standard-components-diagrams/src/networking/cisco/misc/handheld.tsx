import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HANDHELD = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.handheld;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 67,
  _original_height: 37,
}

export function Handheld(props: DiagramNodeProps) {
  return (
    <Shape {...HANDHELD} {...props} _style={extendStyle(HANDHELD, props)} />
  )
}
