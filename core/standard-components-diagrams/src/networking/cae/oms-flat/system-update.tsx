import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYSTEM_UPDATE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.system_update',
  },
  _width: 60,
  _height: 60,
}

export function SystemUpdate(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYSTEM_UPDATE}
      {...props}
      _style={extendStyle(SYSTEM_UPDATE, props)}
    />
  )
}
