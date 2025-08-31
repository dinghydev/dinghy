import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THIN_CLIENT = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.thin_client;',
  _width: 60,
  _height: 60,
}

export function ThinClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...THIN_CLIENT}
      {...props}
      _style={extendStyle(THIN_CLIENT, props)}
    />
  )
}
