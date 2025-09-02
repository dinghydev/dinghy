import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_CUSTOM_DOMAIN_SERVICE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Custom_Domain_service',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapCustomDomainService(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_CUSTOM_DOMAIN_SERVICE}
      {...props}
      _style={extendStyle(SAP_CUSTOM_DOMAIN_SERVICE, props)}
    />
  )
}
