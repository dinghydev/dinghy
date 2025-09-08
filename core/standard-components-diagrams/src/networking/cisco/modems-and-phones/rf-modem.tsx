import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RF_MODEM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.rf_modem;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 82,
  _original_height: 42,
}

export function RfModem(props: DiagramNodeProps) {
  return (
    <Shape {...RF_MODEM} {...props} _style={extendStyle(RF_MODEM, props)} />
  )
}
