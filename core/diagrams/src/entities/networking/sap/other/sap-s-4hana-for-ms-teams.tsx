import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_S_4HANA_FOR_MS_TEAMS = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_S4HANA_for_MS_Teams',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapS4hanaForMsTeams(props: NodeProps) {
  return (
    <Shape
      {...SAP_S_4HANA_FOR_MS_TEAMS}
      {...props}
      _style={extendStyle(SAP_S_4HANA_FOR_MS_TEAMS, props)}
    />
  )
}
