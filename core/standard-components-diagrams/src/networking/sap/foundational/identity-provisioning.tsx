import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTITY_PROVISIONING = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Identity_Provisioning2',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IdentityProvisioning(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDENTITY_PROVISIONING}
      {...props}
      _style={extendStyle(IDENTITY_PROVISIONING, props)}
    />
  )
}
