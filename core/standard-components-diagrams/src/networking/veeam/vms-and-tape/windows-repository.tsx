import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_REPOSITORY = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.windows_repository;',
  _width: 53.2,
  _height: 49.2,
}

export function WindowsRepository(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_REPOSITORY} {...props} />
}
