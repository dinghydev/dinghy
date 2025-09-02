import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPEAKER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.speaker;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 53,
  _original_height: 94,
}

export function Speaker(props: DiagramNodeProps) {
  return <Shape {...SPEAKER} {...props} _style={extendStyle(SPEAKER, props)} />
}
