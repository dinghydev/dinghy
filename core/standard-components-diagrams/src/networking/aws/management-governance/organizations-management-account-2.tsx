import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORGANIZATIONS_MANAGEMENT_ACCOUNT_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.organizations_management_account2;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function OrganizationsManagementAccount2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORGANIZATIONS_MANAGEMENT_ACCOUNT_2}
      {...props}
      _style={extendStyle(ORGANIZATIONS_MANAGEMENT_ACCOUNT_2, props)}
    />
  )
}
