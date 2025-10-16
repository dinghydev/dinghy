import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MACHINE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.machine;',
  },
  _width: 20.5,
  _height: 50,
}

export function Machine(props: DiagramNodeProps) {
  return <Shape {...MACHINE} {...props} _style={extendStyle(MACHINE, props)} />
}
