import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LINUX_REPOSITORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.linux_repository;',
  },
  _original_width: 37,
  _original_height: 38,
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
