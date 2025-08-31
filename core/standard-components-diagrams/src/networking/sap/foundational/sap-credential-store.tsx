import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_CREDENTIAL_STORE = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Credential_Store',
  _width: 60,
  _height: 60,
}

export function SapCredentialStore(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_CREDENTIAL_STORE}
      {...props}
      _style={extendStyle(SAP_CREDENTIAL_STORE, props)}
    />
  )
}
