import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_BROWSER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.backup_browser;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function BackupBrowser(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_BROWSER}
      {...props}
      _style={extendStyle(BACKUP_BROWSER, props)}
    />
  )
}
