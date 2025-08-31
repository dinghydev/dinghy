import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOTE_STORAGE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.remote_storage;',
  },
  _width: 46.4,
  _height: 46.4,
}

export function RemoteStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_STORAGE}
      {...props}
      _style={extendStyle(REMOTE_STORAGE, props)}
    />
  )
}
