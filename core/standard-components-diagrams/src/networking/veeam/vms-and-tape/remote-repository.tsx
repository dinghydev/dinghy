import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOTE_REPOSITORY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.remote_repository;',
  },
  _width: 47.6,
  _height: 46.4,
}

export function RemoteRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_REPOSITORY}
      {...props}
      _style={extendStyle(REMOTE_REPOSITORY, props)}
    />
  )
}
