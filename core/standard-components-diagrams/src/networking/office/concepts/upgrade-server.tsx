import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPGRADE_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.upgrade_server;',
  },
  _original_width: 39,
  _original_height: 52,
}

export function UpgradeServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...UPGRADE_SERVER}
      {...props}
      _style={extendStyle(UPGRADE_SERVER, props)}
    />
  )
}
