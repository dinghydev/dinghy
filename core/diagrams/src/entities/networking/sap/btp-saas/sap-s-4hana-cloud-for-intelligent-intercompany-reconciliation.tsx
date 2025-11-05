import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_S_4HANA_CLOUD_FOR_INTELLIGENT_INTERCOMPANY_RECONCILIATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_S4HANA_Cloud_for_Intelligent_Intercompany_Reconciliation',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapS4hanaCloudForIntelligentIntercompanyReconciliation(
  props: NodeProps,
) {
  return (
    <Shape
      {...SAP_S_4HANA_CLOUD_FOR_INTELLIGENT_INTERCOMPANY_RECONCILIATION}
      {...props}
      _style={extendStyle(
        SAP_S_4HANA_CLOUD_FOR_INTELLIGENT_INTERCOMPANY_RECONCILIATION,
        props,
      )}
    />
  )
}
