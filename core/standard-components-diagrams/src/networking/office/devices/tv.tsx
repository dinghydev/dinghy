import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TV = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.tv;',
  },
  _width: 59,
  _height: 45,
}

export function Tv(props: DiagramNodeProps) {
  return <Shape {...TV} {...props} _style={extendStyle(TV, props)} />
}
