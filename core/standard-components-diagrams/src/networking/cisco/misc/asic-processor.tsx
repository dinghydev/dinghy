import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASIC_PROCESSOR = {
  _style:
    'shape=mxgraph.cisco.misc.asic_processor;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 58,
  _height: 83,
}

export function AsicProcessor(props: DiagramNodeProps) {
  return <Shape {...ASIC_PROCESSOR} {...props} />
}
