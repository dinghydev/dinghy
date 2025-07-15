import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LINUX_REPOSITORY = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.linux_repository;',
  _width: 53.6,
  _height: 49.6,
}

export function LinuxRepository(props: DiagramNodeProps) {
  return <Shape {...LINUX_REPOSITORY} {...props} />
}
