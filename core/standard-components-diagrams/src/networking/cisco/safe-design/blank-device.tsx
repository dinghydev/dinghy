import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLANK_DEVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#A153A0;verticalAlign=top;pointerEvents=1;align=center;points=[[0,0.5,0],[0.125,0.25,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[0.875,0.25,0],[1,0.5,0],[0.875,0.75,0],[0.75,1,0],[0.5,1,0],[0.125,0.75,0]];shape=mxgraph.cisco_safe.design.blank_device;',
  },
  _width: 50,
  _height: 45,
}

export function BlankDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLANK_DEVICE}
      {...props}
      _style={extendStyle(BLANK_DEVICE, props)}
    />
  )
}
