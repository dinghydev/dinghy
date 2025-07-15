import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_S_4HANA_CLOUD_FOR_INTELLIGENT_INTERCOMPANY_RECONCILIATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_S4HANA_Cloud_for_Intelligent_Intercompany_Reconciliation',
  _width: 50,
  _height: 50,
}

export function SapS4hanaCloudForIntelligentIntercompanyReconciliation(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SAP_S_4HANA_CLOUD_FOR_INTELLIGENT_INTERCOMPANY_RECONCILIATION}
      {...props}
    />
  )
}
