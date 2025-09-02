import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONFIDENTIAL_LEDGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Confidential_Ledger.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ConfidentialLedger(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONFIDENTIAL_LEDGER}
      {...props}
      _style={extendStyle(CONFIDENTIAL_LEDGER, props)}
    />
  )
}
