import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HYPER_V_RECOVERY_MANAGER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.hyper_v_recovery_manager;',
  },
  _width: 50,
  _height: 45,
}

export function HyperVRecoveryManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...HYPER_V_RECOVERY_MANAGER}
      {...props}
      _style={extendStyle(HYPER_V_RECOVERY_MANAGER, props)}
    />
  )
}
