import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_DIGITAL_MANUFACTURING = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Digital_Manufacturing',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapDigitalManufacturing(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SAP_DIGITAL_MANUFACTURING)} />
  )
}
