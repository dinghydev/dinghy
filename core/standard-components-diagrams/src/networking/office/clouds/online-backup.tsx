import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONLINE_BACKUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.online_backup;',
  },
  _width: 94,
  _height: 101,
}

export function OnlineBackup(props: DiagramNodeProps) {
  return (
    <Shape
      {...ONLINE_BACKUP}
      {...props}
      _style={extendStyle(ONLINE_BACKUP, props)}
    />
  )
}
