import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.monitor;',
  },
  _width: 50,
  _height: 46.5,
}

export function Monitor(props: DiagramNodeProps) {
  return <Shape {...MONITOR} {...props} _style={extendStyle(MONITOR, props)} />
}
