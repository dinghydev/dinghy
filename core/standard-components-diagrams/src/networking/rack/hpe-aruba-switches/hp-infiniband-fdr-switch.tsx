import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HP_INFINIBAND_FDR_SWITCH = {
  _style:
    'shape=mxgraph.rack.hp.hp_infiniband_fdr_switch;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 19,
  _height: 241,
}

export function HpInfinibandFdrSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...HP_INFINIBAND_FDR_SWITCH}
      {...props}
      _style={extendStyle(HP_INFINIBAND_FDR_SWITCH, props)}
    />
  )
}
