import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OUTPUT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.plc_ladder.output_1;',
  },
  _width: 50,
  _height: 25,
}

export function Output(props: DiagramNodeProps) {
  return <Shape {...OUTPUT} {...props} _style={extendStyle(OUTPUT, props)} />
}
