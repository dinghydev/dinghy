import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEAL = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.seal;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 92,
}

export function Seal(props: DiagramNodeProps) {
  return <Shape {...SEAL} {...props} _style={extendStyle(SEAL, props)} />
}
