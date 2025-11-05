import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_PKI_CERTIFICATE_SERVICE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_PKI_Certificate_Service',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapPkiCertificateService(props: NodeProps) {
  return (
    <Shape
      {...SAP_PKI_CERTIFICATE_SERVICE}
      {...props}
      _style={extendStyle(SAP_PKI_CERTIFICATE_SERVICE, props)}
    />
  )
}
