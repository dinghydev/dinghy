import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINUX_REPOSITORY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.linux_repository;',
  },
  _original_width: 53.6,
  _original_height: 49.6,
}

export function LinuxRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...LINUX_REPOSITORY}
      {...props}
      _style={extendStyle(LINUX_REPOSITORY, props)}
    />
  )
}
