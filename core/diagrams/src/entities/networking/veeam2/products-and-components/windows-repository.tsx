import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_REPOSITORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.windows_repository;',
  },
  _width: 37,
  _height: 38,
}

export function WindowsRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_REPOSITORY}
      {...props}
      _style={extendStyle(WINDOWS_REPOSITORY, props)}
    />
  )
}
