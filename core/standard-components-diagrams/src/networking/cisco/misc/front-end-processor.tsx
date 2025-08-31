import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRONT_END_PROCESSOR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.front_end_processor;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 42,
  _height: 51,
}

export function FrontEndProcessor(props: DiagramNodeProps) {
  return (
    <Shape
      {...FRONT_END_PROCESSOR}
      {...props}
      _style={extendStyle(FRONT_END_PROCESSOR, props)}
    />
  )
}
