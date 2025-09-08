import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIRECTORY_SERVICE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.directory_service;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 81,
}

export function DirectoryService(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECTORY_SERVICE}
      {...props}
      _style={extendStyle(DIRECTORY_SERVICE, props)}
    />
  )
}
