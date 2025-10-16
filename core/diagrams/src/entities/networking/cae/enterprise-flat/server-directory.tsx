import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_DIRECTORY = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.server_directory',
  },
  _width: 36,
  _height: 50,
}

export function ServerDirectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_DIRECTORY}
      {...props}
      _style={extendStyle(SERVER_DIRECTORY, props)}
    />
  )
}
