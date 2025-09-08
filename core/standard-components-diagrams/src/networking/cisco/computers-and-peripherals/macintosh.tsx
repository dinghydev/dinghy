import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MACINTOSH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.macintosh;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 99,
  _original_height: 64,
}

export function Macintosh(props: DiagramNodeProps) {
  return (
    <Shape {...MACINTOSH} {...props} _style={extendStyle(MACINTOSH, props)} />
  )
}
