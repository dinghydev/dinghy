import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MICROPHONE = {
  _style:
    'shape=mxgraph.cisco.computers_and_peripherals.microphone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 80,
  _height: 96,
}

export function Microphone(props: DiagramNodeProps) {
  return (
    <Shape {...MICROPHONE} {...props} _style={extendStyle(MICROPHONE, props)} />
  )
}
