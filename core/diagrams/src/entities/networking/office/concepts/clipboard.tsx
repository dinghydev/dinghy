import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLIPBOARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.clipboard;',
  },
  _original_width: 40,
  _original_height: 52,
}

export function Clipboard(props: DiagramNodeProps) {
  return (
    <Shape {...CLIPBOARD} {...props} _style={extendStyle(CLIPBOARD, props)} />
  )
}
