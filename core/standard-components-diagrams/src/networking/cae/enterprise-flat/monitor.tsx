import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.computer',
  },
  _width: 50,
  _height: 45,
}

export function Monitor(props: DiagramNodeProps) {
  return <Shape {...MONITOR} {...props} _style={extendStyle(MONITOR, props)} />
}
