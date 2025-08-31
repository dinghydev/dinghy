import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VROPS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vrops;',
  },
  _width: 60,
  _height: 60,
}

export function Vrops(props: DiagramNodeProps) {
  return <Shape {...VROPS} {...props} _style={extendStyle(VROPS, props)} />
}
