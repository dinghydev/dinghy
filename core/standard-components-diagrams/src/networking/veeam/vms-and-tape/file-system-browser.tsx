import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILE_SYSTEM_BROWSER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.file_system_browser;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function FileSystemBrowser(props: DiagramNodeProps) {
  return (
    <Shape
      {...FILE_SYSTEM_BROWSER}
      {...props}
      _style={extendStyle(FILE_SYSTEM_BROWSER, props)}
    />
  )
}
