import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CABLE_MODEM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.cable_modem;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 74,
  _height: 35,
}

export function CableModem(props: DiagramNodeProps) {
  return (
    <Shape
      {...CABLE_MODEM}
      {...props}
      _style={extendStyle(CABLE_MODEM, props)}
    />
  )
}
