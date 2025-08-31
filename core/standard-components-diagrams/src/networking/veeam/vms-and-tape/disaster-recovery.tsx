import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISASTER_RECOVERY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.disaster_recovery;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function DisasterRecovery(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISASTER_RECOVERY}
      {...props}
      _style={extendStyle(DISASTER_RECOVERY, props)}
    />
  )
}
