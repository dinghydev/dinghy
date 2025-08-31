import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_MINI_AS400 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.ibm_mini_as400;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 43,
  _height: 62,
}

export function IbmMiniAs400(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_MINI_AS400}
      {...props}
      _style={extendStyle(IBM_MINI_AS400, props)}
    />
  )
}
