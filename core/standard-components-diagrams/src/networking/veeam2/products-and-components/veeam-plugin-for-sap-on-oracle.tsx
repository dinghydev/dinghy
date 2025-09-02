import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_PLUGIN_FOR_SAP_ON_ORACLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_plugin_for_sap_on_oracle;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function VeeamPluginForSapOnOracle(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_PLUGIN_FOR_SAP_ON_ORACLE}
      {...props}
      _style={extendStyle(VEEAM_PLUGIN_FOR_SAP_ON_ORACLE, props)}
    />
  )
}
