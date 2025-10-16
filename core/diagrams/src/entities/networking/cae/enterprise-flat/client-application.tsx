import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLIENT_APPLICATION = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.client_application',
  },
  _width: 50,
  _height: 32,
}

export function ClientApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLIENT_APPLICATION}
      {...props}
      _style={extendStyle(CLIENT_APPLICATION, props)}
    />
  )
}
