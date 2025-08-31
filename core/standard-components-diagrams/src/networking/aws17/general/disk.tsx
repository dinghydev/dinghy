import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.disk;fillColor=#7D7C7C;gradientColor=none;',
  },
  _width: 61.5,
  _height: 64.5,
}

export function Disk(props: DiagramNodeProps) {
  return <Shape {...DISK} {...props} _style={extendStyle(DISK, props)} />
}
