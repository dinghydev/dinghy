import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_REPOSITORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.windows_repository;',
  },
  _width: 37,
  _height: 38,
}

export function WindowsRepository(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WINDOWS_REPOSITORY)} />
}
