import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHARGEBACK_AND_BILLING_CAPABILITIES = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.chargeback_and_billing_capabilities;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function ChargebackAndBillingCapabilities(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHARGEBACK_AND_BILLING_CAPABILITIES}
      {...props}
      _style={extendStyle(CHARGEBACK_AND_BILLING_CAPABILITIES, props)}
    />
  )
}
