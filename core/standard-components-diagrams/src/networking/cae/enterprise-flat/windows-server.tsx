import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOWS_SERVER = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.windows_server',
  },
  _width: 39,
  _height: 50,
}

export function WindowsServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_SERVER}
      {...props}
      _style={extendStyle(WINDOWS_SERVER, props)}
    />
  )
}
