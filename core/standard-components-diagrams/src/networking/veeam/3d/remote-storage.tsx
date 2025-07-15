import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REMOTE_STORAGE = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.remote_storage;',
  _width: 52,
  _height: 62,
}

export function RemoteStorage(props: DiagramNodeProps) {
  return <Shape {...REMOTE_STORAGE} {...props} />
}
