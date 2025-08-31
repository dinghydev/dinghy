import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOWNLOAD = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.download;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function Download(props: DiagramNodeProps) {
  return (
    <Shape {...DOWNLOAD} {...props} _style={extendStyle(DOWNLOAD, props)} />
  )
}
